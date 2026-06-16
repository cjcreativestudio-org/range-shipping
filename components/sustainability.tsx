"use client";

export default function Sustainability() {
  const goals = [
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
      desc: "Investment in AI-assisted voyage optimisation and novel hull forms developed for the 2026 newbuild programme.",
    },
  ];

  return (
    <section className="relative bg-[#001f3f] px-6 md:px-12 py-28 md:py-36 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Top: full-width commitment statement + compliance note in a row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2
            className="font-condensed text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-lg"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Low<br />Environmental<br />Impact
          </h2>
          <div className="md:max-w-sm">
            <p className="text-[15px] font-light leading-relaxed text-white/65 mb-4" style={{ textWrap: "pretty" } as React.CSSProperties}>
              The oceans we operate on are the oceans we are obligated to protect. Range Shipping aligns its fleet programme with the IMO 2030 carbon intensity targets and the UN Sustainable Development Goals.
            </p>
            <p className="text-[13px] font-medium text-white/45">
              IMO 2030 compliant across active fleet. Net zero target 2050.
            </p>
          </div>
        </div>

        {/* SDG alignments — 3-column grid, distinct from Operations vertical list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          {goals.map((goal) => (
            <div key={goal.code} className="bg-[#001f3f] p-8">
              <p className="text-[10px] font-medium tracking-widest text-white/35 uppercase mb-5">
                {goal.code}
              </p>
              <h3 className="text-[16px] font-semibold text-white/90 mb-3">
                {goal.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
                {goal.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/8">
          <a
            href="#"
            className="text-sm font-medium text-white/60 border-b border-white/20 pb-0.5 hover:text-crimson hover:border-crimson transition-colors duration-200"
          >
            Read the sustainability report
          </a>
        </div>
      </div>
    </section>
  );
}
