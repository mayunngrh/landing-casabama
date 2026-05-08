"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
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
    <div className="bg-white text-[#737373]">

      {/* Intro */}
      <section className="py-16 px-8 md:px-24">
        <div className="space-y-5 pt-12">
          <Animate>
            <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-[#737373] uppercase mb-8">
              {t("heading")}
            </h1>
          </Animate>
          <Animate delay={100}>
            <p className="text-[13px] leading-7 text-[#737373]">{t("p1")}</p>
          </Animate>
          <Animate delay={200}>
            <p className="text-[13px] leading-7 text-[#737373]">{t("p2")}</p>
          </Animate>
          <Animate delay={300}>
            <p className="text-[13px] leading-7 text-[#737373]">{t("p3")}</p>
          </Animate>
        </div>
      </section>

      {/* Hero image — full bleed, no horizontal padding */}
      <section className="pb-16">
        <Animate from="up">
          <div className="relative w-full aspect-5/2 overflow-hidden">
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
      <section className="px-8 md:px-72 pb-32">
        <Animate>
          <p className="text-[14px] tracking-[0.35em] text-[#737373] uppercase">
            {t("villasLabel")}
          </p>
        </Animate>

        <div className="flex flex-col gap-10">
          {villas.map((villa, i) => (
            <Animate key={villa.id} from="up" delay={i * 80}>
              <div className="flex items-stretch">
                {/* Villa image — left ~45% */}
                <div className="relative w-[45%] shrink-0 aspect-video overflow-hidden">
                  <FillImg
                    src={villa.image}
                    alt={villa.name}
                    sizes="(max-width:768px) 100vw, 45vw"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Villa details — right, gray background, same height as image */}
                <div className="flex-1 bg-stone-100 px-10 flex flex-col justify-center">
                  <h2 className="text-[16px] md:text-[19px] font-light tracking-widest text-[#737373] uppercase mb-3">
                    {villa.name}
                  </h2>
                  <p className="text-[10px] tracking-wider text-[#737373] mb-2">
                    {villa.sizeSqM}sq M {t("sqMLabel")}
                  </p>
                  <p className="text-[10px] tracking-wider text-[#737373] mb-2">
                    {villa.bedroomCount} {t("bedrooms")}
                  </p>
                  <ul className="space-y-1 mb-6">
                    {villa.rooms.map((room) => (
                      <li key={room} className="flex items-start gap-2 text-[10px] text-[#737373]">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#737373] shrink-0" />
                        {room}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}/accommodation/${villa.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#737373] hover:text-[#404040] transition-colors duration-300 group"
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
