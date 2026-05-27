import { Component, inject, OnInit, Input, signal, computed, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MapComponent as MglMapComponent } from '@maplibre/ngx-maplibre-gl';
import type { StyleSpecification } from 'maplibre-gl';
import { Map as MapLibre, GeoJSONSource } from 'maplibre-gl';
import { LogbookService } from '../../../core/services/logbook.service';
import { ShipService } from '../../../core/services/ship.service';
import { TripService } from '../../../core/services/trip.service';
import {
  createEmptyEntry, SEA_STATE_LABELS, VISIBILITY_LABELS,
  SeaState, Visibility,
} from '../../../core/models/logbook-entry.model';

@Component({
  selector: 'app-logbook-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatCheckboxModule, MatButtonModule, MatIconModule,
    MatExpansionModule, MatSnackBarModule, MatDividerModule,
    MglMapComponent, RouterLink, DecimalPipe,
  ],
  templateUrl: './logbook-form.component.html',
  styleUrl: './logbook-form.component.scss',
})
export class LogbookFormComponent implements OnInit {
  @Input() id?: string;

  private fb = inject(FormBuilder);
  private ngZone = inject(NgZone);
  readonly logbookService = inject(LogbookService);
  readonly shipService = inject(ShipService);
  readonly tripService = inject(TripService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  isEdit = false;
  seaStates = Object.entries(SEA_STATE_LABELS) as [SeaState, string][];
  visibilities = Object.entries(VISIBILITY_LABELS) as [Visibility, string][];

  readonly mapPickerOpen = signal(false);
  // Snapshot of coordinates taken once when the map opens — NOT a getter that re-evaluates every CD cycle
  readonly mapPickerCenter = signal<[number, number]>([16.44, 43.51]);
  private mapInstance: MapLibre | null = null;

  readonly sortedTrips = computed(() =>
    [...this.tripService.trips()].sort((a, b) => b.year - a.year)
  );

  form = this.fb.group({
    // Context
    tripId: [null as string | null],
    selectedShipId: [null as string | null],

    // Ship
    shipName: ['', Validators.required],
    registrationNumber: [''],

    // Voyage
    portDeparture: ['', Validators.required],
    portArrival: [''],
    date: ['', Validators.required],
    time: ['', Validators.required],
    watchkeepingOfficer: ['', Validators.required],

    // Navigation
    lat: [43.508, [Validators.required, Validators.min(-90), Validators.max(90)]],
    lon: [16.440, [Validators.required, Validators.min(-180), Validators.max(180)]],
    courseSteered: [0, [Validators.min(0), Validators.max(360)]],
    speed: [0, [Validators.min(0)]],

    // Meteorological
    windSpeed: [0, [Validators.min(0)]],
    windDirection: [0, [Validators.min(0), Validators.max(360)]],
    seaState: ['calm' as SeaState],
    visibility: ['excellent' as Visibility],
    barometricPressure: [1013, [Validators.min(900), Validators.max(1100)]],
    airTemperature: [25, [Validators.min(-30), Validators.max(60)]],
    waterTemperature: [22, [Validators.min(-5), Validators.max(40)]],

    // Engineering
    engineRpm: [0, [Validators.min(0)]],
    fuelConsumption: [0, [Validators.min(0)]],
    remainingFuel: [0, [Validators.min(0)]],
    remainingWater: [0, [Validators.min(0)]],

    // Safety
    safetyCheckDone: [false],
    incidentNotes: [''],
    crewRosterChanges: [''],
  });

  readonly mapStyle: StyleSpecification = {
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

  ngOnInit(): void {
    if (this.id) {
      this.isEdit = true;
      const entry = this.logbookService.getById(this.id);
      if (entry) {
        this.form.patchValue({
          ...entry,
          lat: entry.position.lat,
          lon: entry.position.lon,
          tripId: entry.tripId ?? null,
          selectedShipId: null,
        });
      } else {
        this.snackBar.open('Entry not found', 'Dismiss', { duration: 3000 });
        this.router.navigate(['/logbook']);
      }
    } else {
      const empty = createEmptyEntry();
      this.form.patchValue({
        ...empty,
        lat: empty.position.lat,
        lon: empty.position.lon,
      });

      // Auto-fill default ship (skips typing name + reg number every time)
      const defaultShipId = this.shipService.defaultShipId();
      const ships = this.shipService.ships();
      const defaultShip = defaultShipId
        ? ships.find(s => s.id === defaultShipId)
        : ships.length === 1 ? ships[0] : null;

      if (defaultShip) {
        this.form.patchValue({
          selectedShipId: defaultShip.id,
          shipName: defaultShip.name,
          registrationNumber: defaultShip.registrationNumber,
        });
      }

      // Auto-fill active trip
      const activeTripId = this.tripService.activeTripId();
      if (activeTripId) {
        this.form.patchValue({ tripId: activeTripId });
      }
    }
  }

  onShipSelect(shipId: string | null): void {
    if (!shipId) return;
    const ship = this.shipService.ships().find(s => s.id === shipId);
    if (ship) {
      this.form.patchValue({ shipName: ship.name, registrationNumber: ship.registrationNumber });
    }
  }

  toggleMapPicker(): void {
    if (!this.mapPickerOpen()) {
      // Snapshot the current coordinates once so [center] doesn't change after the map loads
      this.mapPickerCenter.set([
        this.form.value.lon ?? 16.44,
        this.form.value.lat ?? 43.51,
      ]);
    } else {
      this.mapInstance = null;
    }
    this.mapPickerOpen.update(v => !v);
  }

  onMapPickerLoad(map: MapLibre): void {
    // MapLibre fires this outside Angular's zone — run inside to keep signals & CD in sync
    this.ngZone.run(() => {
      this.mapInstance = map;
      const lat = this.form.value.lat ?? 43.508;
      const lon = this.form.value.lon ?? 16.440;

      map.addSource('picker-point', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'Point', coordinates: [lon, lat] }, properties: {} },
      });
      map.addLayer({
        id: 'picker-circle',
        type: 'circle',
        source: 'picker-point',
        paint: {
          'circle-radius': 10,
          'circle-color': '#d4a017',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
        },
      });
    });
  }

  onMapPickerClick(event: { lngLat: { lat: number; lng: number } }): void {
    // MapLibre events fire outside Angular's zone
    this.ngZone.run(() => {
      const lat = parseFloat(event.lngLat.lat.toFixed(5));
      const lon = parseFloat(event.lngLat.lng.toFixed(5));
      this.form.patchValue({ lat, lon });

      if (this.mapInstance) {
        const source = this.mapInstance.getSource('picker-point') as GeoJSONSource;
        source?.setData({ type: 'Feature', geometry: { type: 'Point', coordinates: [lon, lat] }, properties: {} });
      }
    });
  }

  useGps(): void {
    if (!navigator.geolocation) {
      this.snackBar.open('GPS not available in this browser', 'Dismiss', { duration: 3000 });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        // Geolocation callbacks run outside Angular's zone
        this.ngZone.run(() => {
          const lat = parseFloat(pos.coords.latitude.toFixed(5));
          const lon = parseFloat(pos.coords.longitude.toFixed(5));
          this.form.patchValue({ lat, lon });
          this.snackBar.open(`Position set: ${lat}°N, ${lon}°E`, 'Dismiss', { duration: 3000 });
          if (this.mapInstance) {
            const source = this.mapInstance.getSource('picker-point') as GeoJSONSource;
            source?.setData({ type: 'Feature', geometry: { type: 'Point', coordinates: [lon, lat] }, properties: {} });
            this.mapInstance.flyTo({ center: [lon, lat], zoom: 10 });
          }
        });
      },
      () => this.ngZone.run(() =>
        this.snackBar.open('Could not get GPS position', 'Dismiss', { duration: 3000 })
      )
    );
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const data = {
      tripId: v.tripId ?? undefined,
      shipName: v.shipName!,
      registrationNumber: v.registrationNumber ?? '',
      portDeparture: v.portDeparture!,
      portArrival: v.portArrival ?? '',
      date: v.date!,
      time: v.time!,
      watchkeepingOfficer: v.watchkeepingOfficer!,
      position: { lat: v.lat!, lon: v.lon! },
      courseSteered: v.courseSteered!,
      speed: v.speed!,
      windSpeed: v.windSpeed!,
      windDirection: v.windDirection!,
      seaState: v.seaState! as SeaState,
      visibility: v.visibility! as Visibility,
      barometricPressure: v.barometricPressure!,
      airTemperature: v.airTemperature!,
      waterTemperature: v.waterTemperature!,
      engineRpm: v.engineRpm!,
      fuelConsumption: v.fuelConsumption!,
      remainingFuel: v.remainingFuel!,
      remainingWater: v.remainingWater!,
      safetyCheckDone: v.safetyCheckDone!,
      incidentNotes: v.incidentNotes ?? '',
      crewRosterChanges: v.crewRosterChanges ?? '',
    };

    if (this.isEdit && this.id) {
      this.logbookService.update(this.id, data);
      this.snackBar.open('Entry updated', 'Dismiss', { duration: 3000 });
      this.router.navigate(['/logbook', this.id]);
    } else {
      const entry = this.logbookService.create(data);
      this.snackBar.open('Entry saved', 'Dismiss', { duration: 3000 });
      this.router.navigate(['/logbook', entry.id]);
    }
  }

  cancel(): void {
    if (this.isEdit && this.id) {
      this.router.navigate(['/logbook', this.id]);
    } else {
      this.router.navigate(['/logbook']);
    }
  }
}
