"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import CartSidebar from "@/components/ui/CartSidebar";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/science", label: "Science" },
  { href: "/#sustainability", label: "Sustainability" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full border-b border-light-grey bg-true-white/95 backdrop-blur"
        style={{ height: "56px" }}
      >
        <div className="max-w-content mx-auto h-full content-padding flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1 shrink-0 min-w-0">
            <span className="font-outfit font-semibold text-xl text-near-black tracking-tight">
              La&apos;Pura
            </span>
            <span className="hidden min-[380px]:inline font-dm-mono text-[10px] sm:text-xs text-mid-grey tracking-[0.18em] uppercase">
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
            {/* Cart icon */}
            <button 
              aria-label="Cart" 
              className="relative text-near-black hover:text-accent-gold transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-near-black text-true-white text-[10px] font-dm-mono w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-4 shrink-0">
            {/* Mobile Cart icon */}
            <button 
              aria-label="Cart" 
              className="relative text-near-black hover:text-accent-gold transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-near-black text-true-white text-[10px] font-dm-mono w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button
              type="button"
              className="text-near-black"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
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
        </div>
      </nav>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 z-[55] bg-near-black/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-14 bottom-0 z-[60] overflow-y-auto bg-true-white lg:hidden"
        >
          <div className="flex min-h-full flex-col justify-center gap-8 px-6 py-10">
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
        </div>
      )}
      
      <CartSidebar />
    </>
  );
}
