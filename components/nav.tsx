"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/dry-bulk" },
  { label: "Corporate Overview", href: "/corporate-overview" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Keep sentinel ref mounted for potential future use
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-[60px] left-0 h-px w-full pointer-events-none" aria-hidden />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100/60">
        {/* Main nav */}
        <div className="px-6 md:px-8 py-3 max-w-7xl mx-auto relative flex items-center justify-center">

          {/* Logo — pinned left */}
          <div className="absolute left-6 md:left-8">
            <a href="/">
              <Image src="/logo.png" alt="Range Shipping" width={120} height={60} className="h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop nav links — centred */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-bold tracking-wide text-[#001f3f] hover:text-[#001f3f]/60 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA — pinned right */}
          <div className="absolute right-6 md:right-8 flex items-center gap-4">
            <a
              href="/contact"
              className="hidden md:block px-5 py-2 bg-crimson border border-crimson text-[11px] tracking-[0.15em] uppercase text-white hover:bg-crimson/80 transition-colors duration-200 active:scale-[0.97] active:transition-none"
            >
              Enquire
            </a>
            <button
              className="lg:hidden text-gray-500 hover:text-gray-900 transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="rs-mobile-menu"
            >
              {menuOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="rs-mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md border-t border-gray-100 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 pt-4 pb-6" aria-label="Mobile navigation">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-bold tracking-wide text-[#001f3f] hover:text-[#001f3f]/60 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 px-5 py-2 bg-crimson border border-crimson text-[11px] tracking-[0.15em] uppercase text-white self-start hover:bg-crimson/80 transition-colors active:scale-[0.97] active:transition-none"
            >
              Enquire
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
