"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const rows = [
  {
    promise: "Cosmetologist-Formulated",
    meaning: "Created by an expert with real R&D experience",
  },
  {
    promise: "Salon-Exclusive Quality",
    meaning: "Professional-grade actives, real measurable results",
  },
  {
    promise: "Science + Nature Balance",
    meaning: "Proven botanicals + scientific validation in every formula",
  },
  {
    promise: "Result-Oriented",
    meaning: "Growth, strength, frizz reduction — results you can see and feel",
  },
  {
    promise: "Always Cruelty-Free",
    meaning: "Ethical formulation — never tested on animals",
  },
];

export default function WhyTable() {
  return (
    <section className="bg-off-white section-padding">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel>WHY LA&apos;PURA</SectionLabel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-near-black">
                <th className="text-left font-dm-mono text-xs text-mid-grey tracking-label uppercase py-4 pr-8">
                  What We Promise
                </th>
                <th className="text-left font-dm-mono text-xs text-mid-grey tracking-label uppercase py-4">
                  What That Means
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.promise}
                  className="border-b border-light-grey hover:bg-light-grey/30 transition-colors"
                >
                  <td className="font-outfit font-medium text-base text-near-black py-5 pr-8">
                    {row.promise}
                  </td>
                  <td className="font-dm-sans text-base text-mid-grey py-5">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
