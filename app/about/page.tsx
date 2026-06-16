import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Range Shipping",
  description: "Founded in 2017 and headquartered in London, Range Shipping is a privately owned shipping company specialising in the commercial operation of dry-bulk vessels.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 md:py-32 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-4 bg-crimson" />
              <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">About Us</p>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-3xl"
            >
              About Range<br />Shipping
            </h1>
            <p className="text-[18px] font-light leading-relaxed text-white/65 max-w-xl">
              Prioritising Health, Safety, Quality, and Environmental Responsibility.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 md:py-28 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-4 bg-crimson" />
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Overview</p>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-8"
              >
                Privately Owned.<br />Commercially Driven.
              </h2>
              <p className="text-[16px] font-light leading-relaxed text-white/65 mb-5 max-w-lg">
                Established in 2017 and headquartered in London, Range Shipping is a privately owned shipping company specialising in the commercial operation of dry-bulk vessels across the Handysize and Panamax sectors. Since our establishment, we have built our business around delivering reliable, flexible, and commercially driven shipping solutions to clients operating in global bulk commodity markets.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-white/55 max-w-lg">
                Our expertise spans the full operational management of bulk carriers, with a strong focus on efficiency, transparency, and long-term partnerships. With in-depth market knowledge and extensive industry experience, we actively operate within the Handysize to Panamax segments, providing tailored voyage and time charter solutions that meet the evolving requirements of charterers, traders, and shipowners worldwide.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-crimson/40 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vessels/tomini-unity.png"
                alt="Range Shipping vessel at sea"
                className="w-full h-full object-cover opacity-90 saturate-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* S&P Market */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 md:py-28 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-4 bg-crimson" />
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">S&P Market</p>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight"
              >
                Active in the<br />S&amp;P Market
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[17px] font-light leading-relaxed text-white/65 mb-5">
                In addition to our commercial operations, Range Shipping is actively involved in the Sale &amp; Purchase (S&amp;P) market. We participate both on a principal basis and by structuring transactions on behalf of our clients, offering strategic guidance and market insight throughout the acquisition and disposal process.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-white/50">
                Our approach combines commercial understanding with a practical, hands-on perspective, enabling us to identify opportunities and deliver value in dynamic market conditions. Through our market knowledge, industry network, and practical expertise, we support clients in navigating transactions and achieving strategic commercial objectives across the shipping sector.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 md:py-28 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-4 bg-crimson" />
              <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Our Values</p>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-16"
            >
              How We Operate
            </h2>

            <div className="flex flex-col divide-y divide-white/8">
              {[
                {
                  title: "Trust, Transparency & Collaboration",
                  desc: "We work closely with our clients and business partners to fully understand their operational and commercial goals, enabling us to deliver tailored solutions that support both immediate requirements and long-term success. Whether through voyage and time charter services, asset transactions, or strategic advisory support, our focus remains firmly centred on creating value and building sustainable relationships.",
                },
                {
                  title: "Health, Safety, Quality & Environment",
                  desc: "Our business is guided by a strong commitment to health, safety, quality, and environmental responsibility. These principles form the foundation of our operations and decision-making processes across every aspect of the company. We maintain clear policies, operational standards, and compliance procedures designed to promote safe working practices, operational excellence, and responsible environmental stewardship.",
                },
                {
                  title: "Sustainability & Corporate Responsibility",
                  desc: "Range Shipping recognises the growing importance of sustainability and corporate responsibility within the maritime industry. We continuously strive to reduce environmental impact, improve operational efficiency, and work with partners who share our commitment to responsible business practices. By maintaining transparency and accountability in the way we operate, we aim to meet the expectations of our clients, stakeholders, and the wider industry.",
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
                    <p className="text-base font-light leading-relaxed text-white/55">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Address */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-4 bg-crimson" />
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Location</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                London, Mayfair
              </h2>
              <address className="not-italic text-[16px] font-light leading-relaxed text-white/60">
                19 Berkeley Street, 4th Floor<br />
                Mayfair, London<br />
                W1J 8ED<br />
                United Kingdom
              </address>
              <div className="mt-8 flex flex-col gap-2 text-[14px] font-light text-white/50">
                <span>T: +44 2045 703520</span>
                <span>E: info@rangeshipping.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-4 bg-crimson" />
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">Memberships</p>
              </div>
              {["UK Chamber of Shipping", "Baltic Exchange", "BIMCO"].map((m) => (
                <div key={m} className="border border-white/8 px-5 py-4">
                  <span className="text-[15px] font-medium text-white/75">{m}</span>
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
