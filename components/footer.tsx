"use client";

export default function Footer() {
  return (
    <footer className="bg-[#000613] border-t border-white/5 px-6 md:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4 className="text-[13px] tracking-[0.2em] uppercase font-semibold text-white/80 mb-6">
              Range Shipping
            </h4>
            <p className="text-[11px] tracking-[0.1em] uppercase text-white/30 mb-3">
              Global Headquarters
            </p>
            <address className="not-italic text-[14px] leading-relaxed text-white/40">
              The Leadenhall Building<br />
              122 Leadenhall Street<br />
              London EC3V 4AB<br />
              United Kingdom
            </address>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/20 mb-2">
              Legal
            </p>
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] tracking-[0.05em] text-white/35 hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/20 mb-2">
              Contact
            </p>
            {["Contact Support", "Global Offices", "Media Enquiries", "Investor Relations"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] tracking-[0.05em] text-white/35 hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            © 2025 Range Shipping. All rights reserved. Reg: 098421-M
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/15">
              VAT: GB 123 456 789
            </span>
            <div className="flex gap-4">
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
