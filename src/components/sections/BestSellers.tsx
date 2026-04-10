import { getBestSellers } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function BestSellers() {
  const bestSellers = getBestSellers();
  return (
    <section className="section-dark py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full gold-glow" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <SectionHeader kicker="Fan favorites" headline="The products people come back for" accentWord="come back for" dark />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((product, i) => (
            <AnimateOnScroll key={product.slug} delay={i * 100}>
              <ProductCard product={product} dark badge={i === 0 ? "#1 Seller" : undefined} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
