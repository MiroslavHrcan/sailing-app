import {
  ShipService
} from "./chunk-4KCXYKF7.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatSelect,
  MatSelectModule,
  TripService
} from "./chunk-2PRETRKJ.js";
import "./chunk-R74DHBGG.js";
import {
  SEA_STATE_LABELS,
  VISIBILITY_LABELS,
  createEmptyEntry
} from "./chunk-3OTKZCR5.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-QFMQ5N2W.js";
import {
  MatFormField,
  MatHint,
  MatLabel,
  MatSnackBar,
  MatSnackBarModule,
  MatSuffix
} from "./chunk-UXJJS2G5.js";
import "./chunk-FGAEYOVQ.js";
import "./chunk-AIUY7MS7.js";
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
  UniqueSelectionDispatcher
} from "./chunk-3OLKLGJF.js";
import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-MMFK7TQ2.js";
import {
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-DRBCEAPL.js";
import {
  DOCUMENT,
  DecimalPipe,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatRipple,
  SPACE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  hasModifierKey
} from "./chunk-7ODZSRZ3.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  filter,
  forwardRef,
  inject,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-RM2KPLBQ.js";

// node_modules/@angular/material/fesm2022/internal-form-field-grv62mCZ.mjs
var _c0 = ["mat-internal-form-field", ""];
var _c1 = ["*"];
var _MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
  static \u0275fac = function _MatInternalFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatInternalFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __MatInternalFormField,
    selectors: [["div", "mat-internal-form-field", ""]],
    hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
    hostVars: 2,
    hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
      }
    },
    inputs: {
      labelPosition: "labelPosition"
    },
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    template: function _MatInternalFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c02 = ["input"];
var _c12 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatCheckbox),
  multi: true
};
var MatCheckboxChange = class {
  /** The source checkbox of the event. */
  source;
  /** The new `checked` value of the checkbox. */
  checked;
};
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** CSS classes to add when transitioning between the different checkbox states. */
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel = "";
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /**
   * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
   */
  ariaExpanded;
  /**
   * Users can specify the `aria-controls` attribute which will be forwarded to the input element
   */
  ariaControls;
  /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
  ariaOwns;
  _uniqueId;
  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  id;
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  required;
  /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
  labelPosition = "after";
  /** Name value will be applied to the input element if present */
  name = null;
  /** Event emitted when the checkbox's `checked` value changes. */
  change = new EventEmitter();
  /** Event emitted when the checkbox's `indeterminate` value changes. */
  indeterminateChange = new EventEmitter();
  /** The value attribute of the native input element */
  value;
  /** Whether the checkbox has a ripple. */
  disableRipple;
  /** The native `<input type="checkbox">` element */
  _inputElement;
  /** The native `<label>` element */
  _labelElement;
  /** Tabindex for the checkbox. */
  tabIndex;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the checkbox. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the checkbox should remain interactive when it is disabled. */
  disabledInteractive;
  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = value;
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _indeterminate = false;
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationMode === "NoopAnimations") {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static \u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c2,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
        });
        \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onTouchTargetClick());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onBlur());
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInputClick());
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInteractionEvent($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 7);
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 9);
        \u0275\u0275element(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "label", 13, 2);
        \u0275\u0275projection(14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const checkbox_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
        \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        \u0275\u0275advance(7);
        \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": `_animationMode === 'NoopAnimations'`,
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatCheckboxRequiredValidator),
  multi: true
};
var MatCheckboxRequiredValidator = class _MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCheckboxRequiredValidator_BaseFactory;
    return function MatCheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275MatCheckboxRequiredValidator_BaseFactory || (\u0275MatCheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MatCheckboxRequiredValidator)))(__ngFactoryType__ || _MatCheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCheckboxRequiredValidator,
    selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
    features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();
var _MatCheckboxRequiredValidatorModule = class __MatCheckboxRequiredValidatorModule {
  static \u0275fac = function _MatCheckboxRequiredValidatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatCheckboxRequiredValidatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: __MatCheckboxRequiredValidatorModule,
    imports: [MatCheckboxRequiredValidator],
    exports: [MatCheckboxRequiredValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatCheckboxRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckboxRequiredValidator],
      exports: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static \u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox, MatCommonModule],
    exports: [MatCheckbox, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCheckbox, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  /** Emits when the state of the accordion changes */
  _stateChanges = new Subject();
  /** Stream that emits true/false when openAll/closeAll is triggered. */
  _openCloseAllActions = new Subject();
  /** A readonly id value to use for unique selection coordination. */
  id = inject(_IdGenerator).getId("cdk-accordion-");
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  multi = false;
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  /** Subscription to openAll/closeAll events. */
  _openCloseAllSubscription = Subscription.EMPTY;
  /** Event emitted every time the AccordionItem is closed. */
  closed = new EventEmitter();
  /** Event emitted every time the AccordionItem is opened. */
  opened = new EventEmitter();
  /** Event emitted when the AccordionItem is destroyed. */
  destroyed = new EventEmitter();
  /**
   * Emits whenever the expanded state of the accordion changes.
   * Primarily used to facilitate two-way binding.
   * @docs-private
   */
  expandedChange = new EventEmitter();
  /** The unique AccordionItem id. */
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  /** Whether the AccordionItem is disabled. */
  disabled = false;
  /** Unregister function for _expansionDispatcher. */
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: void 0
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c03 = ["body"];
var _c13 = ["bodyWrapper"];
var _c22 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 2);
    \u0275\u0275element(2, "path", 3);
    \u0275\u0275elementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  /** An event emitted after the body's expansion animation happens. */
  afterExpand = new EventEmitter();
  /** An event emitted after the body's collapse animation happens. */
  afterCollapse = new EventEmitter();
  /** Stream that emits for changes in `@Input` properties. */
  _inputChanges = new Subject();
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Element containing the panel's user-provided content. */
  _body;
  /** Element wrapping the panel body. */
  _bodyWrapper;
  /** Portal holding the user's content. */
  _portal;
  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      },
      {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c22);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /** Height of the header while the panel is expanded. */
  expandedHeight;
  /** Height of the header while the panel is collapsed. */
  collapsedHeight;
  /** Tab index of the header. */
  tabIndex = 0;
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  /** Headers belonging to this accordion. */
  _ownHeaders = new QueryList();
  /** All headers inside the accordion. Includes headers inside nested accordions. */
  _headers;
  /** Whether the expansion indicator should be hidden. */
  hideToggle = false;
  /**
   * Display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the rest of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  displayMode = "default";
  /** The position of the expansion indicator. */
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule,
    imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkAccordionModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

