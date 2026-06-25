import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteAssets } from "@/lib/siteAssets";

export default function Hero() {
  return (
    <section className="bg-off-white min-h-[calc(100svh-96px)] flex items-center py-12 lg:py-16">
      <div className="max-w-content mx-auto content-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center balanced-grid">
          <div className="min-w-0">
            <span className="label-mono block mb-6">
              PROFESSIONAL HAIR CARE
            </span>

            <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight mb-6">
              <span className="block">Where Salon Luxury</span>
              <span className="block">Meets Scientific</span>
              <span className="block">Innovation</span>
            </h1>

            <p className="text-base text-mid-grey font-dm-sans max-w-md mb-10 leading-relaxed">
              Salon-grade formulations that balance scientific precision,
              botanical nourishment, and long-term performance. Developed with
              a cosmetologist-led R&amp;D mindset and a focus on visible, lasting
              results.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button variant="primary" href="/products">
                Shop BioFusion™ Collection
              </Button>
              <Button variant="secondary" href="/science">
                Explore the Science
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10 max-w-lg">
              {[
                "Cosmetologist-formulated",
                "Botanical actives",
                "Cruelty-free",
              ].map((item) => (
                <div
                  key={item}
                  className="surface-card border border-light-grey bg-true-white px-4 py-3"
                >
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] break-words">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="surface-card border border-light-grey bg-true-white p-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-off-white">
                  <Image
                    src={siteAssets.conditionerHero}
                    alt="La'Pura Professional BioFusion™ Restore Conditioner"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.16em]">
                    CONDITIONER
                  </span>
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.16em]">
                    250 ML
                  </span>
                </div>
              </div>

              <div className="surface-card border border-light-grey bg-true-white p-4 sm:mt-12">
                <div className="relative aspect-[4/5] overflow-hidden bg-off-white">
                  <Image
                    src={siteAssets.shampooHero}
                    alt="La'Pura Professional BioFusion™ Restore Shampoo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.16em]">
                    SHAMPOO
                  </span>
                  <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.16em]">
                    250 ML
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="surface-card border border-light-grey bg-true-white px-4 py-3">
                <span className="font-dm-sans text-sm text-near-black block mb-1">
                  Built from R&amp;D
                </span>
                <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] break-words">
                  SCIENCE LED, SALON READY
                </span>
              </div>
              <div className="surface-card border border-light-grey bg-true-white px-4 py-3">
                <span className="font-dm-sans text-sm text-near-black block mb-1">
                  Nature-first actives
                </span>
                <span className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] break-words">
                  MORINGA, BAOBAB, AMINO ACIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
