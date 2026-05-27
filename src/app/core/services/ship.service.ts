import { Injectable, signal } from '@angular/core';
import { Ship } from '../models/ship.model';

@Injectable({ providedIn: 'root' })
export class ShipService {
  private readonly STORAGE_KEY = 'sailing_ships';
  private readonly DEFAULT_KEY = 'sailing_default_ship';

  readonly ships = signal<Ship[]>(this.loadFromStorage());
  readonly defaultShipId = signal<string | null>(localStorage.getItem(this.DEFAULT_KEY) || null);

  setDefaultShip(id: string | null): void {
    this.defaultShipId.set(id);
    if (id) localStorage.setItem(this.DEFAULT_KEY, id);
    else localStorage.removeItem(this.DEFAULT_KEY);
  }

  add(data: Omit<Ship, 'id' | 'createdAt'>): Ship {
    const ship: Ship = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.ships.update(list => [...list, ship]);
    this.persist();
    // Auto-set as default if it's the only ship
    if (this.ships().length === 1) this.setDefaultShip(ship.id);
    return ship;
  }

  update(id: string, data: Partial<Omit<Ship, 'id' | 'createdAt'>>): Ship | null {
    let updated: Ship | null = null;
    this.ships.update(list =>
      list.map(s => {
        if (s.id !== id) return s;
        updated = { ...s, ...data };
        return updated;
      })
    );
    if (updated) this.persist();
    return updated;
  }

  delete(id: string): void {
    this.ships.update(list => list.filter(s => s.id !== id));
    this.persist();
  }

  private persist(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.ships()));
  }

  private loadFromStorage(): Ship[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
