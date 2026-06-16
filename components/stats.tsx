"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatItem({ figure, label, active }: { figure: number; label: string; active: boolean }) {
  const count = useCountUp(figure, active);
  return (
    <div>
      <p className="text-2xl md:text-3xl font-semibold text-white tabular-nums mb-1">
        {count.toLocaleString()}
      </p>
      <p className="text-sm font-light text-white/55 tracking-wide">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#001f3f] px-6 md:px-12 py-28 md:py-36 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-4xl mb-20">
          <p
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.3] text-white/90"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            In 2025, Range Shipping handled{" "}
            <span className="font-semibold text-[#0074D9]">2,973,854 metric tonnes</span>{" "}
            of dry bulk cargo, calling{" "}
            <span className="font-semibold text-[#0074D9]">118 ports</span>{" "}
            worldwide with tonnage under period.
          </p>
        </div>

        <div
          className={`border-t border-[#0074D9]/25 pt-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <StatItem figure={2973854} label="MT cargo handled in 2025" active={visible} />
          <StatItem figure={118}     label="Ports called worldwide"   active={visible} />
          <StatItem figure={29}      label="Ships operated in 2025"   active={visible} />
          <StatItem figure={1938783} label="DWT under operation"      active={visible} />
        </div>

      </div>
    </section>
  );
}
