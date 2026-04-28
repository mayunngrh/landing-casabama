"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Globe, Check, ChevronDown, X, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from URL as source of truth
  useEffect(() => {
    const urlPath = window.location.pathname;
    const localeFromUrl = urlPath.split("/")[1];
    if (localeFromUrl === "en" || localeFromUrl === "id") {
      setSelectedLanguage(localeFromUrl);
    }
  }, [pathname, locale]);

  const navItems = [
    { key: "about", href: "/about" as const },
    {
      key: "accommodation",
      href: "/accommodation" as const,
      children: [
        { key: "pricing", href: "/accommodation/pricing" as const },
        { key: "availability", href: "/accommodation/availability" as const },
      ],
    },
    { key: "facilities", href: "/facilities" as const },
    { key: "dining", href: "/dining" as const },
    { key: "experiences", href: "/experiences" as const },
    { key: "occasions", href: "/occasions" as const },
    { key: "contact", href: "/contact" as const },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#f0eeec] flex items-center justify-between px-6 border-b border-[#e0dedd]">
        {/* Burger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-[#555] hover:text-[#222]"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="text-[17px] font-light tracking-wider text-[#444] leading-none">
            caSabama
          </div>
          <div className="text-[10px] tracking-[0.25em] text-[#888] uppercase mt-0.5">
            bali
          </div>
        </Link>

        {/* Right: Language + Book */}
        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[11px] tracking-[0.15em] text-[#555] cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              {selectedLanguage === "en" ? "English" : "Bahasa"}
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-[#f0eeec] border border-[#e0dedd] min-w-28 py-1 z-50">
                  {(["en", "id"] as const).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        if (selectedLanguage !== loc) {
                          router.replace(pathname, { locale: loc });
                        }
                        setLangOpen(false);
                      }}
                      className={`flex items-center gap-2 w-full text-left px-4 py-2 text-[11px] tracking-[0.15em] transition-colors ${
                        selectedLanguage === loc
                          ? "text-[#222] font-medium"
                          : "text-[#888] hover:text-[#222]"
                      }`}
                    >
                      {selectedLanguage === loc ? (
                        <Check className="w-3 h-3 shrink-0" />
                      ) : (
                        <span className="w-3 shrink-0" />
                      )}
                      {loc === "en" ? "English" : "Bahasa"}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Book button */}
          <Link
            href="/book"
            className="bg-[#3a3a3a] text-white text-[11px] tracking-[0.2em] px-6 h-16 flex items-center hover:bg-[#222] transition-colors"
          >
            {t("book")}
          </Link>
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
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="py-6">
          {navItems.map((item) => (
            <div key={item.key}>
              <div className="flex items-center justify-between px-8 py-3">
                <Link
                  href={item.href}
                  className="text-[12px] tracking-[0.2em] text-[#444] hover:text-black"
                  onClick={() => !item.children && setMenuOpen(false)}
                >
                  {t(item.key as Parameters<typeof t>[0])}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setAccommodationOpen((v) => !v)}
                    className="text-[#888]"
                  >
                    <ChevronDown className={`w-3 h-3 transition-transform ${accommodationOpen ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              {"children" in item && item.children && accommodationOpen && (
                <div className="pb-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.key}
                      href={child.href}
                      className="block px-14 py-2 text-[11px] tracking-[0.2em] text-[#888] hover:text-[#444]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {t(child.key as Parameters<typeof t>[0])}
                    </Link>
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
