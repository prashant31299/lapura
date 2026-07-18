import Link from "next/link";

const quickLinks = [
  { href: "/products", label: "Products" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/#sustainability", label: "Sustainability" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/people/LaPura-Professional/61591858890681/",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/la_pura_professionals/",
    label: "Instagram",
  },
];

export default function Footer() {
  const currentYear = new Date().getUTCFullYear();

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
            <div className="mt-6">
              <h4 className="font-dm-mono text-[10px] text-mid-grey tracking-label uppercase mb-3">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow La'Pura Professional on ${social.label}`}
                    className="inline-flex items-center border border-white/20 px-3 py-2 font-dm-mono text-[10px] uppercase tracking-[0.14em] text-white/70 hover:border-accent-gold hover:text-accent-gold transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
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
              Shop the Range
            </h4>
            <p className="text-sm text-mid-grey mb-4 font-dm-sans">
              Explore our BioFusion™ Restore formulas and product details.
            </p>
            <Link
              href="/products"
              className="inline-flex bg-accent-gold text-near-black px-6 py-3 font-dm-mono text-xs tracking-label uppercase hover:bg-white transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto content-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-dm-mono text-xs text-mid-grey">
            © {currentYear} La&apos;Pura Professional. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="font-dm-mono text-xs text-mid-grey hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-dm-mono text-xs text-mid-grey hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/payment-terms" className="font-dm-mono text-xs text-mid-grey hover:text-white transition-colors">
              Payment Terms
            </Link>
            <Link href="/refund-policy" className="font-dm-mono text-xs text-mid-grey hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
