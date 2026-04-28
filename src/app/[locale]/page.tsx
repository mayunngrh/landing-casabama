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
    <p className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-5">
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
      className={`text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 leading-tight uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-stone-500 hover:text-stone-900 transition-colors duration-300 group mt-6"
    >
      <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
      {children}
    </Link>
  );
}

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="bg-white text-stone-700 overflow-x-hidden">

      {/* HERO */}
      <section className="relative -mt-16 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <FillImg
            src="/images/home/hero.jpg"
            alt="caSabama villa"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
        <div className="absolute bottom-[15%] left-15">
          <Animate from="up" delay={300}>
            <h1 className="text-[52px] md:text-[72px] font-light tracking-widest text-white leading-none">
              caSabama
            </h1>
            <p className="text-[13px] tracking-[0.45em] text-white/75 mt-3">
              {t("heroSubtitle")}
            </p>
          </Animate>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full py-16 px-8 md:px-24">
        <div className="space-y-5">
          <Animate>
            <p className="text-[13px] leading-8 text-stone-500">{t("intro.p1")}</p>
          </Animate>
          <Animate delay={100}>
            <p className="text-[13px] leading-8 text-stone-500">{t("intro.p2")}</p>
          </Animate>
          <Animate delay={200}>
            <p className="text-[13px] leading-8 text-stone-500">{t("intro.p3")}</p>
          </Animate>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-12 flex">
        <Animate from="left" className="md:w-5/8 w-full">
          <div className="relative aspect-4/3 overflow-hidden">
            <FillImg
              src="/images/home/location.jpg"
              alt="Saba Beach, Gianyar"
              sizes="(max-width:768px) 100vw, 66vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
        <Animate from="right" className="py-4 px-8 md:px-24 md:w-1/3 w-full">
          <SectionLabel>{t("location.label")}</SectionLabel>
          <SectionHeading className="mb-6">
            {t("location.heading1")}<br />{t("location.heading2")}
          </SectionHeading>
          <p className="text-[13px] leading-8 text-stone-500">
            {t("location.description")}
          </p>
          <CtaLink href="/contact">{t("location.cta")}</CtaLink>
        </Animate>
      </section>

      {/* ACCOMMODATION */}
      <section className="py-12 px-8 md:px-24">
        <Animate>
          <SectionLabel>{t("accommodation.label")}</SectionLabel>
        </Animate>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <Animate from="left" delay={100}>
            <SectionHeading>
              {t("accommodation.heading1")}<br />{t("accommodation.heading2")}
            </SectionHeading>
          </Animate>
          <Animate from="right" delay={200} className="pt-1">
            <p className="text-[13px] leading-8 text-stone-500">
              {t("accommodation.description")}
            </p>
            <CtaLink href="/accommodation">{t("accommodation.cta")}</CtaLink>
          </Animate>
        </div>
        <Animate delay={250} className="flex justify-end">
          <div className="relative w-full md:w-[70%] aspect-4/3 overflow-hidden">
            <FillImg
              src="/images/home/accommodation.jpg"
              alt="Villa room interior"
              sizes="(max-width:768px) 100vw, 70vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* GALLERY */}
      <section className="mt-6">
        <Animate from="up">
          <div className="relative aspect-5/3 overflow-hidden">
            <FillImg
              src="/images/home/gallery-1.jpg"
              alt="Villa sitting room"
              sizes="100vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* DINING */}
      <section className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Animate from="left">
            <SectionLabel>{t("dining.label")}</SectionLabel>
            <SectionHeading className="mb-6">
              {t("dining.heading1")}<br />{t("dining.heading2")}
            </SectionHeading>
            <p className="text-[13px] leading-8 text-stone-500">
              {t("dining.description")}
            </p>
            <CtaLink href="/dining">{t("dining.cta")}</CtaLink>
          </Animate>
          <Animate from="right">
            <div className="relative aspect-4/3 overflow-hidden">
              <FillImg
                src="/images/home/dining.jpg"
                alt="Balinese cuisine"
                sizes="(max-width:768px) 100vw, 50vw"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Animate>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-12 px-8 md:px-24 pb-24">
        <Animate>
          <SectionLabel>{t("experiences.label")}</SectionLabel>
        </Animate>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <Animate from="left" delay={100}>
            <SectionHeading>
              {t("experiences.heading1")}<br />
              {t("experiences.heading2")}<br />
              {t("experiences.heading3")}
            </SectionHeading>
          </Animate>
          <Animate from="right" delay={200} className="pt-1">
            <p className="text-[13px] leading-8 text-stone-500">
              {t("experiences.description")}
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(
            [
              { src: "/images/home/exp-1.jpg", altKey: "img1Alt" },
              { src: "/images/home/exp-2.jpg", altKey: "img2Alt" },
              { src: "/images/home/exp-3.jpg", altKey: "img3Alt" },
            ] as const
          ).map(({ src, altKey }, i) => (
            <Animate key={src} delay={i * 80} from="up">
              <div className="relative aspect-square overflow-hidden">
                <FillImg
                  src={src}
                  alt={t(`experiences.${altKey}`)}
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Animate>
          ))}
        </div>
      </section>

    </div>
  );
}
