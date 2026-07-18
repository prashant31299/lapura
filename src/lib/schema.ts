import { products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export const BASE_URL = SITE_URL;

const absoluteUrl = (path: string) => `${BASE_URL}${path}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "La'Pura Professional",
  url: BASE_URL,
  logo: absoluteUrl("/lapura/conditioner-pack-optimized.jpg"),
  sameAs: [
    "https://www.facebook.com/people/LaPura-Professional/61591858890681/",
    "https://www.instagram.com/la_pura_professionals/",
  ],
  description:
    "Salon-grade formulations that balance scientific precision, sensorial elegance, and long-term performance. Designed by a cosmetologist and built on deep R&D expertise.",
};

export const productSchemas = products.map((product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: `${product.whatItIs} Available in ${product.variants
    .map((variant) => variant.volume)
    .join(" and ")}.`,
  image: [product.imageSrc, ...product.galleryImages].map(absoluteUrl),
  url: absoluteUrl(`/products/${product.slug}`),
  brand: {
    "@type": "Brand",
    name: "La'Pura Professional",
  },
  offers: product.variants.map((variant) => ({
    "@type": "Offer",
    name: `${product.name} · ${variant.volume}`,
    url: absoluteUrl(`/products/${product.slug}?size=${variant.id}`),
    price: variant.price.replace(/[^\d.]/g, ""),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  })),
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Available Sizes",
      value: product.variants.map((variant) => variant.volume).join(", "),
    },
    { "@type": "PropertyValue", name: "Formula", value: "BioFusion™" },
    { "@type": "PropertyValue", name: "Vegan", value: "Yes" },
    { "@type": "PropertyValue", name: "Cruelty-Free", value: "Yes" },
  ],
}));

export function breadcrumbSchema(path: string, leafName?: string) {
  const items = [
    { name: "Home", url: BASE_URL },
  ];

  if (path === "/products") {
    items.push({ name: "Products", url: `${BASE_URL}/products` });
  } else if (path === "/about") {
    items.push({ name: "About", url: `${BASE_URL}/about` });
  } else if (path === "/science") {
    items.push({ name: "Science", url: `${BASE_URL}/science` });
  } else if (path.startsWith("/products/")) {
    items.push({ name: "Products", url: `${BASE_URL}/products` });
    if (leafName) {
      items.push({ name: leafName, url: `${BASE_URL}${path}` });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BioFusion™ technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BioFusion™ is La'Pura Professional's approach to combining proven actives, botanical intelligence, and salon-grade technologies in formulas designed for visible results, refined sensorial experience, and long-term care.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key ingredients in La'Pura Professional products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our key ingredients include Moringa Oleifera Seed Butter, 8 Essential Amino Acids, Hydrolyzed Wheat/Soy/Corn Protein, Adansonia Digitata (Baobab) Seed Extract, Urtica Dioica (Stinging Nettle) Extract, Sodium PCA, Trehalose, and Panthenol (Pro-Vitamin B5).",
      },
    },
    {
      "@type": "Question",
      name: "Are La'Pura Professional products cruelty-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. La'Pura products are ethically developed and cruelty-free, and the BioFusion™ Restore benefits include multi-cultural vegan Keratin.",
      },
    },
    {
      "@type": "Question",
      name: "What makes La'Pura Professional different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La'Pura was created by a cosmetologist and R&D specialist to bridge salon luxury with true scientific performance, balancing efficacy, sensorial experience, and responsible formulation.",
      },
    },
    {
      "@type": "Question",
      name: "Where are La'Pura Professional products manufactured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La'Pura follows Good Manufacturing Practices to support consistency, safety, and trust through packaging selection, hygienic preparation, precision filling, compliant sealing and labeling, and careful storage and distribution.",
      },
    },
  ],
};
