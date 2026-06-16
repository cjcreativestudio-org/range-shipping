"use client";

import { useRef, useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

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

export default function Sustainability() {
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
    <div ref={containerRef} className="relative min-h-[350vh] bg-[#001f3f] border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Centered heading */}
        <div className="flex-none pt-16 pb-10 px-6 text-center">
          <p className="text-[0.55rem] tracking-[0.45em] text-white/30 uppercase mb-5">
            Environmental Policy
          </p>
          <h2
            className="font-condensed text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Low Environmental
            <br />
            Impact
          </h2>
          <p className="text-[14px] font-light text-white/45 mt-5 max-w-md mx-auto leading-relaxed">
            IMO 2030 compliant across active fleet. Net zero target 2050.
          </p>
        </div>

        {/* Scroll-driven section cards */}
        <div className="flex-1 flex items-center justify-center relative px-6">
          {SECTIONS.map((section, i) => {
            const isActive = activeIndex === i;
            const isPast = activeIndex > i;
            return (
              <div
                key={i}
                className="absolute max-w-2xl w-full"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateY(0px) scale(1)"
                    : isPast
                    ? "translateY(-44px) scale(0.97)"
                    : "translateY(44px) scale(0.97)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="border border-white/10 p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-6">
                    <span className="text-[0.55rem] tracking-[0.35em] text-white/25 uppercase mt-1 shrink-0">
                      {section.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white/90 leading-snug">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-[15px] font-light leading-relaxed text-white/55 pl-10 border-t border-white/8 pt-6" style={{ textWrap: "pretty" } as React.CSSProperties}>
                    {section.body}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Progress indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 items-center">
            {SECTIONS.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? "28px" : "5px",
                  height: "5px",
                  backgroundColor:
                    activeIndex === i
                      ? "rgba(255,255,255,0.65)"
                      : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
