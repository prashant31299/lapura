"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/science", label: "Science" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-true-white border-b border-light-grey"
      style={{ height: "56px" }}
    >
      <div className="max-w-content mx-auto h-full content-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="font-outfit font-semibold text-xl text-near-black tracking-tight">
            La&apos;Pura
          </span>
          <span className="font-dm-mono text-xs text-mid-grey tracking-label uppercase">
            Professional
          </span>
        </Link>

        {/* Center Nav — Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link font-dm-sans text-sm text-near-black hover:text-near-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Search icon */}
          <button aria-label="Search" className="text-near-black hover:text-accent-gold transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          {/* Cart icon */}
          <button aria-label="Cart" className="text-near-black hover:text-accent-gold transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-near-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[96px] bg-true-white z-40 flex flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-outfit text-3xl text-near-black tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
