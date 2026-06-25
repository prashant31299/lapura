import SectionLabel from "@/components/ui/SectionLabel";

const rows = [
  {
    promise: "Cosmetologist-Formulated",
    meaning: "Created by a professional with years of hands-on R&D expertise",
  },
  {
    promise: "Salon-Exclusive Quality",
    meaning: "Designed for high-performance professional results",
  },
  {
    promise: "Science + Nature Balance",
    meaning: "Natural botanicals like moringa blended with science-backed amino acids",
  },
  {
    promise: "Result-Oriented",
    meaning: "Focused on visible benefits: growth support, strength, and frizz reduction",
  },
  {
    promise: "Supporting Startups",
    meaning: "A brand born from helping others grow, just like your hair",
  },
];

export default function WhyTable() {
  return (
    <section className="bg-off-white section-padding">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel>WHY LA&apos;PURA</SectionLabel>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="border-b border-near-black">
                <th className="text-left font-dm-mono text-xs text-mid-grey tracking-label uppercase py-4 pr-8">
                  What We Promise
                </th>
                <th className="text-left font-dm-mono text-xs text-mid-grey tracking-label uppercase py-4">
                  What That Means
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.promise}
                  className="border-b border-light-grey hover:bg-light-grey/30 transition-colors"
                >
                  <td className="font-outfit font-medium text-base text-near-black py-5 pr-8">
                    {row.promise}
                  </td>
                  <td className="font-dm-sans text-base text-mid-grey py-5">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
