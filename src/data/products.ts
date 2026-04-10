export type SkinConcern = "dark-spots" | "eczema" | "acne" | "dryness" | "uneven-tone" | "yoni";

export type ProductCategory = "cleanser" | "toner" | "serum" | "moisturizer" | "mask" | "treatment" | "kit" | "body" | "yoni" | "accessory" | "hair";

export type RegimenStep = "cleanse" | "tone" | "treat" | "nourish";

export interface ProductVariant {
  label: string;
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  variants?: ProductVariant[];
  category: ProductCategory;
  concerns: SkinConcern[];
  regimenStep?: RegimenStep;
  rating: number;
  reviewCount: number;
  bestSeller?: boolean;
  springCollection?: boolean;
  ingredients?: string[];
  keyIngredient?: { name: string; benefit: string };
  preorder?: boolean;
  image?: string;
  turmeric?: boolean;
}

export const products: Product[] = [
  {
    slug: "glow-cleansing-bar",
    image: "/products/glow-cleansing-bar.jpg",
    name: "Glow Cleansing Bar",
    subtitle: "Honey & Turmeric",
    description: "A gentle yet effective cleansing bar infused with raw honey and turmeric to brighten skin, reduce dark spots, and reveal your natural glow. Perfect for daily use on face and body.",
    price: 18.00,
    variants: [
      { label: "Sample Size", price: 7.00 },
      { label: "Full Size Bar", price: 18.00 },
    ],
    category: "cleanser",
    concerns: ["dark-spots", "uneven-tone"],
    regimenStep: "cleanse",
    rating: 4.9,
    reviewCount: 142,
    bestSeller: true,
    springCollection: true,
    ingredients: ["Turmeric", "Raw Honey", "Coconut Oil", "Shea Butter", "Vitamin E"],
    keyIngredient: { name: "Turmeric", benefit: "A powerful antioxidant that brightens skin and reduces hyperpigmentation by inhibiting melanin production." },
    turmeric: true,
  },
  {
    slug: "vitamin-c-serum",
    image: "/products/vitamin-c-serum.jpg",
    name: "Vitamin C Serum",
    subtitle: "Brightening Treatment",
    description: "A potent vitamin C serum that targets dark spots, evens skin tone, and boosts collagen production for visibly brighter, firmer skin.",
    price: 22.99,
    category: "serum",
    concerns: ["dark-spots", "uneven-tone"],
    regimenStep: "treat",
    rating: 4.8,
    reviewCount: 98,
    bestSeller: true,
    springCollection: true,
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Vitamin E", "Aloe Vera", "Jojoba Oil"],
    keyIngredient: { name: "Vitamin C", benefit: "A powerful antioxidant that brightens skin, fades dark spots, and stimulates collagen for a youthful glow." },
  },
  {
    slug: "dark-spot-cream",
    image: "/products/dark-spot-cream.jpg",
    name: "Dark Spot Cream",
    subtitle: "Corrective Treatment",
    description: "An intensive corrective cream formulated to fade stubborn dark spots, sun damage, and post-acne marks. Use nightly for transformative results.",
    price: 37.99,
    category: "treatment",
    concerns: ["dark-spots", "uneven-tone"],
    rating: 4.8,
    reviewCount: 115,
    bestSeller: true,
    ingredients: ["Alpha Arbutin", "Niacinamide", "Turmeric Extract", "Licorice Root", "Shea Butter"],
    keyIngredient: { name: "Alpha Arbutin", benefit: "A gentle skin-lightening agent that reduces melanin production to fade dark spots without irritation." },
    turmeric: true,
  },
  {
    slug: "nighttime-dark-spot-corrector",
    image: "/products/nighttime-dark-spot-corrector.jpg",
    name: "Nighttime Dark Spot Corrector",
    subtitle: "Overnight Repair",
    description: "Work on your dark spots while you sleep. This overnight corrector penetrates deeply to break up hyperpigmentation and reveal brighter skin by morning.",
    price: 19.99,
    category: "treatment",
    concerns: ["dark-spots", "uneven-tone"],
    rating: 4.7,
    reviewCount: 87,
    ingredients: ["Retinol", "Niacinamide", "Vitamin C", "Turmeric", "Jojoba Oil"],
    keyIngredient: { name: "Retinol", benefit: "Accelerates cell turnover overnight to fade dark spots and reveal fresh, even-toned skin." },
    turmeric: true,
  },
  {
    slug: "rose-water-toner",
    image: "/products/rose-water-toner.jpg",
    name: "Rose Water Toner",
    subtitle: "Hydrating Balance",
    description: "A soothing rose water toner that balances pH, tightens pores, and preps skin for serums and moisturizers. Mist throughout the day for a dewy refresh.",
    price: 28.99,
    variants: [
      { label: "2 oz", price: 28.99 },
      { label: "4 oz", price: 34.99 },
    ],
    category: "toner",
    concerns: ["dryness", "uneven-tone"],
    regimenStep: "tone",
    rating: 4.7,
    reviewCount: 76,
    springCollection: true,
    ingredients: ["Rose Water", "Witch Hazel", "Aloe Vera", "Glycerin", "Vitamin E"],
    keyIngredient: { name: "Rose Water", benefit: "A natural astringent that soothes inflammation, balances oil production, and adds a dewy glow." },
  },
  {
    slug: "nourish-moisturizing-oil",
    image: "/products/nourish-moisturizing-oil.jpg",
    name: "Nourish Moisturizing Oil",
    subtitle: "Daily Hydration",
    description: "A lightweight yet deeply nourishing facial oil that locks in moisture, soothes dry patches, and gives skin a healthy, radiant finish.",
    price: 19.99,
    variants: [
      { label: "1 oz", price: 19.99 },
      { label: "2 oz", price: 28.99 },
      { label: "4 oz", price: 51.99 },
    ],
    category: "moisturizer",
    concerns: ["dryness"],
    regimenStep: "nourish",
    rating: 4.9,
    reviewCount: 134,
    bestSeller: true,
    ingredients: ["Jojoba Oil", "Rosehip Oil", "Vitamin E", "Lavender Essential Oil", "Sweet Almond Oil"],
    keyIngredient: { name: "Jojoba Oil", benefit: "Mimics skin's natural sebum to deeply moisturize without clogging pores — perfect for all skin types." },
  },
  {
    slug: "eczema-oatmeal-bar",
    image: "/products/eczema-oatmeal-bar.jpg",
    name: "Eczema Oatmeal Bar",
    subtitle: "Gentle Relief",
    description: "A soothing cleansing bar made with colloidal oatmeal and shea butter to calm eczema flare-ups, reduce itching, and restore the skin barrier.",
    price: 18.00,
    category: "cleanser",
    concerns: ["eczema", "dryness"],
    rating: 4.8,
    reviewCount: 63,
    ingredients: ["Colloidal Oatmeal", "Shea Butter", "Coconut Oil", "Chamomile", "Calendula"],
    keyIngredient: { name: "Colloidal Oatmeal", benefit: "Clinically proven to soothe itching, reduce redness, and strengthen the skin's protective barrier." },
  },
  {
    slug: "eczema-pudding-cream",
    image: "/products/eczema-pudding-cream.jpg",
    name: "Eczema Pudding Cream",
    subtitle: "Intensive Moisture",
    description: "A thick, pudding-like cream that provides intense moisture and relief for eczema-prone skin. Locks in hydration for hours and calms irritation.",
    price: 39.99,
    category: "moisturizer",
    concerns: ["eczema", "dryness"],
    rating: 4.9,
    reviewCount: 71,
    ingredients: ["Shea Butter", "Colloidal Oatmeal", "Aloe Vera", "Coconut Oil", "Vitamin E", "Chamomile"],
    keyIngredient: { name: "Shea Butter", benefit: "Rich in fatty acids and vitamins, it deeply moisturizes, reduces inflammation, and supports skin healing." },
  },
  {
    slug: "blemish-corrector-kit",
    image: "/products/blemish-corrector-kit.jpg",
    name: "Blemish Corrector Kit",
    subtitle: "Complete Acne Solution",
    description: "Everything you need to fight breakouts and fade acne scars. This kit includes a targeted cleanser, spot treatment, and lightweight moisturizer.",
    price: 50.99,
    category: "kit",
    concerns: ["acne"],
    rating: 4.6,
    reviewCount: 54,
    ingredients: ["Tea Tree Oil", "Salicylic Acid", "Niacinamide", "Aloe Vera", "Witch Hazel"],
    keyIngredient: { name: "Tea Tree Oil", benefit: "A natural antibacterial that fights acne-causing bacteria, reduces inflammation, and speeds healing." },
  },
  {
    slug: "exfoliating-turmeric-scrub",
    image: "/products/exfoliating-turmeric-scrub.jpg",
    name: "Exfoliating Turmeric Scrub",
    subtitle: "Brightening Exfoliant",
    description: "A gentle yet effective scrub that buffs away dead skin cells while turmeric brightens and evens skin tone. Use 2-3 times weekly for best results.",
    price: 18.99,
    variants: [
      { label: "4 oz", price: 18.99 },
      { label: "8 oz", price: 22.99 },
    ],
    category: "treatment",
    concerns: ["dark-spots", "acne", "uneven-tone"],
    rating: 4.7,
    reviewCount: 82,
    springCollection: true,
    ingredients: ["Turmeric Powder", "Brown Sugar", "Coconut Oil", "Honey", "Lemon Essential Oil"],
    keyIngredient: { name: "Turmeric", benefit: "Brightens skin, reduces dark spots, and has anti-inflammatory properties that calm breakouts." },
    turmeric: true,
  },
  {
    slug: "turmeric-mud-mask",
    image: "/products/turmeric-mud-mask.jpg",
    name: "Turmeric Mud Mask & Silicone Brush Duo",
    subtitle: "Deep Cleansing Mask",
    description: "A detoxifying mud mask infused with turmeric that draws out impurities, tightens pores, and leaves skin glowing. Comes with a silicone brush for easy application.",
    price: 13.99,
    category: "mask",
    concerns: ["acne", "uneven-tone"],
    rating: 4.6,
    reviewCount: 48,
    ingredients: ["Kaolin Clay", "Turmeric", "Bentonite Clay", "Aloe Vera", "Tea Tree Oil"],
    keyIngredient: { name: "Kaolin Clay", benefit: "Gently draws out toxins and excess oil from pores without over-drying sensitive skin." },
    turmeric: true,
  },
  {
    slug: "hydrating-jelly-mask",
    image: "/products/hydrating-jelly-mask.jpg",
    name: "Hydrating Jelly Mask",
    subtitle: "Moisture Boost",
    description: "A bouncy jelly mask that floods skin with hydration. Perfect for dry, dehydrated skin that needs a moisture reset. Use weekly for plump, dewy results.",
    price: 28.99,
    category: "mask",
    concerns: ["dryness"],
    rating: 4.8,
    reviewCount: 59,
    ingredients: ["Hyaluronic Acid", "Aloe Vera", "Cucumber Extract", "Glycerin", "Rose Water"],
    keyIngredient: { name: "Hyaluronic Acid", benefit: "Holds 1000x its weight in water to plump skin and deliver deep, lasting hydration." },
  },
  {
    slug: "turmeric-cleansing-pads",
    image: "/products/turmeric-cleansing-pads.jpg",
    name: "Turmeric Cleansing Pads",
    subtitle: "On-the-Go Glow",
    description: "Pre-soaked cleansing pads infused with turmeric and witch hazel for a quick cleanse and tone on the go. Perfect for travel and post-workout freshening.",
    price: 14.99,
    variants: [
      { label: "10 Pads", price: 14.99 },
      { label: "30 Pads", price: 34.95 },
    ],
    category: "cleanser",
    concerns: ["dark-spots", "acne"],
    rating: 4.5,
    reviewCount: 41,
    ingredients: ["Turmeric Extract", "Witch Hazel", "Aloe Vera", "Salicylic Acid", "Green Tea"],
    keyIngredient: { name: "Witch Hazel", benefit: "A natural toner and astringent that minimizes pores, reduces oil, and soothes irritation." },
    turmeric: true,
  },
  {
    slug: "facial-cleansing-brush",
    image: "/products/facial-cleansing-brush.jpg",
    name: "Facial Cleansing Brush",
    subtitle: "Deep Clean Tool",
    description: "A soft-bristle cleansing brush that helps work your cleansing bar deeper into pores for a more thorough clean. Gentle enough for daily use.",
    price: 7.00,
    category: "accessory",
    concerns: [],
    rating: 4.4,
    reviewCount: 33,
  },
  {
    slug: "glow-pack",
    image: "/products/glow-pack.jpg",
    name: "Glow Pack",
    subtitle: "Starter Bundle",
    description: "The perfect introduction to G&B. Includes our best-selling Glow Cleansing Bar and Vitamin C Serum in travel-friendly sizes.",
    price: 25.99,
    variants: [
      { label: "Sample Size", price: 25.99 },
      { label: "Full Size", price: 55.99 },
    ],
    category: "kit",
    concerns: ["dark-spots", "uneven-tone"],
    rating: 4.8,
    reviewCount: 67,
    ingredients: ["Turmeric", "Honey", "Vitamin C", "Hyaluronic Acid"],
    keyIngredient: { name: "Turmeric + Vitamin C", benefit: "A powerhouse combo that brightens, protects, and visibly reduces dark spots in as little as 4 weeks." },
  },
  {
    slug: "glow-pack-2",
    image: "/products/glow-pack-2.jpg",
    name: "Glow Pack 2.0",
    subtitle: "Complete Glow System",
    description: "Our most comprehensive glow kit — includes the Glow Cleansing Bar, Rose Water Toner, Vitamin C Serum, and Nourish Moisturizing Oil. Everything you need for a full glow-up routine.",
    price: 108.88,
    category: "kit",
    concerns: ["dark-spots", "uneven-tone", "dryness"],
    rating: 4.9,
    reviewCount: 45,
  },
  {
    slug: "herbal-hair-growth-oil",
    image: "/products/herbal-hair-growth-oil.jpg",
    name: "Herbal Hair Growth Oil",
    subtitle: "Scalp & Hair Nourishment",
    description: "A nourishing herbal oil blend that stimulates hair growth, strengthens strands, and soothes dry scalp. Massage into scalp 2-3 times weekly.",
    price: 29.95,
    category: "hair",
    concerns: [],
    rating: 4.7,
    reviewCount: 52,
    ingredients: ["Castor Oil", "Rosemary Oil", "Peppermint Oil", "Jojoba Oil", "Biotin"],
    keyIngredient: { name: "Rosemary Oil", benefit: "Clinically shown to stimulate hair growth by improving scalp circulation and strengthening follicles." },
  },
  {
    slug: "phresh-p-yoni-bar",
    image: "/products/phresh-p-yoni-bar.jpg",
    name: "Phresh P Yoni Bar",
    subtitle: "Feminine Wash Bar",
    description: "A pH-balanced feminine wash bar made with natural ingredients to gently cleanse, maintain freshness, and support intimate health.",
    price: 17.00,
    variants: [
      { label: "Pink (Mint Free)", price: 17.00 },
      { label: "Blue (Cooling Sensation)", price: 17.00 },
    ],
    category: "yoni",
    concerns: ["yoni"],
    rating: 4.7,
    reviewCount: 38,
    ingredients: ["Coconut Oil", "Tea Tree Oil", "Aloe Vera", "Chamomile", "Lavender"],
    keyIngredient: { name: "Tea Tree Oil", benefit: "Naturally antibacterial and antifungal — gently cleanses while maintaining your body's natural balance." },
  },
  {
    slug: "stay-phresh-yoni-wash",
    image: "/products/stay-phresh-yoni-wash.jpg",
    name: "Stay Phresh Yoni Wash",
    subtitle: "Liquid Feminine Wash",
    description: "A gentle liquid feminine wash that cleanses, refreshes, and maintains optimal pH balance. Available in soothing or cooling formula.",
    price: 29.99,
    category: "yoni",
    concerns: ["yoni"],
    rating: 4.6,
    reviewCount: 29,
    ingredients: ["Aloe Vera", "Chamomile", "Cranberry Extract", "Vitamin E", "Coconut Oil"],
    keyIngredient: { name: "Cranberry Extract", benefit: "Rich in antioxidants and naturally supports urinary and feminine health while gently cleansing." },
  },
  {
    slug: "turmeric-glow-wash",
    image: "/products/turmeric-glow-wash.jpg",
    name: "Turmeric Glow Wash",
    subtitle: "Liquid Cleanser",
    description: "A foaming liquid cleanser with turmeric and honey that brightens skin while gently removing impurities. The liquid version of our best-selling Glow Bar.",
    price: 34.99,
    category: "cleanser",
    concerns: ["dark-spots", "uneven-tone"],
    rating: 4.8,
    reviewCount: 0,
    preorder: true,
    ingredients: ["Turmeric Extract", "Raw Honey", "Coconut-derived Surfactants", "Aloe Vera", "Vitamin C"],
    keyIngredient: { name: "Turmeric Extract", benefit: "Concentrated turmeric in liquid form for maximum brightening and anti-inflammatory benefits." },
    turmeric: true,
  },
  {
    slug: "ultimate-glow-bundle",
    image: "/products/ultimate-glow-bundle.jpg",
    name: "Ultimate Glow Bundle",
    subtitle: "The Full Experience",
    description: "Our most luxurious offering — every product in the G&B glow lineup bundled together at a special price. The ultimate gift for yourself or someone who deserves to glow.",
    price: 225.00,
    category: "kit",
    concerns: ["dark-spots", "uneven-tone", "dryness"],
    rating: 5.0,
    reviewCount: 12,
    preorder: true,
  },
  {
    slug: "gift-card",
    name: "G&B Gift Card",
    subtitle: "Give the Gift of Glow",
    description: "Not sure what to get? Let them choose their own glow journey with a G&B digital gift card.",
    price: 10.00,
    variants: [
      { label: "$10", price: 10.00 },
      { label: "$25", price: 25.00 },
      { label: "$50", price: 50.00 },
      { label: "$100", price: 100.00 },
    ],
    category: "accessory",
    concerns: [],
    rating: 5.0,
    reviewCount: 8,
  },
];

