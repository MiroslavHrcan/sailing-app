import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-RM2KPLBQ.js";

// src/app/shared/pipes/beaufort.pipe.ts
var BEAUFORT = [
  { max: 1, label: "0 \u2013 Calm" },
  { max: 3, label: "1 \u2013 Light air" },
  { max: 6, label: "2 \u2013 Light breeze" },
  { max: 10, label: "3 \u2013 Gentle breeze" },
  { max: 16, label: "4 \u2013 Moderate breeze" },
  { max: 21, label: "5 \u2013 Fresh breeze" },
  { max: 27, label: "6 \u2013 Strong breeze" },
  { max: 33, label: "7 \u2013 Near gale" },
  { max: 40, label: "8 \u2013 Gale" },
  { max: 47, label: "9 \u2013 Strong gale" },
  { max: 55, label: "10 \u2013 Storm" },
  { max: 63, label: "11 \u2013 Violent storm" },
  { max: Infinity, label: "12 \u2013 Hurricane" }
];
var BeaufortPipe = class _BeaufortPipe {
  transform(knots) {
    const entry = BEAUFORT.find((b) => knots <= b.max);
    return entry ? entry.label : "12 \u2013 Hurricane";
  }
  static \u0275fac = function BeaufortPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BeaufortPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "beaufort", type: _BeaufortPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BeaufortPipe, [{
    type: Pipe,
    args: [{ name: "beaufort", standalone: true }]
  }], null, null);
})();

export {
  BeaufortPipe
};
//# sourceMappingURL=chunk-BSCNAUB4.js.map
