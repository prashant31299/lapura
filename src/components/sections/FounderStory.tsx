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

        <p className="text-base text-mid-grey font-dm-sans leading-relaxed max-w-2xl mx-auto">
          Born from years of hands-on cosmetology and deep research into hair
          science, La&apos;Pura Professional was founded with one mission: to make
          truly effective, professional-grade hair care accessible to everyone.
          Every formula is developed using BioFusion™ technology — our proprietary
          approach that combines clinically validated botanical actives with
          biomimetic amino acid complexes. We don&apos;t just treat the surface. We
          rebuild hair from within, strand by strand, bond by bond. This is not
          marketing. This is science you can feel.
        </p>
      </motion.div>
    </section>
  );
}
