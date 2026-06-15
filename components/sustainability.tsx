"use client";

export default function Sustainability() {
  const goals = [
    {
      number: "SDG 13",
      title: "Climate Action",
      desc: "Optimised routing and hybrid propulsion systems reducing carbon intensity by 40%.",
      color: "from-green-900/20 to-transparent",
    },
    {
      number: "SDG 14",
      title: "Life Below Water",
      desc: "Advanced ballast water treatment eliminating invasive species transfer across all vessels.",
      color: "from-blue-900/20 to-transparent",
    },
    {
      number: "SDG 09",
      title: "Industry & Innovation",
      desc: "Investment in next-generation naval engineering and AI-driven market intelligence.",
      color: "from-slate-900/20 to-transparent",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24 bg-[#000613]">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(16,80,30,0.06) 0%, transparent 70%)" }}
      />

      <div className="w-full max-w-6xl">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-6">
            Sustainability
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6">
            Low Environmental<br />
            <span className="text-white/40">Impact Operations</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-white/40 max-w-lg">
            We are committed to aligning our operations with the UN Sustainable
            Development Goals — because the ocean we operate on is the ocean we must protect.
          </p>
        </div>

        {/* SDG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-px">
          {goals.map((goal) => (
            <div key={goal.number} className={`glass-panel p-10 bg-gradient-to-br ${goal.color} relative overflow-hidden group hover:bg-white/[0.06] transition-colors duration-300`}>
              <p className="text-[10px] tracking-[0.4em] text-white/20 uppercase mb-6">
                {goal.number}
              </p>
              <h3 className="text-[18px] font-light text-white/90 mb-4 tracking-tight">
                {goal.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-white/35">
                {goal.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="glass-panel px-8 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <p className="text-[12px] tracking-[0.15em] uppercase text-white/50">
              IMO 2030 Compliant — Net Zero Target 2050
            </p>
          </div>
          <button className="text-[11px] tracking-[0.15em] uppercase text-[#2f87ed]/70 hover:text-[#2f87ed] transition-colors">
            Read Sustainability Report →
          </button>
        </div>
      </div>
    </section>
  );
}
