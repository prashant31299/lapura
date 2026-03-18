import Hero from "@/components/sections/Hero";
import ProductStrip from "@/components/sections/ProductStrip";
import ScienceCredentials from "@/components/sections/ScienceCredentials";
import IngredientList from "@/components/sections/IngredientList";
import FounderStory from "@/components/sections/FounderStory";
import WhyTable from "@/components/sections/WhyTable";
import Sustainability from "@/components/sections/Sustainability";
import Divider from "@/components/ui/Divider";
import { organizationSchema, productSchemas, breadcrumbSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            ...productSchemas,
            breadcrumbSchema("/"),
          ]),
        }}
      />
      <Hero />
      <Divider />
      <ProductStrip />
      <Divider />
      <ScienceCredentials />
      <Divider />
      <IngredientList />
      <Divider />
      <FounderStory />
      <Divider />
      <WhyTable />
      <Divider />
      <Sustainability />
    </>
  );
}
