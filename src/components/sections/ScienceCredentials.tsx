"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "R&D Founded",
    description: "Built from laboratory expertise",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12s1.5 2 4 2 4-2 4-2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    title: "8 Amino Acid Complex",
    description: "Complete keratin protein rebuild",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
        <path d="M12 6v8M8 10h8" />
      </svg>
    ),
    title: "Botanical Actives",
    description: "Moringa, Baobab & Nettle extracts",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 12c0-4 3-8 9-8s9 4 9 8" />
        <circle cx="7.5" cy="12" r="1.5" />
        <circle cx="16.5" cy="12" r="1.5" />
        <path d="M9 16c0 0 1.5 2 3 2s3-2 3-2" />
        <path d="M5 9l-2-2M19 9l2-2" />
      </svg>
    ),
    title: "Always Cruelty-Free",
    description: "Ethical formulation, always",
  },
];

export default function ScienceCredentials() {
  return (
    <section className="bg-true-white section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-content mx-auto content-padding"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, index) => (
            <div
              key={item.title}
              className={`text-center py-8 px-6 ${
                index < credentials.length - 1
                  ? "lg:border-r border-b lg:border-b-0 border-light-grey"
                  : ""
              }`}
            >
              <div className="flex justify-center mb-4 text-near-black">
                {item.icon}
              </div>
              <h3 className="font-outfit font-medium text-base text-near-black mb-2">
                {item.title}
              </h3>
              <p className="font-dm-sans text-sm text-mid-grey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
