import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Range Shipping",
  description: "Reach Range Shipping's chartering and operations team. London headquarters: 19 Berkeley Street, W1J 8ED.",
};

export default function ContactPage() {
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
              Contact<br />Range Shipping
            </h1>
            <p className="text-[18px] font-light leading-relaxed text-white/65 max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
              For chartering inquiries, fleet positions, and sale and purchase, reach our London team directly.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            {/* Left: HQ details + image */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <div>
                <h2
                  className="font-condensed text-3xl md:text-4xl font-bold text-white leading-[1.05] tracking-tight mb-8"
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
                  <div className="py-6">
                    <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Telephone</p>
                    <a
                      href="tel:+442045703520"
                      className="text-[16px] font-light text-white/75 hover:text-white transition-colors duration-200"
                    >
                      +44 2045 703520
                    </a>
                  </div>
                  <div className="py-6">
                    <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Email</p>
                    <a
                      href="mailto:chartering@rangeshipping.com"
                      className="text-[16px] font-light text-white/75 hover:text-white transition-colors duration-200"
                    >
                      chartering@rangeshipping.com
                    </a>
                  </div>
                  <div className="pt-6">
                    <p className="text-[11px] font-medium tracking-widest uppercase text-white/35 mb-2">Registration</p>
                    <p className="text-[14px] font-light text-white/45">
                      Companies House No. 10851129
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqVMrxq5QvBalkNrQbpivQf09c_u2AXAQv-4ucwITNIK0KkSzbIb3hZ_1ZpQTotacijhhGKRz0Jc3yWPjicCqg2IkiWIrfrUFNrl-HshtEL-ymmBwvKaYSBPUx8oxUPFbgty4lQ13Ye8DoYR4IQZNDUPF2Onm7ZgoNJWg5CzKsSCy3jhDJjyIED4fIuAFl_zPzTskOsZPonyAZhlS1GnPjAXJf3i-zRHAUT6SGFabzzOae452IwYemTb_xUVZ-rxwXFcc7NBxOAeA"
                  alt="Corporate brutalist building facade in London — institutional and austere"
                  className="w-full h-full object-cover grayscale opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/50 to-transparent" />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
