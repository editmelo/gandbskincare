"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { results } from "@/data/results";
import { ResultCard } from "@/components/shared/ResultCard";
import type { SkinConcern } from "@/data/products";

const tabs: { id: SkinConcern | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "dark-spots", label: "Dark Spots" },
  { id: "eczema", label: "Eczema" },
  { id: "acne", label: "Acne" },
];

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<SkinConcern | "all">("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return results;
    return results.filter(r => r.concern === activeTab);
  }, [activeTab]);

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="kicker">Real results</p>
          <h1 className="font-display text-3xl md:text-4xl text-deep-bronze">
            The glow <span className="text-warm-gold italic">speaks for itself</span>
          </h1>
          <p className="font-body text-sm text-deep-bronze/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Real customers, real transformations. Each card shows the skin concern, the timeline, and exactly which G&amp;B products were used. Placeholders shown — real photos coming soon.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-warm-gold/10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                activeTab === tab.id ? "bg-warm-gold text-white" : "text-deep-bronze/50 hover:text-warm-gold"
              }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-body text-soft-taupe/60 mb-6">{filtered.length} results</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(result => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-deep-bronze mb-4">
            Ready to start your <span className="text-warm-gold italic">glow</span> journey?
          </h2>
          <p className="font-body text-sm text-deep-bronze/60 mb-8">Find the right products for your skin and start seeing results.</p>
          <Link href="/shop" className="btn-gold">Find Products for Your Skin</Link>
        </div>
      </section>
    </>
  );
}
