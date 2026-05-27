# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is
A sailing voyage logbook + weather dashboard SPA built with Angular 19. Designed for multi-trip use (Croatia, Greece, …). All data stored in browser localStorage; no backend required.

## Commands

```bash
conda activate sailing-app      # Node 20.17.0 + Angular CLI 19 (required before any ng/npm command)

ng serve                        # Dev server at http://localhost:4200 (auto-uses proxy.conf.json)
ng build --configuration production
npm run watch                   # Build in dev mode with file watching

ng test                         # Karma unit tests (tests are mostly skipped; see skipTests in angular.json)
ng lint                         # Not configured — no linting setup in this project
```

The conda env is `sailing-app` on Miroslav's machine. Node 20.17.0 LTS (Node 22 not in conda defaults).

## Tech stack
- **Angular 19** — standalone components, signals (`signal`, `computed`), `@if`/`@for` control flow
- **Angular Material 19** — azure-blue base theme, overridden by maritime theme (navy `#0a1628`, gold `#d4a017`, gold-light `#f0c040`, text-dim `#94b4c8`, card-bg `#112244`)
- **MapLibre GL JS 5 + `@maplibre/ngx-maplibre-gl@19`** — NOT the old `ngx-maplibre-gl`; import is `MapComponent as MglMapComponent`
- **RxJS** — only for HTTP and `interval()` polling; all state is Angular signals
- **No backend** — localStorage only; JSON export/import for backup

## Architecture
```
src/app/
├── app.component.*          Shell: MatSidenav (desktop) + bottom nav bar (mobile)
├── app.routes.ts            All routes lazy-loaded with loadComponent
├── core/
│   ├── models/
│   │   ├── logbook-entry.model.ts   LogbookEntry interface + createEmptyEntry()
│   │   ├── ship.model.ts            Ship { id, name, registrationNumber, createdAt }
│   │   ├── trip.model.ts            Trip { id, name, destination, year, startDate?, endDate?, notes? }
│   │   └── weather.model.ts         MeteoAlarmWarning + SEVERITY_COLORS + HVAR_REGION_CODES
│   └── services/
│       ├── logbook.service.ts       signals CRUD + localStorage + JSON export/import
│       ├── ship.service.ts          signals CRUD + defaultShipId signal + setDefaultShip()
│       ├── trip.service.ts          signals CRUD + activeTripId signal + setActiveTrip()
│       └── weather.service.ts       radar polling + MeteoAlarm HTTP (via /api/meteoalarm proxy)
├── shared/
│   ├── components/
│   │   ├── confirm-dialog/   Reusable confirmation dialog
│   │   └── maritime-card/    Reusable styled card for maritime content
│   └── pipes/                beaufort.pipe, sea-state.pipe, safe-url.pipe
└── features/
    ├── dashboard/    Morning briefing: mini-map, last entry, weather warnings, quick actions
    ├── logbook/
    │   ├── logbook-list/    MatTable + sort + paginator + trip filter + export/import
    │   ├── logbook-form/    Reactive form with map picker (MapLibre inline) + ship/trip selectors
    │   └── logbook-detail/  Read-only detail view
    ├── weather/      Tabs: Windy forecast map, radar, MeteoAlarm warnings (Hvar filter), meteo.hr iframes
    ├── map/          Full-screen MapLibre with layer switcher (OSM/satellite/OpenSeaMap) + entry markers
    └── trips/        Trips & Ships management page (CRUD for both)
```

## Key patterns

### Signals
All service state uses `signal<T>()`. Components read signals directly in templates (`weatherService.warnings()`). No subscriptions needed for state.

### MapLibre in Angular — critical gotchas
1. **Always wrap MapLibre event callbacks in `ngZone.run()`** — they fire outside Angular's zone. Forgetting this causes `ExpressionChangedAfterItHasBeenChecked` crashes.
2. **Never pass `[center]` from a getter** — it returns a new array every CD cycle, causing continuous `map.setCenter()` calls and crashes. Use a `signal` that is set once.
3. **Import**: `import { MapComponent as MglMapComponent } from '@maplibre/ngx-maplibre-gl'`
4. **Types**: use `as const` on `type: 'raster'` in StyleSpecification sources/layers to satisfy TypeScript.

### CORS proxy (MeteoAlarm)
`feeds.meteoalarm.org` blocks browser requests. All configs proxy `/api/meteoalarm/*` → `https://feeds.meteoalarm.org/api/v1/warnings`:
- Dev: `proxy.conf.json` → `ng serve` handles it automatically
- Production: `netlify.toml` redirects, `vercel.json` rewrites, nginx `proxy_pass`

