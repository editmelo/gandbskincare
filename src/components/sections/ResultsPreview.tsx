import Link from "next/link";
import { getFeaturedResults } from "@/data/results";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ResultCard } from "@/components/shared/ResultCard";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function ResultsPreview() {
  const featuredResults = getFeaturedResults();
  return (
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader kicker="Real results" headline="The glow speaks for itself" accentWord="speaks for itself" dark />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredResults.map((result, i) => (
            <AnimateOnScroll key={result.id} delay={i * 100}>
              <ResultCard result={result} />
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/results" className="btn-gold-outline !border-warm-gold/40 !text-warm-gold hover:!bg-warm-gold hover:!text-espresso">See All Results</Link>
        </div>
      </div>
    </section>
  );
}
