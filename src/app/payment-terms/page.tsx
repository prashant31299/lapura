import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Payment Terms",
  description:
    "Payment, pricing, order cancellation, shipping, and delivery terms for La'Pura Professional.",
  alternates: { canonical: "/payment-terms" },
};

const sectionClassName = "space-y-3";
const headingClassName = "font-outfit text-2xl font-medium text-near-black";
const copyClassName = "font-dm-sans text-base text-mid-grey leading-relaxed";
const listClassName =
  "list-disc space-y-2 pl-5 font-dm-sans text-base text-mid-grey leading-relaxed marker:text-near-black";

export default function PaymentTermsPage() {
  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>LEGAL</SectionLabel>
          <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight text-center mb-4">
            Payment Terms
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-2xl mx-auto">
            Please read these terms before completing a purchase with
            La&apos;Pura Professional.
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
            <h2 className={headingClassName}>Pricing &amp; Taxes</h2>
            <p className={copyClassName}>
              All prices displayed on our website are in Indian Rupees (INR)
              and include applicable taxes unless stated otherwise.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>Payment Confirmation</h2>
            <p className={copyClassName}>
              Orders are processed only after our payment partner confirms that
              payment has been successfully completed. If payment authorization
              fails, the order will not be processed.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>Order Cancellation by La&apos;Pura</h2>
            <p className={copyClassName}>
              La&apos;Pura Professional may cancel an order in the following
              circumstances:
            </p>
            <ul className={listClassName}>
              <li>Product unavailability.</li>
              <li>Payment authorization failure.</li>
              <li>Pricing or technical errors.</li>
              <li>Suspected fraudulent transactions.</li>
            </ul>
            <p className={copyClassName}>
              If we cancel an order after a successful payment, the full amount
              paid will be refunded to the original payment method.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>Shipping &amp; Delivery</h2>
            <p className={copyClassName}>
              Orders are generally processed within 1–3 business days. Delivery
              timelines can vary based on your location and our logistics
              partners. During festivals, launches, or unforeseen
              circumstances, delivery may take longer.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>Need Help?</h2>
            <p className={copyClassName}>
              Online ordering is currently unavailable. Customer-support contact
              information and support hours will be published before checkout is
              enabled.
            </p>
          </section>

          <Link
            href="/refund-policy"
            className="inline-flex bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-3 px-6 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
          >
            View Refund Policy
          </Link>
        </div>
      </section>
    </>
  );
}
