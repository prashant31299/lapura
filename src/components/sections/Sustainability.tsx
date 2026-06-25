import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 12c0-4 3-8 9-8s9 4 9 8" />
        <circle cx="7.5" cy="12" r="1.5" />
        <circle cx="16.5" cy="12" r="1.5" />
        <path d="M9 16c0 0 1.5 2 3 2s3-2 3-2" />
      </svg>
    ),
    title: "Cruelty-Free",
    description:
      "Never tested on animals. The brand brief is explicit about ethical development and animal-safe care.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
        <path d="M12 8v6M9 11h6" />
      </svg>
    ),
    title: "Eco Packaging",
    description:
      "Recycled and recyclable materials, eco-conscious merchandising, and packaging that protects product integrity.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
      </svg>
    ),
    title: "GMP Standards",
    description:
      "Good Manufacturing Practice standards guide filling, sealing, storage, and distribution across the line.",
  },
];

const processSteps = [
  "Selecting packaging that suits the formula and its consistency.",
  "Preparing components through hygienic handling and inspection.",
  "Measuring and dispensing with precision tools for consistency.",
  "Sealing and labeling with tamper-proof, compliant details.",
  "Storing and distributing with care to preserve safety and effectiveness.",
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-true-white section-padding">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel>OUR COMMITMENT</SectionLabel>

        <div className="max-w-2xl">
          <h2 className="section-title font-outfit font-semibold text-near-black tracking-tight mb-4">
            Sustainable choices should still feel premium and dependable.
          </h2>
          <p className="text-base text-mid-grey font-dm-sans leading-relaxed">
            The brief frames sustainability as a practical discipline: materials,
            manufacturing, and logistics all need to protect the product and the
            environment at the same time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 border-t border-l border-light-grey">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center px-8 py-10 border-r border-b border-light-grey"
            >
              <div className="flex justify-center mb-5 text-near-black">
                {pillar.icon}
              </div>
              <h3 className="font-outfit font-medium text-xl text-near-black mb-3">
                {pillar.title}
              </h3>
              <p className="font-dm-sans text-sm text-mid-grey leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-light-grey pt-10">
          <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-6">
            Manufacturing &amp; Quality Assurance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step} className="border-l border-light-grey pl-4">
                <span className="font-dm-mono text-xs text-mid-grey">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-dm-sans text-sm text-mid-grey leading-relaxed mt-3">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
