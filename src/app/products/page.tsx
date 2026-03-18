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
    tagline: "Professional cleansing that rebuilds while it purifies",
    imageSrc: "/conditioner 3.png",
    imageAlt: "La'Pura Professional BioFusion™ Restore Shampoo — 300ML",
    price: "₹ 1,299",
    whatItIs:
      "A professional-grade restorative shampoo powered by BioFusion™ technology. Formulated with Moringa Oleifera Seed Butter and a complete 8 Amino Acid Complex that penetrates the hair cortex to rebuild keratin bonds from within.",
    benefits: [
      "Repairs internal hair structure at the molecular level",
      "Reduces frizz and flyaways by smoothing cuticle layers",
      "Boosts natural collagen production in the scalp",
      "Strengthens hair against breakage and split ends",
      "Gently cleanses without stripping natural oils",
      "Prepares hair for optimal conditioner absorption",
    ],
    howToUse: [
      "Wet hair thoroughly with lukewarm water",
      "Apply a coin-sized amount to palms and distribute evenly through hair",
      "Massage into scalp using circular motions for 2–3 minutes",
      "Allow the BioFusion™ actives to penetrate for 60 seconds",
      "Rinse thoroughly. Follow with BioFusion™ Restore Conditioner",
    ],
    keyIngredients: [
      {
        number: "01",
        name: "MORINGA OLEIFERA SEED BUTTER",
        description:
          "Rich in vitamins A, C, and E, plus minerals and antioxidants. Deeply nourishes the hair shaft and smooths cuticles.",
      },
      {
        number: "02",
        name: "HYDROLYZED WHEAT, SOY & CORN PROTEIN",
        description:
          "Triple protein complex that penetrates the cortex to rebuild internal hair structure and increase tensile strength.",
      },
      {
        number: "03",
        name: "8 ESSENTIAL AMINO ACID COMPLEX",
        description:
          "Biomimetic blend of L-Arginine, L-Cystine, L-Lysine, L-Methionine, L-Proline, L-Serine, L-Threonine, and L-Tyrosine — the building blocks of keratin.",
      },
    ],
    inciList:
      "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Moringa Oleifera Seed Butter, Hydrolyzed Wheat Protein, Hydrolyzed Soy Protein, Hydrolyzed Corn Protein, L-Arginine, L-Cystine, L-Lysine, L-Methionine, L-Proline, L-Serine, L-Threonine, L-Tyrosine, Panthenol, Urtica Dioica Leaf Extract, Adansonia Digitata Seed Oil, Glycerin, Polyquaternium-7, Citric Acid, Sodium Chloride, DMDM Hydantoin, Fragrance, CI 19140",
  },
  {
    id: "biofusion-restore-conditioner",
    name: "BioFusion™ Restore Conditioner",
    tagline: "Deep molecular repair meets weightless nourishment",
    imageSrc: "/conditioner.png",
    imageAlt: "La'Pura Professional BioFusion™ Restore Conditioner — 300ML",
    price: "₹ 1,499",
    whatItIs:
      "A professional-grade restorative conditioner that seals, protects, and deeply nourishes every strand. Powered by Baobab Seed Oil, Hydrolyzed Keratin Complex, and Panthenol (Pro-Vitamin B5) for visible transformation from first use.",
    benefits: [
      "Seals cuticles for long-lasting smoothness and shine",
      "Repairs split ends and prevents further breakage",
      "Provides deep nourishment without weighing hair down",
      "Creates heat protection up to 230°C from Panthenol",
      "Increases hair diameter for a thicker, fuller appearance",
      "Enhances natural shine and light reflection",
    ],
    howToUse: [
      "After shampooing, gently squeeze excess water from hair",
      "Apply a generous amount from mid-lengths to ends",
      "Comb through with a wide-tooth comb for even distribution",
      "Leave on for 3–5 minutes to allow deep penetration",
      "Rinse with cool water to seal cuticles and lock in moisture",
    ],
    keyIngredients: [
      {
        number: "01",
        name: "BAOBAB SEED OIL (ADANSONIA DIGITATA)",
        description:
          "Exceptionally rich in omega-3 fatty acids and vitamins D and E. Creates a protective shield against UV damage.",
      },
      {
        number: "02",
        name: "NETTLE LEAF EXTRACT (URTICA DIOICA)",
        description:
          "Stimulates scalp circulation and promotes hair growth. Rich in silica, iron, and sulfur for strong follicles.",
      },
      {
        number: "03",
        name: "PANTHENOL (PRO-VITAMIN B5)",
        description:
          "Penetrates the cuticle and binds moisture. Increases hair diameter up to 10% and provides heat protection to 230°C.",
      },
    ],
    inciList:
      "Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Adansonia Digitata Seed Oil, Hydrolyzed Keratin, Panthenol, Urtica Dioica Leaf Extract, Moringa Oleifera Seed Butter, L-Arginine, L-Cystine, L-Lysine, L-Methionine, L-Proline, L-Serine, L-Threonine, L-Tyrosine, Glycerin, Cetrimonium Chloride, Isopropyl Alcohol, Citric Acid, Fragrance",
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
            Professional Expert Formulas
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
