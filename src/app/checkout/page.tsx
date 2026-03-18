"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for order placement
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="section-padding min-h-[60vh] flex flex-col items-center justify-center bg-off-white">
        <h1 className="font-outfit text-3xl font-semibold tracking-tight text-near-black mb-4">
          Checkout
        </h1>
        <p className="font-dm-sans text-mid-grey mb-8">
          Your cart is currently empty.
        </p>
        <Link
          href="/products"
          className="bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-3 px-8 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const shippingCost = 0; // Free shipping
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="bg-off-white min-h-screen">
      <div className="max-w-content mx-auto content-padding section-padding">
        <h1 className="font-outfit font-semibold text-3xl md:text-4xl text-near-black tracking-tight mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Form Section */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-12">
              
              {/* Contact Information */}
              <section>
                <h2 className="font-outfit font-medium text-xl text-near-black mb-6 border-b border-light-grey pb-2">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Email address
                    </label>
                    <input 
                      type="email" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                      <input type="checkbox" className="accent-near-black w-4 h-4" defaultChecked />
                      <span className="font-dm-sans text-sm text-mid-grey">Email me with news and offers</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <h2 className="font-outfit font-medium text-xl text-near-black mb-6 border-b border-light-grey pb-2">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      First name
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Last name
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Address
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                      placeholder="Apartment, suite, etc."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      City
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      State / Province
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Postal code
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Info */}
              <section>
                <h2 className="font-outfit font-medium text-xl text-near-black mb-6 border-b border-light-grey pb-2">
                  Payment
                </h2>
                <div className="bg-true-white border border-light-grey p-4 mb-4">
                  <span className="font-dm-sans text-sm text-mid-grey">This is a demo checkout. No actual payment will be processed.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Card number
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Expiration date (MM/YY)
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-2">
                      Security code
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border border-light-grey bg-true-white p-3 font-dm-sans text-near-black focus:outline-none focus:border-near-black transition-colors"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </section>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-4 hover:bg-accent-gold hover:text-near-black transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : `Place Order · ₹ ${finalTotal.toLocaleString("en-IN")}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-true-white border border-light-grey sticky top-24 p-6 md:p-8">
              <h2 className="font-outfit font-medium text-xl text-near-black mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <div className="relative w-16 h-20 bg-off-white flex-shrink-0 border border-light-grey">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute -top-2 -right-2 bg-near-black text-true-white text-[10px] font-dm-mono w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-outfit text-sm font-medium text-near-black truncate leading-tight mt-1">
                        {item.name}
                      </h3>
                      <p className="font-dm-sans text-xs text-mid-grey mt-1">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-light-grey pt-6 space-y-4">
                <div className="flex justify-between items-center text-sm font-dm-sans text-mid-grey">
                  <span>Subtotal</span>
                  <span>₹ {totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-dm-sans text-mid-grey">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `₹ ${shippingCost}`}</span>
                </div>
              </div>

              <div className="border-t border-light-grey mt-6 pt-6">
                <div className="flex justify-between items-center font-outfit text-xl">
                  <span className="font-medium text-near-black">Total</span>
                  <span className="font-semibold text-near-black">
                    ₹ {finalTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="font-dm-sans text-xs text-mid-grey mt-1 text-right">
                  Including taxes
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
