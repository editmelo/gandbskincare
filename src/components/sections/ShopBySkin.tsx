import Link from "next/link";
import { skinConcerns } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const icons: Record<string, string> = {
  "dark-spots": "◐",
  eczema: "❋",
  acne: "✦",
  dryness: "◇",
  "uneven-tone": "◑",
};

export function ShopBySkin() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader kicker="Your skin, your journey" headline="What's your skin telling you?" accentWord="telling" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skinConcerns.map(concern => (
              <Link key={concern.id} href={`/shop?concern=${concern.id}`} className="group block bg-gradient-to-br from-cream to-light-beige rounded-2xl p-6 text-center border border-warm-gold/10 transition-all duration-300 hover:border-warm-gold/30 hover:shadow-lg hover:shadow-warm-gold/10 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-warm-gold/10 mx-auto mb-3 flex items-center justify-center text-2xl text-warm-gold group-hover:bg-warm-gold/20 transition-colors">
                  {icons[concern.id] || "✦"}
                </div>
                <h3 className="font-display text-base text-deep-bronze mb-1">{concern.label}</h3>
                <p className="text-xs font-body text-warm-gold">{concern.productCount} products →</p>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
