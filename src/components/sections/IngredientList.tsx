import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteAssets } from "@/lib/siteAssets";

const ingredients = [
  {
    name: "Moringa Seed Butter",
    image: siteAssets.moringaSeedButter,
    note: "Deep nourishment, softness, and shine support.",
  },
  {
    name: "Baobab Seed",
    image: siteAssets.baobabSeed,
    note: "Omega-rich support for dryness and frizz control.",
  },
  {
    name: "Wheat Protein",
    image: siteAssets.wheatProtein,
    note: "Strengthens the hair shaft and helps reduce breakage.",
  },
  {
    name: "Soy Protein",
    image: siteAssets.soyProtein,
    note: "Adds resilience and structure to weakened strands.",
  },
  {
    name: "Corn Protein",
    image: siteAssets.cornProtein,
    note: "Helps improve texture, manageability, and moisture feel.",
  },
  {
    name: "Stinging Nettle",
    image: siteAssets.stingingNettle,
    note: "Botanical scalp support with a fresher, cleaner finish.",
  },
  {
    name: "Trehalose",
    image: siteAssets.trehalose,
    note: "Helps hair hold on to moisture and stay flexible.",
  },
  {
    name: "Peptides",
    image: siteAssets.peptides,
    note: "Supports a more science-led repair and care story.",
  },
  {
    name: "Sodium PCA",
    image: siteAssets.sodiumPca,
    note: "A humectant for hydration and softness support.",
  },
];

export default function IngredientList() {
  return (
    <section className="section-padding bg-science-blue">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel align="left">KEY INGREDIENTS</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 min-w-0">
            <h2 className="section-title font-outfit font-semibold text-near-black tracking-tight mb-5">
              Botanical actives, mapped ingredient by ingredient.
            </h2>
            <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-8">
              The brief emphasizes science-backed care with nature-led support.
              This gallery surfaces the actives behind the formulas, from
              proteins and amino acids to hydrators and plant extracts.
            </p>

            <div className="border border-light-grey bg-true-white p-5">
              <p className="font-dm-mono text-[10px] text-mid-grey tracking-label mb-3">
                CORE FUNCTIONS
              </p>
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3">
                {[
                  "Moisture retention",
                  "Barrier support",
                  "Strength repair",
                  "Scalp comfort",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-light-grey px-3 py-3 bg-off-white"
                  >
                    <span className="font-dm-sans text-sm text-near-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {ingredients.map((ingredient) => (
                <article
                  key={ingredient.name}
                  className="bg-true-white border border-light-grey overflow-hidden"
                >
                  <div className="relative aspect-[4/5] bg-off-white">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-outfit font-medium text-base text-near-black mb-2">
                      {ingredient.name}
                    </h3>
                    <p className="font-dm-sans text-sm text-mid-grey leading-relaxed">
                      {ingredient.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
