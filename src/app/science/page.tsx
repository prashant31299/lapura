import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import IngredientItem from "@/components/ui/IngredientItem";
import Divider from "@/components/ui/Divider";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Science of BioFusion™ | La'Pura Professional",
  description:
    "Deep-dive into the science behind BioFusion™ technology. Learn about Moringa Oleifera, Amino Acid Complexes, Hydrolyzed Proteins, Baobab Oil, Nettle Extract, and Panthenol in La'Pura Professional hair care.",
};

const ingredients = [
  {
    name: "Moringa Oleifera Seed Butter",
    inci: "Moringa Oleifera Seed Oil / Butter",
    badge: "Natural Botanical",
    whatItIs:
      "Moringa Oleifera, often called the 'Miracle Tree,' is native to parts of Africa and Asia. The seed butter is cold-pressed from Moringa seeds and contains over 30 antioxidants, vitamins A, C, and E, omega-9 fatty acids, and a rich mineral profile.",
    whatItDoes:
      "In hair care, Moringa Seed Butter penetrates the cuticle layer to deliver deep nourishment. It smooths frizz by sealing the cuticle, reduces oxidative stress on hair follicles, and provides lasting moisture without buildup. Studies show it can improve hair elasticity by up to 28%.",
    whyWeUseIt:
      "We chose Moringa because it provides comprehensive nourishment — it's not a single-function ingredient. It moisturizes, protects, repairs, and strengthens simultaneously. This aligns with our BioFusion™ philosophy of multi-pathway repair.",
  },
  {
    name: "8 Essential Amino Acid Complex",
    inci: "L-Arginine, L-Cystine, L-Lysine, L-Methionine, L-Proline, L-Serine, L-Threonine, L-Tyrosine",
    badge: "Biomimetic Active",
    whatItIs:
      "A precisely calibrated blend of eight amino acids that mirror the natural composition of keratin — the structural protein that makes up 90% of your hair. This is not a synthetic approximation; it is a biomimetic reconstruction of your hair's own building blocks.",
    whatItDoes:
      "These amino acids penetrate the hair cortex and participate directly in the synthesis of new keratin chains. L-Cystine forms disulfide bonds (the same bonds broken during chemical treatments), L-Arginine improves blood flow to follicles, and L-Tyrosine supports melanin production for color retention.",
    whyWeUseIt:
      "Traditional hair products coat the surface. Our amino acid complex works from inside the hair strand, rebuilding the internal structure. This is the core of BioFusion™ — repair at the molecular level, not cosmetic masking.",
  },
  {
    name: "Hydrolyzed Wheat, Soy & Corn Protein",
    inci: "Hydrolyzed Wheat Protein, Hydrolyzed Soy Protein, Hydrolyzed Corn Protein",
    badge: "Plant Protein Complex",
    whatItIs:
      "A triple-source plant protein complex where each protein is hydrolyzed (enzymatically broken down) to a molecular weight small enough to penetrate the hair shaft. Wheat protein targets the cortex, soy protein targets the cuticle, and corn protein forms a protective film.",
    whatItDoes:
      "This multi-layered protein approach increases tensile strength by up to 70%, reduces breakage during combing and styling, and creates a cumulative repair effect — each wash builds on the previous application. Hair becomes progressively stronger over 4–6 weeks of use.",
    whyWeUseIt:
      "Single-source proteins only address one layer of hair damage. Our triple protein complex provides cortex repair, cuticle smoothing, AND surface protection in one formula.",
  },
  {
    name: "Baobab Seed Oil",
    inci: "Adansonia Digitata Seed Oil",
    badge: "Natural Botanical",
    whatItIs:
      "Extracted from the fruit seeds of the Baobab tree (Adansonia Digitata), native to the African savanna. This oil is exceptionally rich in omega-3, omega-6, and omega-9 fatty acids, as well as vitamins A, D, E, and F.",
    whatItDoes:
      "Baobab oil creates a lightweight protective barrier that shields hair from UV damage, environmental pollution, and heat styling. Its vitamin E content is a powerful antioxidant that prevents premature aging of the hair shaft. It improves elasticity and restores natural shine.",
    whyWeUseIt:
      "Baobab oil provides protection without heaviness — a critical balance for professional-grade products. It protects the repair work done by our amino acids and proteins, ensuring results last between washes.",
  },
  {
    name: "Nettle Leaf Extract",
    inci: "Urtica Dioica Leaf Extract",
    badge: "Natural Botanical",
    whatItIs:
      "An extract from the leaves of Stinging Nettle (Urtica Dioica), a plant used for centuries in traditional medicine. Rich in silica, iron, sulfur, and vitamins A, C, and K. Our nettle extract is standardized for consistent potency in every batch.",
    whatItDoes:
      "Nettle extract stimulates microcirculation in the scalp, delivering more oxygen and nutrients to hair follicles. It has been clinically shown to inhibit 5-alpha reductase (the enzyme linked to hair thinning) and helps regulate sebum production for a balanced, healthy scalp.",
    whyWeUseIt:
      "Healthy hair starts at the scalp. While our other ingredients repair existing hair, nettle extract ensures the environment for new hair growth is optimized. It's our investment in your hair's future.",
  },
  {
    name: "Panthenol (Pro-Vitamin B5)",
    inci: "Panthenol",
    badge: "Vitamin Active",
    whatItIs:
      "The alcohol analog of pantothenic acid (Vitamin B5). When applied topically, panthenol is absorbed into the hair shaft where it is converted to pantothenic acid, a component of Coenzyme A — essential for cellular metabolism.",
    whatItDoes:
      "Panthenol coats each strand in a thin, flexible film that reflects light (creating visible shine) while sealing in moisture. It increases the diameter of individual hair strands by up to 10%, creating the appearance of thicker, fuller hair. It also provides thermal protection up to 230°C.",
    whyWeUseIt:
      "Panthenol is one of the most well-studied ingredients in cosmetic science, with decades of clinical evidence supporting its efficacy. It bridges the gap between immediate cosmetic results (shine, volume) and long-term structural repair.",
  },
];

