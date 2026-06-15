"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cargo = useCountUp(2973854, 2500, visible);
  const ports = useCountUp(118, 1800, visible);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24 bg-[#000613]">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(47,135,237,0.04) 0%, transparent 70%)" }}
      />

      <div className="w-full max-w-5xl">
        {/* Section label */}
        <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-16 text-center">
          Operations at a Glance
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {/* Stat 1 */}
          <div className="glass-panel p-12 md:p-16 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/35 mb-4">
              Cargo Handled 2025
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2f87ed] tracking-tight tabular-nums">
              {visible ? cargo.toLocaleString() : "0"}
            </h2>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/25 mt-3">MT</p>
            <div className="w-12 h-[1px] bg-[#2f87ed]/30 mt-8" />
          </div>

          {/* Stat 2 */}
          <div className="glass-panel p-12 md:p-16 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/35 mb-4">
              Ports Worldwide
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2f87ed] tracking-tight tabular-nums">
              {visible ? ports : "0"}
            </h2>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/25 mt-3">Active Ports</p>
            <div className="w-12 h-[1px] bg-[#2f87ed]/30 mt-8" />
          </div>
        </div>

        {/* Sub-stats row */}
        <div className="grid grid-cols-3 gap-px mt-px bg-white/5">
          {[
            { value: "47", unit: "Years", label: "Est. 1978" },
            { value: "1,200+", unit: "", label: "Voyages per year" },
            { value: "60", unit: "Countries", label: "Global reach" },
          ].map((item) => (
            <div key={item.label} className="glass-panel px-8 py-8">
              <p className="text-2xl md:text-3xl font-light text-white/80 tabular-nums">
                {item.value}
                {item.unit && <span className="text-sm text-white/30 ml-1">{item.unit}</span>}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
