import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "All Products" },
  { href: "/shop?concern=dark-spots", label: "Dark Spots" },
  { href: "/shop?concern=eczema", label: "Eczema" },
  { href: "/shop?concern=acne", label: "Acne" },
  { href: "/shop?concern=dryness", label: "Dryness" },
];

const learnLinks = [
  { href: "/about", label: "About Bryanne" },
  { href: "/results", label: "Results" },
  { href: "/#regimen", label: "Routine Guide" },
];

export function Footer() {
  return (
    <footer className="bg-light-beige/50 border-t border-warm-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center border-b border-warm-gold/10">
        <h3 className="font-display text-2xl text-deep-bronze mb-2">Stay glowing</h3>
        <p className="font-body text-sm text-deep-bronze/60 mb-6">Skincare tips, new drops, and exclusive offers — straight from Bryanne.</p>
        <div className="flex max-w-md mx-auto gap-2">
          <input type="email" placeholder="Enter your email..." className="flex-1 bg-white border border-warm-gold/20 rounded-full px-5 py-3 text-sm font-body text-deep-bronze placeholder:text-deep-bronze/30 focus:outline-none focus:border-warm-gold transition-colors" />
          <button className="btn-gold whitespace-nowrap">Subscribe</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="kicker !text-deep-bronze/60 mb-4">Shop</h4>
          <ul className="space-y-2">
            {shopLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-deep-bronze/70 hover:text-warm-gold transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="kicker !text-deep-bronze/60 mb-4">Learn</h4>
          <ul className="space-y-2">
            {learnLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-deep-bronze/70 hover:text-warm-gold transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="kicker !text-deep-bronze/60 mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><span className="font-body text-sm text-deep-bronze/70">Instagram</span></li>
            <li><span className="font-body text-sm text-deep-bronze/70">TikTok</span></li>
            <li><span className="font-body text-sm text-deep-bronze/70">Email</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-warm-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-warm-gold italic">&ldquo;Your glow is always worth investing in.&rdquo;</p>
        <p className="font-body text-xs text-deep-bronze/40">&copy; 2026 G&amp;B Natural Skincare. All rights reserved.</p>
      </div>
    </footer>
  );
}
