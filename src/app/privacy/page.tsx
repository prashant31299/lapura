import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Privacy Policy | La'Pura Professional",
  description: "Privacy policy for La'Pura Professional.",
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
            We respect your privacy and keep this page simple: this site does
            not collect personal data beyond what you voluntarily submit.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding space-y-6">
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            Information you share through forms on this demo site is only used
            to simulate the customer experience and is not sold or shared.
          </p>
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            If you want a formal policy tailored to your business operations, we
            can replace this placeholder with a full legal document.
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
