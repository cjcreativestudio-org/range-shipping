"use client";

import { useEffect, useRef, useState } from "react";

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

        {/* Primary statement — numbers woven into prose, not celebrated as metrics */}
        <div className="max-w-4xl mb-20">
          <p
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.3] text-white/90"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            In 2025, Range Shipping moved{" "}
            <span className="font-semibold text-white">2,973,854 metric tonnes</span>{" "}
            of dry bulk cargo across{" "}
            <span className="font-semibold text-white">118 ports</span>{" "}
            in 60 countries. The 47th year of continuous operation under single-ownership technical management.
          </p>
        </div>

        {/* Data strip — secondary figures as a plain horizontal rule, not a card grid */}
        <div
          className={`border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {[
            { figure: "1978", label: "Year founded" },
            { figure: "1,200+", label: "Voyages per year" },
            { figure: "60", label: "Countries served" },
            { figure: "47 yrs", label: "Continuous operation" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl md:text-3xl font-semibold text-white tabular-nums mb-1">
                {item.figure}
              </p>
              <p className="text-sm font-light text-white/55 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
