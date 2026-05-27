import { Component, inject, OnInit, Input, NgZone, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MapComponent as MglMapComponent } from '@maplibre/ngx-maplibre-gl';
import type { StyleSpecification } from 'maplibre-gl';
import { Map as MapLibre, GeoJSONSource } from 'maplibre-gl';
import { LogbookService } from '../../../core/services/logbook.service';
import { LogbookEntry, SEA_STATE_LABELS, VISIBILITY_LABELS, degreesToCompass } from '../../../core/models/logbook-entry.model';
import { BeaufortPipe } from '../../../shared/pipes/beaufort.pipe';
import { SeaStatePipe } from '../../../shared/pipes/sea-state.pipe';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-logbook-detail',
  standalone: true,
  imports: [
    MatButtonModule, MatIconModule, MatDividerModule,
    MatChipsModule, MatDialogModule, MatSnackBarModule,
    BeaufortPipe, SeaStatePipe, MglMapComponent,
  ],
  templateUrl: './logbook-detail.component.html',
  styleUrl: './logbook-detail.component.scss',
})
export class LogbookDetailComponent implements OnInit {
  @Input() id!: string;

  private logbookService = inject(LogbookService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private ngZone = inject(NgZone);

  entry?: LogbookEntry;
  readonly pathMapCenter = signal<[number, number]>([16.44, 43.51]);

  readonly pathMapStyle: StyleSpecification = {
    version: 8,
    sources: {
      osm: { type: 'raster' as const, tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap contributors' },
      seamark: { type: 'raster' as const, tiles: ['https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'], tileSize: 256 },
    },
    layers: [
      { id: 'osm', type: 'raster' as const, source: 'osm' },
      { id: 'seamark', type: 'raster' as const, source: 'seamark', paint: { 'raster-opacity': 0.6 } },
    ],
  };

  ngOnInit(): void {
    this.entry = this.logbookService.getById(this.id);
    if (!this.entry) {
      this.snackBar.open('Entry not found', 'Dismiss', { duration: 3000 });
      this.router.navigate(['/logbook']);
      return;
    }
    const path = this.entry.path;
    if (path && path.length >= 1) {
      this.pathMapCenter.set(path[Math.floor(path.length / 2)]);
    } else {
      this.pathMapCenter.set([this.entry.position.lon, this.entry.position.lat]);
    }
  }

  onPathMapLoad(map: MapLibre): void {
    const path = this.entry?.path;
    if (!path || path.length < 2) return;
    this.ngZone.run(() => {
      map.addSource('path-line', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'LineString', coordinates: path }, properties: {} },
      });
      map.addLayer({
        id: 'path-line-layer',
        type: 'line',
        source: 'path-line',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': '#d4a017', 'line-width': 3, 'line-dasharray': [2, 2] },
      });
      map.addSource('path-points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: path.map(coord => ({
            type: 'Feature' as const,
            geometry: { type: 'Point' as const, coordinates: coord },
            properties: {},
          })),
        },
      });
      map.addLayer({
        id: 'path-points-layer',
        type: 'circle',
        source: 'path-points',
        paint: { 'circle-radius': 5, 'circle-color': '#f0c040', 'circle-stroke-width': 2, 'circle-stroke-color': '#fff' },
      });

      const lons = path.map(p => p[0]);
      const lats = path.map(p => p[1]);
      map.fitBounds(
        [[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]],
        { padding: 40, maxZoom: 13 }
      );
    });
  }

  pathDistanceNm(path: [number, number][]): string {
    if (path.length < 2) return '0';
    let total = 0;
    for (let i = 1; i < path.length; i++) {
      const [lon1, lat1] = path[i - 1];
      const [lon2, lat2] = path[i];
      const R = 3440.065;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
      total += R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }
    return total.toFixed(1);
  }

  edit(): void {
    this.router.navigate(['/logbook', this.id, 'edit']);
  }

  delete(): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Log Entry',
        message: `Delete entry from ${this.entry?.date}? This cannot be undone.`,
      },
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.logbookService.delete(this.id);
        this.snackBar.open('Entry deleted', 'Dismiss', { duration: 3000 });
        this.router.navigate(['/logbook']);
      }
    });
  }

  back(): void {
    this.router.navigate(['/logbook']);
  }

  windLabel(deg: number): string {
    return `${degreesToCompass(deg)} (${deg}°)`;
  }

  formatCoord(lat: number, lon: number): string {
    const latDir = lat >= 0 ? 'N' : 'S';
    const lonDir = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}°${latDir}, ${Math.abs(lon).toFixed(4)}°${lonDir}`;
  }
}
