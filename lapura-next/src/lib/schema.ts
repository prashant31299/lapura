const BASE_URL = "https://lapuraprofessional.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "La'Pura Professional",
  url: BASE_URL,
  logo: `${BASE_URL}/conditioner.png`,
  description:
    "Cosmetologist-formulated, science-backed professional hair care. BioFusion™ technology with Moringa Seed Butter and 8 Essential Amino Acids.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BioFusion™ Restore Shampoo",
    description:
      "Professional-grade shampoo with Moringa Oleifera Seed Butter, 8 Essential Amino Acids, Hydrolyzed Wheat, Soy & Corn Protein. Repairs damage, controls frizz, boosts collagen. 300ML.",
    image: `${BASE_URL}/conditioner 3.png`,
    brand: {
      "@type": "Brand",
      name: "La'Pura Professional",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Volume", value: "300ML" },
      { "@type": "PropertyValue", name: "Formula", value: "BioFusion™" },
      { "@type": "PropertyValue", name: "Vegan", value: "Yes" },
      { "@type": "PropertyValue", name: "Cruelty-Free", value: "Yes" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BioFusion™ Restore Conditioner",
    description:
      "Professional-grade conditioner with Baobab Extract, Hydrolyzed Keratin Complex, Panthenol (Pro-Vitamin B5). Deep nourishment, split end repair, shine boost. 300ML.",
    image: `${BASE_URL}/conditioner.png`,
    brand: {
      "@type": "Brand",
      name: "La'Pura Professional",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Volume", value: "300ML" },
      { "@type": "PropertyValue", name: "Formula", value: "BioFusion™" },
      { "@type": "PropertyValue", name: "Vegan", value: "Yes" },
      { "@type": "PropertyValue", name: "Cruelty-Free", value: "Yes" },
    ],
  },
];

export function breadcrumbSchema(path: string) {
  const items = [
    { name: "Home", url: BASE_URL },
  ];

  if (path === "/products") {
    items.push({ name: "Products", url: `${BASE_URL}/products` });
  } else if (path === "/science") {
    items.push({ name: "Science", url: `${BASE_URL}/science` });
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
        text: "BioFusion™ is La'Pura Professional's proprietary approach that combines clinically validated botanical actives with biomimetic amino acid complexes to repair hair from within at the molecular level.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key ingredients in La'Pura Professional products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our key ingredients include Moringa Oleifera Seed Butter, an 8 Essential Amino Acid Complex, Hydrolyzed Wheat/Soy/Corn Protein, Baobab Seed Oil, Nettle Leaf Extract, and Panthenol (Pro-Vitamin B5).",
      },
    },
    {
      "@type": "Question",
      name: "Are La'Pura Professional products cruelty-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all La'Pura Professional products are 100% cruelty-free. We never test on animals and our formulations are entirely vegan.",
      },
    },
    {
      "@type": "Question",
      name: "Is La'Pura Professional suitable for all hair types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the BioFusion™ Restore collection is formulated to work across all hair types. The amino acid complex and botanical actives adapt to your hair's specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "Where are La'Pura Professional products manufactured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All products are manufactured in GMP-certified facilities in India, maintaining pharmaceutical-grade quality standards with full batch traceability.",
      },
    },
  ],
};
