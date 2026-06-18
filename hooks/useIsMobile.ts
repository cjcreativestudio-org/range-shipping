"use client";

import { useState, useEffect } from "react";

// Returns true below the Tailwind `md` breakpoint (768px). SSR-safe:
// defaults to desktop (false) on the server so the desktop layout renders
// during hydration, then corrects on mount and on viewport changes.
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
