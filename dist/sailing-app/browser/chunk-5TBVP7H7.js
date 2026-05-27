import {
  BeaufortPipe
} from "./chunk-BSCNAUB4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  SEVERITY_COLORS,
  WeatherService
} from "./chunk-DW2MZYD7.js";
import {
  MapComponent
} from "./chunk-BQXHZOPX.js";
import {
  LogbookService
} from "./chunk-5VLRP3M7.js";
import {
  Router,
  RouterLink
} from "./chunk-CEF4G77E.js";
import "./chunk-73NCA4NO.js";
import {
  DatePipe,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  NgClass
} from "./chunk-7ODZSRZ3.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-RM2KPLBQ.js";

// src/app/features/dashboard/dashboard.component.ts
var _c0 = () => [8];
var _c1 = (a0) => ["/logbook", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_30_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Safety check pending ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 29);
    \u0275\u0275text(5, "east");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 32)(12, "mat-icon");
    \u0275\u0275text(13, "air");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "beaufort");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "mat-icon");
    \u0275\u0275text(19, "speed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 32)(23, "mat-icon");
    \u0275\u0275text(24, "navigation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 32)(28, "mat-icon");
    \u0275\u0275text(29, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, DashboardComponent_Conditional_30_Conditional_32_Template, 4, 0, "div", 33);
    \u0275\u0275elementStart(33, "button", 34);
    \u0275\u0275text(34, " View Entry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r1 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r1.portDeparture);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(e_r1.portArrival || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", e_r1.date, " \xB7 ", e_r1.time, " UTC \xB7 ", e_r1.watchkeepingOfficer, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", e_r1.windSpeed, " kt \xB7 ", \u0275\u0275pipeBind1(16, 13, e_r1.windSpeed), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", e_r1.speed, " kt SOG");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", e_r1.courseSteered, "\xB0 COG");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", e_r1.airTemperature, "\xB0C / ", e_r1.barometricPressure, " hPa");
    \u0275\u0275advance();
    \u0275\u0275conditional(!e_r1.safetyCheckDone ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, e_r1.id));
  }
}
function DashboardComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon");
    \u0275\u0275text(2, "anchor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No log entries yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newEntry());
    });
    \u0275\u0275text(6, "Start your logbook");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.weatherService.warnings().length);
  }
}
function DashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 35);
    \u0275\u0275text(2, " Loading...");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No active warnings \u2014 fair sailing! ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_40_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r4.description);
  }
}
function DashboardComponent_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DashboardComponent_Conditional_40_For_2_Conditional_6_Template, 2, 1, "p", 41);
    \u0275\u0275elementStart(7, "div", 42)(8, "mat-icon");
    \u0275\u0275text(9, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-left-color", ctx_r2.severityColors[w_r4.severity]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", w_r4.severity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r4.severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", w_r4.type, " \u2014 ", w_r4.headline, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(w_r4.description ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(11, 9, w_r4.onset, "d MMM HH:mm"), " \u2013 ", \u0275\u0275pipeBind2(12, 12, w_r4.expires, "d MMM HH:mm"), " ");
  }
}
function DashboardComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_40_For_2_Template, 13, 15, "div", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.weatherService.warnings());
  }
}
var DashboardComponent = class _DashboardComponent {
  logbookService = inject(LogbookService);
  weatherService = inject(WeatherService);
  router = inject(Router);
  severityColors = SEVERITY_COLORS;
  today = /* @__PURE__ */ new Date();
  lastEntry = computed(() => this.logbookService.sortedEntries()[0] ?? null);
  miniMapCenter = computed(() => {
    const e = this.lastEntry();
    return e ? [e.position.lon, e.position.lat] : [16.44, 43.51];
  });
  miniMapStyle = {
    version: 8,
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        attribution: "\xA9 OpenStreetMap contributors"
      },
      seamark: {
        type: "raster",
        tiles: ["https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"],
        tileSize: 256
      }
    },
    layers: [
      { id: "osm", type: "raster", source: "osm" },
      { id: "seamark", type: "raster", source: "seamark", paint: { "raster-opacity": 0.7 } }
    ]
  };
  onMiniMapLoad(map) {
    const entries = this.logbookService.entries();
    if (entries.length === 0)
      return;
    const geojson = {
      type: "FeatureCollection",
      features: entries.map((e) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: [e.position.lon, e.position.lat] },
        properties: { id: e.id }
      }))
    };
    map.addSource("entries", { type: "geojson", data: geojson });
    map.addLayer({
      id: "entries-circle",
      type: "circle",
      source: "entries",
      paint: {
        "circle-radius": 6,
        "circle-color": "#1976d2",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#d4a017"
      }
    });
  }
  ngOnInit() {
    this.weatherService.loadWarnings();
    this.weatherService.startRadarPolling();
  }
  formatCoord(lat, lon) {
    return `${lat.toFixed(3)}\xB0N, ${lon.toFixed(3)}\xB0E`;
  }
  openLogbook() {
    this.router.navigate(["/logbook"]);
  }
  openWeather() {
    this.router.navigate(["/weather"]);
  }
  openMap() {
    this.router.navigate(["/map"]);
  }
  newEntry() {
    this.router.navigate(["/logbook/new"]);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 81, vars: 14, consts: [[1, "page-container"], [1, "dashboard-header"], [1, "page-title"], [1, "date-line"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "dashboard-grid"], [1, "widget", "map-widget"], [1, "widget-title"], [1, "mini-map", 3, "mapLoad", "zoom", "center", "interactive"], ["mat-stroked-button", "", 1, "map-btn", 3, "click"], [1, "widget", "entry-widget"], [1, "last-entry"], [1, "no-entry"], [1, "widget", "warnings-widget"], [1, "warning-count"], [1, "loading-row"], [1, "clear-weather"], [1, "warnings-scroll"], [1, "warning-sources"], ["href", "https://meteoalarm.org/en/live/region/HR", "target", "_blank", "rel", "noopener noreferrer", "title", "MeteoAlarm Croatia"], ["href", "https://meteo.hr/prognoze_e.php?section=prognoze_specp&param=jadran", "target", "_blank", "rel", "noopener noreferrer", "title", "Adriatic Marine Forecast (meteo.hr)"], [1, "widget", "actions-widget"], [1, "action-buttons"], ["mat-stroked-button", "", 3, "click"], [1, "widget", "radar-widget"], ["mat-icon-button", "", 1, "open-btn", 3, "click"], ["alt", "Radar", 1, "radar-thumb", 3, "src"], [1, "entry-voyage"], [1, "port"], [1, "arrow"], [1, "entry-time"], [1, "entry-stats"], [1, "stat"], [1, "safety-warning"], ["mat-stroked-button", "", 1, "view-btn", 3, "routerLink"], ["diameter", "24"], [1, "mini-warning", 3, "border-left-color"], [1, "mini-warning"], [1, "mini-warning-header"], [1, "severity-chip", 3, "ngClass"], [1, "warning-text"], [1, "mini-warning-desc"], [1, "mini-warning-time"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "mat-icon");
      \u0275\u0275text(5, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Morning Briefing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_10_listener() {
        return ctx.newEntry();
      });
      \u0275\u0275elementStart(11, "mat-icon");
      \u0275\u0275text(12, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " New Log Entry ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "div", 6)(16, "div", 7)(17, "mat-icon");
      \u0275\u0275text(18, "map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mgl-map", 8);
      \u0275\u0275listener("mapLoad", function DashboardComponent_Template_mgl_map_mapLoad_20_listener($event) {
        return ctx.onMiniMapLoad($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 9);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_21_listener() {
        return ctx.openMap();
      });
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "open_in_full");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Full Map ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "div", 7)(27, "mat-icon");
      \u0275\u0275text(28, "menu_book");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " Last Log Entry");
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, DashboardComponent_Conditional_30_Template, 35, 17, "div", 11)(31, DashboardComponent_Conditional_31_Template, 7, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 13)(33, "div", 7)(34, "mat-icon");
      \u0275\u0275text(35, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Weather Warnings ");
      \u0275\u0275template(37, DashboardComponent_Conditional_37_Template, 2, 1, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, DashboardComponent_Conditional_38_Template, 3, 0, "div", 15)(39, DashboardComponent_Conditional_39_Template, 4, 0, "div", 16)(40, DashboardComponent_Conditional_40_Template, 3, 0, "div", 17);
      \u0275\u0275elementStart(41, "div", 18)(42, "a", 19)(43, "mat-icon");
      \u0275\u0275text(44, "open_in_new");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " meteoalarm.org ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 20)(47, "mat-icon");
      \u0275\u0275text(48, "waves");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " meteo.hr forecast ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 21)(51, "div", 7)(52, "mat-icon");
      \u0275\u0275text(53, "bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " Quick Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 22)(56, "button", 4);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_56_listener() {
        return ctx.newEntry();
      });
      \u0275\u0275elementStart(57, "mat-icon");
      \u0275\u0275text(58, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " New Log Entry ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 23);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_60_listener() {
        return ctx.openLogbook();
      });
      \u0275\u0275elementStart(61, "mat-icon");
      \u0275\u0275text(62, "menu_book");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " View Logbook ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 23);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_64_listener() {
        return ctx.openWeather();
      });
      \u0275\u0275elementStart(65, "mat-icon");
      \u0275\u0275text(66, "cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, " Weather Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 23);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_68_listener() {
        return ctx.openMap();
      });
      \u0275\u0275elementStart(69, "mat-icon");
      \u0275\u0275text(70, "map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, " Nautical Map ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 24)(73, "div", 7)(74, "mat-icon");
      \u0275\u0275text(75, "radar");
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, " Adriatic Radar ");
      \u0275\u0275elementStart(77, "button", 25);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_77_listener() {
        return ctx.openWeather();
      });
      \u0275\u0275elementStart(78, "mat-icon");
      \u0275\u0275text(79, "open_in_new");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(80, "img", 26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, ctx.today, "EEEE, d MMMM yyyy"));
      \u0275\u0275advance(12);
      \u0275\u0275styleMap(ctx.miniMapStyle);
      \u0275\u0275property("zoom", \u0275\u0275pureFunction0(13, _c0))("center", ctx.miniMapCenter())("interactive", true);
      \u0275\u0275advance(10);
      \u0275\u0275conditional((tmp_5_0 = ctx.lastEntry()) ? 30 : 31, tmp_5_0);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.weatherService.warnings().length > 0 ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.weatherService.warningsLoading() ? 38 : ctx.weatherService.warnings().length === 0 ? 39 : 40);
      \u0275\u0275advance(42);
      \u0275\u0275property("src", ctx.weatherService.radarUrl(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [
    RouterLink,
    DatePipe,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MapComponent,
    NgClass,
    BeaufortPipe
  ], styles: ["\n\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .date-line[_ngcontent-%COMP%] {\n  color: var(--color-text-dim);\n  margin: 2px 0 0;\n  font-size: 0.9rem;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.widget[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid rgba(212, 160, 23, 0.2);\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.widget-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-gold);\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.widget-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.widget-title[_ngcontent-%COMP%]   .open-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--color-text-dim);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.widget-title[_ngcontent-%COMP%]   .open-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.map-widget[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.mini-map[_ngcontent-%COMP%] {\n  height: 280px;\n  width: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.map-btn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.last-entry[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.entry-voyage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.entry-voyage[_ngcontent-%COMP%]   .port[_ngcontent-%COMP%] {\n  color: var(--color-gold-light);\n}\n.entry-voyage[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: var(--color-text-dim);\n}\n.entry-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-dim);\n}\n.entry-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: var(--color-white);\n}\n.stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-dim);\n}\n.safety-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #ff9800;\n  font-size: 0.85rem;\n}\n.safety-warning[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.view-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.no-entry[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  text-align: center;\n  color: var(--color-text-dim);\n}\n.no-entry[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--color-gold);\n}\n.warning-count[_ngcontent-%COMP%] {\n  background: rgba(212, 160, 23, 0.25);\n  color: var(--color-gold-light);\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: 10px;\n  padding: 1px 7px;\n  margin-left: 2px;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--color-text-dim);\n}\n.clear-weather[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #a5d6a7;\n}\n.clear-weather[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.warnings-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding-right: 2px;\n}\n.warnings-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.warnings-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.warnings-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(212, 160, 23, 0.3);\n  border-radius: 2px;\n}\n.mini-warning[_ngcontent-%COMP%] {\n  border-left: 3px solid;\n  padding: 8px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 0 6px 6px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.mini-warning-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.warning-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-white);\n  line-height: 1.3;\n}\n.mini-warning-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-dim);\n  margin: 0;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.mini-warning-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.7rem;\n  color: var(--color-text-dim);\n}\n.mini-warning-time[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.warning-sources[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding-top: 8px;\n  border-top: 1px solid rgba(212, 160, 23, 0.15);\n  margin-top: auto;\n}\n.warning-sources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-dim);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.warning-sources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-gold-light);\n}\n.warning-sources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  gap: 8px;\n}\n.radar-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 6px;\n  max-height: 200px;\n  object-fit: contain;\n  background: #0e1f3a;\n}\n@media (max-width: 700px) {\n  .map-widget[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .mini-map[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      RouterLink,
      DatePipe,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MapComponent,
      NgClass,
      BeaufortPipe
    ], template: `<div class="page-container">
  <div class="dashboard-header">
    <div>
      <h1 class="page-title"><mat-icon>dashboard</mat-icon> Morning Briefing</h1>
      <p class="date-line">{{ today | date:'EEEE, d MMMM yyyy' }}</p>
    </div>
    <button mat-flat-button color="primary" (click)="newEntry()">
      <mat-icon>add</mat-icon> New Log Entry
    </button>
  </div>

  <div class="dashboard-grid">

    <!-- Mini Map -->
    <div class="widget map-widget">
      <div class="widget-title"><mat-icon>map</mat-icon> Position</div>
      <mgl-map
        [style]="miniMapStyle"
        [zoom]="[8]"
        [center]="miniMapCenter()"
        [interactive]="true"
        (mapLoad)="onMiniMapLoad($event)"
        class="mini-map">
      </mgl-map>
      <button mat-stroked-button class="map-btn" (click)="openMap()">
        <mat-icon>open_in_full</mat-icon> Full Map
      </button>
    </div>

    <!-- Last Log Entry -->
    <div class="widget entry-widget">
      <div class="widget-title"><mat-icon>menu_book</mat-icon> Last Log Entry</div>
      @if (lastEntry(); as e) {
        <div class="last-entry">
          <div class="entry-voyage">
            <span class="port">{{ e.portDeparture }}</span>
            <mat-icon class="arrow">east</mat-icon>
            <span class="port">{{ e.portArrival || '\u2014' }}</span>
          </div>
          <div class="entry-time">{{ e.date }} \xB7 {{ e.time }} UTC \xB7 {{ e.watchkeepingOfficer }}</div>
          <div class="entry-stats">
            <div class="stat">
              <mat-icon>air</mat-icon>
              <span>{{ e.windSpeed }} kt \xB7 {{ e.windSpeed | beaufort }}</span>
            </div>
            <div class="stat">
              <mat-icon>speed</mat-icon>
              <span>{{ e.speed }} kt SOG</span>
            </div>
            <div class="stat">
              <mat-icon>navigation</mat-icon>
              <span>{{ e.courseSteered }}\xB0 COG</span>
            </div>
            <div class="stat">
              <mat-icon>thermostat</mat-icon>
              <span>{{ e.airTemperature }}\xB0C / {{ e.barometricPressure }} hPa</span>
            </div>
          </div>
          @if (!e.safetyCheckDone) {
            <div class="safety-warning">
              <mat-icon>warning</mat-icon> Safety check pending
            </div>
          }
          <button mat-stroked-button [routerLink]="['/logbook', e.id]" class="view-btn">
            View Entry
          </button>
        </div>
      } @else {
        <div class="no-entry">
          <mat-icon>anchor</mat-icon>
          <p>No log entries yet.</p>
          <button mat-flat-button color="primary" (click)="newEntry()">Start your logbook</button>
        </div>
      }
    </div>

    <!-- Weather Warnings Summary -->
    <div class="widget warnings-widget">
      <div class="widget-title">
        <mat-icon>warning</mat-icon>
        Weather Warnings
        @if (weatherService.warnings().length > 0) {
          <span class="warning-count">{{ weatherService.warnings().length }}</span>
        }
      </div>
      @if (weatherService.warningsLoading()) {
        <div class="loading-row"><mat-spinner diameter="24"></mat-spinner> Loading...</div>
      } @else if (weatherService.warnings().length === 0) {
        <div class="clear-weather">
          <mat-icon>check_circle</mat-icon> No active warnings \u2014 fair sailing!
        </div>
      } @else {
        <div class="warnings-scroll">
          @for (w of weatherService.warnings(); track w.id) {
            <div class="mini-warning" [style.border-left-color]="severityColors[w.severity]">
              <div class="mini-warning-header">
                <span class="severity-chip" [ngClass]="w.severity">{{ w.severity }}</span>
                <span class="warning-text">{{ w.type }} \u2014 {{ w.headline }}</span>
              </div>
              @if (w.description) {
                <p class="mini-warning-desc">{{ w.description }}</p>
              }
              <div class="mini-warning-time">
                <mat-icon>schedule</mat-icon>
                {{ w.onset | date:'d MMM HH:mm' }} \u2013 {{ w.expires | date:'d MMM HH:mm' }}
              </div>
            </div>
          }
        </div>
      }
      <div class="warning-sources">
        <a href="https://meteoalarm.org/en/live/region/HR"
           target="_blank" rel="noopener noreferrer" title="MeteoAlarm Croatia">
          <mat-icon>open_in_new</mat-icon> meteoalarm.org
        </a>
        <a href="https://meteo.hr/prognoze_e.php?section=prognoze_specp&param=jadran"
           target="_blank" rel="noopener noreferrer" title="Adriatic Marine Forecast (meteo.hr)">
          <mat-icon>waves</mat-icon> meteo.hr forecast
        </a>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="widget actions-widget">
      <div class="widget-title"><mat-icon>bolt</mat-icon> Quick Actions</div>
      <div class="action-buttons">
        <button mat-flat-button color="primary" (click)="newEntry()">
          <mat-icon>add_circle</mat-icon> New Log Entry
        </button>
        <button mat-stroked-button (click)="openLogbook()">
          <mat-icon>menu_book</mat-icon> View Logbook
        </button>
        <button mat-stroked-button (click)="openWeather()">
          <mat-icon>cloud</mat-icon> Weather Dashboard
        </button>
        <button mat-stroked-button (click)="openMap()">
          <mat-icon>map</mat-icon> Nautical Map
        </button>
      </div>
    </div>

    <!-- Radar Quick View -->
    <div class="widget radar-widget">
      <div class="widget-title">
        <mat-icon>radar</mat-icon> Adriatic Radar
        <button mat-icon-button (click)="openWeather()" class="open-btn">
          <mat-icon>open_in_new</mat-icon>
        </button>
      </div>
      <img [src]="weatherService.radarUrl()" alt="Radar" class="radar-thumb">
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/dashboard/dashboard.component.scss */\n.dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.dashboard-header .date-line {\n  color: var(--color-text-dim);\n  margin: 2px 0 0;\n  font-size: 0.9rem;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.widget {\n  background: var(--card-bg);\n  border: 1px solid rgba(212, 160, 23, 0.2);\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.widget-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-gold);\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.widget-title mat-icon {\n  font-size: 1.1rem;\n}\n.widget-title .open-btn {\n  margin-left: auto;\n  color: var(--color-text-dim);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.widget-title .open-btn mat-icon {\n  font-size: 0.9rem;\n}\n.map-widget {\n  grid-column: span 2;\n}\n.mini-map {\n  height: 280px;\n  width: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.map-btn {\n  align-self: flex-end;\n}\n.last-entry {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.entry-voyage {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.entry-voyage .port {\n  color: var(--color-gold-light);\n}\n.entry-voyage .arrow {\n  color: var(--color-text-dim);\n}\n.entry-time {\n  font-size: 0.8rem;\n  color: var(--color-text-dim);\n}\n.entry-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n}\n.stat {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: var(--color-white);\n}\n.stat mat-icon {\n  font-size: 1rem;\n  color: var(--color-text-dim);\n}\n.safety-warning {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #ff9800;\n  font-size: 0.85rem;\n}\n.safety-warning mat-icon {\n  font-size: 1rem;\n}\n.view-btn {\n  align-self: flex-start;\n}\n.no-entry {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  text-align: center;\n  color: var(--color-text-dim);\n}\n.no-entry mat-icon {\n  font-size: 2rem;\n  color: var(--color-gold);\n}\n.warning-count {\n  background: rgba(212, 160, 23, 0.25);\n  color: var(--color-gold-light);\n  font-size: 0.7rem;\n  font-weight: 700;\n  border-radius: 10px;\n  padding: 1px 7px;\n  margin-left: 2px;\n}\n.loading-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--color-text-dim);\n}\n.clear-weather {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #a5d6a7;\n}\n.clear-weather mat-icon {\n  color: #4caf50;\n}\n.warnings-scroll {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding-right: 2px;\n}\n.warnings-scroll::-webkit-scrollbar {\n  width: 4px;\n}\n.warnings-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.warnings-scroll::-webkit-scrollbar-thumb {\n  background: rgba(212, 160, 23, 0.3);\n  border-radius: 2px;\n}\n.mini-warning {\n  border-left: 3px solid;\n  padding: 8px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 0 6px 6px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.mini-warning-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.warning-text {\n  font-size: 0.8rem;\n  color: var(--color-white);\n  line-height: 1.3;\n}\n.mini-warning-desc {\n  font-size: 0.75rem;\n  color: var(--color-text-dim);\n  margin: 0;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.mini-warning-time {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.7rem;\n  color: var(--color-text-dim);\n}\n.mini-warning-time mat-icon {\n  font-size: 0.8rem;\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.warning-sources {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding-top: 8px;\n  border-top: 1px solid rgba(212, 160, 23, 0.15);\n  margin-top: auto;\n}\n.warning-sources a {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-dim);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.warning-sources a:hover {\n  color: var(--color-gold-light);\n}\n.warning-sources a mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.action-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.action-buttons button {\n  justify-content: flex-start;\n  gap: 8px;\n}\n.radar-thumb {\n  width: 100%;\n  border-radius: 6px;\n  max-height: 200px;\n  object-fit: contain;\n  background: #0e1f3a;\n}\n@media (max-width: 700px) {\n  .map-widget {\n    grid-column: span 1;\n  }\n  .mini-map {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 29 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-5TBVP7H7.js.map
