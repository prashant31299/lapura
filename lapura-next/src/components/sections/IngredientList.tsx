"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import IngredientItem from "@/components/ui/IngredientItem";

const ingredients = [
  {
    number: "01",
    name: "MORINGA OLEIFERA SEED BUTTER",
    description:
      "Rich in vitamins A, C, and E, plus minerals and antioxidants. Deeply nourishes the hair shaft, smooths cuticles, and provides intense moisture without heaviness. Sourced from sustainably harvested Moringa seeds.",
  },
  {
    number: "02",
    name: "HYDROLYZED WHEAT, SOY & CORN PROTEIN",
    description:
      "Triple protein complex that penetrates the cortex to rebuild the internal hair structure. Increases tensile strength, reduces breakage by up to 70%, and restores elasticity to chemically treated or heat-damaged hair.",
  },
  {
    number: "03",
    name: "8 ESSENTIAL AMINO ACID COMPLEX",
    description:
      "A biomimetic blend of L-Arginine, L-Cystine, L-Lysine, L-Methionine, L-Proline, L-Serine, L-Threonine, and L-Tyrosine. These are the exact building blocks of keratin — your hair's natural structural protein.",
  },
  {
    number: "04",
    name: "BAOBAB SEED OIL (ADANSONIA DIGITATA)",
    description:
      "Extracted from the African baobab tree. Exceptionally rich in omega-3 fatty acids and vitamins D and E. Creates a protective shield against UV damage while improving hair elasticity and shine.",
  },
  {
    number: "05",
    name: "NETTLE LEAF EXTRACT (URTICA DIOICA)",
    description:
      "Clinically shown to stimulate scalp circulation and promote hair growth. Rich in silica, iron, and sulfur — essential minerals for strong, healthy hair follicles. Helps regulate sebum production.",
  },
  {
    number: "06",
    name: "PANTHENOL (PRO-VITAMIN B5)",
    description:
      "Penetrates the hair cuticle and binds moisture to each strand. Increases hair diameter by up to 10%, creating the appearance of thicker, fuller hair. Also provides heat protection up to 230°C.",
  },
];

export default function IngredientList() {
  return (
    <section className="bg-science-blue section-padding">
      <div className="max-w-content mx-auto content-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left — Vertical Label */}
          <div className="lg:col-span-2 flex items-start">
            <div className="hidden lg:block">
              <span
                className="label-mono block whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "11px",
                }}
              >
                KEY ACTIVES
              </span>
            </div>
            <div className="lg:hidden">
              <SectionLabel align="left">KEY ACTIVES</SectionLabel>
            </div>
          </div>

          {/* Right — Ingredient List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-10"
          >
            <div className="border-t border-light-grey">
              {ingredients.map((ingredient) => (
                <IngredientItem key={ingredient.number} {...ingredient} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
