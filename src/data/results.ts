import type { SkinConcern } from "./products";

export interface Result {
  id: number;
  concern: SkinConcern;
  concernLabel: string;
  timeline: string;
  weeksBefore: number;
  weeksAfter: number;
  productsUsed: { slug: string; name: string }[];
  testimonial?: string;
  customerName?: string;
  image?: string;
}

export const results: Result[] = [
  { id: 1, concern: "dark-spots", concernLabel: "Hyperpigmentation", timeline: "Week 1 → Week 6", weeksBefore: 1, weeksAfter: 6, productsUsed: [{ slug: "glow-cleansing-bar", name: "Glow Cleansing Bar" }, { slug: "dark-spot-cream", name: "Dark Spot Cream" }], testimonial: "I never thought my skin could look this even. The dark spots on my forehead are almost invisible now.", customerName: "Tamika R.", image: "/results/result-1.jpg" },
  { id: 2, concern: "eczema", concernLabel: "Eczema", timeline: "Week 1 → Week 4", weeksBefore: 1, weeksAfter: 4, productsUsed: [{ slug: "eczema-oatmeal-bar", name: "Eczema Oatmeal Bar" }, { slug: "eczema-pudding-cream", name: "Eczema Pudding Cream" }], testimonial: "My arms were so inflamed before. Now the itching is gone and my skin is smooth again.", customerName: "Keisha M.", image: "/results/result-2.jpg" },
  { id: 3, concern: "acne", concernLabel: "Acne & Breakouts", timeline: "Week 1 → Week 8", weeksBefore: 1, weeksAfter: 8, productsUsed: [{ slug: "blemish-corrector-kit", name: "Blemish Corrector Kit" }, { slug: "turmeric-mud-mask", name: "Turmeric Mud Mask" }], testimonial: "My chin was a mess. Now I actually feel confident going out without makeup.", customerName: "Aaliyah T.", image: "/results/result-3.jpg" },
  { id: 4, concern: "dark-spots", concernLabel: "Sun Damage", timeline: "Week 1 → Week 10", weeksBefore: 1, weeksAfter: 10, productsUsed: [{ slug: "vitamin-c-serum", name: "Vitamin C Serum" }, { slug: "nighttime-dark-spot-corrector", name: "Nighttime Dark Spot Corrector" }], testimonial: "Years of sun damage on my cheeks. Two products and 10 weeks later — I'm amazed.", customerName: "Monica J.", image: "/results/result-4.jpg" },
  { id: 5, concern: "dryness", concernLabel: "Chronic Dryness", timeline: "Week 1 → Week 3", weeksBefore: 1, weeksAfter: 3, productsUsed: [{ slug: "hydrating-jelly-mask", name: "Hydrating Jelly Mask" }, { slug: "nourish-moisturizing-oil", name: "Nourish Moisturizing Oil" }], testimonial: "My skin was flaky and tight every single day. Now it's plump and dewy. Only 3 weeks!", customerName: "Destiny W." },
  { id: 6, concern: "uneven-tone", concernLabel: "Uneven Skin Tone", timeline: "Week 1 → Week 6", weeksBefore: 1, weeksAfter: 6, productsUsed: [{ slug: "glow-cleansing-bar", name: "Glow Cleansing Bar" }, { slug: "exfoliating-turmeric-scrub", name: "Exfoliating Turmeric Scrub" }, { slug: "vitamin-c-serum", name: "Vitamin C Serum" }], testimonial: "My tone is so much more even now. The turmeric products are magic. I use all three religiously.", customerName: "Crystal D." },
  { id: 7, concern: "eczema", concernLabel: "Eczema (Child)", timeline: "Week 1 → Week 5", weeksBefore: 1, weeksAfter: 5, productsUsed: [{ slug: "eczema-oatmeal-bar", name: "Eczema Oatmeal Bar" }, { slug: "eczema-pudding-cream", name: "Eczema Pudding Cream" }], testimonial: "My baby's eczema was so bad. The pediatrician's creams weren't working. This was our miracle.", customerName: "Simone K." },
  { id: 8, concern: "acne", concernLabel: "Hormonal Acne", timeline: "Week 1 → Week 6", weeksBefore: 1, weeksAfter: 6, productsUsed: [{ slug: "blemish-corrector-kit", name: "Blemish Corrector Kit" }, { slug: "exfoliating-turmeric-scrub", name: "Exfoliating Turmeric Scrub" }], testimonial: "Every month my jawline would break out. After using the kit consistently, the breakouts have nearly stopped.", customerName: "Jasmine L." },
];

export function getResultsByConcern(concern: SkinConcern): Result[] {
  return results.filter(r => r.concern === concern);
}

export function getFeaturedResults(): Result[] {
  return results.slice(0, 3);
}
