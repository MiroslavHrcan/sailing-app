import {
  MapComponent
} from "./chunk-BQXHZOPX.js";
import {
  LogbookService
} from "./chunk-5VLRP3M7.js";
import {
  Router
} from "./chunk-CEF4G77E.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-QJTGL5RK.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QDCPWQCX.js";
import "./chunk-73NCA4NO.js";
import "./chunk-3OLKLGJF.js";
import "./chunk-MMFK7TQ2.js";
import "./chunk-DRBCEAPL.js";
import {
  MatButtonModule,
  MatIcon,
  MatIconModule,
  MatMiniFabButton
} from "./chunk-7ODZSRZ3.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleMap,
  ɵɵtext
} from "./chunk-RM2KPLBQ.js";

// src/app/features/map/map.component.ts
var _c0 = (a0) => [a0];
var MapComponent2 = class _MapComponent {
  logbookService = inject(LogbookService);
  router = inject(Router);
  mapInstance;
  activeBase = signal("osm");
  seaMarkVisible = signal(true);
  center = [16.44, 43.51];
  // Split area, [lng, lat]
  zoom = 8;
  mapStyle = computed(() => this.buildStyle(this.activeBase()));
  entriesGeoJson = computed(() => ({
    type: "FeatureCollection",
    features: this.logbookService.entries().map((e) => this.entryToFeature(e))
  }));
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  onMapLoad(map) {
    this.mapInstance = map;
    this.addEntryLayers(map);
    this.addEntryClickHandler(map);
  }
  switchBase(base) {
    this.activeBase.set(base);
    this.mapInstance?.once("styledata", () => {
      if (this.mapInstance) {
        this.addEntryLayers(this.mapInstance);
        this.addEntryClickHandler(this.mapInstance);
      }
    });
  }
  toggleSeaMark() {
    this.seaMarkVisible.update((v) => !v);
    const map = this.mapInstance;
    if (map && map.getLayer("seamark-layer")) {
      map.setLayoutProperty("seamark-layer", "visibility", this.seaMarkVisible() ? "visible" : "none");
    }
  }
  centerOnCroatia() {
    this.mapInstance?.flyTo({ center: [16.44, 43.51], zoom: 8 });
  }
  buildStyle(base) {
    return {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: '\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxzoom: 19
        },
        satellite: {
          type: "raster",
          tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
          tileSize: 256,
          attribution: "Tiles \xA9 Esri \u2014 Source: Esri, Maxar, Earthstar Geographics",
          maxzoom: 19
        },
        seamark: {
          type: "raster",
          tiles: ["https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: 'Map data: \xA9 <a href="http://www.openseamap.org">OpenSeaMap</a> contributors',
          maxzoom: 18
        }
      },
      layers: [
        {
          id: "base-layer",
          type: "raster",
          source: base === "osm" ? "osm" : "satellite"
        },
        {
          id: "seamark-layer",
          type: "raster",
          source: "seamark",
          layout: { visibility: this.seaMarkVisible() ? "visible" : "none" }
        }
      ]
    };
  }
  addEntryLayers(map) {
    const geojson = this.entriesGeoJson();
    if (map.getSource("entries")) {
      map.getSource("entries").setData(geojson);
    } else {
      map.addSource("entries", { type: "geojson", data: geojson });
    }
    if (!map.getLayer("entries-circle")) {
      map.addLayer({
        id: "entries-circle",
        type: "circle",
        source: "entries",
        paint: {
          "circle-radius": 8,
          "circle-color": [
            "case",
            ["get", "hasIssue"],
            "#f44336",
            "#1976d2"
          ],
          "circle-stroke-width": 2,
          "circle-stroke-color": "#d4a017"
        }
      });
    }
    if (!map.getLayer("entries-label")) {
      map.addLayer({
        id: "entries-label",
        type: "symbol",
        source: "entries",
        layout: {
          "text-field": ["get", "label"],
          "text-offset": [0, 1.2],
          "text-size": 11,
          "text-anchor": "top"
        },
        paint: {
          "text-color": "#f0f4f8",
          "text-halo-color": "#0a1628",
          "text-halo-width": 1.5
        }
      });
    }
  }
  addEntryClickHandler(map) {
    map.on("click", "entries-circle", (e) => {
      const feature = e.features?.[0];
      if (feature?.properties?.["id"]) {
        this.router.navigate(["/logbook", feature.properties["id"]]);
      }
    });
    map.on("mouseenter", "entries-circle", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "entries-circle", () => {
      map.getCanvas().style.cursor = "";
    });
  }
  entryToFeature(entry) {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [entry.position.lon, entry.position.lat]
      },
      properties: {
        id: entry.id,
        label: `${entry.date}
${entry.portDeparture}`,
        hasIssue: !entry.safetyCheckDone || !!entry.incidentNotes
      }
    };
  }
  static \u0275fac = function MapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapComponent, selectors: [["app-map"]], decls: 28, vars: 8, consts: [[1, "map-page"], [1, "map-controls"], ["aria-label", "Base layer", 3, "change", "value"], ["value", "osm"], ["value", "satellite"], ["mat-mini-fab", "", "matTooltip", "Toggle nautical charts (OpenSeaMap)", 3, "click", "color"], ["mat-mini-fab", "", "matTooltip", "Center on Croatia", 3, "click"], [1, "map-container", "full-map", 3, "mapLoad", "zoom", "center"], [1, "map-legend"], [1, "legend-item"], [1, "dot", "blue"], [1, "dot", "red"], [1, "dot", "gold-border"]], template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-button-toggle-group", 2);
      \u0275\u0275listener("change", function MapComponent_Template_mat_button_toggle_group_change_2_listener($event) {
        return ctx.switchBase($event.value);
      });
      \u0275\u0275elementStart(3, "mat-button-toggle", 3)(4, "mat-icon");
      \u0275\u0275text(5, "map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " OSM ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-button-toggle", 4)(8, "mat-icon");
      \u0275\u0275text(9, "satellite");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Satellite ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function MapComponent_Template_button_click_11_listener() {
        return ctx.toggleSeaMark();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "anchor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 6);
      \u0275\u0275listener("click", function MapComponent_Template_button_click_14_listener() {
        return ctx.centerOnCroatia();
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "my_location");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "mgl-map", 7);
      \u0275\u0275listener("mapLoad", function MapComponent_Template_mgl_map_mapLoad_17_listener($event) {
        return ctx.onMapLoad($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "div", 9);
      \u0275\u0275element(20, "span", 10);
      \u0275\u0275text(21, " Log entry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9);
      \u0275\u0275element(23, "span", 11);
      \u0275\u0275text(24, " Incident / Safety");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 9);
      \u0275\u0275element(26, "span", 12);
      \u0275\u0275text(27, " + OpenSeaMap overlay");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.activeBase());
      \u0275\u0275advance(9);
      \u0275\u0275property("color", ctx.seaMarkVisible() ? "primary" : void 0);
      \u0275\u0275advance(6);
      \u0275\u0275styleMap(ctx.mapStyle());
      \u0275\u0275property("zoom", \u0275\u0275pureFunction1(6, _c0, ctx.zoom))("center", ctx.center);
    }
  }, dependencies: [MapComponent, MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatTooltipModule, MatTooltip], styles: ["\n\n.map-page[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 64px);\n  display: flex;\n  flex-direction: column;\n}\n.map-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.map-controls[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  background: rgba(10, 22, 40, 0.9);\n  border: 1px solid rgba(212, 160, 23, 0.4);\n  border-radius: 4px;\n}\n.full-map[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  width: 100%;\n}\n.map-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 32px;\n  right: 12px;\n  background: rgba(10, 22, 40, 0.88);\n  border: 1px solid rgba(212, 160, 23, 0.3);\n  border-radius: 8px;\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  z-index: 10;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: var(--color-white);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid var(--color-gold);\n}\n.dot.blue[_ngcontent-%COMP%] {\n  background: #1976d2;\n}\n.dot.red[_ngcontent-%COMP%] {\n  background: #f44336;\n}\n.dot.gold-border[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=map.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapComponent2, [{
    type: Component,
    args: [{ selector: "app-map", standalone: true, imports: [MapComponent, MatButtonModule, MatIconModule, MatButtonToggleModule, MatTooltipModule], template: `<div class="map-page">
  <div class="map-controls">
    <mat-button-toggle-group [value]="activeBase()" (change)="switchBase($event.value)" aria-label="Base layer">
      <mat-button-toggle value="osm">
        <mat-icon>map</mat-icon> OSM
      </mat-button-toggle>
      <mat-button-toggle value="satellite">
        <mat-icon>satellite</mat-icon> Satellite
      </mat-button-toggle>
    </mat-button-toggle-group>

    <button mat-mini-fab
            [color]="seaMarkVisible() ? 'primary' : undefined"
            (click)="toggleSeaMark()"
            matTooltip="Toggle nautical charts (OpenSeaMap)">
      <mat-icon>anchor</mat-icon>
    </button>

    <button mat-mini-fab (click)="centerOnCroatia()" matTooltip="Center on Croatia">
      <mat-icon>my_location</mat-icon>
    </button>
  </div>

  <mgl-map
    [style]="mapStyle()"
    [zoom]="[zoom]"
    [center]="center"
    (mapLoad)="onMapLoad($event)"
    class="map-container full-map">
  </mgl-map>

  <div class="map-legend">
    <div class="legend-item"><span class="dot blue"></span> Log entry</div>
    <div class="legend-item"><span class="dot red"></span> Incident / Safety</div>
    <div class="legend-item"><span class="dot gold-border"></span> + OpenSeaMap overlay</div>
  </div>
</div>
`, styles: ["/* src/app/features/map/map.component.scss */\n.map-page {\n  position: relative;\n  height: calc(100vh - 64px);\n  display: flex;\n  flex-direction: column;\n}\n.map-controls {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.map-controls mat-button-toggle-group {\n  background: rgba(10, 22, 40, 0.9);\n  border: 1px solid rgba(212, 160, 23, 0.4);\n  border-radius: 4px;\n}\n.full-map {\n  flex: 1;\n  height: 100%;\n  width: 100%;\n}\n.map-legend {\n  position: absolute;\n  bottom: 32px;\n  right: 12px;\n  background: rgba(10, 22, 40, 0.88);\n  border: 1px solid rgba(212, 160, 23, 0.3);\n  border-radius: 8px;\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  z-index: 10;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: var(--color-white);\n}\n.dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid var(--color-gold);\n}\n.dot.blue {\n  background: #1976d2;\n}\n.dot.red {\n  background: #f44336;\n}\n.dot.gold-border {\n  background: transparent;\n}\n/*# sourceMappingURL=map.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapComponent2, { className: "MapComponent", filePath: "src/app/features/map/map.component.ts", lineNumber: 23 });
})();
export {
  MapComponent2 as MapComponent
};
//# sourceMappingURL=chunk-CTDFRL37.js.map
