"use client";

import { useRef, useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

const MEMBERSHIPS = [
  {
    id: 0,
    name: "UK Chamber of Shipping",
    tagline: "The trade association and voice of the UK shipping industry.",
    description:
      "Range Shipping is a member of the UK Chamber of Shipping, the trade association and voice of the UK shipping industry.\n\nThe Chamber works to unite, promote and champion an environment for shipping in the UK to thrive, helping to deliver a greener world and a more prosperous nation.",
    logo: "/logos/uk-chamber.png",
  },
  {
    id: 1,
    name: "Baltic Exchange",
    tagline: "The world's only source of independent marine market information.",
    description:
      "Range Shipping is a member of the Baltic Exchange, the world's only source of independent marine market information for trading and settling physical and derivative contracts.\n\nThe Baltic Exchange's international community of more than 3,000 members encompasses the world's maritime interests.",
    logo: "/logos/baltic-exchange.png",
  },
  {
    id: 2,
    name: "BIMCO",
    tagline: "The world's largest direct membership organisation for shipowners.",
    description:
      "Range Shipping is a member of the Baltic and International Maritime Council (BIMCO), the world's largest direct membership organization for shipowners, charterers, brokers and agents.\n\nIn partnership with other BIMCO members, we work to ensure a level playing field for the global shipping industry by exchanging experiences and best practices, as well as promoting and ensuring standards and global environmental regulation for the maritime sector.",
    logo: "/logos/bimco.png",
  },
];

// TODO: Replace with real 2026 sponsorship data + logo assets
const SPONSORSHIPS: { id: number; name: string; tagline: string; logo: string | null }[] = [
  { id: 0, name: "Coming Soon", tagline: "2026 sponsorship details will be announced shortly.", logo: null },
  { id: 1, name: "Coming Soon", tagline: "2026 sponsorship details will be announced shortly.", logo: null },
  { id: 2, name: "Coming Soon", tagline: "2026 sponsorship details will be announced shortly.", logo: null },
];

type Membership = (typeof MEMBERSHIPS)[number];

function clamp01(v: number) { return Math.max(0, Math.min(1, v)); }
function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }

