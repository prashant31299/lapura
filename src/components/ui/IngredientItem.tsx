"use client";

import { useState } from "react";

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
        className="w-full flex items-start justify-between gap-4 py-5 px-2 text-left group cursor-pointer"
      >
        <div className="flex items-start gap-3 sm:gap-6 min-w-0">
          <span className="font-dm-mono text-sm text-mid-grey w-6 shrink-0">{number}</span>
          <span className="font-outfit font-medium text-base text-near-black group-hover:text-accent-gold transition-colors">
            {name}
          </span>
        </div>
        <span
          className={`font-dm-mono text-lg text-mid-grey transition-transform duration-300 shrink-0 leading-none mt-1 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="overflow-hidden">
          <p className="pl-11 sm:pl-14 pr-3 sm:pr-8 pb-5 text-sm text-mid-grey font-dm-sans leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
