"use client";

import { useState } from "react";

const navItems = [
  { label: "ABOUT", href: "/about" },
  {
    label: "ACCOMMODATION",
    href: "/accommodation",
    children: [
      { label: "PRICING", href: "/accommodation/pricing" },
      { label: "AVAILABILITY", href: "/accommodation/availability" },
    ],
  },
  { label: "FACILITIES AND SERVICES", href: "/facilities" },
  { label: "DINING", href: "/dining" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "OCCASIONS", href: "/occasions" },
  { label: "CONTACT US", href: "/contact" },
];

const languages = ["CHINESE", "BAHASA"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#f0eeec] flex items-center justify-between px-6 border-b border-[#e0dedd]">
        {/* Burger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px] cursor-pointer p-1"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1.5px] bg-[#555]" />
          <span className="block w-6 h-[1.5px] bg-[#555]" />
          <span className="block w-6 h-[1.5px] bg-[#555]" />
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="text-[17px] font-light tracking-wider text-[#444] leading-none">
            caSabama
          </div>
          <div className="text-[10px] tracking-[0.25em] text-[#888] uppercase mt-[2px]">
            bali
          </div>
        </div>

        {/* Right: Language + Book */}
        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 text-[11px] tracking-[0.15em] text-[#555] cursor-pointer"
            >
              ENGLISH
              <svg
                className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#f0eeec] border border-[#e0dedd] min-w-[100px] py-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLangOpen(false)}
                    className="block w-full text-left px-4 py-2 text-[11px] tracking-[0.15em] text-[#555] hover:text-[#222]"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book button */}
          <a
            href="/book"
            className="bg-[#3a3a3a] text-white text-[11px] tracking-[0.2em] px-6 h-16 flex items-center hover:bg-[#222] transition-colors"
          >
            BOOK
          </a>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Burger menu panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[320px] bg-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="h-16 flex items-center px-6 border-b border-[#e0dedd]">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#555] hover:text-[#222] ml-auto"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="py-6">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between px-8 py-3">
                <a
                  href={item.href}
                  className="text-[12px] tracking-[0.2em] text-[#444] hover:text-[#000]"
                  onClick={() => !item.children && setMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    onClick={() => setAccommodationOpen((v) => !v)}
                    className="text-[#888]"
                  >
                    <svg
                      className={`w-3 h-3 transition-transform ${accommodationOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && accommodationOpen && (
                <div className="pb-1">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-14 py-2 text-[11px] tracking-[0.2em] text-[#888] hover:text-[#444]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
