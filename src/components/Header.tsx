"use client";

import React, { useState } from "react";
import { Menu, X, Gift } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="absolute w-full top-0 z-50 bg-transparent">
        <div className="w-full h-20 flex items-center justify-between px-6 md:px-16">
          <div className="flex items-center gap-2 logo">
            <Gift className="w-8 h-8" />
            <span className="text-3xl tracking-tight">Coreplane</span>
          </div>

          <nav className="hidden md:flex items-center gap-12">
            <a href="#" className="font-medium text-white hover:text-[#B8860B] transition-colors">Home</a>
            <a href="#who-we-are" className="font-medium text-white hover:text-[#B8860B] transition-colors">Who We Are</a>
            <a href="#plans" className="font-medium text-white hover:text-[#B8860B] transition-colors">Gift Plans</a>
            <a href="#faq" className="font-medium text-white hover:text-[#B8860B] transition-colors">FAQs</a>
            <a href="#contact" className="font-medium text-white hover:text-[#B8860B] transition-colors">Contact Us</a>
          </nav>

          <div className="hidden md:block">
            <a href="#quote-form" className="px-6 py-2.5 rounded-full bg-[#CD9A34] text-black font-bold hover:bg-[#b8892f] transition-all shadow-[0_0_20px_rgba(205,154,52,0.4)] inline-block">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-black/50" onClick={closeMobileMenu} />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-xl flex flex-col p-6 animate-in slide-in-from-left">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Coreplane</span>
              <button onClick={closeMobileMenu} className="p-2 -mr-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <a href="#" onClick={closeMobileMenu} className="hover:text-gray-600">Home</a>
              <a href="#who-we-are" onClick={closeMobileMenu} className="hover:text-gray-600">Who We Are</a>
              <a href="#plans" onClick={closeMobileMenu} className="hover:text-gray-600">Gift Plans</a>
              <a href="#faq" onClick={closeMobileMenu} className="hover:text-gray-600">FAQs</a>
              <a href="#contact" onClick={closeMobileMenu} className="hover:text-gray-600">Contact Us</a>
            </nav>
            <div className="mt-auto pt-6 border-t border-border">
              <a
                href="#quote-form"
                onClick={closeMobileMenu}
                className="btn-black w-full text-center block"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
