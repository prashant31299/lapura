"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="section-padding content-padding min-h-[60vh] flex flex-col items-center justify-center bg-off-white text-center">
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

  return (
    <div className="bg-off-white min-h-screen">
      <div className="max-w-5xl mx-auto content-padding section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <section>
            <span className="font-dm-mono text-xs tracking-label uppercase text-mid-grey">
              Checkout
            </span>
            <h1 className="font-outfit font-semibold text-3xl md:text-5xl text-near-black tracking-tight mt-3 mb-6">
              Online payment is being connected
            </h1>
            <div className="border border-accent-gold/50 bg-true-white p-5 sm:p-6 space-y-3">
              <h2 className="font-outfit text-xl font-medium text-near-black">
                No order or payment has been submitted
              </h2>
              <p className="font-dm-sans text-mid-grey">
                We have temporarily paused online checkout while the secure payment
                provider is configured. Your cart remains saved on this device, and
                this page will never ask you to enter card details directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/products"
                className="inline-flex justify-center bg-near-black text-true-white font-dm-mono text-xs uppercase tracking-widest py-4 px-6 hover:bg-accent-gold hover:text-near-black transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/payment-terms"
                className="inline-flex justify-center border border-near-black text-near-black font-dm-mono text-xs uppercase tracking-widest py-4 px-6 hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                Payment Terms
              </Link>
            </div>
          </section>

          <aside className="bg-true-white border border-light-grey p-5 sm:p-6 lg:sticky lg:top-24">
            <h2 className="font-outfit text-xl font-medium text-near-black mb-6">
              Saved Cart
            </h2>
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-off-white border border-light-grey shrink-0">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-outfit text-sm font-medium text-near-black">
                      {item.name}
                    </h3>
                    {item.size && (
                      <p className="font-dm-mono text-[10px] uppercase tracking-[0.14em] text-mid-grey mt-1">
                        {item.size}
                      </p>
                    )}
                    <p className="font-dm-sans text-sm text-mid-grey mt-1">
                      Quantity: {item.quantity}
                    </p>
                    <p className="font-dm-mono text-xs text-near-black mt-2">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-light-grey mt-6 pt-6 flex items-center justify-between">
              <span className="font-dm-sans text-mid-grey">Subtotal</span>
              <span className="font-outfit text-xl font-medium text-near-black">
                ₹ {totalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
