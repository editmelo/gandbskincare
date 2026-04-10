import Link from "next/link";
import { getSpringCollection } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";

export function SpringCollection() {
  const springProducts = getSpringCollection();
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cream/80" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-light-beige/40" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader kicker="Fresh for Spring" headline="The Spring Collection" accentWord="Spring" />
        <p className="text-center font-body text-sm text-deep-bronze/60 -mt-6 mb-10 max-w-lg mx-auto">
          Fresh starts, renewed skin. Our curated spring picks to help you glow into the new season.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {springProducts.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/shop" className="btn-gold-outline">Shop Spring</Link>
        </div>
      </div>
    </section>
  );
}
