"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import type { ExperienceDetail } from "@/lib/experiences";
import Animate from "@/components/Animate";

export default function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = useLocale();
  const router = useRouter();
  const [exp, setExp] = useState<ExperienceDetail | null>(null);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    params.then(({ slug }) => setSlug(slug));
  }, [params]);

  useEffect(() => {
    if (!slug) return;
    import("@/lib/experiences").then(({ getExperienceDetail }) => {
      getExperienceDetail(slug, locale).then((data) => {
        if (!data) router.push("/experiences");
        else setExp(data);
      });
    });
  }, [slug, locale, router]);

  if (!exp) return <div className="min-h-screen bg-white" />;

  return (
    <div className="bg-white text-stone-700 min-h-screen">
      <div className="pt-24" />

      <section className="px-8 md:px-24 py-16">
        <Animate>
          <button
            onClick={() => router.push("/experiences")}
            className="text-[10px] tracking-[0.25em] text-stone-400 hover:text-stone-700 transition-colors uppercase mb-12 flex items-center gap-2"
          >
            ← Back to Experiences
          </button>
        </Animate>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Image */}
          <Animate className="w-full md:w-1/2 shrink-0">
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                unoptimized
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Animate>

          {/* Content */}
          <Animate delay={100} className="flex flex-col justify-center">
            <h1 className="text-[24px] md:text-[32px] font-light tracking-widest text-stone-800 uppercase leading-tight mb-8">
              {exp.name}
            </h1>
            <div className="space-y-5">
              {exp.detailParagraphs.map((p, i) => (
                <p key={i} className="text-[13px] leading-8 text-stone-500">
                  {p}
                </p>
              ))}
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}
