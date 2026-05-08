"use client";

import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";
import Gallery from "@/components/Gallery";

const GALLERY_IMAGES = Array.from({ length: 32 }, (_, i) => `/images/dining/dining-${i + 1}.jpg`);

export default function DiningPage() {
  const t = useTranslations("dining");

  return (
    <div className="bg-white text-stone-700">

      {/* Intro */}
      <section className="py-16 px-8 md:px-24">
        <Animate>
          <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 uppercase mb-8">
            {t("heading")}
          </h1>
        </Animate>
        <Animate delay={100}>
          <p className="text-[13px] leading-8 text-stone-500 max-w-2xl">{t("description")}</p>
        </Animate>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <Gallery images={GALLERY_IMAGES} />
      </section>

    </div>
  );
}
