"use client";

import { useCart } from "@/lib/CartContext";

interface AddToCartButtonProps {
  id: string;
  name: string;
  size: string;
  price: string;
  imageSrc: string;
}

export default function AddToCartButton({
  id,
  name,
  size,
  price,
  imageSrc,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, size, price, imageSrc });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full rounded-xl bg-near-black text-true-white font-dm-mono text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.16em] py-4 px-5 sm:px-10 hover:bg-accent-gold hover:text-near-black transition-colors duration-300 mt-6 text-center break-words"
    >
      Add to Cart — {price}
    </button>
  );
}
