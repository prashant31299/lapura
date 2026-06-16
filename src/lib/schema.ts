const BASE_URL = "https://lapuraprofessional.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "La'Pura Professional",
  url: BASE_URL,
  logo: `${BASE_URL}/conditioner.png`,
  description:
    "Salon-grade formulations that balance scientific precision, sensorial elegance, and long-term performance. Designed by a cosmetologist and built on deep R&D expertise.",
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
      "Gentle yet powerful professional cleanser with Moringa Seed Butter and 8 Essential Amino Acids. Strengthens hair from root to tip while reducing frizz and sealing split ends caused by chemical and mechanical damage. 300ML.",
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
      "Deeply hydrating conditioner with Moringa Seed Butter and 8 Essential Amino Acids. Smooths, detangles, and restores manageability, leaving hair soft, shiny, and resilient. 300ML.",
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
