import SectionLabel from "@/components/ui/SectionLabel";

export default function FounderStory() {
  return (
    <section id="about" className="bg-off-white section-padding">
      <div className="max-w-[960px] mx-auto content-padding">
        <SectionLabel>ABOUT THE BRAND</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          <div className="lg:col-span-5">
            <blockquote className="font-cormorant italic text-2xl md:text-[42px] text-near-black leading-snug">
              &ldquo;As a cosmetologist with years of R&amp;D experience, I set
              out to create more than just hair care - I wanted formulas that
              truly work.&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <p className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-5">
              Cleoo Cosmetics / La&apos;Pura Professional
            </p>
            <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-6">
              The brief behind La&apos;Pura speaks to a clear problem: salon
              professionals and everyday consumers need products that balance
              scientific precision with natural nourishment. That insight
              shaped the La&apos;Pura Professional range.
            </p>
            <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-6">
              Every formula is designed to restore, protect, and enhance hair
              from root to tip. The goal is not a superficial finish, but a
              routine that feels elegant, works reliably, and supports long-term
              hair health.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                "Research-first formulation",
                "Nature + science balance",
                "Salon-quality performance",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-light-grey bg-true-white px-4 py-4"
                >
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-label">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
