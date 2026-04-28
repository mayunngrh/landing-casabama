"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";

function FillImg({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [err, setErr] = useState(false);
  if (err) return <div className="w-full h-full bg-stone-200" />;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes={sizes}
      className={`object-cover ${className}`}
      onError={() => setErr(true)}
      priority={priority}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 uppercase mb-8">
      {children}
    </p>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 leading-tight uppercase ${className}`}>
      {children}
    </h2>
  );
}

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="bg-white text-stone-700">
      {/* About section */}
      <section className="py-16 px-8 md:px-24">
        <div className="w-full flex justify-center">
          <div className="space-y-5">
            <Animate>
              <SectionLabel>{t("label")}</SectionLabel>
            </Animate>
            <Animate delay={100}>
              <p className="text-[13px] leading-8 text-stone-500">{t("p1")}</p>
            </Animate>
            <Animate delay={200}>
              <p className="text-[13px] leading-8 text-stone-500">{t("p2")}</p>
            </Animate>
            <Animate delay={300}>
              <p className="text-[13px] leading-8 text-stone-500">{t("p3")}</p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="px-8 md:px-24 pb-16">
        <Animate from="up">
          <div className="relative w-full aspect-5/3 overflow-hidden">
            <FillImg
              src="/images/about/about-photo.jpg"
              alt="Villa photo"
              sizes="100vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* Team section */}
      <section className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <div className="relative aspect-4/3 overflow-hidden">
              <FillImg
                src="/images/about/about-team.jpg"
                alt="Team at caSabama"
                sizes="(max-width:768px) 100vw, 50vw"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Animate>
          <Animate from="right" delay={100}>
            <div>
              <SectionLabel>{t("team.label")}</SectionLabel>
              <SectionHeading className="mb-6">
                {t("team.heading1")}<br />{t("team.heading2")}
              </SectionHeading>
              <p className="text-[13px] leading-8 text-stone-500">
                {t("team.description")}
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Getting Here section */}
      <section className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <div className="relative aspect-video overflow-hidden bg-stone-200">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8!2d115.31971527116443!3d-8.610310164380815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd262a8d8d8d8d%3A0x123456!2sCasabama%20Bali!5e0!3m2!1sen!2sid!4v1680000000000"
              />
            </div>
          </Animate>
          <Animate from="right" delay={100}>
            <div>
              <SectionLabel>{t("gettingHere.label")}</SectionLabel>
              <SectionHeading className="mb-6">
                {t("gettingHere.heading")}
              </SectionHeading>
              <p className="text-[13px] leading-8 text-stone-500 mb-6">
                {t("gettingHere.description")}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mb-2">
                    {t("gettingHere.addressLabel")}
                  </p>
                  <p className="text-[13px] leading-6 text-stone-600">
                    {t("gettingHere.addressLine1")}<br />
                    {t("gettingHere.addressLine2")}<br />
                    {t("gettingHere.addressLine3")}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mb-2">
                    {t("gettingHere.contactLabel")}
                  </p>
                  <p className="text-[13px] leading-6 text-stone-600">
                    <a href="mailto:info@casabama.id" className="hover:text-stone-800">info@casabama.id</a><br />
                    <a href="tel:+62811366884" className="hover:text-stone-800">+62 811 366 8864</a> (WA)
                  </p>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}
