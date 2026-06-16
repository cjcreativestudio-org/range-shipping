"use client";

import { useRef, useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";
import { DotPattern } from "@/components/ui/DotPattern";

const EASE_OUT_QUART = "cubic-bezier(0.165, 0.84, 0.44, 1)";

// Card dimensions (vh units) — drives the stacking math
const CARD_H = 28; // card height in vh
const CARD_GAP = 2; // gap between stacked cards in vh
const STEP = CARD_H + CARD_GAP; // 30vh per card slot

// The animation completes at 75% of the total scroll, leaving 25% as dwell
// time where all 3 cards stay visible before the section scrolls away.
const ANIM_END = 0.75;
const PHASE = ANIM_END / 3; // each card occupies 25% of total scroll

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

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function Operations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = el.offsetHeight;
      const vh = window.innerHeight;
      const raw = (window.scrollY - sectionTop) / (sectionHeight - vh);
      setProgress(clamp01(raw));
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

  // Which card is currently entering (for the progress dash indicator)
  const activeIndex = Math.min(Math.floor((progress / ANIM_END) * 3), 2);

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
          <p
            className="text-[15px] font-light leading-relaxed text-white/65 max-w-xs mb-10"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            From vessel acquisition to cargo delivery, Range Shipping manages the full chain.
            Our fleet spans Handysize to Capesize; our network covers every major bulk trade lane.
          </p>
          <a
            href="#"
            className="inline-block text-sm font-medium text-white/60 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/50 transition-colors duration-200 w-fit"
          >
            View fleet specifications
          </a>

          {/* Progress dashes */}
          <div className="flex gap-2 mt-14">
            {SERVICES.map((_, i) => (
              <div
                key={i}
                className="h-[1px]"
                style={{
                  width: activeIndex === i ? "36px" : "10px",
                  backgroundColor:
                    activeIndex === i ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.15)",
                  transition: reducedMotion
                    ? "none"
                    : `width 0.4s ${EASE_OUT_QUART}, background-color 0.4s ${EASE_OUT_QUART}`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right column — stacked sequential card reveal */}
        <div className="w-1/2 relative overflow-hidden">
          {SERVICES.map((svc, i) => {
            // Progress through this card's entry phase (0→1 as p goes from i*PHASE to (i+1)*PHASE)
            const entryP = clamp01((progress - i * PHASE) / PHASE);
            const eased = reducedMotion ? entryP : easeOutQuart(entryP);

            // Final Y offset from the column's vertical center (vh units):
            //   card 0 → above center by 1×STEP
            //   card 1 → at center (0)
            //   card 2 → below center by 1×STEP
            // This centres the three-card group in the column.
            const finalY = (i - 1) * STEP;

            // Cards enter from 80vh below center and animate to their final slot
            const currentY = 80 + (finalY - 80) * eased;

            // Fade in during the first quarter of the entry phase
            const opacity = clamp01(eased / 0.25);

            return (
              <div
                key={svc.n}
                className="absolute left-8 right-8 md:left-12 md:right-12 lg:left-16 lg:right-16"
                style={{
                  height: `${CARD_H}vh`,
                  minHeight: "200px",
                  top: "50%",
                  marginTop: `-${CARD_H / 2}vh`,
                  opacity,
                  transform: `translateY(${currentY}vh)`,
                  willChange: "transform, opacity",
                }}
              >
                <div className="relative overflow-hidden border border-crimson/40 rounded h-full flex flex-col justify-center p-6 md:p-8">
                  <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={0.45}
                    className="fill-white/[0.04] md:fill-white/[0.06]"
                  />
                  <span className="relative z-10 text-[0.6rem] font-medium tracking-[0.4em] text-white/25 uppercase mb-4 block">
                    {svc.n}
                  </span>
                  <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight font-condensed">
                    {svc.title}
                  </h3>
                  <div className="relative z-10 w-8 h-[1px] bg-crimson/50 mb-4" />
                  <p
                    className="relative z-10 text-sm md:text-base font-light leading-relaxed text-white/70"
                    style={{ textWrap: "pretty" } as React.CSSProperties}
                  >
                    {svc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
