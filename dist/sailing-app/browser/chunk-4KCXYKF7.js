import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-RM2KPLBQ.js";

// src/app/core/services/ship.service.ts
var ShipService = class _ShipService {
  STORAGE_KEY = "sailing_ships";
  DEFAULT_KEY = "sailing_default_ship";
  ships = signal(this.loadFromStorage());
  defaultShipId = signal(localStorage.getItem(this.DEFAULT_KEY) || null);
  setDefaultShip(id) {
    this.defaultShipId.set(id);
    if (id)
      localStorage.setItem(this.DEFAULT_KEY, id);
    else
      localStorage.removeItem(this.DEFAULT_KEY);
  }
  add(data) {
    const ship = __spreadProps(__spreadValues({}, data), {
      id: crypto.randomUUID(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.ships.update((list) => [...list, ship]);
    this.persist();
    if (this.ships().length === 1)
      this.setDefaultShip(ship.id);
    return ship;
  }
  update(id, data) {
    let updated = null;
    this.ships.update((list) => list.map((s) => {
      if (s.id !== id)
        return s;
      updated = __spreadValues(__spreadValues({}, s), data);
      return updated;
    }));
    if (updated)
      this.persist();
    return updated;
  }
  delete(id) {
    this.ships.update((list) => list.filter((s) => s.id !== id));
    this.persist();
  }
  persist() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.ships()));
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  static \u0275fac = function ShipService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShipService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShipService, factory: _ShipService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShipService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ShipService
};
//# sourceMappingURL=chunk-4KCXYKF7.js.map
