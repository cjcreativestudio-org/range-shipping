import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-[#001a36] border-t border-white/8 px-6 md:px-12 py-16">
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
                className="text-[13px] font-light text-white/55 hover:text-crimson transition-colors duration-200"
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
                className="text-[13px] font-light text-white/55 hover:text-crimson transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[11px] font-light text-white/35">
            © 2026 Range Shipping. All rights reserved. Reg: 098421-M
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-light text-white/25">
              VAT: GB 123 456 789
            </span>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="text-white/30 hover:text-crimson transition-colors">
                <LinkedinLogo size={16} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
