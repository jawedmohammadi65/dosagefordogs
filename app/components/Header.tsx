"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/sources", label: "Sources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500" />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition">
              <span className="text-xl">🐕</span>
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-slate-900 tracking-tight">
                DosageForDogs
              </div>
              <div className="text-[10px] font-medium text-teal-700 uppercase tracking-wider">
                Vet-Informed Dosage Guide
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/"
              className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition"
            >
              Calculator
            </a>
          </nav>

          {/* Mobile: Calculator CTA + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/"
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition"
            >
              Calculator
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <span className="text-xl leading-none">✕</span>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-slate-200 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}