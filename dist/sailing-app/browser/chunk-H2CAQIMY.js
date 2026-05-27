import {
  ShipService
} from "./chunk-4KCXYKF7.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSelectModule,
  TripService
} from "./chunk-2PRETRKJ.js";
import "./chunk-R74DHBGG.js";
import {
  ConfirmDialogComponent,
  MatDialog,
  MatDialogModule
} from "./chunk-BOH7DZ2B.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-QFMQ5N2W.js";
import {
  MatFormField,
  MatLabel,
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-UXJJS2G5.js";
import "./chunk-FGAEYOVQ.js";
import "./chunk-AIUY7MS7.js";
import {
  LogbookService
} from "./chunk-5VLRP3M7.js";
import {
  Router
} from "./chunk-CEF4G77E.js";
import "./chunk-3OLKLGJF.js";
import "./chunk-MMFK7TQ2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DRBCEAPL.js";
import {
  DatePipe,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-7ODZSRZ3.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RM2KPLBQ.js";

// src/app/features/trips/trips.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TripsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "form", 10);
    \u0275\u0275listener("ngSubmit", function TripsComponent_Conditional_14_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTrip());
    });
    \u0275\u0275elementStart(2, "div", 11)(3, "mat-form-field", 12)(4, "mat-label");
    \u0275\u0275text(5, "Trip name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 12)(8, "mat-label");
    \u0275\u0275text(9, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 12)(12, "mat-label");
    \u0275\u0275text(13, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 16)(16, "mat-form-field", 12)(17, "mat-label");
    \u0275\u0275text(18, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 12)(21, "mat-label");
    \u0275\u0275text(22, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 19)(25, "mat-label");
    \u0275\u0275text(26, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "textarea", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 21)(29, "button", 22);
    \u0275\u0275listener("click", function TripsComponent_Conditional_14_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelTripForm());
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 23);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.tripForm);
    \u0275\u0275advance(30);
    \u0275\u0275property("disabled", ctx_r1.tripForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingTripId() ? "Save Changes" : "Add Trip", " ");
  }
}
function TripsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No trips yet. Add your first voyage!");
    \u0275\u0275elementEnd()();
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const trip_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, trip_r4.startDate, "d MMM yyyy"), " ");
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2013 ");
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const trip_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, trip_r4.endDate, "d MMM yyyy"), " ");
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, TripsComponent_Conditional_16_For_2_Conditional_9_Conditional_1_Template, 2, 4)(2, TripsComponent_Conditional_16_For_2_Conditional_9_Conditional_2_Template, 1, 0)(3, TripsComponent_Conditional_16_For_2_Conditional_9_Conditional_3_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trip_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(trip_r4.startDate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(trip_r4.startDate && trip_r4.endDate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(trip_r4.endDate ? 3 : -1);
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trip_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trip_r4.notes);
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Active trip");
    \u0275\u0275elementEnd();
  }
}
function TripsComponent_Conditional_16_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function TripsComponent_Conditional_16_For_2_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const trip_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveTrip(trip_r4.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Set active ");
    \u0275\u0275elementEnd();
  }
}
function TripsComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "mat-icon");
    \u0275\u0275text(7, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TripsComponent_Conditional_16_For_2_Conditional_9_Template, 4, 3, "div", 29)(10, TripsComponent_Conditional_16_For_2_Conditional_10_Template, 2, 1, "p", 30);
    \u0275\u0275elementStart(11, "div", 31)(12, "mat-icon");
    \u0275\u0275text(13, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 32);
    \u0275\u0275template(16, TripsComponent_Conditional_16_For_2_Conditional_16_Template, 4, 0, "span", 33)(17, TripsComponent_Conditional_16_For_2_Conditional_17_Template, 4, 0, "button", 34);
    \u0275\u0275elementStart(18, "button", 35);
    \u0275\u0275listener("click", function TripsComponent_Conditional_16_For_2_Template_button_click_18_listener() {
      const trip_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewTripEntries(trip_r4.id));
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Entries ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 36);
    \u0275\u0275listener("click", function TripsComponent_Conditional_16_For_2_Template_button_click_22_listener() {
      const trip_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editTrip(trip_r4));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 37);
    \u0275\u0275listener("click", function TripsComponent_Conditional_16_For_2_Template_button_click_25_listener() {
      const trip_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTrip(trip_r4));
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const trip_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active-trip", ctx_r1.tripService.activeTripId() === trip_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trip_r4.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trip_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", trip_r4.destination, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(trip_r4.startDate || trip_r4.endDate ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(trip_r4.notes ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", trip_r4.entryCount, " log ", trip_r4.entryCount === 1 ? "entry" : "entries", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tripService.activeTripId() === trip_r4.id ? 16 : 17);
  }
}
function TripsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, TripsComponent_Conditional_16_For_2_Template, 28, 10, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tripsWithCount());
  }
}
function TripsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "form", 10);
    \u0275\u0275listener("ngSubmit", function TripsComponent_Conditional_27_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveShip());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "mat-form-field", 12)(4, "mat-label");
    \u0275\u0275text(5, "Ship name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 12)(8, "mat-label");
    \u0275\u0275text(9, "Registration number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "button", 22);
    \u0275\u0275listener("click", function TripsComponent_Conditional_27_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelShipForm());
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.shipForm);
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r1.shipForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingShipId() ? "Save Changes" : "Add Ship", " ");
  }
}
function TripsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "directions_boat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No ships registered yet.");
    \u0275\u0275elementEnd()();
  }
}
function TripsComponent_Conditional_29_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "default");
    \u0275\u0275elementEnd();
  }
}
function TripsComponent_Conditional_29_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function TripsComponent_Conditional_29_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ship_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDefaultShip(ship_r9.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Set default ");
    \u0275\u0275elementEnd();
  }
}
function TripsComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275template(4, TripsComponent_Conditional_29_For_2_Conditional_4_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 47);
    \u0275\u0275template(8, TripsComponent_Conditional_29_For_2_Conditional_8_Template, 4, 0, "button", 48);
    \u0275\u0275elementStart(9, "button", 49);
    \u0275\u0275listener("click", function TripsComponent_Conditional_29_For_2_Template_button_click_9_listener() {
      const ship_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editShip(ship_r9));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 50);
    \u0275\u0275listener("click", function TripsComponent_Conditional_29_For_2_Template_button_click_12_listener() {
      const ship_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteShip(ship_r9));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ship_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ship-default", ctx_r1.shipService.defaultShipId() === ship_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ship_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shipService.defaultShipId() === ship_r9.id ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ship_r9.registrationNumber);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.shipService.defaultShipId() !== ship_r9.id ? 8 : -1);
  }
}
function TripsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, TripsComponent_Conditional_29_For_2_Template, 15, 6, "div", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.shipService.ships());
  }
}
var TripsComponent = class _TripsComponent {
  shipService = inject(ShipService);
  tripService = inject(TripService);
  logbookService = inject(LogbookService);
  router = inject(Router);
  snackBar = inject(MatSnackBar);
  dialog = inject(MatDialog);
  fb = inject(FormBuilder);
  // ── UI state ──────────────────────────────────────────────────────────────
  showTripForm = signal(false);
  editingTripId = signal(null);
  showShipForm = signal(false);
  editingShipId = signal(null);
  // ── Computed ──────────────────────────────────────────────────────────────
  tripsWithCount = computed(() => this.tripService.trips().map((t) => __spreadProps(__spreadValues({}, t), {
    entryCount: this.logbookService.entries().filter((e) => e.tripId === t.id).length
  })).sort((a, b) => b.year - a.year));
  // ── Forms ─────────────────────────────────────────────────────────────────
  tripForm = this.fb.group({
    name: ["", Validators.required],
    destination: ["", Validators.required],
    year: [(/* @__PURE__ */ new Date()).getFullYear(), Validators.required],
    startDate: [""],
    endDate: [""],
    notes: [""]
  });
  shipForm = this.fb.group({
    name: ["", Validators.required],
    registrationNumber: ["", Validators.required]
  });
  // ── Trip methods ──────────────────────────────────────────────────────────
  openTripForm() {
    this.tripForm.reset({ year: (/* @__PURE__ */ new Date()).getFullYear() });
    this.editingTripId.set(null);
    this.showTripForm.set(true);
  }
  saveTrip() {
    if (this.tripForm.invalid)
      return;
    const raw = this.tripForm.getRawValue();
    const data = {
      name: raw.name,
      destination: raw.destination,
      year: Number(raw.year),
      startDate: raw.startDate || void 0,
      endDate: raw.endDate || void 0,
      notes: raw.notes || void 0
    };
    const id = this.editingTripId();
    if (id) {
      this.tripService.update(id, data);
      this.snackBar.open("Trip updated", "OK", { duration: 2500 });
    } else {
      this.tripService.add(data);
      this.snackBar.open("Trip added", "OK", { duration: 2500 });
    }
    this.cancelTripForm();
  }
  editTrip(trip) {
    this.tripForm.patchValue({
      name: trip.name,
      destination: trip.destination,
      year: trip.year,
      startDate: trip.startDate ?? "",
      endDate: trip.endDate ?? "",
      notes: trip.notes ?? ""
    });
    this.editingTripId.set(trip.id);
    this.showTripForm.set(true);
  }
  deleteTrip(trip) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Delete Trip",
        message: `Delete "${trip.name}"? This cannot be undone.`,
        confirmLabel: "Delete"
      }
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.tripService.delete(trip.id);
        this.snackBar.open("Trip deleted", "OK", { duration: 2500 });
      }
    });
  }
  cancelTripForm() {
    this.tripForm.reset({ year: (/* @__PURE__ */ new Date()).getFullYear() });
    this.showTripForm.set(false);
    this.editingTripId.set(null);
  }
  setActiveTrip(tripId) {
    this.tripService.setActiveTrip(tripId);
    this.snackBar.open("Active trip set \u2014 new log entries will default to this trip", "OK", { duration: 3e3 });
  }
  viewTripEntries(tripId) {
    this.router.navigate(["/logbook"], { queryParams: { tripId } });
  }
  // ── Ship methods ──────────────────────────────────────────────────────────
  openShipForm() {
    this.shipForm.reset();
    this.editingShipId.set(null);
    this.showShipForm.set(true);
  }
  saveShip() {
    if (this.shipForm.invalid)
      return;
    const raw = this.shipForm.getRawValue();
    const data = {
      name: raw.name,
      registrationNumber: raw.registrationNumber
    };
    const id = this.editingShipId();
    if (id) {
      this.shipService.update(id, data);
      this.snackBar.open("Ship updated", "OK", { duration: 2500 });
    } else {
      this.shipService.add(data);
      this.snackBar.open("Ship added", "OK", { duration: 2500 });
    }
    this.cancelShipForm();
  }
  editShip(ship) {
    this.shipForm.patchValue({
      name: ship.name,
      registrationNumber: ship.registrationNumber
    });
    this.editingShipId.set(ship.id);
    this.showShipForm.set(true);
  }
  deleteShip(ship) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Delete Ship",
        message: `Delete "${ship.name}"? This cannot be undone.`,
        confirmLabel: "Delete"
      }
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.shipService.delete(ship.id);
        this.snackBar.open("Ship deleted", "OK", { duration: 2500 });
      }
    });
  }
  setDefaultShip(shipId) {
    this.shipService.setDefaultShip(shipId);
    this.snackBar.open("Default ship set \u2014 new log entries will pre-fill this ship", "OK", { duration: 3e3 });
  }
  cancelShipForm() {
    this.shipForm.reset();
    this.showShipForm.set(false);
    this.editingShipId.set(null);
  }
  static \u0275fac = function TripsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TripsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsComponent, selectors: [["app-trips"]], decls: 30, vars: 6, consts: [[1, "trips-page"], [1, "page-title"], [1, "section-header"], [1, "section-title"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "form-card"], [1, "empty-state"], [1, "trips-grid"], [1, "section-divider"], [1, "ships-list"], [3, "ngSubmit", "formGroup"], [1, "form-grid-3"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Croatia 2025"], ["matInput", "", "formControlName", "destination", "placeholder", "Croatia"], ["matInput", "", "type", "number", "formControlName", "year"], [1, "form-grid-2"], ["matInput", "", "type", "date", "formControlName", "startDate"], ["matInput", "", "type", "date", "formControlName", "endDate"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "notes", "rows", "3", "placeholder", "Route, highlights, crew\u2026"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "trip-card", 3, "active-trip"], [1, "trip-card"], [1, "trip-year"], [1, "trip-name"], [1, "trip-destination"], [1, "trip-dates"], [1, "trip-notes"], [1, "trip-entry-count"], [1, "trip-card-actions"], [1, "active-badge"], ["mat-stroked-button", "", "title", "New log entries will default to this trip"], ["mat-stroked-button", "", 3, "click"], ["mat-icon-button", "", "aria-label", "Edit trip", 3, "click"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete trip", 3, "click"], ["mat-stroked-button", "", "title", "New log entries will default to this trip", 3, "click"], ["matInput", "", "formControlName", "name", "placeholder", "S/Y Adriatica"], ["matInput", "", "formControlName", "registrationNumber", "placeholder", "HR-1234"], [1, "ship-item", 3, "ship-default"], [1, "ship-item"], [1, "ship-info"], [1, "ship-name"], [1, "default-badge"], [1, "ship-reg"], [1, "ship-actions"], ["mat-stroked-button", "", "title", "Auto-fill this ship in new log entries"], ["mat-icon-button", "", "aria-label", "Edit ship", 3, "click"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete ship", 3, "click"], ["mat-stroked-button", "", "title", "Auto-fill this ship in new log entries", 3, "click"]], template: function TripsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1)(2, "mat-icon");
      \u0275\u0275text(3, "sailing");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Trips & Ships ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "h2", 3)(7, "mat-icon");
      \u0275\u0275text(8, "flag");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " My Trips");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("click", function TripsComponent_Template_button_click_10_listener() {
        return ctx.openTripForm();
      });
      \u0275\u0275elementStart(11, "mat-icon");
      \u0275\u0275text(12, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " New Trip ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, TripsComponent_Conditional_14_Template, 33, 3, "div", 5)(15, TripsComponent_Conditional_15_Template, 5, 0, "div", 6)(16, TripsComponent_Conditional_16_Template, 3, 0, "div", 7);
      \u0275\u0275element(17, "mat-divider", 8);
      \u0275\u0275elementStart(18, "div", 2)(19, "h2", 3)(20, "mat-icon");
      \u0275\u0275text(21, "directions_boat");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " My Ships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 4);
      \u0275\u0275listener("click", function TripsComponent_Template_button_click_23_listener() {
        return ctx.openShipForm();
      });
      \u0275\u0275elementStart(24, "mat-icon");
      \u0275\u0275text(25, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Add Ship ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, TripsComponent_Conditional_27_Template, 16, 3, "div", 5)(28, TripsComponent_Conditional_28_Template, 5, 0, "div", 6)(29, TripsComponent_Conditional_29_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.showTripForm() || ctx.editingTripId() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tripsWithCount().length === 0 ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tripsWithCount().length > 0 ? 16 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.showShipForm() || ctx.editingShipId() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.shipService.ships().length === 0 ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.shipService.ships().length > 0 ? 29 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    DatePipe,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatDividerModule,
    MatDivider,
    MatSnackBarModule,
    MatDialogModule
  ], styles: ["\n\n.trips-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px 48px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-gold-light, #f0c040);\n  margin: 0 0 24px;\n}\n.page-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-gold, #d4a017);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.section-divider[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  border-color: rgba(212, 160, 23, 0.2) !important;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--card-bg, #112244);\n  border: 1px solid rgba(212, 160, 23, 0.25);\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.form-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 12px;\n}\n.form-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 4px;\n}\n.trips-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.trip-card[_ngcontent-%COMP%] {\n  background: var(--card-bg, #112244);\n  border: 1px solid rgba(212, 160, 23, 0.2);\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n  transition: border-color 0.2s ease;\n}\n.trip-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 160, 23, 0.45);\n}\n.trip-year[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(212, 160, 23, 0.2);\n  color: var(--color-gold-light, #f0c040);\n  border-radius: 8px;\n  padding: 2px 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  line-height: 1.6;\n}\n.trip-name[_ngcontent-%COMP%] {\n  color: var(--color-gold-light, #f0c040);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 40px 0 0;\n  line-height: 1.3;\n}\n.trip-destination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.85rem;\n}\n.trip-destination[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.trip-dates[_ngcontent-%COMP%] {\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.8rem;\n}\n.trip-notes[_ngcontent-%COMP%] {\n  color: var(--color-white, #e8f4f8);\n  font-size: 0.85rem;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.trip-entry-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.8rem;\n}\n.trip-entry-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.trip-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-top: auto;\n  flex-wrap: wrap;\n}\n.trip-card.active-trip[_ngcontent-%COMP%] {\n  border-color: rgba(212, 160, 23, 0.6);\n  box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.25);\n}\n.active-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--color-gold);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.active-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.ships-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ship-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--card-bg, #112244);\n  border: 1px solid rgba(212, 160, 23, 0.15);\n  border-radius: 8px;\n  padding: 10px 14px;\n  transition: border-color 0.2s ease;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.ship-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 160, 23, 0.35);\n}\n.ship-item.ship-default[_ngcontent-%COMP%] {\n  border-color: rgba(212, 160, 23, 0.5);\n}\n.default-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  background: rgba(212, 160, 23, 0.2);\n  color: var(--color-gold-light, #f0c040);\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 8px;\n  vertical-align: middle;\n}\n.ship-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ship-name[_ngcontent-%COMP%] {\n  color: var(--color-white, #e8f4f8);\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.ship-reg[_ngcontent-%COMP%] {\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.8rem;\n}\n.ship-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: var(--color-text-dim, #94b4c8);\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--color-gold, #d4a017);\n  display: block;\n  margin: 0 auto 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n@media (max-width: 600px) {\n  .form-grid-3[_ngcontent-%COMP%], \n   .form-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .trips-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=trips.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsComponent, [{
    type: Component,
    args: [{ selector: "app-trips", standalone: true, imports: [
      ReactiveFormsModule,
      DatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatSnackBarModule,
      MatDialogModule
    ], template: `<div class="trips-page">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       PAGE HEADER
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <h1 class="page-title">
    <mat-icon>sailing</mat-icon> Trips &amp; Ships
  </h1>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TRIPS SECTION
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="section-header">
    <h2 class="section-title"><mat-icon>flag</mat-icon> My Trips</h2>
    <button mat-flat-button color="primary" (click)="openTripForm()">
      <mat-icon>add</mat-icon> New Trip
    </button>
  </div>

  <!-- Add / Edit trip form -->
  @if (showTripForm() || editingTripId()) {
    <div class="form-card">
      <form [formGroup]="tripForm" (ngSubmit)="saveTrip()">

        <div class="form-grid-3">
          <mat-form-field appearance="outline">
            <mat-label>Trip name</mat-label>
            <input matInput formControlName="name" placeholder="Croatia 2025" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Destination</mat-label>
            <input matInput formControlName="destination" placeholder="Croatia" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Year</mat-label>
            <input matInput type="number" formControlName="year" />
          </mat-form-field>
        </div>

        <div class="form-grid-2">
          <mat-form-field appearance="outline">
            <mat-label>Start date</mat-label>
            <input matInput type="date" formControlName="startDate" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>End date</mat-label>
            <input matInput type="date" formControlName="endDate" />
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Notes</mat-label>
          <textarea matInput formControlName="notes" rows="3" placeholder="Route, highlights, crew\u2026"></textarea>
        </mat-form-field>

        <div class="form-actions">
          <button mat-button type="button" (click)="cancelTripForm()">Cancel</button>
          <button mat-flat-button color="primary" type="submit" [disabled]="tripForm.invalid">
            {{ editingTripId() ? 'Save Changes' : 'Add Trip' }}
          </button>
        </div>

      </form>
    </div>
  }

  <!-- Empty state -->
  @if (tripsWithCount().length === 0) {
    <div class="empty-state">
      <mat-icon>flag</mat-icon>
      <p>No trips yet. Add your first voyage!</p>
    </div>
  }

  <!-- Trip cards grid -->
  @if (tripsWithCount().length > 0) {
    <div class="trips-grid">
      @for (trip of tripsWithCount(); track trip.id) {
        <div class="trip-card" [class.active-trip]="tripService.activeTripId() === trip.id">
          <span class="trip-year">{{ trip.year }}</span>
          <h2 class="trip-name">{{ trip.name }}</h2>
          <div class="trip-destination">
            <mat-icon>place</mat-icon>
            {{ trip.destination }}
          </div>

          @if (trip.startDate || trip.endDate) {
            <div class="trip-dates">
              @if (trip.startDate) {
                {{ trip.startDate | date:'d MMM yyyy' }}
              }
              @if (trip.startDate && trip.endDate) { \u2013 }
              @if (trip.endDate) {
                {{ trip.endDate | date:'d MMM yyyy' }}
              }
            </div>
          }

          @if (trip.notes) {
            <p class="trip-notes">{{ trip.notes }}</p>
          }

          <div class="trip-entry-count">
            <mat-icon>menu_book</mat-icon>
            {{ trip.entryCount }} log {{ trip.entryCount === 1 ? 'entry' : 'entries' }}
          </div>

          <div class="trip-card-actions">
            @if (tripService.activeTripId() === trip.id) {
              <span class="active-badge"><mat-icon>check_circle</mat-icon> Active trip</span>
            } @else {
              <button mat-stroked-button (click)="setActiveTrip(trip.id)" title="New log entries will default to this trip">
                <mat-icon>flag</mat-icon> Set active
              </button>
            }
            <button mat-stroked-button (click)="viewTripEntries(trip.id)">
              <mat-icon>list_alt</mat-icon> Entries
            </button>
            <button mat-icon-button (click)="editTrip(trip)" aria-label="Edit trip">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteTrip(trip)" aria-label="Delete trip">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
      }
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       DIVIDER
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <mat-divider class="section-divider"></mat-divider>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SHIPS SECTION
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="section-header">
    <h2 class="section-title"><mat-icon>directions_boat</mat-icon> My Ships</h2>
    <button mat-flat-button color="primary" (click)="openShipForm()">
      <mat-icon>add</mat-icon> Add Ship
    </button>
  </div>

  <!-- Add / Edit ship form -->
  @if (showShipForm() || editingShipId()) {
    <div class="form-card">
      <form [formGroup]="shipForm" (ngSubmit)="saveShip()">

        <div class="form-grid-2">
          <mat-form-field appearance="outline">
            <mat-label>Ship name</mat-label>
            <input matInput formControlName="name" placeholder="S/Y Adriatica" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Registration number</mat-label>
            <input matInput formControlName="registrationNumber" placeholder="HR-1234" />
          </mat-form-field>
        </div>

        <div class="form-actions">
          <button mat-button type="button" (click)="cancelShipForm()">Cancel</button>
          <button mat-flat-button color="primary" type="submit" [disabled]="shipForm.invalid">
            {{ editingShipId() ? 'Save Changes' : 'Add Ship' }}
          </button>
        </div>

      </form>
    </div>
  }

  <!-- Ships list -->
  @if (shipService.ships().length === 0) {
    <div class="empty-state">
      <mat-icon>directions_boat</mat-icon>
      <p>No ships registered yet.</p>
    </div>
  }

  @if (shipService.ships().length > 0) {
    <div class="ships-list">
      @for (ship of shipService.ships(); track ship.id) {
        <div class="ship-item" [class.ship-default]="shipService.defaultShipId() === ship.id">
          <div class="ship-info">
            <div class="ship-name">
              {{ ship.name }}
              @if (shipService.defaultShipId() === ship.id) {
                <span class="default-badge">default</span>
              }
            </div>
            <div class="ship-reg">{{ ship.registrationNumber }}</div>
          </div>
          <div class="ship-actions">
            @if (shipService.defaultShipId() !== ship.id) {
              <button mat-stroked-button (click)="setDefaultShip(ship.id)" title="Auto-fill this ship in new log entries">
                <mat-icon>star_outline</mat-icon> Set default
              </button>
            }
            <button mat-icon-button (click)="editShip(ship)" aria-label="Edit ship">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteShip(ship)" aria-label="Delete ship">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
      }
    </div>
  }

</div>
`, styles: ["/* src/app/features/trips/trips.component.scss */\n.trips-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px 48px;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-gold-light, #f0c040);\n  margin: 0 0 24px;\n}\n.page-title mat-icon {\n  font-size: 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.section-header h2 {\n  margin: 0;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-gold, #d4a017);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.section-title mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.section-divider {\n  margin: 32px 0;\n  border-color: rgba(212, 160, 23, 0.2) !important;\n}\n.form-card {\n  background: var(--card-bg, #112244);\n  border: 1px solid rgba(212, 160, 23, 0.25);\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.form-grid-3 {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 12px;\n}\n.form-grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.full-width {\n  width: 100%;\n  display: block;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 4px;\n}\n.trips-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.trip-card {\n  background: var(--card-bg, #112244);\n  border: 1px solid rgba(212, 160, 23, 0.2);\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n  transition: border-color 0.2s ease;\n}\n.trip-card:hover {\n  border-color: rgba(212, 160, 23, 0.45);\n}\n.trip-year {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(212, 160, 23, 0.2);\n  color: var(--color-gold-light, #f0c040);\n  border-radius: 8px;\n  padding: 2px 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  line-height: 1.6;\n}\n.trip-name {\n  color: var(--color-gold-light, #f0c040);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 40px 0 0;\n  line-height: 1.3;\n}\n.trip-destination {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.85rem;\n}\n.trip-destination mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.trip-dates {\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.8rem;\n}\n.trip-notes {\n  color: var(--color-white, #e8f4f8);\n  font-size: 0.85rem;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.trip-entry-count {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.8rem;\n}\n.trip-entry-count mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.trip-card-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-top: auto;\n  flex-wrap: wrap;\n}\n.trip-card.active-trip {\n  border-color: rgba(212, 160, 23, 0.6);\n  box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.25);\n}\n.active-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--color-gold);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.active-badge mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.ships-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ship-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--card-bg, #112244);\n  border: 1px solid rgba(212, 160, 23, 0.15);\n  border-radius: 8px;\n  padding: 10px 14px;\n  transition: border-color 0.2s ease;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.ship-item:hover {\n  border-color: rgba(212, 160, 23, 0.35);\n}\n.ship-item.ship-default {\n  border-color: rgba(212, 160, 23, 0.5);\n}\n.default-badge {\n  display: inline-block;\n  margin-left: 8px;\n  background: rgba(212, 160, 23, 0.2);\n  color: var(--color-gold-light, #f0c040);\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 8px;\n  vertical-align: middle;\n}\n.ship-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ship-name {\n  color: var(--color-white, #e8f4f8);\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.ship-reg {\n  color: var(--color-text-dim, #94b4c8);\n  font-size: 0.8rem;\n}\n.ship-actions {\n  display: flex;\n  gap: 4px;\n}\n.empty-state {\n  text-align: center;\n  padding: 32px;\n  color: var(--color-text-dim, #94b4c8);\n}\n.empty-state mat-icon {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--color-gold, #d4a017);\n  display: block;\n  margin: 0 auto 8px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.95rem;\n}\n@media (max-width: 600px) {\n  .form-grid-3,\n  .form-grid-2 {\n    grid-template-columns: 1fr;\n  }\n  .trips-grid {\n    grid-template-columns: 1fr;\n  }\n  .section-header {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=trips.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsComponent, { className: "TripsComponent", filePath: "src/app/features/trips/trips.component.ts", lineNumber: 42 });
})();
export {
  TripsComponent
};
//# sourceMappingURL=chunk-H2CAQIMY.js.map
