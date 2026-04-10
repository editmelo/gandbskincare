export interface Review {
  id: number;
  productSlug: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export const reviews: Review[] = [
  { id: 1, productSlug: "glow-cleansing-bar", author: "Tamika R.", rating: 5, date: "2026-03-15", text: "I've been using this bar for 3 months and my dark spots have faded so much. My skin has never looked this even. I'm on my 4th bar now!", verified: true },
  { id: 2, productSlug: "vitamin-c-serum", author: "Jasmine L.", rating: 5, date: "2026-03-08", text: "This serum is everything. My skin literally glows after using it. I've gotten so many compliments. Worth every penny.", verified: true },
  { id: 3, productSlug: "eczema-pudding-cream", author: "Keisha M.", rating: 5, date: "2026-02-28", text: "My daughter has had eczema since she was a baby. We've tried everything. This cream is the only thing that truly calms her flare-ups. Bryanne, thank you.", verified: true },
  { id: 4, productSlug: "dark-spot-cream", author: "Monica J.", rating: 5, date: "2026-03-20", text: "Started seeing results in just 2 weeks. The dark spots on my cheeks from sun damage are visibly lighter. I'm amazed.", verified: true },
  { id: 5, productSlug: "nourish-moisturizing-oil", author: "Destiny W.", rating: 5, date: "2026-03-12", text: "So lightweight but so hydrating. My skin drinks this up. I use it morning and night and my dry patches are completely gone.", verified: true },
  { id: 6, productSlug: "blemish-corrector-kit", author: "Aaliyah T.", rating: 4, date: "2026-02-20", text: "This kit cleared my chin acne in about 3 weeks. The spot treatment works fast. I just wish the kit came in a larger size.", verified: true },
  { id: 7, productSlug: "glow-cleansing-bar", author: "Crystal D.", rating: 5, date: "2026-01-14", text: "I bought this at a pop-up event and Bryanne walked me through how to use it. My skin has been transformed. I tell everyone about G&B now.", verified: true },
  { id: 8, productSlug: "rose-water-toner", author: "Simone K.", rating: 5, date: "2026-03-05", text: "The rose scent is divine and my pores look so much smaller. I keep a bottle at my desk for midday refreshes. Obsessed.", verified: true },
];

export function getReviewsByProduct(slug: string): Review[] {
  return reviews.filter(r => r.productSlug === slug);
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter(r => r.rating === 5).slice(0, 3);
}
