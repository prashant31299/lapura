import type { Metadata } from "next";
import Image from "next/image";
import IngredientItem from "@/components/ui/IngredientItem";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { breadcrumbSchema, productSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "BioFusion™ Restore Shampoo & Conditioner | La'Pura Professional",
  description:
    "Professional-grade BioFusion™ Restore Shampoo & Conditioner. Moringa Seed Butter, 8 Essential Amino Acids, Baobab Extract. Complete product details, ingredients, and usage instructions.",
};

const products = [
  {
    id: "biofusion-restore-shampoo",
    name: "BioFusion™ Restore Shampoo",
    tagline: "Professional Expert Formula",
    imageSrc: "/conditioner 3.png",
    imageAlt: "La'Pura Professional BioFusion™ Restore Shampoo — 300ML",
    price: "₹ 1,299",
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
    id: "biofusion-restore-conditioner",
    name: "BioFusion™ Restore Conditioner",
    tagline: "Professional Expert Formula",
    imageSrc: "/conditioner.png",
    imageAlt: "La'Pura Professional BioFusion™ Restore Conditioner — 300ML",
    price: "₹ 1,499",
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

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ...productSchemas,
            breadcrumbSchema("/products"),
          ]),
        }}
      />

      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>THE COLLECTION</SectionLabel>
          <h1 className="font-outfit font-semibold text-3xl md:text-hero text-near-black tracking-tight text-center mb-2">
            BioFusion™ Restore Collection
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center mb-0">
            Salon-quality care powered by Moringa Seed Butter, botanical
            intelligence, and 8 Essential Amino Acids.
          </p>
        </div>
      </section>

      <Divider />

      {products.map((product, index) => (
        <div key={product.name}>
          <section className="section-padding bg-off-white">
            <div className="max-w-content mx-auto content-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Image Column */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="relative aspect-[3/4] bg-true-white border border-light-grey">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      className="object-contain p-12"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="mt-4 inline-block border border-light-grey px-3 py-1.5">
                    <span className="font-dm-mono text-xs text-mid-grey tracking-label">
                      PROFESSIONAL FORMULA · 300ML
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div>
                  <h2 className="font-outfit font-semibold text-2xl md:text-3xl text-near-black tracking-tight mb-2">
                    {product.name}
                  </h2>
                  <p className="font-dm-sans text-base text-mid-grey italic mb-6">
                    {product.tagline}
                  </p>
                  <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-6">
                    {product.whatItIs}
                  </p>
                  
                  <div className="mb-8">
                    <AddToCartButton 
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      imageSrc={product.imageSrc}
                    />
                  </div>

                  <div className="h-px bg-light-grey my-8" />

                  {/* WHAT IT DOES */}
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                    WHAT IT DOES
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {product.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-base text-mid-grey font-dm-sans"
                      >
                        <span className="text-accent-gold mt-0.5">—</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="h-px bg-light-grey my-8" />

                  {/* HOW TO USE */}
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                    HOW TO USE
                  </h3>
                  <ol className="space-y-3 mb-8">
                    {product.howToUse.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-base text-mid-grey font-dm-sans"
                      >
                        <span className="font-dm-mono text-sm text-mid-grey shrink-0 w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>

                  <div className="h-px bg-light-grey my-8" />

                  {/* KEY INGREDIENTS */}
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                    KEY INGREDIENTS
                  </h3>
                  <div className="border-t border-light-grey">
                    {product.keyIngredients.map((ing) => (
                      <IngredientItem key={ing.number} {...ing} />
                    ))}
                  </div>

                  <div className="h-px bg-light-grey my-8" />

                  {/* FULL FORMULA / INCI LIST */}
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                    FULL FORMULA / INCI LIST
                  </h3>
                  <p className="font-dm-mono text-xs text-mid-grey leading-relaxed">
                    {product.inciList}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {index < products.length - 1 && <Divider />}
        </div>
      ))}
    </>
  );
}
