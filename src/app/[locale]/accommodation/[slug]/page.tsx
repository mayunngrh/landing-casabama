"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Star, Users, BedDouble, Bed, Tv, Waves, Utensils, Armchair, Sparkles } from "lucide-react";
import type { VillaDetail, KeyDetail } from "@/lib/accommodations";
import Animate from "@/components/Animate";
import Gallery from "@/components/Gallery";

// ─── Icon map ────────────────────────────────────────────────────────────────

const ICON_MAP: Record<KeyDetail["icon"], React.ElementType> = {
  star: Star,
  users: Users,
  "bed-double": BedDouble,
  bed: Bed,
  tv: Tv,
  waves: Waves,
  utensils: Utensils,
  armchair: Armchair,
  sparkles: Sparkles,
};

// ─── Floor plan modal ────────────────────────────────────────────────────────

function FloorPlanModal({ src, onClose }: { src: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
    >
      <div className="relative max-w-3xl w-full max-h-[85vh]">
        <Image
          src={src}
          alt="Floor plan"
          width={900}
          height={600}
          unoptimized
          className="w-full h-auto object-contain"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-white text-stone-800 flex items-center justify-center text-lg hover:bg-stone-100"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VillaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = useTranslations("villaDetail");
  const locale = useLocale();
  const [villa, setVilla] = useState<VillaDetail | null>(null);
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then(({ slug }) => setSlug(slug));
  }, [params]);

  useEffect(() => {
    if (!slug) return;
    import("@/lib/accommodations").then(({ getVillaDetail }) => {
      getVillaDetail(slug, locale).then(setVilla);
    });
  }, [slug, locale]);

  if (!villa) {
    return <div className="min-h-screen bg-white" />;
  }

  const [line1, line2] = villa.name.split(" ").reduce<[string, string]>(
    (acc, word, i) => (i === 0 ? [word, acc[1]] : [acc[0], (acc[1] + " " + word).trim()]),
    ["", ""]
  );

  return (
    <div className="bg-white text-stone-700">
      <div className="pt-12" />
      {/* Gallery */}
      <Gallery images={villa.galleryImages} />

      {/* Name + descriptions */}
      <section className="py-12 px-8 md:px-24">
        <Animate>
          <h1 className="text-[36px] md:text-[48px] font-light tracking-widest text-stone-800 uppercase leading-tight mb-8">
            {line1}<br />{line2}
          </h1>
        </Animate>
        <div className="space-y-5 max-w-xl">
          {villa.descriptions.map((p, i) => (
            <Animate key={i} delay={i * 80}>
              <p className="text-[13px] leading-8 text-stone-500">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Key details */}
      <section className="px-8 md:px-24 pb-12">
        <Animate>
          <div className="border border-stone-200 p-8">
            <p className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-8">
              {t("keyDetails")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {villa.keyDetails.map(({ icon, text }) => {
                const Icon = ICON_MAP[icon];
                return (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-[13px] text-stone-600">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Animate>
      </section>

      {/* Floor plan button */}
      {villa.floorPlanImage && (
        <section className="px-8 md:px-24 pb-12 flex justify-center">
          <button
            onClick={() => setShowFloorPlan(true)}
            className="bg-[#3a3a3a] text-white text-[11px] tracking-[0.2em] px-12 py-4 hover:bg-[#222] transition-colors uppercase"
          >
            {t("viewFloorPlan")}
          </button>
        </section>
      )}

      {/* Additional features */}
      <section className="px-8 md:px-24 pb-24">
        <Animate>
          <p className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-6">
            {t("additionalFeatures")}
          </p>
          <div className="border border-stone-200">
            {villa.additionalFeatures.map(([left, right], i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 border-b border-stone-200 last:border-b-0"
              >
                <div className="px-6 py-4 text-[12px] text-stone-600 leading-6 md:border-r border-stone-200">
                  {left}
                </div>
                <div className="px-6 py-4 text-[12px] text-stone-600 leading-6">
                  {right}
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </section>

      {showFloorPlan && villa.floorPlanImage && (
        <FloorPlanModal src={villa.floorPlanImage} onClose={() => setShowFloorPlan(false)} />
      )}
    </div>
  );
}
