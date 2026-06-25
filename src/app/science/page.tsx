import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import IngredientItem from "@/components/ui/IngredientItem";
import Divider from "@/components/ui/Divider";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Science of BioFusion™",
  description:
    "Science-backed, safe, thoughtfully designed professional hair care. Learn how La'Pura Professional combines botanical actives, amino acids, sustainability, and GMP quality standards.",
  alternates: {
    canonical: "/science",
  },
};

const ingredients = [
  {
    name: "Moringa Oleifera Seed Butter",
    inci: "Moringa Oleifera Seed Oil / Butter",
    badge: "Natural Botanical",
    whatItIs:
      "Moringa Oleifera Seed Butter is a nutrient-rich botanical active packed with vitamins, minerals, antioxidants, and fatty acids.",
    whatItDoes:
      "It deeply nourishes, strengthens, and protects dull or damaged hair while restoring softness and natural shine.",
    whyWeUseIt:
      "We use it because it supports the balance La'Pura is built on: botanical intelligence, sensorial elegance, and performance-driven care.",
  },
  {
    name: "8 Essential Amino Acid Complex",
    inci: "L-Arginine, L-Cystine, L-Lysine, L-Methionine, L-Proline, L-Serine, L-Threonine, L-Tyrosine",
    badge: "Biomimetic Active",
    whatItIs:
      "A blend of amino acids that supports keratin, the structural protein hair relies on for strength and resilience.",
    whatItDoes:
      "These amino acids help repair damaged cuticles, promote collagen formation, improve elasticity, and restore natural strength to hair.",
    whyWeUseIt:
      "They are central to our damage-recovery approach, helping formulas do more than temporarily soften the surface.",
  },
  {
    name: "Hydrolyzed Wheat, Soy & Corn Protein",
    inci: "Hydrolyzed Wheat Protein, Hydrolyzed Soy Protein, Hydrolyzed Corn Protein",
    badge: "Plant Protein Complex",
    whatItIs:
      "A triple-source protein complex selected to reinforce and care for compromised hair fibers.",
    whatItDoes:
      "It helps rebuild and reinforce the hair shaft, reduce breakage, and improve strength and resilience.",
    whyWeUseIt:
      "Professional hair care needs reliable performance across chemical and mechanical damage, not a one-note conditioning effect.",
  },
  {
    name: "Adansonia Digitata (Baobab) Seed Extract",
    inci: "Adansonia Digitata Seed Extract",
    badge: "Natural Botanical",
    whatItIs:
      "A nutrient-rich botanical extract often called the Tree of Life.",
    whatItDoes:
      "It helps revitalize hair, protect against dryness, restore moisture balance, smooth frizz, and support overall hair health.",
    whyWeUseIt:
      "It supports the gentle but effective performance we expect from botanical actives in professional formulas.",
  },
  {
    name: "Nettle Leaf Extract",
    inci: "Urtica Dioica Leaf Extract",
    badge: "Natural Botanical",
    whatItIs:
      "A traditional botanical extract used in scalp and hair-care formulations.",
    whatItDoes:
      "It is known for stimulating the scalp, supporting natural hair growth, strengthening roots, and helping reduce hair fall.",
    whyWeUseIt:
      "Long-term care begins at the scalp, so our formulas include botanicals that support strength and vitality over time.",
  },
  {
    name: "Panthenol (Pro-Vitamin B5)",
    inci: "Panthenol",
    badge: "Vitamin Active",
    whatItIs:
      "A pro-vitamin active widely used in high-performance hair-care formulas.",
    whatItDoes:
      "It penetrates the hair shaft to improve elasticity, add shine, lock in long-lasting hydration, and strengthen hair against breakage.",
    whyWeUseIt:
      "It bridges immediate sensorial benefits with the long-term care standards expected from salon-grade products.",
  },
];

const faqs = [
  {
    number: "01",
    name: "What is BioFusion™ technology?",
    description:
      "BioFusion™ is La'Pura Professional's approach to combining proven actives, botanical intelligence, and salon-grade technologies in formulas designed for visible results, refined sensorial experience, and long-term care.",
  },
  {
    number: "02",
    name: "Are La'Pura products suitable for all hair types?",
    description:
      "The BioFusion™ Restore collection is designed as professional salon care for a broad range of hair needs, with a focus on strength, frizz reduction, nourishment, shine, and manageability.",
  },
  {
    number: "03",
    name: "What makes La'Pura Professional different?",
    description:
      "La'Pura was created by a cosmetologist and R&D specialist to bridge salon luxury with true scientific performance, balancing efficacy, sensorial experience, and responsible formulation.",
  },
  {
    number: "04",
    name: "Are the products vegan and cruelty-free?",
    description:
      "Yes. La'Pura products are ethically developed and cruelty-free, and the BioFusion™ Restore benefits include multi-cultural vegan Keratin.",
  },
  {
    number: "05",
    name: "Where are La'Pura products manufactured?",
    description:
      "La'Pura follows Good Manufacturing Practices to support consistency, safety, and trust through packaging selection, hygienic preparation, precision filling, compliant sealing and labeling, and careful storage and distribution.",
  },
];

export default function SciencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema,
            breadcrumbSchema("/science"),
          ]),
        }}
      />

      {/* Header */}
      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>THE SCIENCE</SectionLabel>
          <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight text-center mb-4">
            The Science of BioFusion™
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-2xl mx-auto">
            Innovation begins at the formulation stage. Each ingredient is
            carefully evaluated for safety, efficacy, and environmental
            responsibility.
          </p>
        </div>
      </section>

      <Divider />

      {/* Ingredient Deep-Dives */}
      {ingredients.map((ingredient, index) => (
        <div key={ingredient.name}>
          <section className="section-padding bg-off-white">
            <div className="max-w-[900px] mx-auto content-padding">
              <div className="flex items-start gap-3 sm:gap-4 mb-2">
                <span className="font-dm-mono text-sm text-mid-grey mt-1 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="font-outfit font-semibold text-2xl text-near-black tracking-tight mb-1">
                    {ingredient.name}
                  </h2>
                  <p className="font-dm-mono text-xs text-mid-grey mb-4 break-words">
                    INCI: {ingredient.inci}
                  </p>
                  <span className="inline-block border border-light-grey px-3 py-1 font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-8">
                    {ingredient.badge}
                  </span>
                </div>
              </div>

              <div className="space-y-6 pl-0 sm:pl-10">
                <div>
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-3">
                    WHAT IT IS
                  </h3>
                  <p className="text-base text-mid-grey font-dm-sans leading-relaxed">
                    {ingredient.whatItIs}
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-3">
                    WHAT IT DOES
                  </h3>
                  <p className="text-base text-mid-grey font-dm-sans leading-relaxed">
                    {ingredient.whatItDoes}
                  </p>
                </div>

                <div>
                  <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-3">
                    WHY WE USE IT
                  </h3>
                  <p className="text-base text-mid-grey font-dm-sans leading-relaxed">
                    {ingredient.whyWeUseIt}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Divider />
        </div>
      ))}

      {/* FAQ Section */}
      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding">
          <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
          <h2 className="font-outfit font-semibold text-2xl text-near-black tracking-tight text-center mb-12">
            Questions About Our Science
          </h2>

          <div className="border-t border-light-grey">
            {faqs.map((faq) => (
              <IngredientItem key={faq.number} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
