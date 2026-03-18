import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#F5F5F3",
        "true-white": "#FFFFFF",
        "near-black": "#0F0F0F",
        "dark-charcoal": "#1C1C1C",
        "mid-grey": "#6B6B6B",
        "light-grey": "#E8E8E6",
        "accent-gold": "#B8975A",
        "science-blue": "#E8EEF4",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        "dm-mono": ["var(--font-dm-mono)", "monospace"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      fontSize: {
        xs: ["11px", { lineHeight: "1.4" }],
        sm: ["13px", { lineHeight: "1.5" }],
        base: ["15px", { lineHeight: "1.7" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["22px", { lineHeight: "1.4" }],
        "2xl": ["32px", { lineHeight: "1.2" }],
        "3xl": ["48px", { lineHeight: "1.1" }],
        hero: ["72px", { lineHeight: "1.05" }],
      },
      letterSpacing: {
        label: "0.2em",
        tight: "-0.02em",
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
