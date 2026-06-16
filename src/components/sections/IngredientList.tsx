"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import IngredientItem from "@/components/ui/IngredientItem";

const ingredients = [
  {
    number: "01",
    name: "MORINGA OLEIFERA SEED BUTTER",
    description:
      "Rich in vitamins, minerals, antioxidants, and fatty acids. Deeply nourishes, strengthens, protects, and restores dull or damaged hair while supporting softness and natural shine.",
  },
  {
    number: "02",
    name: "HYDROLYZED WHEAT, SOY & CORN PROTEIN",
    description:
      "A triple protein complex that rebuilds and reinforces the hair shaft, reduces breakage, improves resilience, and helps repair damaged hair fibers.",
  },
  {
    number: "03",
    name: "8 ESSENTIAL AMINO ACID COMPLEX",
    description:
      "The building blocks of keratin. These amino acids help repair damaged cuticles, promote collagen formation, improve elasticity, and restore natural strength.",
  },
  {
    number: "04",
    name: "ADANSONIA DIGITATA (BAOBAB) SEED EXTRACT",
    description:
      "Often called the Tree of Life, baobab is packed with nutrients and omega fatty acids that revitalize hair, protect against dryness, smooth frizz, and support overall hair health.",
  },
  {
    number: "05",
    name: "NETTLE LEAF EXTRACT (URTICA DIOICA)",
    description:
      "A botanical powerhouse known for stimulating the scalp, supporting natural hair growth, strengthening roots, and helping reduce hair fall.",
  },
  {
    number: "06",
    name: "PANTHENOL (PRO-VITAMIN B5)",
    description:
      "A pro-vitamin that penetrates the hair shaft to improve elasticity, add shine, lock in long-lasting hydration, and strengthen hair against breakage.",
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
