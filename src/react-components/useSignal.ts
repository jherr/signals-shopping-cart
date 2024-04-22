import { useSyncExternalStore } from "react";
import { Signal } from "signal-polyfill";

import { effect } from "../effect";

export function useComputed<T>(signal: Signal.Computed<T>): T {
  let value = signal.get();
  return useSyncExternalStore(
    (cb) =>
      effect(() => {
        value = signal.get();
        cb();
      }),
    () => value,
    () => value
  );
}

export function useSignal<T>(signal: Signal.State<T>): [T, (val: T) => void] {
  let value = signal.get();
  return [
    useSyncExternalStore(
      (cb) =>
        effect(() => {
          value = signal.get();
          cb();
        }),
      () => value,
      () => value
    ),
    (val) => signal.set(val),
  ];
}
