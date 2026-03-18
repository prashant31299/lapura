"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    name: "BioFusion™ Restore Shampoo",
    subtitle: "With Moringa Oleifera Seed Butter + 8 Amino Acids",
    imageSrc: "/conditioner 3.png",
    tags: ["Repairs Damage", "Frizz Control", "Collagen Boost"],
    href: "/products",
  },
  {
    name: "BioFusion™ Restore Conditioner",
    subtitle: "With Baobab Extract + Hydrolyzed Keratin Complex",
    imageSrc: "/conditioner.png",
    tags: ["Deep Nourish", "Split End Repair", "Shine Boost"],
    href: "/products",
  },
];

export default function ProductStrip() {
  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel>THE COLLECTION</SectionLabel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
