"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";

function LogoImg() {
  const [err, setErr] = useState(false);
  if (err) return <div className="w-full h-full bg-stone-600 rounded-full" />;
  return (
    <Image
      src="/images/logo.png"
      alt="caSabama logo"
      fill
      unoptimized
      sizes="128px"
      className="object-cover"
      onError={() => setErr(true)}
    />
  );
}

export default function Footer() {
  const t = useTranslations("home");

  return (
    <footer className="bg-[#3a3a3a] text-white py-16 px-8 md:px-24">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start justify-between">
        <Animate from="up" className="md:absolute md:left-5/8 md:-translate-x-1/2">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <LogoImg />
          </div>
        </Animate>
        <Animate from="up" delay={100} className="md:ml-auto w-full md:w-auto md:mr-12">
          <div className="space-y-6">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-stone-400 mb-3 uppercase">
                {t("footer.contactLabel")}
              </p>
              <p className="text-[13px] leading-6 text-stone-300 mb-3">
                {t("footer.generalEnquiries")}<br />
                <a href="mailto:info@casabama.id" className="hover:text-white transition-colors">
                  info@casabama.id
                </a>
              </p>
              <p className="text-[13px] leading-6 text-stone-300 mb-3">
                {t("footer.bookingEnquiries")}<br />
                <a href="mailto:bookings@casabama.id" className="hover:text-white transition-colors">
                  bookings@casabama.id
                </a>
              </p>
              <p className="text-[13px] leading-6 text-stone-300 mb-3">
                <a
                  href="https://maps.google.com/?q=Jalan+Pantai+Saba+680,+Banjar+Saba"
                  className="hover:text-white transition-colors underline"
                >
                  jalan pantai saba 48B<br />
                  blahbatuh gianyar - bali 80581
                </a>
              </p>
              <p className="text-[13px] leading-6 text-stone-300">
                WA:{" "}
                <a href="tel:+62818196684" className="hover:text-white transition-colors">
                  +65 818 196 684
                </a>
                <span className="text-stone-500"> {t("footer.textOnly")}</span>
              </p>
            </div>
          </div>
        </Animate>
      </div>
      <Animate from="up" delay={200} className="mt-8 flex justify-end gap-4">
        {(
          [
            { label: "Facebook", icon: "f", href: "#" },
            { label: "Instagram", icon: "ig", href: "#" },
            { label: "YouTube", icon: "▶", href: "#" },
          ] as const
        ).map(({ label, icon, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[14px] text-white hover:border-white hover:text-white transition-all duration-300"
          >
            {icon}
          </a>
        ))}
      </Animate>
    </footer>
  );
}
