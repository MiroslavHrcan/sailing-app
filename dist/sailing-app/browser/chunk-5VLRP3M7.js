import {
  Injectable,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-RM2KPLBQ.js";

// src/app/core/services/logbook.service.ts
var LogbookService = class _LogbookService {
  STORAGE_KEY = "sailing_logbook_entries";
  SHIP_KEY = "sailing_ship_defaults";
  entries = signal(this.loadFromStorage());
  sortedEntries = computed(() => [...this.entries()].sort((a, b) => `${b.date}T${b.time}`.localeCompare(`${a.date}T${a.time}`)));
  getById(id) {
    return this.entries().find((e) => e.id === id);
  }
  create(data) {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const entry = __spreadProps(__spreadValues({}, data), {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now
    });
    this.saveShipDefaults(entry.shipName, entry.registrationNumber);
    this.entries.update((list) => [...list, entry]);
    this.persist();
    return entry;
  }
  update(id, data) {
    let updated = null;
    this.entries.update((list) => list.map((e) => {
      if (e.id !== id)
        return e;
      updated = __spreadProps(__spreadValues(__spreadValues({}, e), data), { updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
      return updated;
    }));
    if (updated) {
      this.saveShipDefaults(updated.shipName, updated.registrationNumber);
      this.persist();
    }
    return updated;
  }
  delete(id) {
    this.entries.update((list) => list.filter((e) => e.id !== id));
    this.persist();
  }
  getShipDefaults() {
    try {
      const raw = localStorage.getItem(this.SHIP_KEY);
      return raw ? JSON.parse(raw) : { shipName: "", registrationNumber: "" };
    } catch {
      return { shipName: "", registrationNumber: "" };
    }
  }
  exportToJson() {
    const payload = {
      version: "1.0",
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      entries: this.entries()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sailing-logbook-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  importFromJson(file) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(reader.result);
            if (!parsed.entries || !Array.isArray(parsed.entries)) {
              reject(new Error("Invalid format: missing entries array"));
              return;
            }
            const errors = [];
            const valid = [];
            parsed.entries.forEach((e, i) => {
              if (this.isValidEntry(e)) {
                valid.push(e);
              } else {
                const raw = e;
                errors.push(`Entry #${i + 1} (${String(raw["date"] ?? "unknown")}) has missing fields`);
              }
            });
            const existing = this.entries();
            const existingIds = new Set(existing.map((e) => e.id));
            const newEntries = valid.filter((e) => !existingIds.has(e.id));
            this.entries.update((list) => [...list, ...newEntries]);
            this.persist();
            resolve({ imported: newEntries.length, errors });
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = () => reject(new Error("File read failed"));
        reader.readAsText(file);
      });
    });
  }
  clearAll() {
    this.entries.set([]);
    this.persist();
  }
  persist() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.entries()));
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  saveShipDefaults(shipName, registrationNumber) {
    localStorage.setItem(this.SHIP_KEY, JSON.stringify({ shipName, registrationNumber }));
  }
  isValidEntry(e) {
    if (typeof e !== "object" || e === null)
      return false;
    const entry = e;
    return typeof entry["id"] === "string" && typeof entry["date"] === "string" && typeof entry["shipName"] === "string" && typeof entry["portDeparture"] === "string";
  }
  static \u0275fac = function LogbookService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogbookService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LogbookService, factory: _LogbookService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogbookService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LogbookService
};
//# sourceMappingURL=chunk-5VLRP3M7.js.map
