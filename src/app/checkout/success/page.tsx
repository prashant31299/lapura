import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-off-white min-h-[70vh] flex flex-col items-center justify-center section-padding">
      <div className="max-w-md w-full text-center bg-true-white p-12 border border-light-grey shadow-sm">
        <div className="flex justify-center mb-6 text-near-black">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        
        <h1 className="font-outfit font-semibold text-3xl text-near-black tracking-tight mb-4">
          Order Confirmed
        </h1>
        
        <p className="font-dm-sans text-mid-grey mb-8">
          Thank you for your purchase. We&apos;ve received your order and are getting it ready to be shipped.
        </p>
        
        <div className="bg-off-white p-4 border border-light-grey mb-8 font-dm-mono text-xs text-mid-grey">
          Order number: #LAPURA-{Math.floor(100000 + Math.random() * 900000)}
        </div>
        
        <Link
          href="/products"
          className="inline-block w-full bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-4 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
