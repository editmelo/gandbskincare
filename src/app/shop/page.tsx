"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, skinConcerns, type SkinConcern, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/shared/ProductCard";
import { ConcernPill } from "@/components/shared/ConcernPill";

const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cleanser", label: "Cleansers" },
  { id: "serum", label: "Serums" },
  { id: "treatment", label: "Treatments" },
  { id: "mask", label: "Masks" },
  { id: "kit", label: "Kits & Bundles" },
  { id: "moisturizer", label: "Moisturizers" },
  { id: "body", label: "Body" },
  { id: "yoni", label: "Yoni" },
];

type SortOption = "featured" | "price-asc" | "price-desc" | "best-selling";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialConcern = searchParams.get("concern") as SkinConcern | null;

  const [activeConcern, setActiveConcern] = useState<SkinConcern | null>(initialConcern);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeConcern) {
      result = result.filter(p => p.concerns.includes(activeConcern));
    }
    if (activeCategory !== "all") {
      result = result.filter(p => p.category === activeCategory);
    }
    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "best-selling": result.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0)); break;
    }
    return result;
  }, [activeConcern, activeCategory, sort]);

  const pageTitle = activeConcern
    ? `Products for ${skinConcerns.find(c => c.id === activeConcern)?.label || "Your Skin"}`
    : "Shop All Products";

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="kicker">The G&amp;B Collection</p>
          <h1 className="font-display text-3xl md:text-4xl text-deep-bronze">{pageTitle}</h1>
        </div>
      </section>

      <section className="bg-white border-b border-warm-gold/10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-body text-deep-bronze/50 uppercase tracking-wider mr-2">Skin:</span>
            <ConcernPill label="All" active={!activeConcern} onClick={() => setActiveConcern(null)} />
            {skinConcerns.map(c => (
              <ConcernPill key={c.id} label={c.label} active={activeConcern === c.id} onClick={() => setActiveConcern(activeConcern === c.id ? null : c.id)} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-body text-deep-bronze/50 uppercase tracking-wider mr-2">Type:</span>
              {categories.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`text-xs font-body px-3 py-1 rounded-full transition-all ${
                  activeCategory === cat.id ? "bg-warm-gold text-white" : "text-deep-bronze/60 hover:text-warm-gold"
                }`}>{cat.label}</button>
              ))}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value as SortOption)} className="text-xs font-body text-deep-bronze/70 bg-transparent border border-warm-gold/20 rounded-full px-4 py-1.5 focus:outline-none focus:border-warm-gold">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="best-selling">Best Selling</option>
            </select>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-body text-deep-bronze/40 mb-6">{filtered.length} products</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-xl text-deep-bronze/40">No products match your filters</p>
              <button onClick={() => { setActiveConcern(null); setActiveCategory("all"); }} className="btn-gold-outline mt-4">Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ShopContent />
    </Suspense>
  );
}
