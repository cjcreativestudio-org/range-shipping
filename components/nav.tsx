"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/dry-bulk" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel — sits 60px below top; when it leaves viewport the nav is "scrolled" */}
      <div ref={sentinelRef} className="absolute top-[60px] left-0 h-px w-full pointer-events-none" aria-hidden />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#001f3f]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Main nav */}
        <div className="px-6 md:px-8 py-4 max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="bg-white/95 px-3 py-1.5 rounded-sm">
              <Image
                src="/logo.jpg"
                alt="Range Shipping"
                width={140}
                height={38}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden md:block px-5 py-2 bg-crimson border border-crimson text-[11px] tracking-[0.15em] uppercase text-white hover:bg-crimson/80 transition-colors duration-200 active:scale-[0.97] active:transition-none"
            >
              Inquire
            </a>
            <button
              className="lg:hidden text-white/60 hover:text-white transition-colors p-1"
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
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#001f3f]/95 backdrop-blur-xl border-t border-white/5 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 pt-4 pb-6" aria-label="Mobile navigation">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 px-5 py-2 bg-crimson border border-crimson text-[11px] tracking-[0.15em] uppercase text-white self-start hover:bg-crimson/80 transition-colors active:scale-[0.97] active:transition-none"
            >
              Inquire
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
