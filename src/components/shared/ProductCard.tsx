import Link from "next/link";
import type { Product } from "@/data/products";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
  dark?: boolean;
  badge?: string;
}

export function ProductCard({ product, dark = false, badge }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className={`rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 ${
        dark
          ? "bg-gradient-to-b from-warm-gold/[0.08] to-warm-gold/[0.02] border border-warm-gold/20 group-hover:border-warm-gold/40"
          : "bg-white border border-warm-gold/10 shadow-sm group-hover:shadow-lg group-hover:shadow-warm-gold/10"
      }`}>
        <div className={`relative h-52 flex items-center justify-center ${
          dark ? "bg-gradient-to-b from-warm-gold/10 to-transparent" : "bg-gradient-to-b from-light-beige to-cream/30"
        }`}>
          <div className={`w-20 h-28 rounded-[20px_20px_8px_8px] ${
            dark ? "bg-warm-gold/[0.18] border border-warm-gold/25" : "bg-warm-gold/10 border border-warm-gold/20"
          }`} />
          {badge && (
            <span className="absolute top-3 left-3 bg-warm-gold text-espresso text-[9px] font-bold font-body uppercase tracking-wider px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
          {product.preorder && (
            <span className="absolute top-3 right-3 bg-deep-bronze text-cream text-[9px] font-bold font-body uppercase tracking-wider px-3 py-1 rounded-full">
              Pre-order
            </span>
          )}
        </div>
        <div className="p-4">
          {product.concerns.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {product.concerns.slice(0, 2).map(c => (
                <span key={c} className={`text-[9px] font-body uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  dark ? "bg-warm-gold/10 text-warm-gold" : "bg-light-beige text-deep-bronze/70"
                }`}>
                  {c.replace("-", " ")}
                </span>
              ))}
            </div>
          )}
          <StarRating rating={product.rating} count={product.reviewCount} dark={dark} />
          <h3 className={`font-display text-base mt-2 ${dark ? "text-cream" : "text-deep-bronze"}`}>
            {product.name}
          </h3>
          <p className={`text-xs font-body mt-0.5 ${dark ? "text-soft-taupe" : "text-deep-bronze/50"}`}>
            {product.subtitle}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className={`font-display text-lg ${dark ? "text-warm-gold" : "text-deep-bronze"}`}>
              {product.variants ? `From $${product.variants[0].price.toFixed(2)}` : `$${product.price.toFixed(2)}`}
            </span>
            <span className="btn-gold !py-1.5 !px-3 !text-[9px] group-hover:scale-105 transition-transform">
              Add to Ritual
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
