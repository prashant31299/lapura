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
            These terms explain how the demo site may be used and set
            expectations for browsing and checkout.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding space-y-6">
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            The site content is provided for demonstration purposes. Product
            copy, checkout flows, and order confirmation are simulated.
          </p>
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
            If you need production-ready terms, this page should be replaced
            with your final legal wording before launch.
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
