import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/products";

export default function ProductStrip() {
  return (
    <section id="products" className="section-padding bg-off-white">
      <div className="max-w-content mx-auto content-padding">
        <SectionLabel>FEATURED PAIR</SectionLabel>

        <div className="max-w-2xl mx-auto text-center mt-6">
          <h2 className="section-title font-outfit font-semibold text-near-black tracking-tight mb-4">
            The BioFusion™ Restore Collection
          </h2>
          <p className="text-base text-mid-grey font-dm-sans leading-relaxed">
            Shampoo and conditioner designed to work together: balanced
            cleansing, stronger conditioning, and a more polished finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              subtitle={product.shortDescription}
              imageSrc={product.imageSrc}
              tags={product.tags}
              price={product.price}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
