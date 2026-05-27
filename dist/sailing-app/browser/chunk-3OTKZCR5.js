// src/app/core/models/logbook-entry.model.ts
function createEmptyEntry() {
  const now = /* @__PURE__ */ new Date();
  return {
    shipName: "",
    registrationNumber: "",
    portDeparture: "",
    portArrival: "",
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    watchkeepingOfficer: "",
    position: { lat: 43.508, lon: 16.44 },
    // Split, Croatia
    courseSteered: 0,
    speed: 0,
    windSpeed: 0,
    windDirection: 0,
    seaState: "calm",
    visibility: "excellent",
    barometricPressure: 1013,
    airTemperature: 25,
    waterTemperature: 22,
    engineRpm: 0,
    fuelConsumption: 0,
    remainingFuel: 0,
    remainingWater: 0,
    safetyCheckDone: false,
    incidentNotes: "",
    crewRosterChanges: ""
  };
}
var SEA_STATE_LABELS = {
  "calm": "Calm (0)",
  "rippled": "Rippled (1)",
  "wavelets": "Wavelets (2)",
  "slight": "Slight (3)",
  "moderate": "Moderate (4)",
  "rough": "Rough (5)",
  "very-rough": "Very Rough (6)",
  "high": "High (7)",
  "very-high": "Very High (8)",
  "phenomenal": "Phenomenal (9)"
};
var VISIBILITY_LABELS = {
  "excellent": "Excellent (>10 nm)",
  "good": "Good (5\u201310 nm)",
  "moderate": "Moderate (2\u20135 nm)",
  "poor": "Poor (0.5\u20132 nm)",
  "very-poor": "Very Poor (<0.5 nm)",
  "fog": "Fog (<0.1 nm)"
};

export {
  createEmptyEntry,
  SEA_STATE_LABELS,
  VISIBILITY_LABELS
};
//# sourceMappingURL=chunk-3OTKZCR5.js.map
