import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MapComponent as MglMapComponent } from '@maplibre/ngx-maplibre-gl';
import { Map as MapLibre, GeoJSONSource } from 'maplibre-gl';
import type { StyleSpecification } from 'maplibre-gl';
import { NgClass } from '@angular/common';
import { LogbookService } from '../../core/services/logbook.service';
import { WeatherService } from '../../core/services/weather.service';
import { BeaufortPipe } from '../../shared/pipes/beaufort.pipe';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';
import { SEVERITY_COLORS } from '../../core/models/weather.model';
import type { FeatureCollection, Feature, Point, LineString } from 'geojson';
import { LogbookEntry } from '../../core/models/logbook-entry.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink, DatePipe,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule,
    MglMapComponent, NgClass, BeaufortPipe, SafeUrlPipe, MatTooltipModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  readonly logbookService = inject(LogbookService);
  readonly weatherService = inject(WeatherService);
  private router = inject(Router);

  readonly severityColors = SEVERITY_COLORS;
  readonly today = new Date();

  readonly lastEntry = computed(() => this.logbookService.sortedEntries()[0] ?? null);

  readonly miniMapCenter = computed<[number, number]>(() => {
    const e = this.lastEntry();
    return e ? [e.position.lon, e.position.lat] : [16.44, 43.51];
  });

  readonly miniMapStyle: StyleSpecification = {
    version: 8,
    sources: {
      osm: {
        type: 'raster' as const,
        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        tileSize: 256,
        attribution: '© OpenStreetMap contributors',
      },
      seamark: {
        type: 'raster' as const,
        tiles: ['https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'],
        tileSize: 256,
      },
    },
    layers: [
      { id: 'osm', type: 'raster' as const, source: 'osm' },
      { id: 'seamark', type: 'raster' as const, source: 'seamark', paint: { 'raster-opacity': 0.7 } },
    ],
  };

  onMiniMapLoad(map: MapLibre): void {
    const entries = this.logbookService.entries();
    if (entries.length === 0) return;

    // Sailed path lines — drawn first so position dots appear on top
    const pathFeatures = entries
      .filter(e => e.path && e.path.length >= 2)
      .map((e): Feature<LineString> => ({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: e.path! },
        properties: { id: e.id },
      }));

    if (pathFeatures.length > 0) {
      map.addSource('paths', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: pathFeatures },
      });
      map.addLayer({
        id: 'paths-line',
        type: 'line',
        source: 'paths',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': '#d4a017', 'line-width': 2, 'line-dasharray': [2, 2] },
      });
    }

    // Position dots
    const geojson: FeatureCollection = {
      type: 'FeatureCollection',
      features: entries.map((e): Feature<Point> => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [e.position.lon, e.position.lat] },
        properties: { id: e.id },
      })),
    };

    map.addSource('entries', { type: 'geojson', data: geojson });
    map.addLayer({
      id: 'entries-circle',
      type: 'circle',
      source: 'entries',
      paint: {
        'circle-radius': 6,
        'circle-color': '#1976d2',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#d4a017',
      },
    });
  }

  ngOnInit(): void {
    this.weatherService.loadWarnings();
    this.weatherService.startRadarPolling();
  }

  formatCoord(lat: number, lon: number): string {
    return `${lat.toFixed(3)}°N, ${lon.toFixed(3)}°E`;
  }

  openLogbook(): void { this.router.navigate(['/logbook']); }
  openWeather(): void { this.router.navigate(['/weather']); }
  openMap(): void     { this.router.navigate(['/map']); }
  newEntry(): void    { this.router.navigate(['/logbook/new']); }
}
