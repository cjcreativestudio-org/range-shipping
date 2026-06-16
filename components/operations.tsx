export default function Operations() {
  const services = [
    {
      n: "01",
      title: "Technical Management",
      desc: "In-house engineering and class-compliance maintenance across the full fleet lifecycle. Every vessel operated under owner's supervision, not delegated to third-party managers.",
    },
    {
      n: "02",
      title: "Commercial Operations",
      desc: "Chartering across spot, time-charter, and voyage fixtures. Our commercial desk operates from London and Singapore, with direct relationships across the major commodity houses.",
    },
    {
      n: "03",
      title: "Sales & Purchase",
      desc: "Vessel acquisition and disposal across primary and resale markets. We advise on fleet strategy and execute transactions for institutional owners, funds, and family offices.",
    },
  ];

  return (
    <section className="relative bg-[#001f3f] px-6 md:px-12 py-28 md:py-36 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

        {/* Left: heading block */}
        <div className="lg:col-span-5">
          <h2
            className="font-condensed text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Fully Integrated<br />Dry Bulk<br />Operators
          </h2>
          <p className="text-[16px] font-light leading-relaxed text-white/65 mb-8 max-w-sm" style={{ textWrap: "pretty" } as React.CSSProperties}>
            From vessel acquisition to cargo delivery, Range Shipping manages the full chain. Our fleet spans Handysize to Capesize; our network covers every major bulk trade lane.
          </p>
          <a
            href="#"
            className="inline-block text-sm font-medium text-white/70 border-b border-white/25 pb-0.5 hover:text-crimson hover:border-crimson transition-colors duration-200"
          >
            View fleet specifications
          </a>
        </div>

        {/* Right: numbered service list — genuine sequence, not scaffold */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-white/8">
          {services.map((svc) => (
            <div key={svc.n} className="py-8 first:pt-0 last:pb-0 flex gap-8 items-start group">
              <span className="text-xs font-medium text-white/30 mt-1 w-6 shrink-0 tabular-nums">
                {svc.n}
              </span>
              <div>
                <h3 className="text-[17px] font-semibold text-white/90 mb-2 group-hover:text-white transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-[14px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
