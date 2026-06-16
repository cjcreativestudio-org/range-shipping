"use client";

import { useRef, useEffect, useState } from "react";

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

type Membership = (typeof MEMBERSHIPS)[number];

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
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 text-[10px] tracking-[0.35em] text-[#001f3f]/30 uppercase hover:text-[#001f3f]/70 transition-colors duration-200"
        >
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
          <p key={i} className="text-[15px] font-light leading-relaxed text-[#001f3f]/65 mb-4 last:mb-0" style={{ textWrap: "pretty" } as React.CSSProperties}>
            {para}
          </p>
        ))}
      </div>
      <style>{`@keyframes modal-in { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

export default function Memberships() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Membership | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative border-t border-black/5"
        style={{ background: "linear-gradient(to bottom, #ffffff 50%, #0074D9 50%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-10 pb-12">

          {/* Compact horizontal header */}
          <div className="flex items-baseline gap-6 md:gap-10 mb-8 flex-wrap">
            <p className="text-[0.5rem] tracking-[0.45em] text-[#001f3f]/35 uppercase whitespace-nowrap">
              Industry Memberships
            </p>
            <h2
              className="font-bold text-[#001f3f]"
              style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Recognised by Global Bodies
            </h2>
            <p className="hidden md:block text-[12px] font-light text-[#001f3f]/40 leading-relaxed ml-auto">
              Click any membership to learn more.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MEMBERSHIPS.map((m, i) => (
              <div
                key={m.id}
                className="group cursor-pointer"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
                onClick={() => setSelected(m)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(m)}
                aria-label={`Learn more about ${m.name}`}
              >
                <div className="border border-black/8 bg-white h-full flex flex-col justify-between p-5 transition-all duration-300 group-hover:border-[#001f3f]/15 group-hover:shadow-[0_6px_24px_rgba(0,31,63,0.09)]">
                  {/* Logo */}
                  <div className="h-16 flex items-center mb-4" style={{ background: "white" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.logo}
                      alt={m.name}
                      className="max-h-full max-w-[140px] object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "white" }}
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#001f3f] leading-snug mb-2">{m.name}</h3>
                    <div className="w-5 h-[1px] bg-[#0074D9]/50 mb-3" />
                    <p className="text-[12px] font-light leading-relaxed text-[#001f3f]/50 group-hover:text-[#001f3f]/70 transition-colors duration-300">
                      {m.tagline}
                    </p>
                  </div>
                  {/* Expand hint */}
                  <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] tracking-[0.3em] text-[#001f3f]/35 uppercase">Learn more</span>
                    <div className="flex-1 h-[1px] bg-black/10 max-w-[1.5rem]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && <Modal m={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
