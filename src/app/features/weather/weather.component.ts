import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WeatherService } from '../../core/services/weather.service';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';
import { SEVERITY_COLORS } from '../../core/models/weather.model';
import { DatePipe, NgClass } from '@angular/common';

interface IframePage {
  id: string;
  title: string;
  url: string;
  icon: string;
}

type WindyOverlay = 'wind' | 'waves' | 'rain' | 'pressure' | 'clouds';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatTabsModule, MatButtonModule, MatButtonToggleModule, MatIconModule,
    MatProgressSpinnerModule, MatTooltipModule,
    SafeUrlPipe, DatePipe, NgClass,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})

export class WeatherComponent implements OnInit {
  readonly weatherService = inject(WeatherService);
  readonly severityColors = SEVERITY_COLORS;

  iframeBlocked: Record<string, boolean> = {};

  // Windy forecast map
  readonly windyOverlay = signal<WindyOverlay>('wind');
  readonly windyUrl = computed(() => {
    const overlay = this.windyOverlay();
    const params = new URLSearchParams({
      lat: '43.5',
      lon: '16.4',
      zoom: '7',
      level: 'surface',
      overlay,
      product: 'ecmwf',
      message: 'true',
      pressure: 'true',
      type: 'map',
      metricWind: 'kn',
      metricTemp: '°C',
    });
    return `https://embed.windy.com/embed2.html?${params.toString()}`;
  });

  readonly windyOverlays: { value: WindyOverlay; label: string; icon: string }[] = [
    { value: 'wind',     label: 'Wind',     icon: 'air' },
    { value: 'waves',    label: 'Waves',    icon: 'waves' },
    { value: 'rain',     label: 'Rain',     icon: 'grain' },
    { value: 'pressure', label: 'Pressure', icon: 'speed' },
    { value: 'clouds',   label: 'Clouds',   icon: 'cloud' },
  ];

  readonly meteoPages: IframePage[] = [
    {
      id: 'nauticari',
      title: 'Nautical Forecast',
      icon: 'directions_boat',
      url: 'https://meteo.hr/prognoze_e.php?section=prognoze_model&param=prog_nauticari',
    },
    {
      id: 'adriatic',
      title: 'Adriatic Marine Forecast',
      icon: 'waves',
      url: 'https://meteo.hr/prognoze_e.php?section=prognoze_specp&param=jadran',
    },
  ];

  ngOnInit(): void {
    this.weatherService.startRadarPolling();
    this.weatherService.loadWarnings();
    this.weatherService.startWarningsPolling();
  }

  onIframeLoad(event: Event, id: string): void {
    try {
      const iframe = event.target as HTMLIFrameElement;
      // Accessing contentDocument will throw SecurityError if blocked by X-Frame-Options
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const doc = iframe.contentDocument;
      if (!doc || doc.URL === 'about:blank') {
        this.iframeBlocked[id] = true;
      }
    } catch {
      this.iframeBlocked[id] = true;
    }
  }

  onIframeError(_event: Event, id: string): void {
    this.iframeBlocked[id] = true;
  }

  openExternal(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  refreshWarnings(): void {
    this.weatherService.loadWarnings();
  }

  refreshRadar(): void {
    this.weatherService.refreshRadar();
  }
}
