import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Range Shipping",
  description: "Founded in 2017 and headquartered in London, Range Shipping operates a specialised fleet within the Handysize and Panamax dry bulk sectors.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="bg-[#000613] px-6 md:px-12 py-24 md:py-32 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-2xl"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              About Range<br />Shipping
            </h1>
            <p className="text-[18px] font-light leading-relaxed text-white/65 max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
              Prioritising health, safety, quality, and environmental responsibility across global maritime logistics.
            </p>
          </div>
        </section>

        {/* Overview: text + image */}
        <section className="bg-[#04080f] px-6 md:px-12 py-24 md:py-28 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white/90 leading-tight tracking-tight mb-8"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Global Reach,<br />Deep Expertise
              </h2>
              <p className="text-[16px] font-light leading-relaxed text-white/65 mb-5 max-w-lg" style={{ textWrap: "pretty" } as React.CSSProperties}>
                Founded in 2017 and headquartered in London, Range Shipping operates a highly specialised fleet within the Handysize and Panamax sectors. Our institutional approach to global logistics ensures precision, reliability, and data integrity in high-stakes environments.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-white/55 max-w-lg" style={{ textWrap: "pretty" } as React.CSSProperties}>
                Rigorous commercial models and an unyielding commitment to operational excellence deliver consistent returns in a volatile global market.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/15 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASVPfrWprNwflxYDqC9tHcnXVgInugs0Ps6aCBXT0HLBm65ZJE6eE8h7xvYki6T_ynxpWYmnNxLDp3d-X_kXX-WXV7HvwUp56ptDVDBK-7Fd36sYAOw2JhLSTkeqMYC6Twwv2n6OL3dz2dbh02EQYkVvrsYp0Kpg210z_BULhKHKjCopPcvk93vEaWn0YK_WqQtb47_pkYeQhCpprOK4FS6mRTIuYD56sFr2JGP7cLigH19gV7hYKsapKgElMQZCJ8kP9YIG28ACo"
                alt="Range Shipping corporate maritime office overlooking an industrial port"
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* S&P Market */}
        <section className="bg-[#000613] px-6 md:px-12 py-24 md:py-28 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl md:text-4xl font-bold text-white/90 leading-tight tracking-tight"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Active in the S&amp;P Market
              </h2>
              <div className="w-10 h-[2px] bg-white/20 mt-8" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-[17px] font-light leading-relaxed text-white/65 mb-5" style={{ textWrap: "pretty" } as React.CSSProperties}>
                Range Shipping remains highly active in the Sale and Purchase market, acting strictly as a principal. We specialise in structuring complex transactions, securing strategic assets, and maintaining an agile portfolio to capitalise on shifting global trade dynamics.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-white/50" style={{ textWrap: "pretty" } as React.CSSProperties}>
                Deep market intelligence and direct relationships across major commodity houses, shipyards, and financial institutions allow us to execute at speed — without compromising on counterparty quality.
              </p>
            </div>
          </div>
        </section>

        {/* Core Mandates — editorial list, not card grid */}
        <section className="bg-[#04080f] px-6 md:px-12 py-24 md:py-28">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-white/90 leading-tight tracking-tight mb-16"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              How We Operate
            </h2>

            <div className="flex flex-col divide-y divide-white/8">
              {[
                {
                  title: "Trust & Partnerships",
                  desc: "Enduring, institutional-grade partnerships built on transparency, strict compliance, and mutual reliability. Our network extends across top-tier charterers, shipyards, and financial institutions with long-term horizons.",
                },
                {
                  title: "Safety & Quality",
                  desc: "A zero-tolerance approach to operational risk. Rigorous safety protocols and fleet maintenance to the highest classification society standards — ISM, ISPS, and MLC 2006 — protect crew, cargo, and commercial reputation equally.",
                },
                {
                  title: "Sustainability",
                  desc: "Active integration of energy-saving technologies and strict compliance with international maritime regulations. We reduce emissions fleet-wide and structure our newbuild programme around IMO 2030 carbon intensity targets.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
                >
                  <div className="md:col-span-1">
                    <span className="text-xs font-medium text-white/30 tabular-nums">0{i + 1}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-[18px] font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-[15px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