### Trip & Ship workflow
- `TripService.activeTripId` — persisted in localStorage (`sailing_active_trip`). New log entries auto-fill from this.
- `ShipService.defaultShipId` — persisted (`sailing_default_ship`). Auto-set when first ship is added. New entries pre-fill ship name + reg from this.
- Managed on `/trips` page. Each trip card has "Set active" button; ships have "Set default" button.

### Weather warnings (MeteoAlarm)
- `WeatherService.allWarnings` — raw signal with all HR warnings
- `WeatherService.warnings` — computed, filtered by `hvarOnly` signal (default: true)
- Filter uses EMMA_ID geocodes (`HR805`, `HR806`, `HR008`) + region name fallback
- Hvar area = Middle Dalmatia (HR805), South Dalmatia (HR806), Split (HR008)

### Mobile navigation
- `isMobile` from `BreakpointObserver` (XSmall + Small breakpoints)
- Desktop: MatSidenav (side mode, 240px)
- Mobile: sidenav hidden; fixed bottom nav bar with 5 tabs + `padding-bottom: 64px` on main content

## localStorage keys
| Key | Content |
|-----|---------|
| `sailing_logbook_entries` | `LogbookEntry[]` |
| `sailing_ships` | `Ship[]` |
| `sailing_trips` | `Trip[]` |
| `sailing_active_trip` | string (trip id) |
| `sailing_default_ship` | string (ship id) |

## Style rules
- Maritime CSS variables in `src/styles.scss` `:root` block
- Material form fields: ALL appearances (fill + outline) have color overrides in `styles.scss` — always add both when styling new form field variants
- `appearance="fill"` used in logbook form; `appearance="outline"` used in trips form
- Severity chips: `.severity-chip.Minor/Moderate/Severe/Extreme` — global in `styles.scss`
- `mat-button-toggle` in sidenav uses `--mdc-list-list-item-label-text-color` CSS variable for dark theme text

## Deployment targets
All four are pre-configured:
- **Netlify**: `netlify.toml` — `ng build` + `dist/sailing-app/browser` publish dir + MeteoAlarm proxy redirect
- **Vercel**: `vercel.json` — same concept with rewrites
- **AWS S3+CloudFront**: `deploy-aws.sh` — sync with long cache for hashed assets, no-cache for index.html
- **nginx**: `deploy-nginx.sh` + `nginx.conf.example` — `try_files` SPA fallback + proxy_pass for MeteoAlarm

## Recent changes (completed)
These were implemented in the last two sessions — do not re-do them:

- **Sailed path drawing** — `LogbookEntry.path?: [number, number][]` (GeoJSON [lon, lat] order). Form has a "Draw Path" mode toggle with undo/clear; paths stored with entry and shown in detail view + dashboard mini-map.
- **Wind direction** — changed from free-number input to 16-point compass `mat-select` (N, NNE, NE…NNW). `WIND_DIRECTION_OPTIONS` and `degreesToCompass()` added to `logbook-entry.model.ts`.
- **Radar image** — uses animated GIF `https://vrijeme.hr/anim_debeljak.gif` (not a static hourly frame). Dashboard radar widget has refresh + external link buttons.
- **Dashboard weather warnings widget** — has a refresh (mat-icon-button) button that calls `weatherService.loadWarnings()`.
- **Google Maps voyage map** — custom map `mid=143dlpkNXvRfu2k4KSV54ZTO2zVjZ4tM` embedded in two places:
  - Dashboard: "Voyage Map" widget (full-width, 480px iframe)
  - Map page: "Nautical / Voyage Map" toggle in controls — switches between MapLibre and the Google Maps iframe

## Architecture notes (updated)
- Dashboard widgets: mini-map (span 2), last entry, weather warnings, quick actions, voyage map (span 2), radar
- Map page: `mapView = signal<'nautical' | 'custom'>('nautical')` controls which view is shown
- `SafeUrlPipe` (`shared/pipes/safe-url.pipe.ts`) used for iframe `[src]` bindings — always import it when adding iframes

## Known issues / what's left
- Weather tab radar is Croatia-only (DHMZ Debeljak station) — for Greece trip would need a different radar source
- MeteoAlarm warnings filter is hardcoded to Hvar area (HR805/HR806/HR008) — should become configurable per trip
- No PWA / offline support yet
- Tests are skipped (`skipTests: true` in `angular.json` schematics defaults)
