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
            {[
              { label: "Terms of service", href: "/terms-of-service" },
              { label: "Privacy policy", href: "/privacy-policy" },
              { label: "Cookie policy", href: "/cookie-policy" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-light text-white/55 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Follow */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium tracking-widest uppercase text-white/30">
              Follow
            </p>
            <a
              href="https://www.linkedin.com/company/range-shipping-ltd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Range Shipping on LinkedIn"
              className="inline-flex items-center gap-3 px-4 py-3 border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all duration-200 group w-fit"
            >
              <LinkedinLogo size={22} weight="fill" className="text-white/70 group-hover:text-white transition-colors duration-200" />
              <span className="text-[13px] font-light text-white/55 group-hover:text-white transition-colors duration-200 tracking-wide">
                LinkedIn
              </span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[11px] font-light text-white/35">
            © 2026 Range Shipping. All rights reserved. Reg: 098421-M
          </p>
          <span className="text-[11px] font-light text-white/25">
            VAT: GB 123 456 789
          </span>
        </div>
      </div>
    </footer>
  );
}
