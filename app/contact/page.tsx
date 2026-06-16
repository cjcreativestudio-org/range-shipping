import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import ParallaxBg from "@/components/parallax-bg";
import ScrollReveal from "@/components/scroll-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Range Shipping",
  description: "Reach Range Shipping's chartering and operations team. London headquarters: 19 Berkeley Street, W1J 8ED.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <ParallaxBg src="/19-berkeley-wide.png" />
      <main className="pt-[88px]">

        {/* Hero — no overlay, text directly on image */}
        <section className="px-6 md:px-12 py-24 md:py-40">
          <div className="max-w-6xl mx-auto">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-3xl"
              style={{
                textWrap: "balance",
                textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              } as React.CSSProperties}
            >
              Contact<br />Range Shipping
            </h1>
            <p
              className="text-[18px] font-light leading-relaxed text-white/80 max-w-xl"
              style={{
                textWrap: "pretty",
                textShadow: "0 1px 12px rgba(0,0,0,0.5)",
              } as React.CSSProperties}
            >
              For chartering enquiries, fleet positions, and sale and purchase, reach our London team directly.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* London HQ card */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0}>
                <div className="bg-[#020d1a]/90 border border-white/10 p-8 md:p-10">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white leading-[1.05] tracking-tight mb-8"
                    style={{ textWrap: "balance" } as React.CSSProperties}
                  >
                    London Headquarters
                  </h2>
                  <div className="flex flex-col divide-y divide-white/8">
                    <div className="pb-6">
                      <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Address</p>
                      <p className="text-[16px] font-light leading-relaxed text-white/75">
                        19 Berkeley Street, 4th Floor<br />
                        London, W1J 8ED
                      </p>
                    </div>
                    <div className="pt-6">
                      <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Registration</p>
                      <p className="text-[14px] font-light text-white/45">
                        Companies House No. 10851129
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form card */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={120}>
                <div className="bg-[#020d1a]/90 border border-white/10 p-8 md:p-10">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
