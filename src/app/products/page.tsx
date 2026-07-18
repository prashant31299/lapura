import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";
import ProductCard from "@/components/ui/ProductCard";
import { breadcrumbSchema } from "@/lib/schema";
import { getLowestPricedVariant, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the BioFusion™ Restore shampoo and conditioner collection. Tap any product to see the full ingredients, usage, gallery, and details.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "BioFusion™ Restore Products | La'Pura Professional",
    description:
      "Shop the La'Pura Professional shampoo and conditioner collection with moringa, amino acids, and botanical actives.",
    url: "/products",
    images: [
      {
        url: "/lapura/gallery-optimized/shampoo/v2/biofusion-restore-shampoo-front-250ml.webp",
        width: 1200,
        height: 1500,
        alt: "La'Pura Professional BioFusion Restore Shampoo 250 ml bottle",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("/products")),
        }}
      />

      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>THE COLLECTION</SectionLabel>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight mb-4">
              BioFusion™ Restore Collection
            </h1>
            <p className="font-dm-sans text-lg text-mid-grey leading-relaxed">
              A focused two-product system built to keep browsing simple. Tap a
              product to open its dedicated page with the full story, gallery,
              ingredients, and usage details.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                subtitle={product.shortDescription}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                tags={product.tags}
                price={`From ${getLowestPricedVariant(product).price}`}
                priceNote="100 ML & 250 ML available"
                href={`/products/${product.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
