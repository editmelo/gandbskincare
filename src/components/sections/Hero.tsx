"use client";

import Link from "next/link";
import { skinConcerns } from "@/data/products";
import { ConcernPill } from "@/components/shared/ConcernPill";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cream via-light-beige/60 to-cream overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full gold-glow" />
      <div className="absolute -bottom-32 left-[10%] w-96 h-96 rounded-full gold-glow" />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="kicker animate-fade-up opacity-0">Your skin has a story</p>
            <h1 className="font-display text-4xl md:text-6xl text-deep-bronze leading-tight animate-fade-up opacity-0 animate-delay-100">
              We&apos;re here to{" "}
              <span className="text-warm-gold italic">listen.</span>
            </h1>
            <p className="font-body text-base text-deep-bronze/70 leading-relaxed max-w-lg mt-6 animate-fade-up opacity-0 animate-delay-200">
              Tell us what your skin is going through — and we&apos;ll guide you to the natural ingredients that actually work.
            </p>
            <div className="flex flex-wrap gap-2 mt-8 animate-fade-up opacity-0 animate-delay-300">
              {skinConcerns.map(concern => (
                <Link key={concern.id} href={`/shop?concern=${concern.id}`}>
                  <ConcernPill label={concern.label} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-3 animate-fade-up opacity-0 animate-delay-400">
            <div className="w-36 h-48 rounded-[30px_30px_12px_12px] bg-gradient-to-b from-warm-gold/20 to-warm-gold/5 border-[1.5px] border-warm-gold/30" />
            <p className="font-display text-sm text-warm-gold italic">Your ritual starts here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
