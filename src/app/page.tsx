import { Hero } from "@/components/sections/Hero";
import { SpringCollection } from "@/components/sections/SpringCollection";
import { ShopBySkin } from "@/components/sections/ShopBySkin";
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
      <BestSellers />
      <RegimenSection />
      <ResultsPreview />
      <ReviewsSection />
    </>
  );
}
