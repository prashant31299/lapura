"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

interface ProductImageSliderProps {
  images: readonly string[];
  altPrefix: string;
  altTexts?: readonly string[];
}

export default function ProductImageSlider({
  images,
  altPrefix,
  altTexts = [],
}: ProductImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => images.filter(Boolean), [images]);

  if (slides.length === 0) return null;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-true-white border border-light-grey">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((imageSrc, index) => (
              <div key={imageSrc} className="relative h-full w-full shrink-0">
                <Image
                  src={imageSrc}
                  alt={altTexts[index] ?? `${altPrefix} image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 45vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous product image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-near-black/75 text-true-white w-10 h-10 flex items-center justify-center hover:bg-near-black transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next product image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-near-black/75 text-true-white w-10 h-10 flex items-center justify-center hover:bg-near-black transition-colors"
              >
                ›
              </button>
            </>
          )}
        </div>

        {slides.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((imageSrc, index) => (
              <button
                key={imageSrc}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-near-black" : "w-2.5 bg-light-grey"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {slides.map((imageSrc, index) => (
            <button
              key={imageSrc}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border bg-true-white transition-colors ${
                index === activeIndex ? "border-near-black" : "border-light-grey"
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <Image
                src={imageSrc}
                alt={`${altTexts[index] ?? `${altPrefix} image ${index + 1}`} thumbnail`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
