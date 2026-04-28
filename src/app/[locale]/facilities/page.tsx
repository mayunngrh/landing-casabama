"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Animate from "@/components/Animate";
import Gallery from "@/components/Gallery";
import type { FacilitiesData } from "@/lib/facilities";

export default function FacilitiesPage() {
  const t = useTranslations("facilities");
  const locale = useLocale();
  const [data, setData] = useState<FacilitiesData | null>(null);

  useEffect(() => {
    import("@/lib/facilities").then(({ getFacilities }) => {
      getFacilities(locale).then(setData);
    });
  }, [locale]);

  return (
    <div className="bg-white text-stone-700">

      {/* Intro */}
      <section className="py-16 px-8 md:px-24">
        <Animate>
          <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 uppercase mb-8">
            {t("heading")}
          </h1>
        </Animate>
        <div className="space-y-4 max-w-3xl">
          <Animate delay={100}>
            <p className="text-[13px] leading-8 text-stone-500">{t("p1")}</p>
          </Animate>
          <Animate delay={200}>
            <p className="text-[13px] leading-8 text-stone-500">{t("p2")}</p>
          </Animate>
        </div>
      </section>

      {/* Villa Amenities */}
      <section className="py-12 px-8 md:px-24">
        <Animate>
          <h2 className="text-[20px] md:text-[26px] font-light tracking-widest text-stone-700 uppercase text-center mb-10">
            {t("amenitiesHeading")}
          </h2>
        </Animate>
        {data && (
          <Animate delay={100}>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {data.amenities.map(([left, right], i) => (
                <div key={i} className="contents">
                  {left && (
                    <p className="text-[13px] text-stone-600 leading-7">{left}</p>
                  )}
                  {right && (
                    <p className="text-[13px] text-stone-600 leading-7">{right}</p>
                  )}
                </div>
              ))}
            </div>
          </Animate>
        )}
      </section>

      {/* Gallery 1 */}
      {data && (
        <section className="py-8">
          <Gallery images={data.gallery1} />
        </section>
      )}

      {/* Guest Services */}
      <section className="py-12 px-8 md:px-24">
        <Animate>
          <h2 className="text-[20px] md:text-[26px] font-light tracking-widest text-stone-700 uppercase text-center mb-10">
            {t("servicesHeading")}
          </h2>
        </Animate>
        {data && (
          <Animate delay={100}>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {data.guestServices.map(([left, right], i) => (
                <div key={i} className="contents">
                  {left && (
                    <p className="text-[13px] text-stone-600 leading-7">{left}</p>
                  )}
                  {right && (
                    <p className="text-[13px] text-stone-600 leading-7">{right}</p>
                  )}
                </div>
              ))}
            </div>
          </Animate>
        )}
      </section>

      {/* Gallery 2 */}
      {data && (
        <section className="py-8 pb-24">
          <Gallery images={data.gallery2} />
        </section>
      )}
    </div>
  );
}
