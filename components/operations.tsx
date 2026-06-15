"use client";

export default function Operations() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24 bg-[#000613]">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(47,135,237,0.03) 0%, transparent 70%)" }}
      />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Main content */}
        <div>
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8">
            Our Operations
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-8">
            Fully Integrated<br />
            <span className="text-white/40">Dry Bulk</span><br />
            Operators
          </h2>
          <p className="text-[15px] leading-relaxed text-white/50 mb-6 max-w-md">
            Commanding a fleet engineered for massive scale. Our operational architecture
            favors order, symmetry, and clarity to ensure high-stakes logistics are
            executed flawlessly across the horizon.
          </p>
          <p className="text-[15px] leading-relaxed text-white/40 max-w-md mb-12">
            From Panamax to Capesize, we operate across the full spectrum of dry bulk
            tonnage, maintaining technical management in-house for uncompromised reliability.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 border border-white/20 text-[11px] tracking-[0.15em] uppercase text-white/70 hover:bg-white/5 hover:border-white/40 transition-all duration-300">
              View Fleet
            </button>
            <button className="px-8 py-3 text-[11px] tracking-[0.15em] uppercase text-[#2f87ed]/80 hover:text-[#2f87ed] transition-colors duration-300">
              Our Services →
            </button>
          </div>
        </div>

        {/* Right: Feature cards */}
        <div className="flex flex-col gap-px">
          {[
            {
              icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
              title: "Technical Management",
              desc: "In-house engineering and maintenance across the full fleet lifecycle.",
            },
            {
              icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
              title: "Commercial Operations",
              desc: "Strategic chartering across spot, time-charter, and voyage fixtures.",
            },
            {
              icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
              title: "S&P Brokerage",
              desc: "Expert vessel acquisition and sale across primary and secondary markets.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-panel px-8 py-7 flex gap-6 items-start group hover:bg-white/[0.06] transition-colors duration-300">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2f87ed]/60 group-hover:text-[#2f87ed] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-[13px] tracking-[0.08em] uppercase text-white/80 mb-2">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/35">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