const faqs = [
  {
    number: "01",
    name: "What is BioFusion™ technology?",
    description:
      "BioFusion™ is La'Pura Professional's proprietary approach that combines clinically validated botanical actives with biomimetic amino acid complexes. Unlike surface-level treatments, BioFusion™ works at the molecular level to rebuild the internal structure of each hair strand — repairing keratin bonds, sealing cuticles, and restoring elasticity from within.",
  },
  {
    number: "02",
    name: "Are La'Pura products suitable for all hair types?",
    description:
      "Yes. The BioFusion™ Restore collection is formulated to work across all hair types — straight, wavy, curly, and coily. The amino acid complex and botanical actives adapt to your hair's specific needs, providing repair and nourishment regardless of texture or density.",
  },
  {
    number: "03",
    name: "How long before I see results?",
    description:
      "You'll notice improved smoothness, shine, and detangling from the very first use. Structural repair (increased strength, reduced breakage, improved elasticity) builds cumulatively — most users report significant improvement within 4–6 weeks of consistent use.",
  },
  {
    number: "04",
    name: "Are the products vegan and cruelty-free?",
    description:
      "Absolutely. All La'Pura Professional products are 100% vegan and cruelty-free. We never test on animals, and our formulations contain no animal-derived ingredients. Our commitment to ethical beauty is non-negotiable.",
  },
  {
    number: "05",
    name: "Where are La'Pura products manufactured?",
    description:
      "All products are manufactured in GMP-certified facilities in India, maintaining pharmaceutical-grade quality standards. Every batch is tested, documented, and fully traceable from raw material sourcing to finished product.",
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
          <h1 className="font-outfit font-semibold text-3xl md:text-hero text-near-black tracking-tight text-center mb-4">
            The Science of BioFusion™
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-2xl mx-auto">
            Every ingredient is selected for a reason. Every formulation is
            validated by science. This is how BioFusion™ works.
          </p>
        </div>
      </section>

      <Divider />

      {/* Ingredient Deep-Dives */}
      {ingredients.map((ingredient, index) => (
        <div key={ingredient.name}>
          <section className="section-padding bg-off-white">
            <div className="max-w-[900px] mx-auto content-padding">
              <div className="flex items-start gap-4 mb-2">
                <span className="font-dm-mono text-sm text-mid-grey mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-outfit font-semibold text-2xl text-near-black tracking-tight mb-1">
                    {ingredient.name}
                  </h2>
                  <p className="font-dm-mono text-xs text-mid-grey mb-4">
                    INCI: {ingredient.inci}
                  </p>
                  <span className="inline-block border border-light-grey px-3 py-1 font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-8">
                    {ingredient.badge}
                  </span>
                </div>
              </div>

              <div className="space-y-6 pl-10">
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
