"use client";

import { useRef, useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

// Card dimensions (vw units) — drives horizontal stacking math
const CARD_W = 32;        // each card width in vw
const CARD_GAP = 2;       // gap between stacked cards in vw
const STEP = CARD_W + CARD_GAP; // 34vw per card slot

// Animation completes at 75% of total scroll; remaining 25% is dwell time
const ANIM_END = 0.75;
const PHASE = ANIM_END / 3; // each card occupies 25% of total scroll

const EASE_OUT_QUART = "cubic-bezier(0.165, 0.84, 0.44, 1)";

const SECTIONS = [
  {
    num: "01",
    title: "Sustainable Governance",
    body: "We embed sustainability into our corporate strategy, aligning our governance with the UN Sustainable Development Goals. Clearly defined environmental objectives guide every decision across the company.",
  },
  {
    num: "02",
    title: "Stakeholder Collaboration",
    body: "We foster open communication with employees, customers, suppliers, and investors — understanding their expectations and incorporating their feedback into our sustainability strategies.",
  },
  {
    num: "03",
    title: "Supply Chain Responsibility",
    body: "We extend our commitment across the entire supply chain, working with partners who share our values and engaging with industry bodies to advocate for policies that drive positive change at scale.",
  },
];

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function Sustainability() {
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
      // Banner parallax starts 2 viewports before the section enters
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
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden relative">
        {/* Banner background image — covers full sticky panel, parallax pans with scroll */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sustainability-banner.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 top-0 w-full opacity-80 pointer-events-none select-none z-0"
          style={{
            height: "200%",
            objectFit: "cover",
            objectPosition: "center top",
            transform: `translateY(${bannerParallax * -50}%)`,
            willChange: "transform",
          }}
        />
        {/* Overlay to keep text legible */}
        <div className="absolute inset-0 bg-[#001f3f]/20 pointer-events-none z-0" />

        {/* Heading — compact, close to the cards */}
        <div className="flex-none relative pt-10 pb-5 px-6 text-center">
          <p className="relative z-10 text-[0.55rem] tracking-[0.45em] text-white/30 uppercase mb-4">
            Environmental Policy
          </p>
          <h2
            className="relative z-10 font-condensed text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Low Environmental
            <br />
            Impact
          </h2>
          <p className="relative z-10 text-[14px] font-light text-white/45 mt-4 max-w-md mx-auto leading-relaxed">
            IMO 2030 compliant across active fleet. Net zero target 2050.
          </p>
        </div>

        {/* Horizontal card strip */}
        <div className="flex-1 relative overflow-hidden z-10">
          {SECTIONS.map((section, i) => {
            // Progress through this card's entry phase
            const entryP = clamp01((progress - i * PHASE) / PHASE);
            const eased = reducedMotion ? entryP : easeOutQuart(entryP);

            // Final X offset from column centre (vw):
            //   card 0 → left of centre  (−STEP)
            //   card 1 → at centre       (0)
            //   card 2 → right of centre (+STEP)
            // The three cards tile the full viewport width with CARD_GAP between them.
            const finalX = (i - 1) * STEP;

            // Cards enter from 120vw to the right of centre
            const currentX = 120 + (finalX - 120) * eased;

            // Fade in during the first quarter of the entry phase
            const opacity = clamp01(eased / 0.25);

            return (
              <div
                key={i}
                className="absolute top-0 bottom-0"
                style={{
                  width: `${CARD_W}vw`,
                  left: "50%",
                  marginLeft: `-${CARD_W / 2}vw`,
                  transform: `translateX(${currentX}vw)`,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                <div className="border border-white/10 h-full flex flex-col justify-center p-8 md:p-10">
                  <span className="text-[0.55rem] tracking-[0.35em] text-white/25 uppercase mb-4 block">
                    {section.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white/90 leading-snug mb-6">
                    {section.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-white/15 mb-6" />
                  <p
                    className="text-[15px] font-light leading-relaxed text-white/55"
                    style={{ textWrap: "pretty" } as React.CSSProperties}
                  >
                    {section.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress dashes */}
        <div className="flex-none flex justify-center gap-2 pb-8 z-10 relative">
          {SECTIONS.map((_, i) => (
            <div
              key={i}
              className="h-[1px]"
              style={{
                width: activeIndex === i ? "32px" : "10px",
                backgroundColor:
                  activeIndex === i ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)",
                transition: reducedMotion
                  ? "none"
                  : `width 0.4s ${EASE_OUT_QUART}, background-color 0.4s ${EASE_OUT_QUART}`,
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
