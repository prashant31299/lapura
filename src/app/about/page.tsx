import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import { breadcrumbSchema } from "@/lib/schema";

const principles = [
  {
    title: "Research-led care",
    description:
      "Every formula begins with ingredient logic, performance testing, and a clear purpose for damaged, dry, or stressed hair.",
  },
  {
    title: "Professional sensoriality",
    description:
      "Texture, fragrance, glide, and finish are treated as part of performance so the ritual feels elevated as well as effective.",
  },
  {
    title: "Responsible formulation",
    description:
      "We aim for a thoughtful balance of botanical nourishment, modern cosmetic science, and everyday reliability.",
  },
];

const highlights = [
  "Cosmetologist-founded",
  "Built from R&D experience",
  "Salon-quality standards",
  "Nature and science in balance",
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind La'Pura Professional, the philosophy behind our formulations, and the principles that shape our salon-grade hair care.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema("/about")]),
        }}
      />

      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>ABOUT US</SectionLabel>
          <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight text-center mb-4">
            Science-led hair care with a refined salon point of view
          </h1>
          <p className="font-dm-sans text-lg text-mid-grey text-center max-w-3xl mx-auto leading-relaxed">
            La&apos;Pura Professional was created to bridge cosmetic science,
            everyday ritual, and long-term hair wellness in one thoughtful
            professional range.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[1040px] mx-auto content-padding grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionLabel align="left" className="mb-8">
              THE FOUNDER&apos;S NOTE
            </SectionLabel>
            <blockquote className="font-cormorant italic text-3xl md:text-[46px] text-near-black leading-snug">
              &ldquo;As a cosmetologist with years of R&amp;D experience, I set
              out to create more than just hair care. I wanted formulas that
              truly work, feel beautiful to use, and support healthier hair over
              time.&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <p className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-5">
              Cleoo Cosmetics / La&apos;Pura Professional
            </p>
            <div className="space-y-6 text-base text-mid-grey font-dm-sans leading-relaxed">
              <p>
                La&apos;Pura began with a clear observation: many hair-care
                products promise instant beauty, but fewer are built with the
                discipline needed to restore, protect, and strengthen hair in a
                lasting way.
              </p>
              <p>
                Our response was to build formulas around purposeful actives,
                botanical support, and a professional standard of performance.
                That means caring for the hair fiber, respecting the scalp, and
                creating a routine that feels both effective and elegant.
              </p>
              <p>
                The result is a brand philosophy rooted in precision,
                nourishment, and trust. We want every bottle to reflect serious
                formulation thinking while still delivering the sensorial polish
                expected from modern salon care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="border border-light-grey bg-off-white px-4 py-4"
                >
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-label uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-off-white">
        <div className="max-w-[1040px] mx-auto content-padding">
          <SectionLabel>WHAT GUIDES US</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="border border-light-grey bg-true-white p-6"
              >
                <h2 className="font-outfit font-semibold text-2xl tracking-tight text-near-black mb-4">
                  {principle.title}
                </h2>
                <p className="font-dm-sans text-base text-mid-grey leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-true-white">
        <div className="max-w-[900px] mx-auto content-padding text-center">
          <SectionLabel>EXPLORE THE RANGE</SectionLabel>
          <h2 className="font-outfit font-semibold text-3xl text-near-black tracking-tight mb-4">
            Discover the formulas behind the philosophy
          </h2>
          <p className="font-dm-sans text-base text-mid-grey leading-relaxed max-w-2xl mx-auto mb-8">
            Browse the BioFusion™ Restore collection or go deeper into the
            ingredients and formulation choices that shape each product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products" variant="primary">
              Shop Products
            </Button>
            <Button href="/science" variant="ghost">
              Read the Science
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
