import {
  DestroyRef,
  Observable,
  assertInInjectionContext,
  getOutputDestroyRef,
  inject,
  takeUntil
} from "./chunk-RM2KPLBQ.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function outputToObservable(ref) {
  const destroyRef = getOutputDestroyRef(ref);
  return new Observable((observer) => {
    destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe((v) => observer.next(v));
    return () => subscription.unsubscribe();
  });
}

export {
  takeUntilDestroyed,
  outputToObservable
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.22
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-73NCA4NO.js.map
