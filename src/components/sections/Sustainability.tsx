"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 12c0-4 3-8 9-8s9 4 9 8" />
        <circle cx="7.5" cy="12" r="1.5" />
        <circle cx="16.5" cy="12" r="1.5" />
        <path d="M9 16c0 0 1.5 2 3 2s3-2 3-2" />
        <path d="M5 9l-2-2M19 9l2-2" />
      </svg>
    ),
    title: "Cruelty-Free",
    description:
      "Never tested on animals. We believe beautiful hair should never come at the cost of another living being. Every product carries our cruelty-free guarantee.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
        <path d="M12 8v6M9 11h6" />
      </svg>
    ),
    title: "Eco Packaging",
    description:
      "Recyclable bottles, minimal packaging, zero unnecessary plastics. We are committed to reducing our environmental footprint with every product we create.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
      </svg>
    ),
    title: "GMP Standards",
    description:
      "Manufactured under Good Manufacturing Practice standards. Every batch is tested, documented, and traceable — meeting the same standards as pharmaceutical products.",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-true-white section-padding">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel>OUR COMMITMENT</SectionLabel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 mt-12"
        >
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`text-center px-8 py-10 ${
                index < pillars.length - 1
                  ? "md:border-r border-b md:border-b-0 border-light-grey"
                  : ""
              }`}
            >
              <div className="flex justify-center mb-5 text-near-black">
                {pillar.icon}
              </div>
              <h3 className="font-outfit font-medium text-xl text-near-black mb-3">
                {pillar.title}
              </h3>
              <p className="font-dm-sans text-sm text-mid-grey leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
