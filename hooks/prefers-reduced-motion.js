import { useState, useEffect } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );
    setPrefersReducedMotion(!mediaQueryList.matches);

    const onChange = (event) => {
      setPrefersReducedMotion(!event.matches);
    };

    if (mediaQueryList?.addEventListener) {
      mediaQueryList.addEventListener("change", onChange);
      return () => {
        mediaQueryList.removeEventListener("change", onChange);
      };
    }
  }, []);

  return prefersReducedMotion;
}
