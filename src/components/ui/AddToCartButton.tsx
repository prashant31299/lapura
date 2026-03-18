"use client";

import { useCart } from "@/lib/CartContext";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
}

export default function AddToCartButton({ id, name, price, imageSrc }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageSrc });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-4 px-10 hover:bg-accent-gold hover:text-near-black transition-colors duration-300 w-full sm:w-auto mt-6"
    >
      Add to Cart — {price}
    </button>
  );
}
