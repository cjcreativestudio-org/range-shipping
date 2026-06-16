"use client";

import { useRef, useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

const EASE_OUT_QUART = "cubic-bezier(0.165, 0.84, 0.44, 1)";

const CARD_H = 28;
const CARD_GAP = 2;
const STEP = CARD_H + CARD_GAP;

const ANIM_END = 0.75;
const PHASE = ANIM_END / 3;

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
  const [bannerParallax, setBannerParallax] = useState(0);
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
      const bannerRaw = (window.scrollY - (sectionTop - 2 * vh)) / (sectionHeight + 2 * vh);
      setBannerParallax(clamp01(bannerRaw));
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

  const activeIndex = Math.min(Math.floor((progress / ANIM_END) * 3), 2);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-[#001f3f] border-t border-white/5">
      <div className="sticky top-0 h-screen flex overflow-hidden relative">

        {/* Full-section parallax background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dry-bulk-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 top-0 w-full pointer-events-none select-none z-0"
          style={{
            height: "120%",
            objectFit: "cover",
            objectPosition: "center center",
            transform: `translateY(${bannerParallax * -17}%)`,
            willChange: "transform",
          }}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-[#001f3f]/45 pointer-events-none z-0" />

        {/* Left column — heading + meta */}
        <div className="w-1/2 relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16">
          <div className="flex flex-col">
            <h2
              className="font-semibold text-white mb-8"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
            >
              Fully<br />Integrated<br />Dry Bulk<br />Operators
            </h2>
            <p
              className="text-base font-light leading-relaxed text-white/65 max-w-xs mb-10"
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
                      activeIndex === i ? "#0074D9" : "rgba(255,255,255,0.15)",
                    transition: reducedMotion
                      ? "none"
                      : `width 0.4s ${EASE_OUT_QUART}, background-color 0.4s ${EASE_OUT_QUART}`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column — stacked sequential card reveal */}
        <div className="w-1/2 relative z-10 overflow-hidden">
          {SERVICES.map((svc, i) => {
            const entryP = clamp01((progress - i * PHASE) / PHASE);
            const eased = reducedMotion ? entryP : easeOutQuart(entryP);

            const finalY = (i - 1) * STEP;
            const currentY = 80 + (finalY - 80) * eased;
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
                <div className="border border-[#0074D9]/25 h-full flex flex-col justify-center p-6 md:p-8">
                  <span className="text-[0.55rem] tracking-[0.35em] text-white/25 uppercase mb-4 block">
                    {svc.n}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white/90 leading-snug mb-6">
                    {svc.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#0074D9]/50 mb-6" />
                  <p
                    className="text-base font-light leading-relaxed text-white/55"
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
