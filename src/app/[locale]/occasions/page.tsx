"use client";

import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";
import Gallery from "@/components/Gallery";

const GALLERY_IMAGES = [
  "/images/occasions/occasions-1.jpg",
  "/images/occasions/occasions-2.jpg",
  "/images/occasions/occasions-3.jpg",
];

export default function OccasionsPage() {
  const t = useTranslations("occasions");

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

      {/* Gallery */}
      <section className="pb-24">
        <Gallery images={GALLERY_IMAGES} />
      </section>

    </div>
  );
}