function Modal({ m, onClose }: { m: Membership; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-[#001f3f]/85 backdrop-blur-md" />
      <div
        className="relative z-10 w-full max-w-xl bg-white p-10 md:p-14"
        style={{ animation: "modal-in 0.3s cubic-bezier(0.165,0.84,0.44,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-6 right-6 text-[10px] tracking-[0.35em] text-[#001f3f]/30 uppercase hover:text-[#001f3f]/70 transition-colors duration-200">
          Close
        </button>
        <div className="h-14 flex items-center bg-white mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.logo} alt={m.name} className="max-h-full max-w-[200px] object-contain" style={{ background: "white" }} />
        </div>
        <p className="text-[0.55rem] tracking-[0.45em] text-[#001f3f]/35 uppercase mb-3">Industry Membership</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[#001f3f] leading-tight mb-8">{m.name}</h3>
        <div className="w-8 h-[1px] bg-[#0074D9]/50 mb-8" />
        {m.description.split("\n\n").map((para, i) => (
          <p key={i} className="text-[15px] font-light leading-relaxed text-[#001f3f]/65 mb-4 last:mb-0" style={{ textWrap: "pretty" } as React.CSSProperties}>{para}</p>
        ))}
      </div>
      <style>{`@keyframes modal-in { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

function MemberCard({ m, style, onClick }: { m: (typeof MEMBERSHIPS)[number]; style: React.CSSProperties; onClick: () => void }) {
  return (
    <div className="group cursor-pointer h-full" style={style} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClick()} aria-label={`Learn more about ${m.name}`}>
      <div className="border border-black/8 bg-white h-full flex flex-col justify-between p-5 transition-all duration-300 ease-out group-hover:scale-[1.04] group-hover:border-[#0074D9]/30 group-hover:shadow-[0_0_0_1px_rgba(0,116,217,0.15),0_12px_40px_rgba(0,31,63,0.14),0_0_60px_rgba(0,116,217,0.06)]">
        <div className="h-16 flex items-center mb-4" style={{ background: "white" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.logo} alt={m.name} className="max-h-full max-w-[140px] object-contain opacity-55 group-hover:opacity-90 transition-opacity duration-300" style={{ background: "white" }} />
        </div>
        <div>
          <h3 className="text-[14px] font-semibold text-[#001f3f] leading-snug mb-2">{m.name}</h3>
          <div className="w-5 h-[1px] bg-[#0074D9]/50 mb-3 transition-all duration-300 group-hover:w-8 group-hover:bg-[#0074D9]/80" />
          <p className="text-[12px] font-light leading-relaxed text-[#001f3f]/50 group-hover:text-[#001f3f]/70 transition-colors duration-300">{m.tagline}</p>
        </div>
        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[9px] tracking-[0.3em] text-[#001f3f]/35 uppercase">Learn more</span>
          <div className="flex-1 h-[1px] bg-[#0074D9]/30 max-w-[1.5rem]" />
        </div>
      </div>
    </div>
  );
}

export default function Memberships() {
  const sectionRef = useRef<HTMLElement>(null);
  const [view, setView] = useState<"memberships" | "sponsorships">("memberships");
  const [teaserExpanded, setTeaserExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selected, setSelected] = useState<Membership | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setScrollProgress(clamp01((vh - rect.top) / (rect.height + vh * 0.6)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const lenis = getLenis();
    let cleanup: (() => void) | null = null;
    if (lenis) { lenis.on("scroll", handleScroll); cleanup = () => lenis.off("scroll", handleScroll); }
    handleScroll();
    return () => { window.removeEventListener("scroll", handleScroll); cleanup?.(); };
  }, []);

  const cardStyle = (i: number): React.CSSProperties => {
    const p = easeOutQuart(clamp01((scrollProgress - i * 0.12) / 0.5));
    return { opacity: p, transform: `translateY(${(1 - p) * 72}px)`, willChange: "transform, opacity", transition: "none" };
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-white border-t border-black/5"
        style={{ overflowX: "hidden" }}
      >
        {/* Carousel slider — 200% wide, two side-by-side panels */}
        <div
          className="flex"
          style={{
            width: "200%",
            transform: view === "sponsorships" ? "translateX(-50%)" : "translateX(0)",
            transition: "transform 0.75s cubic-bezier(0.165,0.84,0.44,1)",
          }}
        >
          {/* ── PANEL 1: Memberships ── */}
          <div style={{ width: "50%" }}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 pt-10 pb-12">
              <div className="flex items-baseline justify-between mb-8 gap-4">
                <h2 className="font-bold text-[#001f3f]" style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  Recognised by Global Bodies
                </h2>
                <p className="text-[0.5rem] tracking-[0.45em] text-[#001f3f]/35 uppercase whitespace-nowrap">
                  Industry Memberships
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {MEMBERSHIPS.map((m, i) => {
                  if (i < 2) {
                    return <MemberCard key={m.id} m={m} style={cardStyle(i)} onClick={() => setSelected(m)} />;
                  }

                  // BIMCO (i === 2) — includes the teaser card behind it
                  return (
                    <div key={m.id} className="relative" style={cardStyle(i)}>
                      {/* Teaser card — peeks from behind BIMCO, expands right on hover */}
                      <div
                        className="absolute inset-y-1 z-0 cursor-pointer"
                        style={{
                          right: 0,
                          width: "160px",
                          transformOrigin: "left center",
                          transform: teaserExpanded
                            ? "translateX(148px) rotate(0deg)"
                            : "translateX(20px) rotate(5deg)",
                          transition: "transform 0.45s cubic-bezier(0.165,0.84,0.44,1)",
                        }}
                        onMouseEnter={() => setTeaserExpanded(true)}
                        onMouseLeave={() => setTeaserExpanded(false)}
                        onClick={() => { setView("sponsorships"); setTeaserExpanded(false); }}
                        role="button"
                        aria-label="View 2026 Sponsorships"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setView("sponsorships")}
                      >
                        <div className="h-full bg-[#001529] border border-white/10 flex flex-col justify-between p-4 select-none">
                          {/* Text — fades in when expanded */}
                          <div style={{ opacity: teaserExpanded ? 1 : 0, transition: "opacity 0.2s 0.15s" }}>
                            <p className="text-[0.45rem] tracking-[0.4em] text-white/40 uppercase mb-2">Click to explore</p>
                            <h3 className="text-white font-semibold text-sm leading-snug">
                              2026<br />Sponsorships
                            </h3>
                          </div>
                          {/* Arrow — always visible */}
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-[1px] bg-white/15" />
                            <span className="text-white/50 text-xs">→</span>
                          </div>
                        </div>
                      </div>

                      {/* BIMCO card — sits above teaser */}
                      <div className="relative z-10 h-full">
                        <MemberCard m={m} style={{}} onClick={() => setSelected(m)} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── PANEL 2: Sponsorships ── */}
          <div style={{ width: "50%" }}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 pt-10 pb-12">
              <div className="flex items-baseline justify-between mb-8 gap-4">
                {/* Back button — left side */}
                <button
                  onClick={() => setView("memberships")}
                  className="flex items-center gap-3 text-[0.5rem] tracking-[0.4em] text-[#001f3f]/40 uppercase hover:text-[#001f3f]/80 transition-colors duration-200 group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                  <span>Back to Memberships</span>
                </button>

                <h2 className="font-bold text-[#001f3f]" style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  2026 Sponsorships
                </h2>
              </div>

              {/* Placeholder cards — replace once assets arrive */}
              <div className="grid grid-cols-3 gap-4">
                {SPONSORSHIPS.map((s) => (
                  <div key={s.id} className="border border-black/8 bg-white p-5 flex flex-col justify-between min-h-[200px]">
                    <div className="h-16 flex items-center">
                      <div className="w-16 h-8 bg-black/5 rounded" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#001f3f]/30 leading-snug mb-2">{s.name}</h3>
                      <div className="w-5 h-[1px] bg-[#0074D9]/20 mb-3" />
                      <p className="text-[12px] font-light text-[#001f3f]/30 leading-relaxed">{s.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && <Modal m={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
