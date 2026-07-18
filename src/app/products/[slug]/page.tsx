import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Divider from "@/components/ui/Divider";
import SectionLabel from "@/components/ui/SectionLabel";
import IngredientItem from "@/components/ui/IngredientItem";
import ProductImageSlider from "@/components/ui/ProductImageSlider";
import ProductPurchasePanel from "@/components/ui/ProductPurchasePanel";
import { breadcrumbSchema } from "@/lib/schema";
import { getProductBySlug, products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
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
          height: 1500,
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

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.whatItIs,
    image: [product.imageSrc, ...product.galleryImages].map(
      (imagePath) => `${SITE_URL}${imagePath}`,
    ),
    brand: {
      "@type": "Brand",
      name: "La'Pura Professional",
    },
    offers: product.variants.map((variant) => ({
      "@type": "Offer",
      name: `${product.name} · ${variant.volume}`,
      url: `${SITE_URL}/products/${product.slug}?size=${variant.id}`,
      price: variant.price.replace(/[^\d.]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    })),
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
            <div className="surface-card rounded-2xl bg-true-white border border-light-grey p-4 md:p-6 lg:sticky lg:top-24">
              <ProductImageSlider
                images={[product.imageSrc, ...product.galleryImages]}
                altPrefix={product.name}
                altTexts={[product.imageAlt, ...product.galleryAlts]}
              />
            </div>

            <div className="space-y-6 min-w-0">
              <ProductPurchasePanel
                slug={product.slug}
                name={product.name}
                shortDescription={product.shortDescription}
                tags={product.tags}
                imageSrc={product.imageSrc}
                variants={product.variants}
              />

              <div className="surface-card rounded-2xl bg-true-white border border-light-grey p-5 md:p-6">
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

              <div className="surface-card rounded-2xl bg-true-white border border-light-grey p-5 md:p-6">
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

              <div className="surface-card rounded-2xl bg-true-white border border-light-grey p-5 md:p-6">
                <h3 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-4">
                  KEY INGREDIENTS
                </h3>
                <div className="border-t border-light-grey">
                  {product.keyIngredients.map((ingredient) => (
                    <IngredientItem key={ingredient.number} {...ingredient} />
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-2xl bg-true-white border border-light-grey p-5 md:p-6">
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
