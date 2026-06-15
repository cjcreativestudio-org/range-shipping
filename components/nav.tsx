"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#000613]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div className="hidden md:block border-b border-white/5 py-1 px-8">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8">
          <a href="/contact" className="flex items-center gap-1 text-white/55 hover:text-white/80 transition-colors">
            <span className="text-[10px] tracking-[0.15em] uppercase font-medium">Contacts</span>
          </a>
          <button className="flex items-center gap-1 text-white/55 hover:text-white/80 transition-colors">
            <span className="text-[10px] tracking-[0.15em] uppercase font-medium">EN</span>
          </button>
          <p className="text-[9px] text-white/35 italic">Data delayed at least 15 minutes</p>
        </div>
      </div>

      {/* Main nav */}
      <div className="px-6 md:px-8 py-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image
            src="/logo.jpg"
            alt="Range Shipping"
            width={160}
            height={44}
            className="h-9 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            priority
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/dry-bulk" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden md:block px-5 py-2 border border-white/20 text-[11px] tracking-[0.15em] uppercase text-white/80 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
            Inquire
          </a>
          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#000613]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/dry-bulk" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="/contact" className="mt-2 px-5 py-2 border border-white/20 text-[11px] tracking-[0.15em] uppercase text-white/80 self-start hover:bg-white/10 transition-all">
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
