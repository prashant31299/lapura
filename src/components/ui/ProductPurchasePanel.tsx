"use client";

import { useState } from "react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import type { ProductVariant } from "@/lib/products";

interface ProductPurchasePanelProps {
  slug: string;
  name: string;
  shortDescription: string;
  tags: readonly string[];
  imageSrc: string;
  variants: readonly [ProductVariant, ...ProductVariant[]];
}

export default function ProductPurchasePanel({
  slug,
  name,
  shortDescription,
  tags,
  imageSrc,
  variants,
}: ProductPurchasePanelProps) {
  const [selectedId, setSelectedId] = useState(variants[0].id);
  const selectedVariant =
    variants.find((variant) => variant.id === selectedId) ?? variants[0];

  return (
    <div className="surface-card rounded-2xl bg-true-white border border-light-grey p-5 md:p-6">
      <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between gap-2 min-[420px]:gap-4 mb-5">
        <span className="font-dm-mono text-[10px] uppercase tracking-[0.16em] text-mid-grey break-words">
          Professional Formula · {selectedVariant.volume}
        </span>
        <span className="font-outfit text-2xl font-medium text-near-black">
          {selectedVariant.price}
        </span>
      </div>

      <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-5">
        {shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="chip font-dm-mono text-[10px] uppercase tracking-[0.14em] border border-light-grey text-mid-grey px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <fieldset>
        <legend className="font-dm-mono text-[10px] uppercase tracking-[0.16em] text-mid-grey mb-3">
          Select size
        </legend>
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3">
          {variants.map((variant) => {
            const isSelected = selectedVariant.id === variant.id;

            return (
              <button
                key={variant.id}
                type="button"
                onClick={() => setSelectedId(variant.id)}
                aria-pressed={isSelected}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-near-black bg-near-black text-true-white"
                    : "border-light-grey bg-off-white text-near-black hover:border-accent-gold"
                }`}
              >
                <span className="block font-outfit text-lg font-medium">
                  {variant.volume}
                </span>
                <span
                  className={`block font-dm-sans text-sm mt-1 ${
                    isSelected ? "text-true-white/80" : "text-mid-grey"
                  }`}
                >
                  {variant.price} · {variant.unitPrice}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <AddToCartButton
        id={`${slug}-${selectedVariant.id}`}
        name={name}
        size={selectedVariant.volume}
        price={selectedVariant.price}
        imageSrc={imageSrc}
      />

      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 mt-6">
        <div className="rounded-xl border border-light-grey p-3">
          <div className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] uppercase mb-1">
            Format
          </div>
          <div className="font-dm-sans text-sm text-near-black">
            {selectedVariant.volume} bottle
          </div>
        </div>
        <div className="rounded-xl border border-light-grey p-3">
          <div className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] uppercase mb-1">
            Best for
          </div>
          <div className="font-dm-sans text-sm text-near-black">{tags[0]}</div>
        </div>
      </div>
    </div>
  );
}
