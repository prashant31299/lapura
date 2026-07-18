import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for La'Pura Professional.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>LEGAL</SectionLabel>
          <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight text-center mb-4">
            Privacy Policy
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-2xl mx-auto">
            We respect your privacy and explain what this website currently
            stores while online ordering is unavailable.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding space-y-6">
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            This website does not currently accept checkout, payment, contact,
            or newsletter submissions. It does not ask you to provide card or
            shipping information.
          </p>
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            Items added to your cart are stored only in your browser&apos;s local
            storage so the cart remains available on that device. You can clear
            that data by emptying the cart or clearing this site&apos;s browser data.
          </p>
          <Link
            href="/"
            className="inline-flex bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-3 px-6 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
          >
            Back Home
          </Link>
        </div>
      </section>
    </>
  );
}
