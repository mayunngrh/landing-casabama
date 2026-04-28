"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Animate from "@/components/Animate";
import type { Villa } from "@/lib/accommodations";

function FillImg({
  src,
  alt,
  className = "",
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
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
    />
  );
}

export default function AccommodationPage() {
  const t = useTranslations("accommodation");
  const locale = useLocale();
  const [villas, setVillas] = useState<Villa[]>([]);

  useEffect(() => {
    import("@/lib/accommodations").then(({ getAccommodations }) => {
      getAccommodations(locale).then(setVillas);
    });
  }, [locale]);

  return (
    <div className="bg-white text-stone-700">

      {/* Intro */}
      <section className="py-16 px-8 md:px-24">
        <div className="space-y-5 max-w-4xl">
          <Animate>
            <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 uppercase mb-8">
              {t("heading")}
            </h1>
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
      </section>

      {/* Hero image */}
      <section className="px-8 md:px-24 pb-16">
        <Animate from="up">
          <div className="relative w-full aspect-5/3 overflow-hidden">
            <FillImg
              src="/images/accommodation/overview.jpg"
              alt="caSabama villa complex"
              sizes="100vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* Villa list */}
      <section className="px-8 md:px-24 pb-24">
        <Animate>
          <p className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-10">
            {t("villasLabel")}
          </p>
        </Animate>

        <div className="space-y-16">
          {villas.map((villa, i) => (
            <Animate key={villa.id} from="up" delay={i * 80}>
              <div className="grid md:grid-cols-[2fr_3fr] gap-8 items-start">
                {/* Villa image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <FillImg
                    src={villa.image}
                    alt={villa.name}
                    sizes="(max-width:768px) 100vw, 40vw"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Villa details */}
                <div className="pt-2">
                  <h2 className="text-[22px] md:text-[28px] font-light tracking-widest text-stone-800 uppercase mb-3">
                    {villa.name}
                  </h2>
                  <p className="text-[12px] tracking-widest text-stone-400 mb-5">
                    {villa.sizeSqM}sq M {t("sqMLabel")}
                  </p>
                  <p className="text-[12px] tracking-widest text-stone-600 mb-3">
                    {villa.bedroomCount} {t("bedrooms")}
                  </p>
                  <ul className="space-y-1.5 mb-8">
                    {villa.rooms.map((room) => (
                      <li key={room} className="flex items-start gap-2 text-[12px] text-stone-500">
                        <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                        {room}
                      </li>
                    ))}
                  </ul>
                  <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    href={`/accommodation/${villa.slug}` as any}
                    className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-stone-400 hover:text-stone-800 transition-colors duration-300 group"
                  >
                    <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                    {t("moreDetail")}
                  </Link>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </section>
    </div>
  );
}
