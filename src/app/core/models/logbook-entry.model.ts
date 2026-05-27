export type SeaState =
  | 'calm' | 'rippled' | 'wavelets' | 'slight'
  | 'moderate' | 'rough' | 'very-rough' | 'high' | 'very-high' | 'phenomenal';

export type Visibility =
  | 'excellent' | 'good' | 'moderate' | 'poor' | 'very-poor' | 'fog';

export interface Position {
  lat: number;
  lon: number;
}

export interface LogbookEntry {
  id: string;

  // Trip association
  tripId?: string;

  // Ship
  shipName: string;
  registrationNumber: string;

  // Voyage
  portDeparture: string;
  portArrival: string;
  date: string;                    // YYYY-MM-DD
  time: string;                    // HH:MM
  watchkeepingOfficer: string;

  // Navigation
  position: Position;
  path?: [number, number][];       // sailed route — [lon, lat] waypoints (GeoJSON order)
  courseSteered: number;           // 0–360°
  speed: number;                   // knots

  // Meteorological
  windSpeed: number;               // knots
  windDirection: number;           // 0–360°
  seaState: SeaState;
  visibility: Visibility;
  barometricPressure: number;      // hPa
  airTemperature: number;          // °C
  waterTemperature: number;        // °C

  // Engineering
  engineRpm: number;
  fuelConsumption: number;         // L/hr
  remainingFuel: number;           // L
  remainingWater: number;          // L

  // Safety & Notes
  safetyCheckDone: boolean;
  incidentNotes: string;
  crewRosterChanges: string;

  createdAt: string;
  updatedAt: string;
}

export function createEmptyEntry(): Omit<LogbookEntry, 'id' | 'createdAt' | 'updatedAt'> {
  const now = new Date();
  return {
    shipName: '',
    registrationNumber: '',
    portDeparture: '',
    portArrival: '',
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    watchkeepingOfficer: '',
    position: { lat: 43.508, lon: 16.440 }, // Split, Croatia
    courseSteered: 0,
    speed: 0,
    windSpeed: 0,
    windDirection: 0,
    seaState: 'calm',
    visibility: 'excellent',
    barometricPressure: 1013,
    airTemperature: 25,
    waterTemperature: 22,
    engineRpm: 0,
    fuelConsumption: 0,
    remainingFuel: 0,
    remainingWater: 0,
    safetyCheckDone: false,
    incidentNotes: '',
    crewRosterChanges: '',
  };
}

export const SEA_STATE_LABELS: Record<SeaState, string> = {
  'calm': 'Calm (0)',
  'rippled': 'Rippled (1)',
  'wavelets': 'Wavelets (2)',
  'slight': 'Slight (3)',
  'moderate': 'Moderate (4)',
  'rough': 'Rough (5)',
  'very-rough': 'Very Rough (6)',
  'high': 'High (7)',
  'very-high': 'Very High (8)',
  'phenomenal': 'Phenomenal (9)',
};

export const WIND_DIRECTION_OPTIONS: { label: string; degrees: number }[] = [
  { label: 'N',   degrees: 0   },
  { label: 'NNE', degrees: 22  },
  { label: 'NE',  degrees: 45  },
  { label: 'ENE', degrees: 67  },
  { label: 'E',   degrees: 90  },
  { label: 'ESE', degrees: 112 },
  { label: 'SE',  degrees: 135 },
  { label: 'SSE', degrees: 157 },
  { label: 'S',   degrees: 180 },
  { label: 'SSW', degrees: 202 },
  { label: 'SW',  degrees: 225 },
  { label: 'WSW', degrees: 247 },
  { label: 'W',   degrees: 270 },
  { label: 'WNW', degrees: 292 },
  { label: 'NW',  degrees: 315 },
  { label: 'NNW', degrees: 337 },
];

export function degreesToCompass(deg: number): string {
  const dirs = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  return dirs[Math.round(((deg % 360) + 360) % 360 / 22.5) % 16];
}

export const VISIBILITY_LABELS: Record<Visibility, string> = {
  'excellent': 'Excellent (>10 nm)',
  'good': 'Good (5–10 nm)',
  'moderate': 'Moderate (2–5 nm)',
  'poor': 'Poor (0.5–2 nm)',
  'very-poor': 'Very Poor (<0.5 nm)',
  'fog': 'Fog (<0.1 nm)',
};
