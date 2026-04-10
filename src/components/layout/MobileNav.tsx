"use client";

import Link from "next/link";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?concern=all", label: "Your Skin" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-espresso/60 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-cream z-50 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-warm-gold/10">
          <span className="font-display text-lg text-warm-gold tracking-wider">G&amp;B</span>
          <button onClick={onClose} className="text-deep-bronze text-2xl leading-none">&times;</button>
        </div>
        <nav className="p-6 flex flex-col gap-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-body text-deep-bronze text-sm uppercase tracking-widest hover:text-warm-gold transition-colors py-2 border-b border-warm-gold/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
