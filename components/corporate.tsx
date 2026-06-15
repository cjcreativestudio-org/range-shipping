"use client";

export default function Corporate() {
  return (
    <section className="relative bg-[#04080f] border-t border-white/5 px-6 md:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-6">
              Corporate Profile
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white/90 leading-tight tracking-tight">
              Institutional<br />Stability
            </h2>
            <div className="w-12 h-[1px] bg-[#2f87ed]/40 mt-8" />
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-[16px] leading-relaxed text-white/45 mb-6">
              Range Shipping sits at the intersection of heavy maritime industry and global
              finance. Our structural approach to fleet management prioritises functional
              clarity and risk mitigation.
            </p>
            <p className="text-[15px] leading-relaxed text-white/30">
              By leveraging sharp geometry in our planning and purposeful industrial accents
              in our execution, we deliver unyielding reliability in a volatile global market.
              Our focus remains on delivering high-stakes information and assets without distraction.
            </p>
          </div>
        </div>

        {/* History & S&P */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          <div className="bg-[#04080f] px-10 py-10 border-t border-white/5">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-3">
              History & Heritage
            </p>
            <h3 className="text-xl font-light text-white/80 uppercase mb-4 tracking-wide">
              Established 1978
            </h3>
            <p className="text-[14px] leading-relaxed text-white/35">
              Founded on principles of technical excellence and commercial integrity.
              Nearly five decades of operation across the world&apos;s most demanding
              maritime trade lanes.
            </p>
          </div>
          <div className="bg-[#04080f] px-10 py-10 border-t border-white/5">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-3">
              S&P Services
            </p>
            <h3 className="text-xl font-light text-white/80 uppercase mb-4 tracking-wide">
              Sales & Purchase
            </h3>
            <p className="text-[14px] leading-relaxed text-white/35">
              Comprehensive brokerage and vessel acquisition services provided to
              institutional clients, sovereign wealth funds, and private equity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
