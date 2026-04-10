"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?concern=all", label: "Your Skin" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-cream"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.avif" alt="G&B Natural Skincare" width={40} height={40} className="rounded-full" />
            <span className="font-display text-xl text-warm-gold tracking-wider hidden sm:block">G&amp;B</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-deep-bronze uppercase tracking-[0.2em] hover:text-warm-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative text-deep-bronze hover:text-warm-gold transition-colors" aria-label="Shopping bag">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-warm-gold text-white text-[9px] font-body font-bold flex items-center justify-center">0</span>
            </button>
            <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(true)}>
              <span className="block w-5 h-[1.5px] bg-deep-bronze" />
              <span className="block w-5 h-[1.5px] bg-deep-bronze" />
              <span className="block w-3.5 h-[1.5px] bg-deep-bronze" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
