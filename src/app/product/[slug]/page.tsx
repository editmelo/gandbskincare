"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, products, regimenProducts } from "@/data/products";
import { getReviewsByProduct } from "@/data/reviews";
import { results } from "@/data/results";
import { StarRating } from "@/components/shared/StarRating";
import { ConcernPill } from "@/components/shared/ConcernPill";
import { RegimenFlow } from "@/components/shared/RegimenFlow";
import { ResultCard } from "@/components/shared/ResultCard";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) return notFound();

  const productReviews = getReviewsByProduct(slug);
  const relatedResults = results.filter(r =>
    r.productsUsed.some(p => p.slug === slug) ||
    r.concern === product.concerns[0]
  ).slice(0, 2);

  const complementary = regimenProducts
    .filter(r => r.product.slug !== slug)
    .map(r => r.product)
    .slice(0, 3);

  return <ProductDetail product={product} productReviews={productReviews} relatedResults={relatedResults} complementary={complementary} />;
}

function ProductDetail({
  product,
  productReviews,
  relatedResults,
  complementary,
}: {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
  productReviews: ReturnType<typeof getReviewsByProduct>;
  relatedResults: typeof results;
  complementary: typeof products;
}) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);

  const displayPrice = product.variants ? product.variants[selectedVariant].price : product.price;

  return (
    <>
      <div className="bg-cream/50 border-b border-warm-gold/5">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="font-body text-xs text-deep-bronze/50">
            <Link href="/" className="hover:text-warm-gold transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/shop" className="hover:text-warm-gold transition-colors">Shop</Link>
            <span className="mx-2">›</span>
            <span className="text-deep-bronze">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-light-beige to-cream flex items-center justify-center border border-warm-gold/10 relative overflow-hidden">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-contain p-8" sizes="(max-width: 768px) 100vw, 50vw" />
                ) : (
                  <div className="w-40 h-56 rounded-[30px_30px_12px_12px] bg-warm-gold/15 border border-warm-gold/20" />
                )}
              </div>
              <div className="flex gap-2 mt-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-20 h-20 rounded-lg bg-light-beige border border-warm-gold/10 flex items-center justify-center">
                    <div className="w-8 h-12 rounded-lg bg-warm-gold/10" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              {product.concerns.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-body text-deep-bronze/50">Works for:</span>
                  {product.concerns.map(c => (
                    <ConcernPill key={c} label={c.replace("-", " ")} />
                  ))}
                </div>
              )}

              <h1 className="font-display text-3xl md:text-4xl text-deep-bronze">{product.name}</h1>
              <p className="font-body text-sm text-deep-bronze/50 mt-1">{product.subtitle}</p>

              <div className="mt-3">
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>

              <p className="font-body text-sm text-deep-bronze/70 leading-relaxed mt-6">{product.description}</p>

              {product.variants && (
                <div className="mt-6">
                  <p className="text-xs font-body text-deep-bronze/50 uppercase tracking-wider mb-2">Size</p>
                  <div className="flex gap-2">
                    {product.variants.map((v, i) => (
                      <button key={v.label} onClick={() => setSelectedVariant(i)} className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                        selectedVariant === i ? "bg-warm-gold text-white" : "border border-warm-gold/20 text-deep-bronze hover:border-warm-gold"
                      }`}>
                        {v.label} — ${v.price.toFixed(2)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center gap-4">
                <span className="font-display text-3xl text-deep-bronze">${displayPrice.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center border border-warm-gold/20 rounded-full">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-deep-bronze hover:text-warm-gold transition-colors">−</button>
                  <span className="px-2 font-body text-sm text-deep-bronze">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-deep-bronze hover:text-warm-gold transition-colors">+</button>
                </div>
                <button className="btn-gold flex-1 !py-4 text-sm">
                  Add to Ritual — ${(displayPrice * quantity).toFixed(2)}
                </button>
              </div>

              {product.ingredients && (
                <div className="mt-8 border-t border-warm-gold/10 pt-6">
                  <button onClick={() => setIngredientsOpen(!ingredientsOpen)} className="flex items-center justify-between w-full text-left">
                    <span className="font-display text-lg text-deep-bronze">Ingredients</span>
                    <span className="text-warm-gold text-xl">{ingredientsOpen ? "−" : "+"}</span>
                  </button>
                  {ingredientsOpen && (
                    <div className="mt-4 animate-slide-down">
                      {product.keyIngredient && (
                        <div className="bg-cream/50 rounded-xl p-4 mb-4 border border-warm-gold/10">
                          <p className="font-display text-sm text-warm-gold mb-1">Why {product.keyIngredient.name}?</p>
                          <p className="font-body text-xs text-deep-bronze/70 leading-relaxed">{product.keyIngredient.benefit}</p>
                        </div>
                      )}
                      <p className="font-body text-xs text-deep-bronze/60 leading-relaxed">{product.ingredients.join(", ")}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {product.regimenStep && (
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-cream">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader kicker="Your routine" headline="Where this fits in your Glow ritual" accentWord="Glow" />
            <RegimenFlow highlightStep={product.regimenStep} />
          </div>
        </section>
      )}

      {relatedResults.length > 0 && (
        <section className="section-dark py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader kicker="Real results" headline="See what this product can do" accentWord="can do" dark />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedResults.map(result => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader kicker="Reviews" headline="What customers are saying" accentWord="saying" />
          <div className="max-w-sm mx-auto mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display text-4xl text-deep-bronze">{product.rating}</span>
              <div>
                <StarRating rating={product.rating} />
                <p className="text-xs font-body text-deep-bronze/50 mt-0.5">{product.reviewCount} reviews</p>
              </div>
            </div>
            {[5, 4, 3, 2, 1].map(stars => {
              const count = stars === 5 ? Math.floor(product.reviewCount * 0.7) : stars === 4 ? Math.floor(product.reviewCount * 0.2) : Math.floor(product.reviewCount * 0.1 / 3);
              const pct = (count / product.reviewCount) * 100;
              return (
                <div key={stars} className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-body text-deep-bronze/50 w-3">{stars}</span>
                  <span className="text-warm-gold text-xs">★</span>
                  <div className="flex-1 h-2 bg-warm-gold/10 rounded-full overflow-hidden">
                    <div className="h-full bg-warm-gold rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[10px] font-body text-deep-bronze/40 w-8">{count}</span>
                </div>
              );
            })}
          </div>
          {productReviews.length > 0 ? (
            <div className="space-y-4 max-w-2xl mx-auto">
              {productReviews.map(review => (
                <div key={review.id} className="bg-white rounded-xl p-5 border border-warm-gold/10">
                  <div className="flex items-center justify-between mb-2">
                    <StarRating rating={review.rating} />
                    <span className="text-[10px] font-body text-deep-bronze/40">{review.date}</span>
                  </div>
                  <p className="font-body text-sm text-deep-bronze/80 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-body text-xs font-semibold text-deep-bronze">{review.author}</span>
                    {review.verified && (
                      <span className="text-[9px] font-body text-warm-gold/60 uppercase tracking-wider">✓ Verified</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center font-body text-sm text-deep-bronze/40">No reviews yet for this product.</p>
          )}
          <div className="text-center mt-8">
            <button className="btn-gold-outline">Write a Review</button>
          </div>
        </div>
      </section>

      {complementary.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader kicker="Complete your routine" headline="Build your full glow ritual" accentWord="glow" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {complementary.map(p => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
