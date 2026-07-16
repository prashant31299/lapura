import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Refund & Replacement Policy | La'Pura Professional",
  description:
    "Return, refund, and replacement policy for La'Pura Professional products.",
};

const sectionClassName = "space-y-3";
const headingClassName = "font-outfit text-2xl font-medium text-near-black";
const copyClassName = "font-dm-sans text-base text-mid-grey leading-relaxed";
const listClassName =
  "list-disc space-y-2 pl-5 font-dm-sans text-base text-mid-grey leading-relaxed marker:text-near-black";

export default function RefundPolicyPage() {
  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>LEGAL</SectionLabel>
          <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight text-center mb-4">
            Refund &amp; Replacement Policy
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-2xl mx-auto">
            Our policy for returns, refunds, and approved product replacements.
          </p>
          <p className="font-dm-mono text-xs text-mid-grey tracking-label uppercase text-center mt-5">
            Last updated: July 16, 2026
          </p>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding space-y-10">
          <section className={sectionClassName}>
            <h2 className={headingClassName}>Returns &amp; Refunds</h2>
            <p className={copyClassName}>
              We are committed to high standards of product quality and hygiene.
              Because our cosmetic and haircare products are personal-use items,
              products sold through our website are non-returnable and
              non-refundable once sold.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>When a Replacement May Be Approved</h2>
            <p className={copyClassName}>
              A replacement may be provided after verification in the following
              circumstances:
            </p>
            <ul className={listClassName}>
              <li>An incorrect product was delivered.</li>
              <li>The product arrived damaged.</li>
              <li>The product has a manufacturing defect.</li>
              <li>The product leaked or was damaged during transit.</li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>How to Request a Replacement</h2>
            <p className={copyClassName}>
              Please notify us within 48 hours of receiving your order. Include
              your order number, photographs or videos of the product and outer
              packaging, and a description of the issue. Once approved, a
              replacement product will be dispatched at no additional cost.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>Cases Not Eligible for Replacement</h2>
            <ul className={listClassName}>
              <li>The product has been opened, used, or partially consumed.</li>
              <li>
                Damage resulted from improper handling, storage, or misuse by
                the customer.
              </li>
              <li>The request was raised more than 48 hours after delivery.</li>
              <li>
                The request is based on personal preferences, including
                fragrance, texture, or expected results.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>Verification &amp; Support</h2>
            <p className={copyClassName}>
              La&apos;Pura Professional assesses each claim and may request
              additional information, photographs, or videos to verify it. For
              support with a replacement or refund question, please use the
              customer-support contact details on this website. Support hours
              are Monday–Saturday, 10:00 AM–6:00 PM IST.
            </p>
          </section>

          <Link
            href="/payment-terms"
            className="inline-flex bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-3 px-6 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
          >
            View Payment Terms
          </Link>
        </div>
      </section>
    </>
  );
}
