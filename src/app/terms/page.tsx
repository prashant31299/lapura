import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Terms of Use | La'Pura Professional",
  description: "Terms of use for La'Pura Professional.",
};

export default function TermsPage() {
  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>LEGAL</SectionLabel>
          <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight text-center mb-4">
            Terms of Use
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-2xl mx-auto">
            These terms apply when you browse or place an order with La&apos;Pura
            Professional.
          </p>
          <p className="font-dm-mono text-xs text-mid-grey tracking-label uppercase text-center mt-5">
            Last updated: July 16, 2026
          </p>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding space-y-8">
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            By using this website, you agree to provide accurate information
            when placing an order and to use the site only for lawful purposes.
            We may update product information, availability, pricing, and these
            terms when needed.
          </p>
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            Product images and descriptions are provided to help you choose a
            product. We make reasonable efforts to keep them accurate, but
            colours and packaging may appear differently depending on your
            screen or may change as we improve our products.
          </p>
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            Payment, order cancellation, shipping, delivery, and refund or
            replacement matters are governed by our Payment Terms and Refund
            &amp; Replacement Policy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/payment-terms"
              className="inline-flex bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-3 px-6 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
            >
              Payment Terms
            </Link>
            <Link
              href="/refund-policy"
              className="inline-flex border border-near-black text-near-black font-dm-mono text-sm uppercase tracking-widest py-3 px-6 hover:bg-accent-gold hover:border-accent-gold transition-colors duration-300"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
