import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ShipService } from '../../core/services/ship.service';
import { TripService } from '../../core/services/trip.service';
import { LogbookService } from '../../core/services/logbook.service';
import { Trip } from '../../core/models/trip.model';
import { Ship } from '../../core/models/ship.model';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss',
})
export class TripsComponent {
  readonly shipService = inject(ShipService);
  readonly tripService = inject(TripService);
  readonly logbookService = inject(LogbookService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  private readonly fb = inject(FormBuilder);

  // ── UI state ──────────────────────────────────────────────────────────────
  showTripForm = signal(false);
  editingTripId = signal<string | null>(null);
  showShipForm = signal(false);
  editingShipId = signal<string | null>(null);

  // ── Computed ──────────────────────────────────────────────────────────────
  tripsWithCount = computed(() =>
    this.tripService
      .trips()
      .map(t => ({
        ...t,
        entryCount: this.logbookService
          .entries()
          .filter(e => e.tripId === t.id).length,
      }))
      .sort((a, b) => b.year - a.year)
  );

  // ── Forms ─────────────────────────────────────────────────────────────────
  tripForm = this.fb.group({
    name: ['', Validators.required],
    destination: ['', Validators.required],
    year: [new Date().getFullYear(), Validators.required],
    startDate: [''],
    endDate: [''],
    notes: [''],
  });

  shipForm = this.fb.group({
    name: ['', Validators.required],
    registrationNumber: ['', Validators.required],
  });

  // ── Trip methods ──────────────────────────────────────────────────────────
  openTripForm(): void {
    this.tripForm.reset({ year: new Date().getFullYear() });
    this.editingTripId.set(null);
    this.showTripForm.set(true);
  }

  saveTrip(): void {
    if (this.tripForm.invalid) return;

    const raw = this.tripForm.getRawValue();
    const data = {
      name: raw.name!,
      destination: raw.destination!,
      year: Number(raw.year),
      startDate: raw.startDate || undefined,
      endDate: raw.endDate || undefined,
      notes: raw.notes || undefined,
    };

    const id = this.editingTripId();
    if (id) {
      this.tripService.update(id, data);
      this.snackBar.open('Trip updated', 'OK', { duration: 2500 });
    } else {
      this.tripService.add(data);
      this.snackBar.open('Trip added', 'OK', { duration: 2500 });
    }

    this.cancelTripForm();
  }

  editTrip(trip: Trip): void {
    this.tripForm.patchValue({
      name: trip.name,
      destination: trip.destination,
      year: trip.year,
      startDate: trip.startDate ?? '',
      endDate: trip.endDate ?? '',
      notes: trip.notes ?? '',
    });
    this.editingTripId.set(trip.id);
    this.showTripForm.set(true);
  }

  deleteTrip(trip: Trip): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Trip',
        message: `Delete "${trip.name}"? This cannot be undone.`,
        confirmLabel: 'Delete',
      } satisfies ConfirmDialogData,
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.tripService.delete(trip.id);
        this.snackBar.open('Trip deleted', 'OK', { duration: 2500 });
      }
    });
  }

  cancelTripForm(): void {
    this.tripForm.reset({ year: new Date().getFullYear() });
    this.showTripForm.set(false);
    this.editingTripId.set(null);
  }

  setActiveTrip(tripId: string): void {
    this.tripService.setActiveTrip(tripId);
    this.snackBar.open('Active trip set — new log entries will default to this trip', 'OK', { duration: 3000 });
  }

  viewTripEntries(tripId: string): void {
    this.router.navigate(['/logbook'], { queryParams: { tripId } });
  }

  // ── Ship methods ──────────────────────────────────────────────────────────
  openShipForm(): void {
    this.shipForm.reset();
    this.editingShipId.set(null);
    this.showShipForm.set(true);
  }

  saveShip(): void {
    if (this.shipForm.invalid) return;

    const raw = this.shipForm.getRawValue();
    const data = {
      name: raw.name!,
      registrationNumber: raw.registrationNumber!,
    };

    const id = this.editingShipId();
    if (id) {
      this.shipService.update(id, data);
      this.snackBar.open('Ship updated', 'OK', { duration: 2500 });
    } else {
      this.shipService.add(data);
      this.snackBar.open('Ship added', 'OK', { duration: 2500 });
    }

    this.cancelShipForm();
  }

  editShip(ship: Ship): void {
    this.shipForm.patchValue({
      name: ship.name,
      registrationNumber: ship.registrationNumber,
    });
    this.editingShipId.set(ship.id);
    this.showShipForm.set(true);
  }

  deleteShip(ship: Ship): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Ship',
        message: `Delete "${ship.name}"? This cannot be undone.`,
        confirmLabel: 'Delete',
      } satisfies ConfirmDialogData,
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.shipService.delete(ship.id);
        this.snackBar.open('Ship deleted', 'OK', { duration: 2500 });
      }
    });
  }

  setDefaultShip(shipId: string): void {
    this.shipService.setDefaultShip(shipId);
    this.snackBar.open('Default ship set — new log entries will pre-fill this ship', 'OK', { duration: 3000 });
  }

  cancelShipForm(): void {
    this.shipForm.reset();
    this.showShipForm.set(false);
    this.editingShipId.set(null);
  }
}
