"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Animate from "@/components/Animate";
import type { Experience } from "@/lib/experiences";

const INITIAL_COUNT = 6;

function ExperienceCard({ exp }: { exp: Experience }) {
  const [err, setErr] = useState(false);
  const t = useTranslations("experiencesPage");

  return (
    <div className="flex flex-col bg-white h-full">
      <div className="relative h-48 overflow-hidden shrink-0">
        {err ? (
          <div className="w-full h-full bg-stone-200" />
        ) : (
          <Image
            src={exp.image}
            alt={exp.name}
            fill
            unoptimized
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            onError={() => setErr(true)}
          />
        )}
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-[11px] font-light tracking-widest text-stone-800 uppercase leading-tight mb-3">
          {exp.name}
        </h2>
        <p className="text-[11px] leading-6 text-stone-500 mb-4 line-clamp-5 overflow-hidden">
          {exp.description}
        </p>
        <Link
          href={`/experiences/${exp.id}` as `/experiences/${string}`}
          className="inline-flex items-center gap-2 text-[9px] tracking-[0.2em] text-stone-400 hover:text-stone-700 transition-colors group mt-auto"
        >
          <span className="text-stone-300 tracking-widest group-hover:text-stone-500 transition-colors">------</span>
          {t("learnMore")}
        </Link>
      </div>
    </div>
  );
}

export default function ExperiencesPage() {
  const t = useTranslations("experiencesPage");
  const locale = useLocale();
  const [all, setAll] = useState<Experience[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    import("@/lib/experiences").then(({ getExperiences }) => {
      getExperiences(locale).then(setAll);
    });
  }, [locale]);

  const visible = showAll ? all : all.slice(0, INITIAL_COUNT);

  return (
    <div className="bg-white text-stone-700">
      {/* Intro */}
      <section className="py-16 px-8 md:px-24">
        <Animate>
          <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 uppercase mb-8">
            {t("heading")}
          </h1>
        </Animate>
        <div className="space-y-3 max-w-4xl">
          <Animate delay={100}>
            <p className="text-[13px] leading-7 text-stone-500">{t("p1")}</p>
          </Animate>
          <Animate delay={150}>
            <p className="text-[13px] leading-7 text-stone-500">{t("p2")}</p>
          </Animate>
          <Animate delay={200}>
            <p className="text-[13px] leading-7 text-stone-500 mt-4">{t("p3")}</p>
          </Animate>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-stone-100 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto px-8">
          {visible.map((exp, i) => (
            <Animate key={exp.id} from="up" delay={(i % 3) * 80}>
              <ExperienceCard exp={exp} />
            </Animate>
          ))}
        </div>

        {/* View more */}
        {!showAll && all.length > INITIAL_COUNT && (
          <Animate from="up" className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="border border-stone-400 text-stone-600 text-[11px] tracking-[0.25em] px-12 py-4 hover:border-stone-700 hover:text-stone-800 transition-colors uppercase"
            >
              {t("viewMore")}
            </button>
          </Animate>
        )}
      </section>

    </div>
  );
}
