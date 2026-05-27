export interface MeteoAlarmWarning {
  id: string;
  country: string;
  regions: string[];
  regionCodes: string[];   // EMMA_ID geocode values e.g. 'HR805'
  type: string;
  severity: 'Minor' | 'Moderate' | 'Severe' | 'Extreme';
  onset: string;
  expires: string;
  headline: string;
  description: string;
}

// EMMA_ID codes covering Hvar island: Middle Dalmatia (HR805), South Dalmatia (HR806), Split (HR008)
export const HVAR_REGION_CODES = ['HR805', 'HR806', 'HR008'];
export const HVAR_REGION_NAMES = ['middle dalmatia', 'south dalmatia', 'split', 'hvar'];

export type WeatherTab = 'radar' | 'warnings' | 'nauticari' | 'adriatic';

export const SEVERITY_COLORS: Record<string, string> = {
  Minor: '#4caf50',
  Moderate: '#ff9800',
  Severe: '#f44336',
  Extreme: '#9c27b0',
};
