"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Animate from "@/components/Animate";

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-stone-100" />,
});

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
    <p className="text-[12px] tracking-[0.35em] text-[#737373] uppercase mb-5">
      {children}
    </p>
  );
}

function SectionHeading1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[18px] md:text-[22px] font-light tracking-widest text-[#737373] leading-tight uppercase ${className}`}>
      {children}
    </h2>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[28px] md:text-[36px] font-light tracking-widest text-[#737373] leading-tight uppercase ${className}`}>
      {children}
    </h2>
  );
}

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="bg-white text-[#737373]">
      {/* About section */}
      <section className="py-16 px-8 md:px-24">
        <div className="w-full flex justify-center">
          <div className="space-y-5 pt-12">
            <Animate>
              <SectionLabel>{t("label")}</SectionLabel>
            </Animate>
            <Animate delay={100}>
              <p className="text-[13px] leading-6 text-[#737373]">{t("p1")}</p>
            </Animate>
            <Animate delay={200}>
              <p className="text-[13px] leading-6 text-[#737373]">{t("p2")}</p>
            </Animate>
            <Animate delay={300}>
              <p className="text-[13px] leading-6 text-[#737373]">{t("p3")}</p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="pb-16">
        <Animate from="up">
          <div className="relative w-13/16 aspect-video overflow-hidden">
            <FillImg
              src="/images/about/about-photo.jpg"
              alt="Villa photo"
              sizes="75vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* Team section */}
      <section className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Animate from="right" delay={100}>
            <div>
              <SectionLabel>{t("team.label")}</SectionLabel>
              <p className="text-[13px] leading-6 text-[#737373] max-w-96">
                {t("team.description")}
              </p>
            </div>
          </Animate>
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
        </div>
      </section>

      {/* Getting Here section */}
      <section className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <Animate from="left" className="md:col-span-2">
            <div className="relative aspect-6/3 overflow-hidden bg-stone-100">
              <LocationMap lat={-8.6103} lng={115.3197} zoom={14} />
            </div>
          </Animate>
          <Animate from="right" delay={100}>
            <div>
              <SectionLabel>{t("gettingHere.label")}</SectionLabel>
              <div className="mb-12">
                <SectionHeading>{t("gettingHere.heading")}</SectionHeading>
              </div>
              <div className="space-y-6">
                <p className="text-[13px] leading-7 text-[#737373]">
                  {t("gettingHere.description1")}
                </p>
                <p className="text-[13px] leading-7 text-[#737373]">
                  {t("gettingHere.description2")}
                </p>
                <p className="text-[13px] leading-7 text-[#737373]">
                  {t("gettingHere.description3")}
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}
