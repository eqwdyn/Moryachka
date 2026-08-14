import { useEffect } from "react";

export function useDebounce(callback: () => void, ms: number, deps: unknown[]) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, ms);

    return () => clearTimeout(timer);
  }, deps);
}
