import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Divider from "@/components/ui/Divider";
import SectionLabel from "@/components/ui/SectionLabel";
import IngredientItem from "@/components/ui/IngredientItem";
import AddToCartButton from "@/components/ui/AddToCartButton";
import ProductImageSlider from "@/components/ui/ProductImageSlider";
import { breadcrumbSchema } from "@/lib/schema";
import { getProductBySlug, products } from "@/lib/products";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found | La'Pura Professional",
    };
  }

  return {
    title: product.name,
    description: product.whatItIs,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | La'Pura Professional`,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
      type: "website",
      images: [
        {
          url: product.imageSrc,
          width: 1200,
          height: 1600,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | La'Pura Professional`,
      description: product.shortDescription,
      images: [product.imageSrc],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.whatItIs,
    image: `https://lapuraprofessional.com${product.imageSrc}`,
    brand: {
      "@type": "Brand",
      name: "La'Pura Professional",
    },
    offers: {
      "@type": "Offer",
      url: `https://lapuraprofessional.com/products/${product.slug}`,
      price: product.price.replace(/[^\d.]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productSchema,
            breadcrumbSchema(`/products/${product.slug}`, product.name),
          ]),
        }}
      />

      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <SectionLabel>PRODUCT DETAIL</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
            <div className="max-w-2xl min-w-0">
              <h1 className="page-title font-outfit font-semibold text-near-black tracking-tight">
                {product.name}
              </h1>
              <p className="font-dm-sans text-lg text-mid-grey italic mt-2">
                {product.subtitle}
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex w-fit bg-near-black text-true-white font-dm-mono text-xs uppercase tracking-[0.16em] py-3 px-5 hover:bg-accent-gold hover:text-near-black transition-colors duration-300"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section-padding bg-off-white">
        <div className="max-w-content mx-auto content-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start balanced-grid">
            <div className="surface-card bg-true-white border border-light-grey p-4 md:p-6 lg:sticky lg:top-24">
              <ProductImageSlider
                images={[product.imageSrc, ...product.galleryImages]}
                altPrefix={product.name}
              />
            </div>

            <div className="space-y-6 min-w-0">
              <div className="surface-card bg-true-white border border-light-grey p-5 md:p-6">
                <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between gap-2 min-[420px]:gap-4 mb-5">
                  <span className="font-dm-mono text-[10px] uppercase tracking-[0.16em] text-mid-grey break-words">
                    Professional Formula · 300ML
                  </span>
                  <span className="font-outfit text-2xl font-medium text-near-black">
                    {product.price}
                  </span>
                </div>

                <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-5">
                  {product.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip font-dm-mono text-[10px] uppercase tracking-[0.14em] border border-light-grey text-mid-grey px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <AddToCartButton
                  id={product.slug}
                  name={product.name}
                  price={product.price}
                  imageSrc={product.imageSrc}
                />

                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 mt-6">
                  <div className="border border-light-grey p-3">
                    <div className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] uppercase mb-1">
                      Format
                    </div>
                    <div className="font-dm-sans text-sm text-near-black">
                      300 ML bottle
                    </div>
                  </div>
                  <div className="border border-light-grey p-3">
                    <div className="font-dm-mono text-[10px] text-mid-grey tracking-[0.14em] uppercase mb-1">
                      Best for
                    </div>
                    <div className="font-dm-sans text-sm text-near-black">
                      {product.tags[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="surface-card bg-true-white border border-light-grey p-5 md:p-6">
                <p className="text-base text-mid-grey font-dm-sans leading-relaxed mb-4">
                  {product.whatItIs}
                </p>

                <div className="h-px bg-light-grey my-6" />

                <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                  WHAT IT DOES
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-base text-mid-grey font-dm-sans"
                    >
                      <span className="text-accent-gold mt-0.5">—</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card bg-true-white border border-light-grey p-5 md:p-6">
                <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                  HOW TO USE
                </h3>
                <ol className="space-y-3">
                  {product.howToUse.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 text-base text-mid-grey font-dm-sans"
                    >
                      <span className="font-dm-mono text-sm text-mid-grey shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="surface-card bg-true-white border border-light-grey p-5 md:p-6">
                <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                  KEY INGREDIENTS
                </h3>
                <div className="border-t border-light-grey">
                  {product.keyIngredients.map((ingredient) => (
                    <IngredientItem key={ingredient.number} {...ingredient} />
                  ))}
                </div>
              </div>

              <div className="surface-card bg-true-white border border-light-grey p-5 md:p-6">
                <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                  FULL FORMULA / INCI LIST
                </h3>
                <p className="font-dm-mono text-xs text-mid-grey leading-relaxed break-words">
                  {product.inciList}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