export const skinConcerns: { id: SkinConcern; label: string; productCount: number }[] = [
  { id: "dark-spots", label: "Dark Spots", productCount: products.filter(p => p.concerns.includes("dark-spots")).length },
  { id: "eczema", label: "Eczema", productCount: products.filter(p => p.concerns.includes("eczema")).length },
  { id: "acne", label: "Acne", productCount: products.filter(p => p.concerns.includes("acne")).length },
  { id: "dryness", label: "Dryness", productCount: products.filter(p => p.concerns.includes("dryness")).length },
  { id: "uneven-tone", label: "Uneven Tone", productCount: products.filter(p => p.concerns.includes("uneven-tone")).length },
];

export const regimenProducts: { step: RegimenStep; label: string; product: Product }[] = [
  { step: "cleanse", label: "Cleanse", product: products.find(p => p.slug === "glow-cleansing-bar")! },
  { step: "tone", label: "Tone", product: products.find(p => p.slug === "rose-water-toner")! },
  { step: "treat", label: "Treat", product: products.find(p => p.slug === "vitamin-c-serum")! },
  { step: "nourish", label: "Nourish", product: products.find(p => p.slug === "nourish-moisturizing-oil")! },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByConcern(concern: SkinConcern): Product[] {
  return products.filter(p => p.concerns.includes(concern));
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.bestSeller);
}

export function getSpringCollection(): Product[] {
  return products.filter(p => p.springCollection);
}

export function getTurmericProducts(): Product[] {
  return products.filter(p => p.turmeric);
}
