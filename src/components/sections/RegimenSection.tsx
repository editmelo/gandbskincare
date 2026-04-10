import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RegimenFlow } from "@/components/shared/RegimenFlow";

export function RegimenSection() {
  const totalPrice = 18.0 + 28.99 + 22.99 + 19.99;
  return (
    <section id="regimen" className="py-16 md:py-20 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-warm-gold/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader kicker="Your daily ritual" headline="The G&B Glow Routine" accentWord="Glow" />
        <RegimenFlow />
        <div className="text-center mt-10">
          <Link href="/shop" className="btn-bronze">Shop the Full Ritual — ${totalPrice.toFixed(2)}</Link>
        </div>
      </div>
    </section>
  );
}
