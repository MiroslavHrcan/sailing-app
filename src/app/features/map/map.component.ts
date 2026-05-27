import { Component, inject, OnInit, signal, computed, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MapComponent as MglMapComponent } from '@maplibre/ngx-maplibre-gl';
import { Map as MapLibre, GeoJSONSource, MapMouseEvent } from 'maplibre-gl';
import type { StyleSpecification } from 'maplibre-gl';
import { LogbookService } from '../../core/services/logbook.service';
import { LogbookEntry } from '../../core/models/logbook-entry.model';
import type { FeatureCollection, Feature, Point } from 'geojson';

type BaseLayer = 'osm' | 'satellite';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MglMapComponent, MatButtonModule, MatIconModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit, OnDestroy {
  private logbookService = inject(LogbookService);
  private router = inject(Router);

  mapInstance?: MapLibre;
  activeBase = signal<BaseLayer>('osm');
  seaMarkVisible = signal(true);

  center: [number, number] = [16.44, 43.51]; // Split area, [lng, lat]
  zoom = 8;

  readonly mapStyle = computed<StyleSpecification>(() => this.buildStyle(this.activeBase()));

  private entriesGeoJson = computed<FeatureCollection>(() => ({
    type: 'FeatureCollection',
    features: this.logbookService.entries().map(e => this.entryToFeature(e)),
  }));

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onMapLoad(map: MapLibre): void {
    this.mapInstance = map;
    this.addEntryLayers(map);
    this.addEntryClickHandler(map);
  }

  switchBase(base: BaseLayer): void {
    this.activeBase.set(base);
    // After style change, re-add entry layers
    this.mapInstance?.once('styledata', () => {
      if (this.mapInstance) {
        this.addEntryLayers(this.mapInstance);
        this.addEntryClickHandler(this.mapInstance);
      }
    });
  }

  toggleSeaMark(): void {
    this.seaMarkVisible.update(v => !v);
    const map = this.mapInstance;
    if (map && map.getLayer('seamark-layer')) {
      map.setLayoutProperty('seamark-layer', 'visibility', this.seaMarkVisible() ? 'visible' : 'none');
    }
  }

  centerOnCroatia(): void {
    this.mapInstance?.flyTo({ center: [16.44, 43.51], zoom: 8 });
  }

  private buildStyle(base: BaseLayer): StyleSpecification {
    return {
      version: 8,
      sources: {
        osm: {
          type: 'raster' as const,
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxzoom: 19,
        },
        satellite: {
          type: 'raster' as const,
          tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
          tileSize: 256,
          attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics',
          maxzoom: 19,
        },
        seamark: {
          type: 'raster' as const,
          tiles: ['https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: 'Map data: © <a href="http://www.openseamap.org">OpenSeaMap</a> contributors',
          maxzoom: 18,
        },
      },
      layers: [
        {
          id: 'base-layer',
          type: 'raster' as const,
          source: base === 'osm' ? 'osm' : 'satellite',
        },
        {
          id: 'seamark-layer',
          type: 'raster' as const,
          source: 'seamark',
          layout: { visibility: (this.seaMarkVisible() ? 'visible' : 'none') as 'visible' | 'none' },
        },
      ],
    };
  }

  private addEntryLayers(map: MapLibre): void {
    const geojson = this.entriesGeoJson();

    if (map.getSource('entries')) {
      (map.getSource('entries') as GeoJSONSource).setData(geojson);
    } else {
      map.addSource('entries', { type: 'geojson', data: geojson });
    }

    if (!map.getLayer('entries-circle')) {
      map.addLayer({
        id: 'entries-circle',
        type: 'circle',
        source: 'entries',
        paint: {
          'circle-radius': 8,
          'circle-color': [
            'case',
            ['get', 'hasIssue'], '#f44336',
            '#1976d2',
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#d4a017',
        },
      });
    }

    if (!map.getLayer('entries-label')) {
      map.addLayer({
        id: 'entries-label',
        type: 'symbol',
        source: 'entries',
        layout: {
          'text-field': ['get', 'label'],
          'text-offset': [0, 1.2],
          'text-size': 11,
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#f0f4f8',
          'text-halo-color': '#0a1628',
          'text-halo-width': 1.5,
        },
      });
    }
  }

  private addEntryClickHandler(map: MapLibre): void {
    map.on('click', 'entries-circle', (e: MapMouseEvent & { features?: any[] }) => {
      const feature = e.features?.[0];
      if (feature?.properties?.['id']) {
        this.router.navigate(['/logbook', feature.properties['id']]);
      }
    });
    map.on('mouseenter', 'entries-circle', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'entries-circle', () => {
      map.getCanvas().style.cursor = '';
    });
  }

  private entryToFeature(entry: LogbookEntry): Feature<Point> {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [entry.position.lon, entry.position.lat],
      },
      properties: {
        id: entry.id,
        label: `${entry.date}\n${entry.portDeparture}`,
        hasIssue: !entry.safetyCheckDone || !!entry.incidentNotes,
      },
    };
  }
}
