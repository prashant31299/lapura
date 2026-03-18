import type { Metadata } from "next";
import { Outfit, DM_Sans, DM_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "La'Pura Professional | BioFusion™ Restore Hair Care | Moringa & Amino Acids",
  description:
    "Cosmetologist-formulated BioFusion™ Restore Shampoo & Conditioner. Moringa Seed Butter, 8 Essential Amino Acids, Baobab Extract. Science-backed salon hair care. Cruelty-free. GMP certified.",
  keywords: [
    "professional hair care",
    "moringa shampoo india",
    "amino acid conditioner",
    "salon grade shampoo",
    "BioFusion restore",
    "vegan keratin shampoo",
    "frizz repair conditioner",
    "split end treatment",
    "La Pura Professional",
  ],
  openGraph: {
    title: "La'Pura Professional | BioFusion™ Restore Hair Care",
    description:
      "Cosmetologist-formulated BioFusion™ Restore Shampoo & Conditioner with Moringa Seed Butter and 8 Essential Amino Acids.",
    type: "website",
    locale: "en_IN",
    siteName: "La'Pura Professional",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${dmMono.variable} ${cormorant.variable}`}
    >
      <body className="bg-off-white text-near-black font-dm-sans antialiased">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
