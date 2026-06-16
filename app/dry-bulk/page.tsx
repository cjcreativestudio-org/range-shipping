import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry-Bulk Chartering | Range Shipping",
  description: "Safe, reliable and competitive freight services across Supramax and Panamax sectors on major global trade routes.",
};

const capabilities = [
  {
    title: "Risk Management & Safety",
    body: "Institutional safety protocols govern every fixture. We maintain absolute compliance with international maritime regulations and employ predictive modelling to identify operational hazards before they materialise. Vessel vetting, port risk assessments, and P&I cover are reviewed on every voyage.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG3kIrVVaLcOalq_aFw_F_UB5ljNgYZGZ1nVwtm39uOSSDsMNIUYi7JVLxSWUDmvwr03f7bM3gcYB_kgfBZDOo1ah6BtUq4Iy4ev9Hk8ZjOBgrNyEEa7fvI7K0k3KFD-TWAYxp2wFWCREWCJHA1xogANWAJZb2mZbf8JKwbNUbBmT5ttbkyQMDIXSwf1I3rx_Tx50DireMTKFMqbGIxgpRkdQ_P63f3kGaq14CthlzTRgEGPH-yRfHvqFwXW4Iqg2EFmvt7TU5G34",
    alt: "Industrial cargo ship deck at sea, heavy steel structures and cables",
    imgLeft: false,
  },
  {
    title: "Transparency & Competitiveness",
    body: "Real-time market analytics secure competitive freight rates while maintaining full transparency with our principals. Voyage tracking, operational ledgers, and fixture economics are accessible throughout the cargo's lifecycle — no black boxes, no surprises at settlement.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCevKXHLPGqYSliAoahqCl8eTKsvGsi5B1dqcRAFTQyeHkEjYDWLIDmUw1qgkluzADwuf1ByZ9ZcJsr1eAcP_nfVGGoqaJJmMDQBaiwcgPSu20aY0eWEKK-7Fn-SKGmt0hKgFHv6nHhCZfVzdi3UoxRHvYmkKCM4R2DnHhU-ykThLl0Sr4UWG76dJ7O5t9IfquRGrW4ygyCD7914xjkL2PGE6EF3q2KoxTjeXk4Lf6ukEYH6--W9-dsovFVEflc3QRaET2A9iI0cwE",
    alt: "Maritime operations command centre with global tracking displays",
    imgLeft: true,
  },
  {
    title: "Technological Innovation",
    body: "AI-driven routing algorithms optimise fuel consumption and minimise transit times on every voyage. Our digital infrastructure automates voyage monitoring, laytime calculations, and communications — reducing administrative friction and increasing accountability across the fixture lifecycle.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSEGrpgSFW97B-uTME5_kQRC9-YmiqEmT1xkIbCncYv46DWwL39yk3bawwMhD9m-HjElQto6ZzfJ7oN2nMcqoFchewKNqerYD1LnrR1jQ_KdGpvvLcPmr6jtMJaNOlo1dmlEJDJjc4AZFuLrwiy5Fn8yqJ4S8zTi5LCZaOPi6TJ50Jv3M9BFRYpjQ87cypIVwz86BJoiQMP7YhR0Yz8VCuohPzymC_EXTAFHVu7g-bcLeVv3EnhFC8TsASbfJ6N39Bjt59u1nCEVM",
    alt: "Digital interface with data visualisations and network graphs",
    imgLeft: false,
  },
];

export default function DryBulkPage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 md:py-32 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <h1
              className="font-condensed text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-3xl"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Dry-Bulk<br />Chartering
            </h1>
            <p className="text-[18px] font-light leading-relaxed text-white/65 max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
              Safe, reliable, and competitive freight services across Supramax and Panamax sectors on major global trade routes.
            </p>
          </div>
        </section>

        {/* Service overview */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h2
                className="font-condensed text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-8"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Service Overview
              </h2>
              <p className="text-[17px] font-light leading-relaxed text-white/65 mb-4" style={{ textWrap: "pretty" } as React.CSSProperties}>
                Range Shipping operates a versatile fleet of modern dry-bulk carriers in the Supramax and Panamax segments. We provide comprehensive maritime logistics across major global trade routes — coal and iron ore from Australia and Brazil, grain from the Black Sea and US Gulf, bauxite and fertilisers across the Atlantic and Pacific.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-white/55" style={{ textWrap: "pretty" } as React.CSSProperties}>
                Chartering operations are underpinned by rigorous data analysis, strategic market positioning, and an operational culture that treats cargo safety as the constraint that shapes every other decision.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col divide-y divide-white/8">
              <div className="pb-6 first:pt-0">
                <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Primary sectors</p>
                <p className="text-[17px] font-semibold text-white/85">Supramax &amp; Panamax</p>
              </div>
              <div className="py-6">
                <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Market scope</p>
                <p className="text-[17px] font-semibold text-white/85">Global trade routes</p>
              </div>
              <div className="pt-6">
                <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Operation type</p>
                <p className="text-[17px] font-semibold text-white/85">Principal basis only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities zig-zag */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-28">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
              >
                {/* Text — swaps order on desktop based on imgLeft */}
                <div className={`flex flex-col gap-5 ${cap.imgLeft ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-medium text-white/25 tabular-nums mt-0.5">0{i + 1}</span>
                    <h3
                      className="font-condensed text-3xl md:text-4xl font-bold text-white leading-[1.05] tracking-tight"
                      style={{ textWrap: "balance" } as React.CSSProperties}
                    >
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-[15px] font-light leading-relaxed text-white/60" style={{ textWrap: "pretty" } as React.CSSProperties}>
                    {cap.body}
                  </p>
                </div>

                {/* Image */}
                <div className={`relative aspect-video overflow-hidden ${cap.imgLeft ? "md:order-1" : "md:order-2"}`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cap.img}
                    alt={cap.alt}
                    className="w-full h-full object-cover grayscale opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-xl">
              <h2
                className="font-condensed text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-4"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Inquire About Our Latest Fleet Position
              </h2>
              <p className="text-[16px] font-light text-white/55">
                Access real-time availability and discuss competitive freight solutions with our chartering team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="px-8 py-3.5 bg-crimson text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-crimson/85 transition-colors duration-200 whitespace-nowrap">
                Contact chartering team
              </button>
              <button className="px-8 py-3.5 border border-white/25 text-[12px] font-medium tracking-[0.12em] uppercase text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 whitespace-nowrap">
                Download fleet specs
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
