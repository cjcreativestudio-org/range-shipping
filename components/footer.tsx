"use client";

export default function Footer() {
  return (
    <footer className="bg-[#04080f] border-t border-white/8 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white/80 mb-6">
              Range Shipping
            </h4>
            <p className="text-xs font-medium tracking-widest uppercase text-white/35 mb-3">
              Global Headquarters
            </p>
            <address className="not-italic text-[14px] font-light leading-loose text-white/55">
              The Leadenhall Building<br />
              122 Leadenhall Street<br />
              London EC3V 4AB<br />
              United Kingdom
            </address>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-1">
              Legal
            </p>
            {["Terms of service", "Privacy policy", "Cookie policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-light text-white/55 hover:text-white/90 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-1">
              Contact
            </p>
            {["Contact support", "Global offices", "Media enquiries", "Investor relations"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-light text-white/55 hover:text-white/90 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[11px] font-light text-white/35">
            © 2025 Range Shipping. All rights reserved. Reg: 098421-M
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-light text-white/25">
              VAT: GB 123 456 789
            </span>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="text-white/30 hover:text-white/70 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
