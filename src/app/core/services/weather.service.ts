import { Injectable, signal, computed, inject, DestroyRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MeteoAlarmWarning, HVAR_REGION_CODES, HVAR_REGION_NAMES } from '../models/weather.model';

// Response shape from feeds.meteoalarm.org/api/v1/warnings/feeds-croatia
interface MeteoAlarmFeedResponse {
  warnings: MeteoAlarmFeedWarning[];
}
interface MeteoAlarmFeedWarning {
  alert: {
    identifier: string;
    info: MeteoAlarmInfo[];
  };
}
interface MeteoAlarmInfo {
  language: string;
  event: string;
  description: string;
  severity: string;
  onset: string;
  expires: string;
  area: { areaDesc: string; geocode?: { valueName: string; value: string }[] }[];
  parameter: { valueName: string; value: string }[];
}

const AWARENESS_TYPE: Record<string, string> = {
  '1': 'Wind', '2': 'Snow/Ice', '3': 'Thunderstorm', '4': 'Fog',
  '5': 'High Temp', '6': 'Low Temp', '7': 'Coastal Event', '8': 'Forest Fire',
  '9': 'Avalanche', '10': 'Rain', '11': 'Flood',
};

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  private readonly RADAR_BASE = 'https://vrijeme.hr/anim_debeljak.gif';
  // Proxied via /api/meteoalarm/ → feeds.meteoalarm.org (CORS workaround)
  private readonly WARNINGS_URL = '/api/meteoalarm/feeds-croatia';

  readonly radarUrl = signal<string>(this.buildRadarUrl());
  readonly radarUpdatedAt = signal<Date>(new Date());

  readonly allWarnings = signal<MeteoAlarmWarning[]>([]);
  readonly hvarOnly = signal<boolean>(true);
  readonly warnings = computed(() => {
    const all = this.allWarnings();
    if (!this.hvarOnly()) return all;
    return all.filter(w =>
      w.regionCodes.some(c => HVAR_REGION_CODES.includes(c)) ||
      w.regions.some(r => HVAR_REGION_NAMES.some(n => r.toLowerCase().includes(n)))
    );
  });
  readonly warningsLoading = signal<boolean>(false);
  readonly warningsError = signal<string | null>(null);
  readonly warningsUpdatedAt = signal<Date | null>(null);

  startRadarPolling(intervalMs = 300_000): void {
    interval(intervalMs)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refreshRadar());
  }

  startWarningsPolling(intervalMs = 15 * 60_000): void {
    interval(intervalMs)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadWarnings());
  }

  refreshRadar(): void {
    this.radarUrl.set(this.buildRadarUrl());
    this.radarUpdatedAt.set(new Date());
  }

  loadWarnings(): void {
    this.warningsLoading.set(true);
    this.warningsError.set(null);

    this.http
      .get<MeteoAlarmFeedResponse>(this.WARNINGS_URL)
      .pipe(
        map(response => this.parseWarnings(response)),
        catchError(err => {
          console.warn('MeteoAlarm fetch failed', err);
          return of([] as MeteoAlarmWarning[]);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: w => {
          this.allWarnings.set(w);
          this.warningsLoading.set(false);
          this.warningsUpdatedAt.set(new Date());
        },
        error: () => {
          this.warningsError.set('Could not load warnings. Check your connection.');
          this.warningsLoading.set(false);
        },
      });
  }

  private buildRadarUrl(): string {
    return `${this.RADAR_BASE}?t=${Date.now()}`;
  }

  private parseWarnings(response: MeteoAlarmFeedResponse): MeteoAlarmWarning[] {
    if (!response?.warnings) return [];

    return response.warnings.map(w => {
      const alert = w.alert;
      // Prefer English info block; fall back to first available
      const info: MeteoAlarmInfo =
        alert.info.find(i => i.language === 'en-GB') ??
        alert.info.find(i => i.language?.startsWith('en')) ??
        alert.info[0];

      if (!info) return null;

      const awarenesType = info.parameter.find(p => p.valueName === 'awareness_type');
      const typeNum = awarenesType?.value?.split(';')[0]?.trim();
      const type = (typeNum && AWARENESS_TYPE[typeNum]) ?? info.event ?? 'Weather';

      const regionCodes = info.area.flatMap(a =>
        (a.geocode ?? [])
          .filter(g => g.valueName === 'EMMA_ID')
          .map(g => g.value)
      );

      return {
        id: alert.identifier,
        country: 'HR',
        regions: info.area.map(a => a.areaDesc),
        regionCodes,
        type,
        severity: this.normalizeSeverity(info.severity),
        onset: info.onset,
        expires: info.expires,
        headline: info.event,
        description: info.description,
      } satisfies MeteoAlarmWarning;
    }).filter((w): w is MeteoAlarmWarning => w !== null);
  }

  private normalizeSeverity(s: string): MeteoAlarmWarning['severity'] {
    const lower = (s ?? '').toLowerCase();
    if (lower.includes('extreme')) return 'Extreme';
    if (lower.includes('severe')) return 'Severe';
    if (lower.includes('moderate')) return 'Moderate';
    return 'Minor';
  }
}
