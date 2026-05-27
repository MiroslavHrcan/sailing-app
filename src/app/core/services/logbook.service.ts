import { Injectable, signal, computed } from '@angular/core';
import { LogbookEntry } from '../models/logbook-entry.model';

interface ShipDefaults {
  shipName: string;
  registrationNumber: string;
}

interface ExportFormat {
  version: string;
  exportedAt: string;
  entries: LogbookEntry[];
}

@Injectable({ providedIn: 'root' })
export class LogbookService {
  private readonly STORAGE_KEY = 'sailing_logbook_entries';
  private readonly SHIP_KEY = 'sailing_ship_defaults';

  readonly entries = signal<LogbookEntry[]>(this.loadFromStorage());
  readonly sortedEntries = computed(() =>
    [...this.entries()].sort((a, b) =>
      `${b.date}T${b.time}`.localeCompare(`${a.date}T${a.time}`)
    )
  );

  getById(id: string): LogbookEntry | undefined {
    return this.entries().find(e => e.id === id);
  }

  create(data: Omit<LogbookEntry, 'id' | 'createdAt' | 'updatedAt'>): LogbookEntry {
    const now = new Date().toISOString();
    const entry: LogbookEntry = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    this.saveShipDefaults(entry.shipName, entry.registrationNumber);
    this.entries.update(list => [...list, entry]);
    this.persist();
    return entry;
  }

  update(id: string, data: Partial<Omit<LogbookEntry, 'id' | 'createdAt'>>): LogbookEntry | null {
    let updated: LogbookEntry | null = null;
    this.entries.update(list =>
      list.map(e => {
        if (e.id !== id) return e;
        updated = { ...e, ...data, updatedAt: new Date().toISOString() };
        return updated;
      })
    );
    if (updated) {
      this.saveShipDefaults((updated as LogbookEntry).shipName, (updated as LogbookEntry).registrationNumber);
      this.persist();
    }
    return updated;
  }

  delete(id: string): void {
    this.entries.update(list => list.filter(e => e.id !== id));
    this.persist();
  }

  getShipDefaults(): ShipDefaults {
    try {
      const raw = localStorage.getItem(this.SHIP_KEY);
      return raw ? JSON.parse(raw) : { shipName: '', registrationNumber: '' };
    } catch {
      return { shipName: '', registrationNumber: '' };
    }
  }

  exportToJson(): void {
    const payload: ExportFormat = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      entries: this.entries(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sailing-logbook-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async importFromJson(file: File): Promise<{ imported: number; errors: string[] }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result as string) as ExportFormat;
          if (!parsed.entries || !Array.isArray(parsed.entries)) {
            reject(new Error('Invalid format: missing entries array'));
            return;
          }
          const errors: string[] = [];
          const valid: LogbookEntry[] = [];
          parsed.entries.forEach((e, i) => {
            if (this.isValidEntry(e)) {
              valid.push(e);
            } else {
              const raw = e as Record<string, unknown>;
              errors.push(`Entry #${i + 1} (${String(raw['date'] ?? 'unknown')}) has missing fields`);
            }
          });
          const existing = this.entries();
          const existingIds = new Set(existing.map(e => e.id));
          const newEntries = valid.filter(e => !existingIds.has(e.id));
          this.entries.update(list => [...list, ...newEntries]);
          this.persist();
          resolve({ imported: newEntries.length, errors });
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('File read failed'));
      reader.readAsText(file);
    });
  }

  clearAll(): void {
    this.entries.set([]);
    this.persist();
  }

  private persist(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.entries()));
  }

  private loadFromStorage(): LogbookEntry[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private saveShipDefaults(shipName: string, registrationNumber: string): void {
    localStorage.setItem(this.SHIP_KEY, JSON.stringify({ shipName, registrationNumber }));
  }

  private isValidEntry(e: unknown): e is LogbookEntry {
    if (typeof e !== 'object' || e === null) return false;
    const entry = e as Record<string, unknown>;
    return (
      typeof entry['id'] === 'string' &&
      typeof entry['date'] === 'string' &&
      typeof entry['shipName'] === 'string' &&
      typeof entry['portDeparture'] === 'string'
    );
  }
}
