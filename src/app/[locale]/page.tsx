"use client";

import Image from "next/image";
import { useState, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] text-[#737373] uppercase mb-5">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[28px] md:text-[36px] font-light tracking-widest text-[#737373] leading-tight uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#737373] hover:text-[#404040] transition-colors duration-300 group mt-6"
    >
      <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
      {children}
    </Link>
  );
}

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="bg-white text-[#737373] overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/hero.jpg"
            alt="caSabama villa"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-[70%_50%] md:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
        <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 z-10 animate-fade-in">
          <Image src="/images/logo-text-white.png" alt="caSabama" width={100} height={32} unoptimized className="h-20 md:h-32 w-auto opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full py-16 px-8 md:px-24">
        <div className="space-y-5">
          <Animate>
            <p className="text-[13px] leading-8 text-[#737373] text-justify">{t("intro.p1")}</p>
          </Animate>
          <Animate delay={100}>
            <p className="text-[13px] leading-8 text-[#737373] text-justify">{t("intro.p2")}</p>
          </Animate>
          <Animate delay={200}>
            <p className="text-[13px] leading-8 text-[#737373] text-justify">{t("intro.p3")}</p>
          </Animate>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-12 flex flex-col md:flex-row items-stretch">
        <Animate from="left" className="w-full md:w-3/5 shrink-0">
          <div className="relative aspect-video overflow-hidden">
            <FillImg
              src="/images/home/location.jpg"
              alt="Saba Beach, Gianyar"
              sizes="(max-width:768px) 100vw, 60vw"
              className=""
            />
          </div>
        </Animate>
        <Animate from="right" className="w-full md:flex-1 md:min-w-0 px-8 py-10 md:px-16 md:py-0 flex flex-col justify-between">
          <div>
            <SectionLabel>{t("location.label")}</SectionLabel>
            <SectionHeading>
              {t("location.heading1")}<br />{t("location.heading2")}
            </SectionHeading>
          </div>
          <div className="space-y-8 md:space-y-12">
            <p className="text-[13px] leading-8 text-[#737373] text-justify">
              {t("location.description")}
            </p>
            <a
              href="https://www.google.com/maps?q=-8.6103,115.3197"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#737373] hover:text-[#404040] transition-colors duration-300 group mt-6"
            >
              <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              {t("location.cta")}
            </a>
          </div>
        </Animate>
      </section>

      {/* ACCOMMODATION */}
      <section className="py-12">
        {/* Mobile layout */}
        <div className="flex flex-col px-8 gap-8 md:hidden">
          <Animate from="up">
            <SectionLabel>{t("accommodation.label")}</SectionLabel>
            <SectionHeading>
              {t("accommodation.heading1")}<br />{t("accommodation.heading2")}
            </SectionHeading>
          </Animate>
          <Animate from="up" delay={100}>
            <p className="text-[13px] leading-8 text-[#737373] text-justify">
              {t("accommodation.description")}
            </p>
            <CtaLink href="/accommodation">{t("accommodation.cta")}</CtaLink>
          </Animate>
          <Animate from="up" delay={150}>
            <div className="relative w-full aspect-video overflow-hidden">
              <FillImg
                src="/images/home/accommodation.jpg"
                alt="Villa room interior"
                sizes="100vw"
                className=""
              />
            </div>
          </Animate>
        </div>

        {/* Desktop layout — unchanged */}
        <div className="hidden md:flex items-start">
          <div className="w-[35%] shrink-0 px-24" />
          <div className="w-[65%] flex flex-col pr-24 pl-0">
            <div className="flex gap-28">
              <Animate from="left" delay={100} className="w-[35%] shrink-0">
                <SectionLabel>{t("accommodation.label")}</SectionLabel>
                <SectionHeading>
                  {t("accommodation.heading1")}<br />{t("accommodation.heading2")}
                </SectionHeading>
              </Animate>
              <Animate from="right" delay={200}>
                <p className="text-[13px] leading-8 text-[#737373] text-justify">
                  {t("accommodation.description")}
                </p>
                <div className="pt-24" />
                <CtaLink href="/accommodation">{t("accommodation.cta")}</CtaLink>
              </Animate>
            </div>
            <Animate delay={250} className="mt-8">
              <div className="relative w-full aspect-video overflow-hidden">
                <FillImg
                  src="/images/home/accommodation.jpg"
                  alt="Villa room interior"
                  sizes="65vw"
                  className=""
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mt-6">
        <Animate from="up">
          <div className="relative aspect-5/2 overflow-hidden">
            <FillImg
              src="/images/home/gallery-1.jpg"
              alt="Villa sitting room"
              sizes="100vw"
              className=""
            />
          </div>
        </Animate>
      </section>

      {/* DINING */}
      {/* Mobile layout */}
      <section className="py-12 flex flex-col px-8 gap-8 md:hidden">
        <Animate from="up">
          <SectionLabel>{t("dining.label")}</SectionLabel>
          <SectionHeading className="mb-6">
            {t("dining.heading1")}<br />{t("dining.heading2")}
          </SectionHeading>
        </Animate>
        <Animate from="up" delay={100}>
          <div className="relative w-full aspect-video overflow-hidden">
            <FillImg
              src="/images/home/dining.jpg"
              alt="Balinese cuisine"
              sizes="100vw"
              className=""
            />
          </div>
        </Animate>
        <Animate from="up" delay={150}>
          <p className="text-[13px] leading-8 text-[#737373] text-justify">
            {t("dining.description")}
          </p>
          <CtaLink href="/dining">{t("dining.cta")}</CtaLink>
        </Animate>
      </section>

      {/* Desktop layout — unchanged */}
      <section className="py-28 hidden md:flex items-stretch">
        <Animate from="left" className="w-[30%] shrink-0 px-24 flex flex-col justify-between">
          <div>
            <SectionLabel>{t("dining.label")}</SectionLabel>
            <SectionHeading className="mb-6">
              {t("dining.heading1")}<br />{t("dining.heading2")}
            </SectionHeading>
          </div>
          <div>
            <p className="text-[13px] leading-8 text-[#737373] text-justify">
              {t("dining.description")}
            </p>
            <div className="pt-24" />
            <CtaLink href="/dining">{t("dining.cta")}</CtaLink>
          </div>
        </Animate>
        <Animate from="right" className="flex-1 pr-8">
          <div className="relative w-full h-full min-h-[500px] overflow-hidden">
            <FillImg
              src="/images/home/dining.jpg"
              alt="Balinese cuisine"
              sizes="55vw"
              className=""
            />
          </div>
        </Animate>
      </section>

      {/* EXPERIENCES */}
      <section className="">
        <div className="px-8 md:px-24">
          <Animate>
            <SectionLabel>{t("experiences.label")}</SectionLabel>
          </Animate>
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-10 md:mb-14 gap-4">
            <Animate from="left" delay={100} className="shrink-0">
              <SectionHeading>
                {t("experiences.heading1")}<br />
                {t("experiences.heading2")}<br />
                {t("experiences.heading3")}
              </SectionHeading>
            </Animate>
            <Animate from="right" delay={200} className="md:flex-1 md:pt-1 md:max-w-sm">
              <p className="text-[13px] leading-8 text-[#737373] text-justify">
                {t("experiences.description")}
              </p>
            </Animate>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-16">
          {(
            [
              { src: "/images/home/exp-1.jpg", altKey: "img1Alt" },
              { src: "/images/home/exp-2.jpg", altKey: "img2Alt" },
              { src: "/images/home/exp-3.jpg", altKey: "img3Alt" },
            ] as const
          ).map(({ src, altKey }, i) => (
            <Animate key={src} delay={i * 80} from="up">
              <div className="relative aspect-video overflow-hidden">
                <FillImg
                  src={src}
                  alt={t(`experiences.${altKey}`)}
                  sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, 33vw"
                  className=""
                />
              </div>
            </Animate>
          ))}
        </div>
      </section>

    </div>
  );
}
