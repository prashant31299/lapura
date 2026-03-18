"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-near-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-off-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light-grey bg-true-white">
          <h2 className="font-outfit text-xl font-medium tracking-tight text-near-black">
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-mid-grey hover:text-near-black transition-colors"
            aria-label="Close cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-light-grey">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="font-dm-sans text-mid-grey">Your cart is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 border border-near-black text-sm font-dm-mono uppercase tracking-widest hover:bg-near-black hover:text-true-white transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-true-white border border-light-grey">
                {/* Product Image */}
                <div className="relative w-20 h-24 bg-off-white flex-shrink-0">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-outfit text-sm font-medium text-near-black leading-tight">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-mid-grey hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                    <p className="font-dm-sans text-sm text-mid-grey mt-1">{item.price}</p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center border border-light-grey">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-mid-grey hover:bg-light-grey transition-colors"
                        aria-label="Decrease quantity"
                      >
                        &minus;
                      </button>
                      <span className="font-dm-mono text-xs px-2 min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-mid-grey hover:bg-light-grey transition-colors"
                        aria-label="Increase quantity"
                      >
                        &#43;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-true-white border-t border-light-grey space-y-4">
            <div className="flex justify-between items-center font-outfit text-lg">
              <span className="text-mid-grey">Subtotal</span>
              <span className="font-medium text-near-black">
                ₹ {totalPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="font-dm-sans text-xs text-mid-grey mt-1 text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-near-black text-true-white text-center font-dm-mono text-sm uppercase tracking-widest py-4 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
