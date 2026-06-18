import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry-Bulk Chartering | Range Shipping",
  description: "Safe, reliable and competitive freight services across Supramax and Panamax sectors on major global trade routes.",
};

const capabilities = [
  {
    n: "01",
    title: "Safety & Risk Management",
    body: "The dry-bulk shipping industry presents complex and constantly changing challenges. Range Shipping actively works to minimise operational and commercial risks through careful planning, market analysis, and the use of advanced tools and strategies. Our proactive approach allows us to provide reliable freight solutions while protecting the interests of our clients and partners.",
    img: "/vessels/xin-qi-hang-1.png",
    alt: "Bulk carrier vessel at sea",
    imgLeft: false,
  },
  {
    n: "02",
    title: "Transparency & Competitiveness",
    body: "Transparency and competitiveness are fundamental to the way we conduct business. We believe that strong partnerships are built on trust and open communication, which is why we maintain clear pricing structures, transparent contractual terms, and straightforward commercial processes. This approach gives our clients confidence that they are receiving fair, competitive, and commercially sound freight services.",
    img: "/vessels/ocean-azalea.png",
    alt: "Range Shipping vessel Ocean Azalea",
    imgLeft: true,
  },
  {
    n: "03",
    title: "Technological Innovation",
    body: "As part of our commitment to continuous improvement and service excellence, we embrace technological innovation across our operations. The integration of digital platforms, real-time tracking systems, and modern communication tools enhances operational efficiency, improves visibility, and provides clients with greater transparency and control throughout the transportation process.",
    img: "/vessels/bbg-leader.png",
    alt: "Range Shipping vessel BBG Leader",
    imgLeft: false,
  },
];

export default function DryBulkPage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#001f3f] px-6 md:px-12 py-24 md:py-32 border-b border-white/5">
          {/* Carrier vessel background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dry-bulk-parallax.png"
            alt="Dry-bulk carrier vessel at sea"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
          />
          {/* Left-to-right scrim keeps text legible while the vessel stays visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#001f3f]/80 to-[#001f3f]/40 pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[#001f3f]/20 pointer-events-none z-0" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-4 bg-crimson" />
              <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Services</p>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-3xl"
            >
              Dry-Bulk<br />Chartering
            </h1>
            <p className="text-[18px] font-light leading-relaxed text-white/65 max-w-xl">
              Safe, reliable, and competitive freight services across Supramax and Panamax sectors on major global trade routes.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-4 bg-crimson" />
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Service Overview</p>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-8"
              >
                Comprehensive<br />Chartering Solutions
              </h2>
              <p className="text-[17px] font-light leading-relaxed text-white/65 mb-4">
                Range Shipping provides comprehensive dry-bulk chartering solutions designed to meet the evolving transportation requirements of clients across global commodity markets. With extensive experience in the Supramax and Panamax sectors, we manage the worldwide movement of a diverse range of dry-bulk cargoes, delivering flexible and dependable freight solutions tailored to individual client needs.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-white/55">
                Our global network and strong industry relationships enable us to offer customised and efficient shipping services across major international trade routes. By combining market intelligence with operational expertise, we are able to respond quickly to changing market conditions while maintaining a high standard of service, reliability, and commercial performance.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col divide-y divide-white/8">
              <div className="pb-6 first:pt-0">
                <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Primary sectors</p>
                <p className="text-[17px] font-semibold text-white/85">Supramax &amp; Panamax</p>
              </div>
              <div className="py-6">
                <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Charter types</p>
                <p className="text-[17px] font-semibold text-white/85">Voyage &amp; Time Charter</p>
              </div>
              <div className="pt-6">
                <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Operation basis</p>
                <p className="text-[17px] font-semibold text-white/85">Principal basis only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-28">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
              >
                <div className={`flex flex-col gap-5 ${cap.imgLeft ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-medium text-white/25 tabular-nums mt-0.5">{cap.n}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-4 bg-crimson shrink-0" />
                      <h3
                        className="text-3xl md:text-4xl font-bold text-white leading-[1.05] tracking-tight"
                      >
                        {cap.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base font-light leading-relaxed text-white/60">
                    {cap.body}
                  </p>
                </div>
                <div className={`relative aspect-video overflow-hidden ${cap.imgLeft ? "md:order-1" : "md:order-2"}`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-crimson/30 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cap.img}
                    alt={cap.alt}
                    className="w-full h-full object-cover opacity-90 saturate-[0.6]"
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-4 bg-crimson" />
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Inquire</p>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-4"
              >
                Latest Fleet Position<br />&amp; Fixture List
              </h2>
              <p className="text-[16px] font-light text-white/55">
                For our latest fleet position and fixture list, we welcome your enquiries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/contact"
                className="px-8 py-3.5 bg-crimson text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-crimson/85 transition-colors duration-200 whitespace-nowrap"
              >
                Contact chartering team
              </a>
              <a
                href="/corporate-overview"
                className="px-8 py-3.5 border border-white/25 text-[12px] font-medium tracking-[0.12em] uppercase text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                View fixture list
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
