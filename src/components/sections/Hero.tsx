"use client";

import Image from "next/image";
import Link from "next/link";
import { skinConcerns } from "@/data/products";
import { ConcernPill } from "@/components/shared/ConcernPill";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cream via-light-beige/60 to-cream overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full gold-glow" />
      <div className="absolute -bottom-32 left-[10%] w-96 h-96 rounded-full gold-glow" />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
          <div className="flex-shrink-0 w-full md:w-[420px] animate-fade-up opacity-0 animate-delay-400">
            <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden border-2 border-warm-gold/15 shadow-xl shadow-warm-gold/10">
              <Image
                src="/hero-banner-1.png"
                alt="G&B Natural Skincare — Must Have Natural Products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
