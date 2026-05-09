"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

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
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-between">
        {/* Logo */}
        <Animate from="up" className="shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
            <LogoImg />
          </div>
        </Animate>

        {/* Contact info */}
        <Animate from="up" delay={100} className="w-full md:w-auto text-center md:text-left">
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
        </Animate>
      </div>
      <Animate from="up" delay={200} className="mt-8 flex justify-center md:justify-end gap-4">
        {(
          [
            { label: "Facebook", Icon: FacebookIcon, href: "#" },
            { label: "Instagram", Icon: InstagramIcon, href: "#" },
            { label: "YouTube", Icon: YoutubeIcon, href: "#" },
          ] as const
        ).map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white hover:text-white transition-all duration-300"
          >
            <Icon />
          </a>
        ))}
      </Animate>
    </footer>
  );
}
