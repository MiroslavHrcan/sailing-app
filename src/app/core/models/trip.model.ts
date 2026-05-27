export interface Trip {
  id: string;
  name: string;        // e.g. "Croatia 2025"
  destination: string; // e.g. "Croatia"
  year: number;
  startDate?: string;  // YYYY-MM-DD
  endDate?: string;
  notes?: string;
  createdAt: string;
}
