import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Status",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-off-white min-h-[70vh] flex items-center justify-center section-padding content-padding">
      <div className="max-w-md w-full text-center bg-true-white p-6 sm:p-10 md:p-12 border border-light-grey shadow-sm">
        <h1 className="font-outfit font-semibold text-3xl text-near-black tracking-tight mb-4">
          No order was placed
        </h1>
        <p className="font-dm-sans text-mid-grey mb-8">
          Online checkout is still being connected. We have not collected payment
          details, charged you, or created an order.
        </p>
        <Link
          href="/checkout"
          className="inline-block w-full bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-4 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
        >
          Return to Checkout
        </Link>
      </div>
    </div>
  );
}
