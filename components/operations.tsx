"use client";

import { useRef, useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

const SERVICES = [
  {
    n: "01",
    title: "Technical Management",
    desc: "In-house engineering and class-compliance maintenance across the full fleet lifecycle. Every vessel operated under owner's supervision, not delegated to third-party managers.",
  },
  {
    n: "02",
    title: "Commercial Operations",
    desc: "Chartering across spot, time-charter, and voyage fixtures. Our commercial desk operates from London and Singapore, with direct relationships across the major commodity houses.",
  },
  {
    n: "03",
    title: "Sales & Purchase",
    desc: "Vessel acquisition and disposal across primary and resale markets. We advise on fleet strategy and execute transactions for institutional owners, funds, and family offices.",
  },
];

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

export default function Operations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = el.offsetHeight;
      const vh = window.innerHeight;
      const raw = (window.scrollY - sectionTop) / (sectionHeight - vh);
      const p = clamp01(raw);
      setActiveIndex(Math.min(Math.floor(p * 3), 2));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const lenis = getLenis();
    let cleanup: (() => void) | null = null;
    if (lenis) {
      lenis.on("scroll", handleScroll);
      cleanup = () => lenis.off("scroll", handleScroll);
    }
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup?.();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-[#001f3f] border-t border-white/5">
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* Left column — heading + meta */}
        <div className="w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 border-r border-white/5">
          <h2
            className="font-condensed text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-8"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Fully<br />Integrated<br />Dry Bulk<br />Operators
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-white/55 max-w-xs mb-10" style={{ textWrap: "pretty" } as React.CSSProperties}>
            From vessel acquisition to cargo delivery, Range Shipping manages the full chain.
            Our fleet spans Handysize to Capesize; our network covers every major bulk trade lane.
          </p>
          <a
            href="#"
            className="inline-block text-sm font-medium text-white/60 border-b border-white/20 pb-0.5 hover:text-crimson hover:border-crimson transition-colors duration-200 w-fit"
          >
            View fleet specifications
          </a>

          {/* Progress dashes */}
          <div className="flex gap-2 mt-14">
            {SERVICES.map((_, i) => (
              <div
                key={i}
                className="h-[1px] transition-all duration-500"
                style={{
                  width: activeIndex === i ? "36px" : "10px",
                  backgroundColor:
                    activeIndex === i ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right column — animated service items */}
        <div className="w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 relative">
          {SERVICES.map((svc, i) => {
            const isActive = activeIndex === i;
            const isPast = activeIndex > i;
            return (
              <div
                key={svc.n}
                className="absolute inset-x-8 md:inset-x-12 lg:inset-x-16"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateY(0px)"
                    : isPast
                    ? "translateY(-36px)"
                    : "translateY(36px)",
                  transition: "opacity 0.65s ease, transform 0.65s ease",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <span className="text-[0.6rem] font-medium tracking-[0.4em] text-white/25 uppercase mb-6 block">
                  {svc.n}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {svc.title}
                </h3>
                <div className="w-10 h-[1px] bg-crimson/40 mb-6" />
                <p className="text-base md:text-lg font-light leading-relaxed text-white/60 max-w-md" style={{ textWrap: "pretty" } as React.CSSProperties}>
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