// src/app/features/logbook/logbook-form/logbook-form.component.ts
var _c04 = () => ["/trips"];
var _c14 = () => [9];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item[0];
function LogbookFormComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trip_r1 = ctx.$implicit;
    \u0275\u0275property("value", trip_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", trip_r1.name, " \xB7 ", trip_r1.destination, "");
  }
}
function LogbookFormComponent_Conditional_25_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ship_r4 = ctx.$implicit;
    \u0275\u0275property("value", ship_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ship_r4.name, " (", ship_r4.registrationNumber, ")");
  }
}
function LogbookFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 6)(1, "mat-label");
    \u0275\u0275text(2, "Select saved ship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 45);
    \u0275\u0275listener("selectionChange", function LogbookFormComponent_Conditional_25_Template_mat_select_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onShipSelect($event.value));
    });
    \u0275\u0275elementStart(4, "mat-option", 8);
    \u0275\u0275text(5, "\u2014 Enter manually \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, LogbookFormComponent_Conditional_25_For_7_Template, 2, 3, "mat-option", 8, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.shipService.ships());
  }
}
function LogbookFormComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r2.form.value.lat, "1.4-5"), "\xB0N, ", \u0275\u0275pipeBind2(3, 5, ctx_r2.form.value.lon, "1.4-5"), "\xB0E ");
  }
}
function LogbookFormComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "mgl-map", 46);
    \u0275\u0275listener("mapLoad", function LogbookFormComponent_Conditional_97_Template_mgl_map_mapLoad_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMapPickerLoad($event));
    })("mapClick", function LogbookFormComponent_Conditional_97_Template_mgl_map_mapClick_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMapPickerClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 47)(3, "mat-icon");
    \u0275\u0275text(4, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Tap the map to set your position \u2014 the gold marker will move.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.mapStyle);
    \u0275\u0275property("zoom", \u0275\u0275pureFunction0(5, _c14))("center", ctx_r2.mapPickerCenter())("interactive", true);
  }
}
function LogbookFormComponent_For_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("value", s_r6[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6[1]);
  }
}
function LogbookFormComponent_For_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r7 = ctx.$implicit;
    \u0275\u0275property("value", v_r7[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r7[1]);
  }
}
var LogbookFormComponent = class _LogbookFormComponent {
  id;
  fb = inject(FormBuilder);
  ngZone = inject(NgZone);
  logbookService = inject(LogbookService);
  shipService = inject(ShipService);
  tripService = inject(TripService);
  router = inject(Router);
  snackBar = inject(MatSnackBar);
  isEdit = false;
  seaStates = Object.entries(SEA_STATE_LABELS);
  visibilities = Object.entries(VISIBILITY_LABELS);
  mapPickerOpen = signal(false);
  // Snapshot of coordinates taken once when the map opens — NOT a getter that re-evaluates every CD cycle
  mapPickerCenter = signal([16.44, 43.51]);
  mapInstance = null;
  sortedTrips = computed(() => [...this.tripService.trips()].sort((a, b) => b.year - a.year));
  form = this.fb.group({
    // Context
    tripId: [null],
    selectedShipId: [null],
    // Ship
    shipName: ["", Validators.required],
    registrationNumber: [""],
    // Voyage
    portDeparture: ["", Validators.required],
    portArrival: [""],
    date: ["", Validators.required],
    time: ["", Validators.required],
    watchkeepingOfficer: ["", Validators.required],
    // Navigation
    lat: [43.508, [Validators.required, Validators.min(-90), Validators.max(90)]],
    lon: [16.44, [Validators.required, Validators.min(-180), Validators.max(180)]],
    courseSteered: [0, [Validators.min(0), Validators.max(360)]],
    speed: [0, [Validators.min(0)]],
    // Meteorological
    windSpeed: [0, [Validators.min(0)]],
    windDirection: [0, [Validators.min(0), Validators.max(360)]],
    seaState: ["calm"],
    visibility: ["excellent"],
    barometricPressure: [1013, [Validators.min(900), Validators.max(1100)]],
    airTemperature: [25, [Validators.min(-30), Validators.max(60)]],
    waterTemperature: [22, [Validators.min(-5), Validators.max(40)]],
    // Engineering
    engineRpm: [0, [Validators.min(0)]],
    fuelConsumption: [0, [Validators.min(0)]],
    remainingFuel: [0, [Validators.min(0)]],
    remainingWater: [0, [Validators.min(0)]],
    // Safety
    safetyCheckDone: [false],
    incidentNotes: [""],
    crewRosterChanges: [""]
  });
  mapStyle = {
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
  ngOnInit() {
    if (this.id) {
      this.isEdit = true;
      const entry = this.logbookService.getById(this.id);
      if (entry) {
        this.form.patchValue(__spreadProps(__spreadValues({}, entry), {
          lat: entry.position.lat,
          lon: entry.position.lon,
          tripId: entry.tripId ?? null,
          selectedShipId: null
        }));
      } else {
        this.snackBar.open("Entry not found", "Dismiss", { duration: 3e3 });
        this.router.navigate(["/logbook"]);
      }
    } else {
      const empty = createEmptyEntry();
      this.form.patchValue(__spreadProps(__spreadValues({}, empty), {
        lat: empty.position.lat,
        lon: empty.position.lon
      }));
      const defaultShipId = this.shipService.defaultShipId();
      const ships = this.shipService.ships();
      const defaultShip = defaultShipId ? ships.find((s) => s.id === defaultShipId) : ships.length === 1 ? ships[0] : null;
      if (defaultShip) {
        this.form.patchValue({
          selectedShipId: defaultShip.id,
          shipName: defaultShip.name,
          registrationNumber: defaultShip.registrationNumber
        });
      }
      const activeTripId = this.tripService.activeTripId();
      if (activeTripId) {
        this.form.patchValue({ tripId: activeTripId });
      }
    }
  }
  onShipSelect(shipId) {
    if (!shipId)
      return;
    const ship = this.shipService.ships().find((s) => s.id === shipId);
    if (ship) {
      this.form.patchValue({ shipName: ship.name, registrationNumber: ship.registrationNumber });
    }
  }
  toggleMapPicker() {
    if (!this.mapPickerOpen()) {
      this.mapPickerCenter.set([
        this.form.value.lon ?? 16.44,
        this.form.value.lat ?? 43.51
      ]);
    } else {
      this.mapInstance = null;
    }
    this.mapPickerOpen.update((v) => !v);
  }
  onMapPickerLoad(map) {
    this.ngZone.run(() => {
      this.mapInstance = map;
      const lat = this.form.value.lat ?? 43.508;
      const lon = this.form.value.lon ?? 16.44;
      map.addSource("picker-point", {
        type: "geojson",
        data: { type: "Feature", geometry: { type: "Point", coordinates: [lon, lat] }, properties: {} }
      });
      map.addLayer({
        id: "picker-circle",
        type: "circle",
        source: "picker-point",
        paint: {
          "circle-radius": 10,
          "circle-color": "#d4a017",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff"
        }
      });
    });
  }
  onMapPickerClick(event) {
    this.ngZone.run(() => {
      const lat = parseFloat(event.lngLat.lat.toFixed(5));
      const lon = parseFloat(event.lngLat.lng.toFixed(5));
      this.form.patchValue({ lat, lon });
      if (this.mapInstance) {
        const source = this.mapInstance.getSource("picker-point");
        source?.setData({ type: "Feature", geometry: { type: "Point", coordinates: [lon, lat] }, properties: {} });
      }
    });
  }
  useGps() {
    if (!navigator.geolocation) {
      this.snackBar.open("GPS not available in this browser", "Dismiss", { duration: 3e3 });
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      this.ngZone.run(() => {
        const lat = parseFloat(pos.coords.latitude.toFixed(5));
        const lon = parseFloat(pos.coords.longitude.toFixed(5));
        this.form.patchValue({ lat, lon });
        this.snackBar.open(`Position set: ${lat}\xB0N, ${lon}\xB0E`, "Dismiss", { duration: 3e3 });
        if (this.mapInstance) {
          const source = this.mapInstance.getSource("picker-point");
          source?.setData({ type: "Feature", geometry: { type: "Point", coordinates: [lon, lat] }, properties: {} });
          this.mapInstance.flyTo({ center: [lon, lat], zoom: 10 });
        }
      });
    }, () => this.ngZone.run(() => this.snackBar.open("Could not get GPS position", "Dismiss", { duration: 3e3 })));
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const data = {
      tripId: v.tripId ?? void 0,
      shipName: v.shipName,
      registrationNumber: v.registrationNumber ?? "",
      portDeparture: v.portDeparture,
      portArrival: v.portArrival ?? "",
      date: v.date,
      time: v.time,
      watchkeepingOfficer: v.watchkeepingOfficer,
      position: { lat: v.lat, lon: v.lon },
      courseSteered: v.courseSteered,
      speed: v.speed,
      windSpeed: v.windSpeed,
      windDirection: v.windDirection,
      seaState: v.seaState,
      visibility: v.visibility,
      barometricPressure: v.barometricPressure,
      airTemperature: v.airTemperature,
      waterTemperature: v.waterTemperature,
      engineRpm: v.engineRpm,
      fuelConsumption: v.fuelConsumption,
      remainingFuel: v.remainingFuel,
      remainingWater: v.remainingWater,
      safetyCheckDone: v.safetyCheckDone,
      incidentNotes: v.incidentNotes ?? "",
      crewRosterChanges: v.crewRosterChanges ?? ""
    };
    if (this.isEdit && this.id) {
      this.logbookService.update(this.id, data);
      this.snackBar.open("Entry updated", "Dismiss", { duration: 3e3 });
      this.router.navigate(["/logbook", this.id]);
    } else {
      const entry = this.logbookService.create(data);
      this.snackBar.open("Entry saved", "Dismiss", { duration: 3e3 });
      this.router.navigate(["/logbook", entry.id]);
    }
  }
  cancel() {
    if (this.isEdit && this.id) {
      this.router.navigate(["/logbook", this.id]);
    } else {
      this.router.navigate(["/logbook"]);
    }
  }
  static \u0275fac = function LogbookFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogbookFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogbookFormComponent, selectors: [["app-logbook-form"]], inputs: { id: "id" }, decls: 185, vars: 12, consts: [[1, "page-container"], [1, "page-title"], [3, "ngSubmit", "formGroup"], ["multi", ""], ["expanded", ""], [1, "form-grid"], ["appearance", "fill", 1, "full-width"], ["formControlName", "tripId"], [3, "value"], [1, "manage-link", 3, "routerLink"], ["appearance", "fill"], ["matInput", "", "formControlName", "shipName", "required", ""], ["matInput", "", "formControlName", "registrationNumber"], ["matInput", "", "formControlName", "portDeparture", "required", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "portArrival"], ["matInput", "", "formControlName", "date", "type", "date", "required", ""], ["matInput", "", "formControlName", "time", "type", "time", "required", ""], ["matInput", "", "formControlName", "watchkeepingOfficer", "required", ""], ["matInput", "", "formControlName", "lat", "type", "number", "step", "0.00001"], ["matInput", "", "formControlName", "lon", "type", "number", "step", "0.00001"], ["matInput", "", "formControlName", "courseSteered", "type", "number", "min", "0", "max", "360"], ["matInput", "", "formControlName", "speed", "type", "number", "min", "0", "step", "0.1"], [1, "map-picker-bar"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "coords-display"], [1, "map-picker-wrap"], ["matInput", "", "formControlName", "windSpeed", "type", "number", "min", "0"], ["matInput", "", "formControlName", "windDirection", "type", "number", "min", "0", "max", "360"], ["formControlName", "seaState"], ["formControlName", "visibility"], ["matInput", "", "formControlName", "barometricPressure", "type", "number"], ["matInput", "", "formControlName", "airTemperature", "type", "number"], ["matInput", "", "formControlName", "waterTemperature", "type", "number"], ["matInput", "", "formControlName", "engineRpm", "type", "number", "min", "0"], ["matInput", "", "formControlName", "fuelConsumption", "type", "number", "min", "0", "step", "0.1"], ["matInput", "", "formControlName", "remainingFuel", "type", "number", "min", "0"], ["matInput", "", "formControlName", "remainingWater", "type", "number", "min", "0"], [1, "safety-section"], ["formControlName", "safetyCheckDone", "color", "primary", 1, "safety-check"], ["matInput", "", "formControlName", "incidentNotes", "rows", "3", "placeholder", "Accidents, groundings, breakdowns, medical emergencies..."], ["matInput", "", "formControlName", "crewRosterChanges", "rows", "2", "placeholder", "Crew roster changes, cargo loading, ballast water..."], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["formControlName", "selectedShipId", 3, "selectionChange"], [1, "map-picker", 3, "mapLoad", "mapClick", "zoom", "center", "interactive"], [1, "map-hint"]], template: function LogbookFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1)(2, "mat-icon");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 2);
      \u0275\u0275listener("ngSubmit", function LogbookFormComponent_Template_form_ngSubmit_5_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(6, "mat-accordion", 3)(7, "mat-expansion-panel", 4)(8, "mat-expansion-panel-header")(9, "mat-panel-title")(10, "mat-icon");
      \u0275\u0275text(11, "directions_boat");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Ship & Voyage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "mat-form-field", 6)(15, "mat-label");
      \u0275\u0275text(16, "Trip");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-select", 7)(18, "mat-option", 8);
      \u0275\u0275text(19, "\u2014 No specific trip \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(20, LogbookFormComponent_For_21_Template, 2, 3, "mat-option", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-hint")(23, "a", 9);
      \u0275\u0275text(24, "Manage trips");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, LogbookFormComponent_Conditional_25_Template, 8, 1, "mat-form-field", 6);
      \u0275\u0275elementStart(26, "mat-form-field", 10)(27, "mat-label");
      \u0275\u0275text(28, "Ship Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-label");
      \u0275\u0275text(32, "Registration Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-form-field", 10)(35, "mat-label");
      \u0275\u0275text(36, "Port of Departure");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 13);
      \u0275\u0275elementStart(38, "mat-icon", 14);
      \u0275\u0275text(39, "anchor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "mat-form-field", 10)(41, "mat-label");
      \u0275\u0275text(42, "Port of Arrival");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 15);
      \u0275\u0275elementStart(44, "mat-icon", 14);
      \u0275\u0275text(45, "anchor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "mat-form-field", 10)(47, "mat-label");
      \u0275\u0275text(48, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-form-field", 10)(51, "mat-label");
      \u0275\u0275text(52, "Time (UTC)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "mat-form-field", 6)(55, "mat-label");
      \u0275\u0275text(56, "Watchkeeping Officer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 18);
      \u0275\u0275elementStart(58, "mat-icon", 14);
      \u0275\u0275text(59, "person");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "mat-expansion-panel", 4)(61, "mat-expansion-panel-header")(62, "mat-panel-title")(63, "mat-icon");
      \u0275\u0275text(64, "navigation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(65, " Navigation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 5)(67, "mat-form-field", 10)(68, "mat-label");
      \u0275\u0275text(69, "Latitude (\xB0N)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 19);
      \u0275\u0275elementStart(71, "mat-hint");
      \u0275\u0275text(72, "e.g. 43.508");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "mat-form-field", 10)(74, "mat-label");
      \u0275\u0275text(75, "Longitude (\xB0E)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 20);
      \u0275\u0275elementStart(77, "mat-hint");
      \u0275\u0275text(78, "e.g. 16.440");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "mat-form-field", 10)(80, "mat-label");
      \u0275\u0275text(81, "Course Steered (\xB0)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-form-field", 10)(84, "mat-label");
      \u0275\u0275text(85, "Speed (knots)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 23)(88, "button", 24);
      \u0275\u0275listener("click", function LogbookFormComponent_Template_button_click_88_listener() {
        return ctx.toggleMapPicker();
      });
      \u0275\u0275elementStart(89, "mat-icon");
      \u0275\u0275text(90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "button", 24);
      \u0275\u0275listener("click", function LogbookFormComponent_Template_button_click_92_listener() {
        return ctx.useGps();
      });
      \u0275\u0275elementStart(93, "mat-icon");
      \u0275\u0275text(94, "gps_fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " Use GPS ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(96, LogbookFormComponent_Conditional_96_Template, 4, 8, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(97, LogbookFormComponent_Conditional_97_Template, 6, 6, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-expansion-panel", 4)(99, "mat-expansion-panel-header")(100, "mat-panel-title")(101, "mat-icon");
      \u0275\u0275text(102, "air");
      \u0275\u0275elementEnd();
      \u0275\u0275text(103, " Meteorological");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 5)(105, "mat-form-field", 10)(106, "mat-label");
      \u0275\u0275text(107, "Wind Speed (knots)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "mat-form-field", 10)(110, "mat-label");
      \u0275\u0275text(111, "Wind Direction (\xB0)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "input", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "mat-form-field", 10)(114, "mat-label");
      \u0275\u0275text(115, "Sea State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "mat-select", 29);
      \u0275\u0275repeaterCreate(117, LogbookFormComponent_For_118_Template, 2, 2, "mat-option", 8, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "mat-form-field", 10)(120, "mat-label");
      \u0275\u0275text(121, "Visibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "mat-select", 30);
      \u0275\u0275repeaterCreate(123, LogbookFormComponent_For_124_Template, 2, 2, "mat-option", 8, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "mat-form-field", 10)(126, "mat-label");
      \u0275\u0275text(127, "Barometric Pressure (hPa)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-form-field", 10)(130, "mat-label");
      \u0275\u0275text(131, "Air Temperature (\xB0C)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(132, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-form-field", 10)(134, "mat-label");
      \u0275\u0275text(135, "Water Temperature (\xB0C)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(136, "input", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "mat-expansion-panel")(138, "mat-expansion-panel-header")(139, "mat-panel-title")(140, "mat-icon");
      \u0275\u0275text(141, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(142, " Engineering");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 5)(144, "mat-form-field", 10)(145, "mat-label");
      \u0275\u0275text(146, "Engine RPM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(147, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-form-field", 10)(149, "mat-label");
      \u0275\u0275text(150, "Fuel Consumption (L/hr)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "mat-form-field", 10)(153, "mat-label");
      \u0275\u0275text(154, "Remaining Fuel (L)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(155, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "mat-form-field", 10)(157, "mat-label");
      \u0275\u0275text(158, "Remaining Water (L)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(159, "input", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "mat-expansion-panel")(161, "mat-expansion-panel-header")(162, "mat-panel-title")(163, "mat-icon");
      \u0275\u0275text(164, "shield");
      \u0275\u0275elementEnd();
      \u0275\u0275text(165, " Safety & Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 38)(167, "mat-checkbox", 39);
      \u0275\u0275text(168, " Safety inspection completed ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "mat-divider");
      \u0275\u0275elementStart(170, "mat-form-field", 6)(171, "mat-label");
      \u0275\u0275text(172, "Incident Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(173, "textarea", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "mat-form-field", 6)(175, "mat-label");
      \u0275\u0275text(176, "Crew & Cargo Changes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "textarea", 41);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(178, "div", 42)(179, "button", 43);
      \u0275\u0275listener("click", function LogbookFormComponent_Template_button_click_179_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(180, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "button", 44)(182, "mat-icon");
      \u0275\u0275text(183, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275text(184);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEdit ? "edit" : "add_circle");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Edit Log Entry" : "New Log Entry", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sortedTrips());
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c04));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.shipService.ships().length > 0 ? 25 : -1);
      \u0275\u0275advance(65);
      \u0275\u0275textInterpolate(ctx.mapPickerOpen() ? "close" : "map");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.mapPickerOpen() ? "Close map" : "Pick position on map", " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.value.lat && ctx.form.value.lon ? 96 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mapPickerOpen() ? 97 : -1);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.seaStates);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.visibilities);
      \u0275\u0275advance(61);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Update Entry" : "Save Entry", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatCheckboxModule, MatCheckbox, MatButtonModule, MatButton, MatIconModule, MatIcon, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatSnackBarModule, MatDividerModule, MatDivider, MapComponent, RouterLink, DecimalPipe], styles: ["\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n  padding: 8px 0;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  background: var(--card-bg) !important;\n  color: var(--color-white) !important;\n  margin-bottom: 8px;\n  border: 1px solid rgba(212, 160, 23, 0.2);\n  border-radius: 8px !important;\n}\nmat-expansion-panel[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%] {\n  color: var(--color-gold);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n}\nmat-expansion-panel[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-gold);\n}\n.safety-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 8px 0;\n}\n.safety-check[_ngcontent-%COMP%] {\n  color: var(--color-white);\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-bottom: 24px;\n}\n.manage-link[_ngcontent-%COMP%] {\n  color: var(--color-gold);\n  text-decoration: none;\n  font-size: 0.75rem;\n}\n.manage-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.map-picker-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 12px;\n}\n.coords-display[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-gold-light);\n  background: rgba(212, 160, 23, 0.12);\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-family: monospace;\n}\n.map-picker-wrap[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.map-picker[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 320px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: crosshair;\n}\n@media (max-width: 600px) {\n  .map-picker[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n}\n.map-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-dim);\n  margin: 6px 0 0;\n}\n.map-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n/*# sourceMappingURL=logbook-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogbookFormComponent, [{
    type: Component,
    args: [{ selector: "app-logbook-form", standalone: true, imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatDividerModule,
      MapComponent,
      RouterLink,
      DecimalPipe
    ], template: `<div class="page-container">
  <h1 class="page-title">
    <mat-icon>{{ isEdit ? 'edit' : 'add_circle' }}</mat-icon>
    {{ isEdit ? 'Edit Log Entry' : 'New Log Entry' }}
  </h1>

  <form [formGroup]="form" (ngSubmit)="save()">
    <mat-accordion multi>

      <!-- SHIP & VOYAGE -->
      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>directions_boat</mat-icon> Ship & Voyage</mat-panel-title>
        </mat-expansion-panel-header>
        <div class="form-grid">

          <!-- Trip selector -->
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Trip</mat-label>
            <mat-select formControlName="tripId">
              <mat-option [value]="null">\u2014 No specific trip \u2014</mat-option>
              @for (trip of sortedTrips(); track trip.id) {
                <mat-option [value]="trip.id">{{ trip.name }} \xB7 {{ trip.destination }}</mat-option>
              }
            </mat-select>
            <mat-hint>
              <a class="manage-link" [routerLink]="['/trips']">Manage trips</a>
            </mat-hint>
          </mat-form-field>

          <!-- Ship selector -->
          @if (shipService.ships().length > 0) {
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Select saved ship</mat-label>
              <mat-select formControlName="selectedShipId" (selectionChange)="onShipSelect($event.value)">
                <mat-option [value]="null">\u2014 Enter manually \u2014</mat-option>
                @for (ship of shipService.ships(); track ship.id) {
                  <mat-option [value]="ship.id">{{ ship.name }} ({{ ship.registrationNumber }})</mat-option>
                }
              </mat-select>
            </mat-form-field>
          }

          <mat-form-field appearance="fill">
            <mat-label>Ship Name</mat-label>
            <input matInput formControlName="shipName" required>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Registration Number</mat-label>
            <input matInput formControlName="registrationNumber">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Port of Departure</mat-label>
            <input matInput formControlName="portDeparture" required>
            <mat-icon matSuffix>anchor</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Port of Arrival</mat-label>
            <input matInput formControlName="portArrival">
            <mat-icon matSuffix>anchor</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Date</mat-label>
            <input matInput formControlName="date" type="date" required>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Time (UTC)</mat-label>
            <input matInput formControlName="time" type="time" required>
          </mat-form-field>
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Watchkeeping Officer</mat-label>
            <input matInput formControlName="watchkeepingOfficer" required>
            <mat-icon matSuffix>person</mat-icon>
          </mat-form-field>
        </div>
      </mat-expansion-panel>

      <!-- NAVIGATION -->
      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>navigation</mat-icon> Navigation</mat-panel-title>
        </mat-expansion-panel-header>
        <div class="form-grid">
          <mat-form-field appearance="fill">
            <mat-label>Latitude (\xB0N)</mat-label>
            <input matInput formControlName="lat" type="number" step="0.00001">
            <mat-hint>e.g. 43.508</mat-hint>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Longitude (\xB0E)</mat-label>
            <input matInput formControlName="lon" type="number" step="0.00001">
            <mat-hint>e.g. 16.440</mat-hint>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Course Steered (\xB0)</mat-label>
            <input matInput formControlName="courseSteered" type="number" min="0" max="360">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Speed (knots)</mat-label>
            <input matInput formControlName="speed" type="number" min="0" step="0.1">
          </mat-form-field>
        </div>

        <!-- Map picker -->
        <div class="map-picker-bar">
          <button mat-stroked-button type="button" (click)="toggleMapPicker()">
            <mat-icon>{{ mapPickerOpen() ? 'close' : 'map' }}</mat-icon>
            {{ mapPickerOpen() ? 'Close map' : 'Pick position on map' }}
          </button>
          <button mat-stroked-button type="button" (click)="useGps()">
            <mat-icon>gps_fixed</mat-icon> Use GPS
          </button>
          @if (form.value.lat && form.value.lon) {
            <span class="coords-display">
              {{ form.value.lat | number:'1.4-5' }}\xB0N, {{ form.value.lon | number:'1.4-5' }}\xB0E
            </span>
          }
        </div>

        @if (mapPickerOpen()) {
          <div class="map-picker-wrap">
            <mgl-map
              [style]="mapStyle"
              [zoom]="[9]"
              [center]="mapPickerCenter()"
              [interactive]="true"
              (mapLoad)="onMapPickerLoad($event)"
              (mapClick)="onMapPickerClick($event)"
              class="map-picker">
            </mgl-map>
            <p class="map-hint"><mat-icon>touch_app</mat-icon> Tap the map to set your position \u2014 the gold marker will move.</p>
          </div>
        }
      </mat-expansion-panel>

      <!-- METEOROLOGICAL -->
      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>air</mat-icon> Meteorological</mat-panel-title>
        </mat-expansion-panel-header>
        <div class="form-grid">
          <mat-form-field appearance="fill">
            <mat-label>Wind Speed (knots)</mat-label>
            <input matInput formControlName="windSpeed" type="number" min="0">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Wind Direction (\xB0)</mat-label>
            <input matInput formControlName="windDirection" type="number" min="0" max="360">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Sea State</mat-label>
            <mat-select formControlName="seaState">
              @for (s of seaStates; track s[0]) {
                <mat-option [value]="s[0]">{{ s[1] }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Visibility</mat-label>
            <mat-select formControlName="visibility">
              @for (v of visibilities; track v[0]) {
                <mat-option [value]="v[0]">{{ v[1] }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Barometric Pressure (hPa)</mat-label>
            <input matInput formControlName="barometricPressure" type="number">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Air Temperature (\xB0C)</mat-label>
            <input matInput formControlName="airTemperature" type="number">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Water Temperature (\xB0C)</mat-label>
            <input matInput formControlName="waterTemperature" type="number">
          </mat-form-field>
        </div>
      </mat-expansion-panel>

      <!-- ENGINEERING -->
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>settings</mat-icon> Engineering</mat-panel-title>
        </mat-expansion-panel-header>
        <div class="form-grid">
          <mat-form-field appearance="fill">
            <mat-label>Engine RPM</mat-label>
            <input matInput formControlName="engineRpm" type="number" min="0">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Fuel Consumption (L/hr)</mat-label>
            <input matInput formControlName="fuelConsumption" type="number" min="0" step="0.1">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Remaining Fuel (L)</mat-label>
            <input matInput formControlName="remainingFuel" type="number" min="0">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Remaining Water (L)</mat-label>
            <input matInput formControlName="remainingWater" type="number" min="0">
          </mat-form-field>
        </div>
      </mat-expansion-panel>

      <!-- SAFETY & NOTES -->
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>shield</mat-icon> Safety & Notes</mat-panel-title>
        </mat-expansion-panel-header>
        <div class="safety-section">
          <mat-checkbox formControlName="safetyCheckDone" color="primary" class="safety-check">
            Safety inspection completed
          </mat-checkbox>
          <mat-divider></mat-divider>
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Incident Notes</mat-label>
            <textarea matInput formControlName="incidentNotes" rows="3"
              placeholder="Accidents, groundings, breakdowns, medical emergencies..."></textarea>
          </mat-form-field>
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Crew & Cargo Changes</mat-label>
            <textarea matInput formControlName="crewRosterChanges" rows="2"
              placeholder="Crew roster changes, cargo loading, ballast water..."></textarea>
          </mat-form-field>
        </div>
      </mat-expansion-panel>

    </mat-accordion>

    <div class="form-actions">
      <button mat-button type="button" (click)="cancel()">Cancel</button>
      <button mat-flat-button color="primary" type="submit">
        <mat-icon>save</mat-icon>
        {{ isEdit ? 'Update Entry' : 'Save Entry' }}
      </button>
    </div>
  </form>
</div>
`, styles: ["/* src/app/features/logbook/logbook-form/logbook-form.component.scss */\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n  padding: 8px 0;\n}\n.form-grid .full-width {\n  grid-column: 1/-1;\n}\nmat-expansion-panel {\n  background: var(--card-bg) !important;\n  color: var(--color-white) !important;\n  margin-bottom: 8px;\n  border: 1px solid rgba(212, 160, 23, 0.2);\n  border-radius: 8px !important;\n}\nmat-expansion-panel mat-panel-title {\n  color: var(--color-gold);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n}\nmat-expansion-panel mat-panel-title mat-icon {\n  color: var(--color-gold);\n}\n.safety-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 8px 0;\n}\n.safety-check {\n  color: var(--color-white);\n}\n.full-width {\n  width: 100%;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-bottom: 24px;\n}\n.manage-link {\n  color: var(--color-gold);\n  text-decoration: none;\n  font-size: 0.75rem;\n}\n.manage-link:hover {\n  text-decoration: underline;\n}\n.map-picker-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 12px;\n}\n.coords-display {\n  font-size: 0.8rem;\n  color: var(--color-gold-light);\n  background: rgba(212, 160, 23, 0.12);\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-family: monospace;\n}\n.map-picker-wrap {\n  margin-top: 12px;\n}\n.map-picker {\n  width: 100%;\n  height: 320px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: crosshair;\n}\n@media (max-width: 600px) {\n  .map-picker {\n    height: 240px;\n  }\n}\n.map-hint {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-dim);\n  margin: 6px 0 0;\n}\n.map-hint mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n/*# sourceMappingURL=logbook-form.component.css.map */\n"] }]
  }], null, { id: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogbookFormComponent, { className: "LogbookFormComponent", filePath: "src/app/features/logbook/logbook-form/logbook-form.component.ts", lineNumber: 38 });
})();
export {
  LogbookFormComponent
};
//# sourceMappingURL=chunk-JQLASDFS.js.map
