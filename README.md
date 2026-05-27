# Sailing Log

A mobile-friendly sailing voyage logbook and weather dashboard. Works entirely in the browser — no server, no account needed. Data is stored locally in your browser and can be exported/imported as JSON.

![Angular 19](https://img.shields.io/badge/Angular-19-red)
![MapLibre GL](https://img.shields.io/badge/MapLibre_GL-5-blue)
![Angular Material](https://img.shields.io/badge/Angular_Material-19-purple)

---

## Features

| Feature | Details |
|---------|---------|
| **Logbook** | Record voyages with full nautical data (position, weather, engine, safety) |
| **Map picker** | Click on a nautical map to set your position when logging an entry |
| **GPS** | One-tap GPS position in the logbook form |
| **Trips** | Organise entries by trip (Croatia 2025, Greece 2026…) |
| **Ships** | Register your boat once; it pre-fills every new entry |
| **Nautical map** | MapLibre GL with OSM, satellite, and OpenSeaMap overlays + voyage track |
| **Weather** | Windy ECMWF forecast, Debeljak radar, MeteoAlarm warnings, meteo.hr forecasts |
| **Export / Import** | Full logbook as JSON — backup or share with crew |
| **Mobile** | Bottom navigation bar, responsive layouts |

---

## Prerequisites

You need **Node.js 18+** and **npm**.

Optionally: the project was developed in a **conda environment**. If you use conda:

```bash
conda create -n sailing-app -c conda-forge nodejs=20 -y
conda activate sailing-app
npm install -g @angular/cli@19
```

Otherwise just make sure `node --version` returns 18 or higher and install the CLI globally:

```bash
npm install -g @angular/cli@19
```

---

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/sailing-log.git
cd sailing-log

# 2. Install dependencies
npm install

# 3. Start the dev server (includes CORS proxy for MeteoAlarm)
ng serve

# 4. Open http://localhost:4200
```

> The dev server uses `proxy.conf.json` to forward `/api/meteoalarm/*` requests to `feeds.meteoalarm.org`.
> Without this proxy the MeteoAlarm weather warnings tab shows an error — that is expected; the rest of the app works fine offline.

---

## Project structure

```
src/app/
├── core/
│   ├── models/          Data interfaces (LogbookEntry, Ship, Trip, MeteoAlarmWarning)
│   └── services/        Business logic + localStorage persistence
│       ├── logbook.service.ts
│       ├── ship.service.ts
│       ├── trip.service.ts
│       └── weather.service.ts
├── shared/
│   ├── components/      Reusable UI (ConfirmDialog)
│   └── pipes/           Beaufort scale, sea state labels, safe URL
└── features/
    ├── dashboard/        Home page — daily briefing
    ├── logbook/          List, form (new/edit), detail view
    ├── map/              Interactive nautical map
    ├── weather/          Forecast, radar, warnings tabs
    └── trips/            Trip and ship management
```

---

## First-time setup inside the app

1. **Register your boat** — go to **Trips & Ships**, click *Add Ship*, enter name and registration number. It automatically becomes the default and pre-fills every new log entry.
2. **Create a trip** — click *New Trip*, enter name (e.g. "Croatia 2025"), destination, and year. Click **Set active** on the trip card. New entries will default to this trip.
3. **Start logging** — click the `+` button in the top-right corner or go to **Logbook → New Entry**.

---

## Logging a position

In the **New Log Entry** form, under the **Navigation** section:

- **Pick position on map** — opens an inline nautical map; tap anywhere to drop a gold marker and fill lat/lon.
- **Use GPS** — the browser asks for location permission and fills the fields instantly.
- You can also type coordinates manually.

---

## Data backup

Go to **Logbook** and click **Export** to download `sailing-logbook-YYYY-MM-DD.json`.
To restore on another device: click **Import** and select the file.

```json
{
  "version": "1.0",
  "exportedAt": "2025-07-01T10:00:00.000Z",
  "entries": [ ... ]
}
```

---

## Production build

```bash
ng build --configuration production
# Output: dist/sailing-app/browser/
```

---

## Deployment

### Netlify (recommended)

Push to GitHub, then connect the repo on [netlify.com](https://netlify.com).
`netlify.toml` is already configured with:
- Build command: `ng build --configuration production`
- Publish directory: `dist/sailing-app/browser`
- SPA routing fallback (`/*` → `/index.html`)
- MeteoAlarm CORS proxy redirect

### Vercel

Same — connect the repo. `vercel.json` is pre-configured.

### Your own server (nginx)

```bash
ng build --configuration production
rsync -avz --delete dist/sailing-app/browser/ user@your-server.com:/var/www/sailing-app/
# Then configure nginx — see nginx.conf.example in the repo root
```

Key nginx requirements:
- `try_files $uri $uri/ /index.html` — SPA routing fallback
- `location /api/meteoalarm/` — proxy to `https://feeds.meteoalarm.org/api/v1/warnings/`

### AWS S3 + CloudFront

Edit `deploy-aws.sh` with your bucket name and CloudFront distribution ID, then:

```bash
chmod +x deploy-aws.sh
./deploy-aws.sh
```

---

## Weather sources

| Tab | Source | Notes |
|-----|--------|-------|
| Forecast Map | [Windy.com](https://windy.com) embed | ECMWF model, interactive, knots |
| Radar | DHMZ Debeljak station | Croatia/Adriatic; auto-refreshes every 5 min |
| Warnings | [MeteoAlarm](https://meteoalarm.org) API | Defaults to Hvar area; toggle to all Croatia |
| Nautical Forecast | meteo.hr iframe | Falls back to external link if iframe is blocked |
| Adriatic Forecast | meteo.hr iframe | Same fallback |

---

## Tech stack

- [Angular 19](https://angular.dev) — standalone components, signals, `@if`/`@for` control flow
- [Angular Material 19](https://material.angular.io)
- [MapLibre GL JS 5](https://maplibre.org) + `@maplibre/ngx-maplibre-gl`
- No backend — 100% client-side, localStorage

---

## Development notes

- **No tests** are set up yet (`skipTests: true` in `angular.json` schematics).
- **MapLibre events must run inside Angular zone** — always wrap MapLibre and geolocation callbacks in `NgZone.run()`. See `logbook-form.component.ts` for the pattern.
- All reactive state uses Angular signals; avoid RxJS subjects for UI state.
- See `CLAUDE.md` for AI-assisted development context (architecture, gotchas, localStorage keys).

---

## License

MIT
