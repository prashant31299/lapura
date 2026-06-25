import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  subtitle: string;
  imageSrc: string | StaticImageData;
  tags: string[];
  price?: string;
  href: string;
}

export default function ProductCard({
  name,
  subtitle,
  imageSrc,
  tags,
  price = "₹ —",
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="surface-card block h-full bg-true-white border border-light-grey group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,15,15,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-near-black"
      aria-label={`Open details for ${name}`}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-gradient-to-b from-off-white to-true-white p-5 sm:p-8 flex items-center justify-center overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain p-5 sm:p-8 transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="chip absolute left-4 top-4 bg-near-black text-true-white font-dm-mono text-[10px] tracking-[0.16em] uppercase px-3 py-1.5">
            View details
          </span>
        </div>

        <div className="h-px bg-light-grey" />

        <div className="p-5 sm:p-6 flex flex-1 flex-col">
          <h3 className="font-outfit font-medium text-lg text-near-black mb-1">
            {name}
          </h3>
          <p className="font-dm-sans text-sm text-mid-grey mb-4">{subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="chip font-dm-mono text-[10px] uppercase tracking-[0.14em] border border-light-grey text-mid-grey px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between gap-3 min-[420px]:gap-4 mt-auto pt-4">
            <span className="font-outfit font-medium text-lg text-near-black">
              {price}
            </span>
            <span className="font-dm-sans text-sm text-mid-grey inline-flex items-center gap-1">
              Open Product
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
