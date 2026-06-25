import { siteAssets } from "@/lib/siteAssets";

export type ProductSlug = "biofusion-restore-shampoo" | "biofusion-restore-conditioner";

export type ProductData = {
  slug: ProductSlug;
  name: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  galleryImages: readonly string[];
  tags: string[];
  price: string;
  shortDescription: string;
  whatItIs: string;
  benefits: string[];
  howToUse: string[];
  keyIngredients: Array<{
    number: string;
    name: string;
    description: string;
  }>;
  inciList: string;
};

export const products: ProductData[] = [
  {
    slug: "biofusion-restore-shampoo",
    name: "BioFusion™ Restore Shampoo",
    subtitle: "With Moringa Seed Butter + 8 Essential Amino Acids",
    imageSrc: siteAssets.shampooPack,
    imageAlt: "La'Pura Professional BioFusion™ Restore Shampoo — 300ML",
    galleryImages: siteAssets.shampooGallery,
    tags: ["Gentle Cleanse", "Frizz Control", "Split End Care"],
    price: "₹ 1,299",
    shortDescription:
      "A salon-style cleanser that balances effective cleansing with botanical care and damage recovery support.",
    whatItIs:
      "A gentle yet powerful cleanser designed for salon-quality care. Formulated with Moringa Seed Butter and 8 Essential Amino Acids, it strengthens hair from root to tip while reducing frizz and sealing split ends caused by chemical and mechanical damage.",
    benefits: [
      "Multi-cultural vegan Keratin",
      "Boosts collagen formation",
      "Deeply nourishes with Moringa Seed Butter",
      "Fortified with essential amino acids for optimized damage recovery",
      "Enhances moisture retention and hydration",
      "Promotes stronger, shinier hair",
      "Seals and repairs split ends",
    ],
    howToUse: [
      "Apply to wet hair",
      "Massage into scalp and lengths",
      "Rinse thoroughly",
      "For best results, use with BioFusion™ Restore Conditioner",
    ],
    keyIngredients: [
      {
        number: "01",
        name: "MORINGA OLEIFERA SEED BUTTER",
        description:
          "Rich in vitamins, minerals, and antioxidants, moringa butter deeply nourishes, strengthens, and restores dull, damaged hair while providing natural shine.",
      },
      {
        number: "02",
        name: "HYDROLYZED WHEAT, SOY & CORN PROTEIN",
        description:
          "A triple protein complex that rebuilds and reinforces the hair shaft, reduces breakage, and improves hair strength and resilience.",
      },
      {
        number: "03",
        name: "ADANSONIA DIGITATA (BAOBAB) SEED EXTRACT",
        description:
          "Often called the Tree of Life, baobab is packed with nutrients that revitalize hair, protect against dryness, and improve overall hair health.",
      },
      {
        number: "04",
        name: "8 ESSENTIAL AMINO ACID COMPLEX",
        description:
          "The building blocks of keratin, these amino acids repair damaged cuticles, promote collagen formation, improve elasticity, and restore natural strength to hair.",
      },
      {
        number: "05",
        name: "URTICA DIOICA (STINGING NETTLE) EXTRACT",
        description:
          "A botanical powerhouse known for stimulating the scalp, promoting natural hair growth, and helping reduce hair fall.",
      },
      {
        number: "06",
        name: "SODIUM PYRROLIDONE CARBOXYLIC ACID (PCA)",
        description:
          "A powerful humectant that helps hair retain essential moisture, keeping it soft, smooth, and hydrated.",
      },
      {
        number: "07",
        name: "TREHALOSE",
        description:
          "A natural sugar with antioxidant properties that protects hair fibers from environmental stress and helps maintain elasticity.",
      },
    ],
    inciList:
      "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Acrylates Copolymer, Ethylene Glycol Distearate, Sodium Cocomonoethanolamide, Glycerin, Sodium Lauryl Sulfoacetate, Dimethiconol, TEA-Dodecylbenzenesulfonate, Trideceth-10, Ethylhexylglycerin, Phenoxyethanol, Disodium EDTA, Sodium Hydroxide, Perfume.",
  },
  {
    slug: "biofusion-restore-conditioner",
    name: "BioFusion™ Restore Conditioner",
    subtitle: "With Moringa Seed Butter + 8 Amino Acids",
    imageSrc: siteAssets.conditionerPack,
    imageAlt: "La'Pura Professional BioFusion™ Restore Conditioner — 300ML",
    galleryImages: siteAssets.conditionerGallery,
    tags: ["Smooths", "Detangles", "Shine Boost"],
    price: "₹ 1,499",
    shortDescription:
      "A nourishing conditioner that smooths, detangles, and restores manageability for a polished finish.",
    whatItIs:
      "A deeply hydrating conditioner crafted with Moringa Seed Butter and 8 Essential Amino Acids. It smooths, detangles, and restores manageability, leaving hair soft, shiny, and resilient.",
    benefits: [
      "Multi-cultural vegan Keratin",
      "Boosts collagen formation",
      "Deeply nourishes with Moringa Seed Butter",
      "Fortified with essential amino acids for optimized damage recovery",
      "Enhances moisture retention and hydration",
      "Promotes stronger, shinier hair",
      "Seals and repairs split ends",
    ],
    howToUse: [
      "Dispense an appropriate amount into your palm",
      "Apply evenly, focusing on the mid-lengths to ends",
      "Allow the conditioner to sit for 2–5 minutes",
      "Rinse thoroughly with cool or lukewarm water to seal the hair cuticle and enhance shine",
    ],
    keyIngredients: [
      {
        number: "01",
        name: "BAOBAB SEED OIL (ADANSONIA DIGITATA)",
        description:
          "Rich in omega fatty acids and vitamins, baobab extract helps restore moisture balance, smooths frizz, and shields hair from environmental damage.",
      },
      {
        number: "02",
        name: "MORINGA OLEIFERA SEED BUTTER",
        description:
          "Packed with antioxidants, vitamins, and fatty acids, moringa butter deeply nourishes and protects hair, restoring softness and natural shine.",
      },
      {
        number: "03",
        name: "HYDROLYZED WHEAT, SOY & CORN PROTEIN",
        description:
          "A powerful protein blend that repairs and strengthens damaged hair fibers, reduces split ends, and improves overall hair resilience.",
      },
      {
        number: "04",
        name: "8 ESSENTIAL AMINO ACID COMPLEX",
        description:
          "These building blocks of keratin repair weak spots, improve hair structure, and boost collagen formation for stronger, healthier strands.",
      },
      {
        number: "05",
        name: "URTICA DIOICA (STINGING NETTLE) EXTRACT",
        description:
          "A natural scalp stimulant that supports healthy hair growth, strengthens roots, and reduces hair thinning.",
      },
      {
        number: "06",
        name: "PANTHENOL (PRO-VITAMIN B5)",
        description:
          "A pro-vitamin that penetrates the hair shaft to improve elasticity, add shine, lock in long-lasting hydration, and strengthen hair against breakage.",
      },
    ],
    inciList:
      "Aqua, Cyclopentasiloxane, Behentrimonium chloride, Stearic acid, Glycerin, Cetostearyl alcohol, Glyceryl monostearate, Stearamidopropyl dimethylamine, Dimethiconol, TEA-Dodecylbenzenesulfonate, Trideceth-10, Amodimethicone, Trideceth-12, Cetrimonium Chloride, Ethylhexylglycerin, Phenoxyethanol, Disodium EDTA, Perfume.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
