"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/products", label: "Products" },
  { href: "/science", label: "Science" },
  { href: "/", label: "About" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-near-black text-white">
      <div className="max-w-content mx-auto content-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Logo + Tagline */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-outfit font-semibold text-xl text-white tracking-tight">
                La&apos;Pura
              </span>
              <span className="font-dm-mono text-xs text-mid-grey tracking-label uppercase">
                Professional
              </span>
            </div>
            <p className="text-sm text-mid-grey leading-relaxed font-dm-sans">
              Formulated with Science.
              <br />
              Crafted with Care.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-dm-sans text-sm text-white/70 hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Stay Informed */}
          <div>
            <h4 className="font-dm-mono text-xs text-mid-grey tracking-label uppercase mb-6">
              Stay Informed
            </h4>
            <p className="text-sm text-mid-grey mb-4 font-dm-sans">
              Get updates on new formulations and exclusive offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white font-dm-sans placeholder:text-mid-grey focus:outline-none focus:border-accent-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-accent-gold text-near-black px-6 py-3 font-dm-mono text-xs tracking-label uppercase hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto content-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-dm-mono text-xs text-mid-grey">
            © 2025 La&apos;Pura Professional. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="#" className="font-dm-mono text-xs text-mid-grey hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-dm-mono text-xs text-mid-grey hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
