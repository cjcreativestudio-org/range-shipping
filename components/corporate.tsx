export default function Corporate() {
  return (
    <section className="relative bg-[#001f3f] border-t border-white/5 px-6 md:px-12 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header — vertical stack */}
        <div className="max-w-3xl mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Institutional<br />Stability
          </h2>
          <p className="text-[17px] font-light leading-relaxed text-white/65 mb-4" style={{ textWrap: "pretty" } as React.CSSProperties}>
            Range Shipping operates at the intersection of heavy maritime industry and institutional finance. Fleet management is structured around functional clarity and risk mitigation: we remove the variables that lose money, and protect the ones that make it.
          </p>
          <p className="text-base font-light leading-relaxed text-white/50" style={{ textWrap: "pretty" } as React.CSSProperties}>
            Unyielding reliability in a volatile global market. Our focus remains on delivering high-stakes information and assets without distraction.
          </p>
        </div>

        {/* History & S&P — horizontal dividers, no glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
          <div className="pb-10 md:pb-0 md:pr-16">
            <h3 className="text-[13px] font-medium tracking-widest uppercase text-white/50 mb-5">
              History
            </h3>
            <p className="text-xl font-semibold text-white/90 mb-4">Founded 1978</p>
            <p className="text-[14px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
              Built on technical excellence and commercial integrity. Nearly five decades across the world&apos;s most demanding maritime trade lanes, with ownership continuity that most operators cannot claim.
            </p>
          </div>
          <div className="pt-10 md:pt-0 md:pl-16">
            <h3 className="text-[13px] font-medium tracking-widest uppercase text-white/50 mb-5">
              S&amp;P Services
            </h3>
            <p className="text-xl font-semibold text-white/90 mb-4">Sales &amp; Purchase</p>
            <p className="text-[14px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
              Brokerage and vessel acquisition for institutional clients, sovereign wealth funds, and private capital. We act as principal, advisor, and counterparty across primary and resale markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
