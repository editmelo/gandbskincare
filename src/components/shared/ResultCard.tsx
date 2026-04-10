import Image from "next/image";
import Link from "next/link";
import type { Result } from "@/data/results";

interface ResultCardProps {
  result: Result;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="border border-warm-gold/20 rounded-2xl overflow-hidden">
      {result.image ? (
        <div className="relative h-72 md:h-80 w-full">
          <Image src={result.image} alt={`${result.concernLabel} results`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute bottom-3 left-3 bg-espresso/70 text-warm-gold text-xs font-body rounded-full px-4 py-1.5 backdrop-blur-sm">
            {result.timeline}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex-1 h-36 bg-warm-gold/[0.06] flex items-center justify-center border-r border-warm-gold/10">
            <div className="text-center">
              <p className="text-[10px] font-body text-soft-taupe mb-2 uppercase tracking-wider">Before</p>
              <div className="w-16 h-16 rounded-full bg-warm-gold/10 border border-dashed border-warm-gold/20 mx-auto" />
            </div>
          </div>
          <div className="flex-1 h-36 bg-warm-gold/10 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] font-body text-warm-gold mb-2 uppercase tracking-wider">
                After — {result.weeksAfter} Weeks
              </p>
              <div className="w-16 h-16 rounded-full bg-warm-gold/[0.18] border border-warm-gold/30 mx-auto" />
            </div>
          </div>
        </div>
      )}
      <div className="p-4">
        <span className="inline-block bg-warm-gold/10 text-warm-gold text-[10px] font-body rounded-full px-3 py-1 mb-2">
          {result.concernLabel}
        </span>
        {result.testimonial && (
          <p className="text-soft-taupe text-xs font-body leading-relaxed mb-2 italic">
            &ldquo;{result.testimonial}&rdquo;
          </p>
        )}
        <p className="text-soft-taupe text-[11px] font-body">
          Used: {result.productsUsed.map(p => p.name).join(" + ")}
        </p>
        <div className="mt-2">
          <Link href={`/product/${result.productsUsed[0].slug}`} className="text-warm-gold text-xs font-body font-medium hover:underline">
            → Shop this routine
          </Link>
        </div>
      </div>
    </div>
  );
}
