import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  subtitle: string;
  imageSrc: string;
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
    <div className="bg-true-white border border-light-grey group">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-true-white p-8 flex items-center justify-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain p-8 group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-light-grey" />

      {/* Details */}
      <div className="p-6">
        <h3 className="font-outfit font-medium text-lg text-near-black mb-1">
          {name}
        </h3>
        <p className="font-dm-mono text-xs text-mid-grey mb-4">{subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-dm-mono text-[10px] uppercase tracking-label border border-light-grey text-mid-grey px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + Link */}
        <div className="flex items-center justify-between mt-4 mb-4">
          <span className="font-outfit font-medium text-lg text-near-black">
            {price}
          </span>
          <Link
            href={href}
            className="font-dm-sans text-sm text-mid-grey hover:text-accent-gold transition-colors"
          >
            View Product
          </Link>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-near-black text-true-white font-dm-mono text-sm uppercase tracking-widest py-3 hover:bg-accent-gold hover:text-near-black transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
