"use client";

export default function Sustainability() {
  return (
    <section className="relative bg-[#04080f] px-6 md:px-12 py-28 md:py-36 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Left: commitment statement */}
        <div className="lg:col-span-5">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-8"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Low<br />Environmental<br />Impact
          </h2>
          <p className="text-[16px] font-light leading-relaxed text-white/65 mb-10" style={{ textWrap: "pretty" } as React.CSSProperties}>
            The oceans we operate on are the oceans we are obligated to protect. Range Shipping aligns its fleet programme with the IMO 2030 carbon intensity targets and the UN Sustainable Development Goals.
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400/70 shrink-0" />
            <p className="text-sm font-medium text-white/60">
              IMO 2030 compliant across active fleet
            </p>
          </div>
          <p className="text-sm font-light text-white/40 mt-1 ml-4.5 pl-1">
            Net zero target 2050
          </p>
        </div>

        {/* Right: SDG alignments as a plain editorial list */}
        <div className="lg:col-span-7">
          <div className="flex flex-col divide-y divide-white/8">
            {[
              {
                code: "SDG 13",
                title: "Climate Action",
                desc: "Optimised routing and hybrid propulsion across the Panamax fleet, reducing carbon intensity by 40% against the 2008 IMO baseline.",
              },
              {
                code: "SDG 14",
                title: "Life Below Water",
                desc: "Ballast water treatment systems fitted fleet-wide, meeting D-2 biological standards and eliminating invasive species transfer across trade lanes.",
              },
              {
                code: "SDG 09",
                title: "Industry & Innovation",
                desc: "Investment in AI-assisted voyage optimisation and next-generation naval architecture for the 2026 newbuild programme.",
              },
            ].map((goal) => (
              <div key={goal.code} className="py-8 first:pt-0 last:pb-0 grid grid-cols-12 gap-6 items-start">
                <div className="col-span-3">
                  <p className="text-[11px] font-medium tracking-widest text-white/35 uppercase">
                    {goal.code}
                  </p>
                </div>
                <div className="col-span-9">
                  <h3 className="text-[16px] font-semibold text-white/90 mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-[14px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
                    {goal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/8">
            <a
              href="#"
              className="text-sm font-medium text-white/60 border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors duration-200"
            >
              Read the sustainability report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
