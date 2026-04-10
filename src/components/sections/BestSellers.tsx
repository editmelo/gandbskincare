import { getBestSellers } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";

export function BestSellers() {
  const bestSellers = getBestSellers();
  return (
    <section className="section-dark py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full gold-glow" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader kicker="Fan favorites" headline="The products people come back for" accentWord="come back for" dark />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.slug} product={product} dark badge={i === 0 ? "#1 Seller" : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}
