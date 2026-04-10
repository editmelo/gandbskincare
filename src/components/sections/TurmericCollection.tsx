import Link from "next/link";
import { getTurmericProducts } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function TurmericCollection() {
  const turmericProducts = getTurmericProducts().slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Warm turmeric-toned ambient shapes */}
      <div className="absolute top-10 -left-16 w-48 h-48 rounded-full bg-warm-gold/[0.07]" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-warm-gold/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <SectionHeader kicker="Our signature ingredient" headline="All Things Turmeric" accentWord="Turmeric" />
          <p className="text-center font-body text-sm text-deep-bronze/60 -mt-6 mb-10 max-w-lg mx-auto">
            Turmeric is at the heart of G&amp;B. A powerful antioxidant that brightens, heals, and reveals your natural glow — featured across our most-loved products.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {turmericProducts.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </AnimateOnScroll>

        <div className="text-center mt-10">
          <Link href="/shop" className="btn-gold-outline">
            Shop All Turmeric Products
          </Link>
        </div>
      </div>
    </section>
  );
}
