"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FounderStory() {
  return (
    <section className="bg-off-white section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[800px] mx-auto content-padding text-center"
      >
        <SectionLabel>FOUNDED BY A COSMETOLOGIST</SectionLabel>

        <blockquote className="font-cormorant italic text-2xl md:text-[42px] text-near-black leading-snug mb-8 mt-10">
          &ldquo;La&apos;Pura Professional was created to bridge the gap between
          salon luxury and true scientific performance.&rdquo;
        </blockquote>

        <p className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-10">
          — Founder &amp; CEO, Cosmetologist &amp; R&amp;D Specialist
        </p>

        <p className="text-base text-mid-grey font-dm-sans leading-relaxed max-w-2xl mx-auto mb-6">
          La&apos;Pura Professional was born from a clear understanding of the
          professional beauty industry and its unmet needs. Too often,
          professional products lean either on marketing-driven claims or on
          natural concepts without enough scientific validation. La&apos;Pura was
          created to restore that balance.
        </p>

        <p className="text-base text-mid-grey font-dm-sans leading-relaxed max-w-2xl mx-auto">
          Every formulation is developed with a research-first mindset,
          combining proven actives, botanical intelligence, and salon-grade
          technologies to deliver visible results, refined sensorial experience,
          and long-term care.
        </p>
      </motion.div>
    </section>
  );
}
