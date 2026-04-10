import { Hero } from "@/components/sections/Hero";
import { SpringCollection } from "@/components/sections/SpringCollection";
import { ShopBySkin } from "@/components/sections/ShopBySkin";
import { TurmericCollection } from "@/components/sections/TurmericCollection";
import { BestSellers } from "@/components/sections/BestSellers";
import { RegimenSection } from "@/components/sections/RegimenSection";
import { ResultsPreview } from "@/components/sections/ResultsPreview";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SpringCollection />
      <ShopBySkin />
      <TurmericCollection />
      <BestSellers />
      <RegimenSection />
      <ResultsPreview />
      <ReviewsSection />
    </>
  );
}
