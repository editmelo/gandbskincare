"use client";

import Image from "next/image";
import Link from "next/link";
import { skinConcerns } from "@/data/products";
import { ConcernPill } from "@/components/shared/ConcernPill";
import { HoneyDrip } from "@/components/shared/HoneyDrip";

export function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Decorative honey drip under the nav */}
      <HoneyDrip />

      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner-1.png"
          alt="G&B Natural Skincare — Must Have Natural Products"
          fill
          className="object-cover object-right"
          sizes="100vw"
          priority
        />
      </div>

      {/* Gradient fade from left — cream fading to transparent so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 via-40% to-transparent" />

      {/* Extra fade layer for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream/80 to-cream/20 md:hidden" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="max-w-xl">
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
      </div>
    </section>
  );
}
