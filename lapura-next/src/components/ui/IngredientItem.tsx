"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IngredientItemProps {
  number: string;
  name: string;
  description: string;
}

export default function IngredientItem({
  number,
  name,
  description,
}: IngredientItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-light-grey">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-2 text-left group cursor-pointer"
      >
        <div className="flex items-center gap-6">
          <span className="font-dm-mono text-sm text-mid-grey w-6">{number}</span>
          <span className="font-outfit font-medium text-base text-near-black group-hover:text-accent-gold transition-colors">
            {name}
          </span>
        </div>
        <span
          className={`font-dm-mono text-lg text-mid-grey transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pl-14 pr-8 pb-5 text-sm text-mid-grey font-dm-sans leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
