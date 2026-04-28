"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [errMap, setErrMap] = useState<Record<number, boolean>>({});

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(images.length - 1, i + 1));

  // Each image 70vw, 2vw gap → 72vw per step; center at 15vw offset
  const translateX = `calc(15vw - ${active * 72}vw)`;

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "55vw", maxHeight: "520px" }}>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(${translateX})`, gap: "2vw" }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className={`relative flex-none h-full transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-60"}`}
            style={{ width: "70vw" }}
          >
            {errMap[i] ? (
              <div className="w-full h-full bg-stone-200" />
            ) : (
              <Image
                src={src}
                alt=""
                fill
                unoptimized
                sizes="70vw"
                className="object-cover"
                onError={() => setErrMap((m) => ({ ...m, [i]: true }))}
              />
            )}
          </div>
        ))}
      </div>

      {active > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white flex items-center justify-center transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-stone-700" />
        </button>
      )}
      {active < images.length - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white flex items-center justify-center transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-stone-700" />
        </button>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
