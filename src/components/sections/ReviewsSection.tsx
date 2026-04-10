import { getFeaturedReviews } from "@/data/reviews";
import { getProductBySlug } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StarRating } from "@/components/shared/StarRating";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function ReviewsSection() {
  const reviews = getFeaturedReviews();
  return (
    <section className="py-16 md:py-20 bg-cream/50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader kicker="What they're saying" headline="Real people, real glow" accentWord="glow" />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => {
            const product = getProductBySlug(review.productSlug);
            const offsets = ["md:mt-0", "md:mt-8", "md:mt-4"];
            return (
              <AnimateOnScroll key={review.id} delay={i * 150}>
                <div className={`bg-white rounded-2xl p-6 border border-warm-gold/10 shadow-sm ${offsets[i]}`}>
                  <StarRating rating={review.rating} />
                  <p className="font-body text-sm text-deep-bronze/80 leading-relaxed mt-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-warm-gold/10">
                    <p className="font-body text-sm font-semibold text-deep-bronze">{review.author}</p>
                    {product && (
                      <p className="font-body text-xs text-warm-gold mt-0.5">Bought: {product.name}</p>
                    )}
                  </div>
                  {review.verified && (
                    <span className="inline-block mt-2 text-[9px] font-body text-warm-gold/60 uppercase tracking-wider">✓ Verified Purchase</span>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
