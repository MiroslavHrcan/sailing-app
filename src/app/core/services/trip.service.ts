import { Injectable, signal } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({ providedIn: 'root' })
export class TripService {
  private readonly STORAGE_KEY = 'sailing_trips';
  private readonly ACTIVE_KEY = 'sailing_active_trip';

  readonly trips = signal<Trip[]>(this.loadFromStorage());
  readonly activeTripId = signal<string | null>(localStorage.getItem(this.ACTIVE_KEY) || null);

  setActiveTrip(id: string | null): void {
    this.activeTripId.set(id);
    if (id) localStorage.setItem(this.ACTIVE_KEY, id);
    else localStorage.removeItem(this.ACTIVE_KEY);
  }

  add(data: Omit<Trip, 'id' | 'createdAt'>): Trip {
    const trip: Trip = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.trips.update(list => [...list, trip]);
    this.persist();
    return trip;
  }

  update(id: string, data: Partial<Omit<Trip, 'id' | 'createdAt'>>): Trip | null {
    let updated: Trip | null = null;
    this.trips.update(list =>
      list.map(t => {
        if (t.id !== id) return t;
        updated = { ...t, ...data };
        return updated;
      })
    );
    if (updated) this.persist();
    return updated;
  }

  delete(id: string): void {
    this.trips.update(list => list.filter(t => t.id !== id));
    this.persist();
  }

  private persist(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.trips()));
  }

  private loadFromStorage(): Trip[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
