"use client";

import { useEffect, useRef } from "react";

export default function DryBulkParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      if (sectionRef.current && imgRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewH = window.innerHeight;
        // 0 when section top hits bottom of viewport, 1 when section bottom hits top
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        // translate from +80px (before visible) to -80px (after passed)
        const offset = (0.5 - clamped) * 160;
        imgRef.current.style.transform = `translateY(${offset}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ height: "72vh" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="/dry-bulk-parallax.png"
        alt="Dry-bulk carrier vessel at open sea"
        className="absolute w-full object-cover will-change-transform"
        style={{
          height: "140%",
          top: "-20%",
          filter: "saturate(0.6) brightness(0.72)",
        }}
      />
      {/* fade into surrounding navy sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/70 via-transparent to-[#001f3f]/70 pointer-events-none" />
    </section>
  );
}
