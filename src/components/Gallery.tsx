"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "@/components/Lightbox";

export default function Gallery({ images }: { images: string[] }) {
  const [errMap, setErrMap] = useState<Record<number, boolean>>({});

  const CARD_W = 35;
  const CARD_H = CARD_W * (5 / 3);
  const GAP = 8;
  const OFFSET = (100 - CARD_W) / 2;

  // Cloned list: [last, ...images, first]
  const cloned = [images[images.length - 1], ...images, images[0]];

  // Start at index 1 (first real image)
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const transitioning = useRef(false);

  const translateX = `calc(${OFFSET}vw - ${index * (CARD_W + GAP)}vw)`;

  // After transition ends, silently jump if on a clone
  const handleTransitionEnd = () => {
    transitioning.current = false;
    if (index === 0) {
      setAnimate(false);
      setIndex(images.length);
    } else if (index === cloned.length - 1) {
      setAnimate(false);
      setIndex(1);
    }
  };

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const go = (dir: 1 | -1) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnimate(true);
    setIndex((i) => i + dir);
  };

  // Real index (0-based) for opacity highlight
  const realIndex = index === 0 ? images.length - 1 : index === cloned.length - 1 ? 0 : index - 1;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
    {lightboxIndex !== null && (
      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => (i! - 1 + images.length) % images.length)}
        onNext={() => setLightboxIndex((i) => (i! + 1) % images.length)}
      />
    )}
    <div className="relative w-full overflow-hidden" style={{ height: `${CARD_H}vw`, maxHeight: "520px" }}>
      <div
        className="flex items-center h-full"
        style={{
          transform: `translateX(${translateX})`,
          gap: `${GAP}vw`,
          transition: animate ? "transform 500ms ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {cloned.map((src, i) => {
          const ri = i === 0 ? images.length - 1 : i === cloned.length - 1 ? 0 : i - 1;
          return (
            <div
              key={i}
              className={`relative flex-none transition-opacity duration-500 cursor-pointer ${ri === realIndex ? "opacity-100" : "opacity-60"}`}
              style={{ width: `${CARD_W}vw`, height: `${CARD_H}vw`, maxHeight: "520px" }}
              onClick={() => setLightboxIndex(ri)}
            >
              {errMap[ri] ? (
                <div className="w-full h-full bg-stone-200" />
              ) : (
                <Image
                  src={src}
                  alt=""
                  fill
                  unoptimized
                  sizes="65vw"
                  className="object-cover"
                  onError={() => setErrMap((m) => ({ ...m, [ri]: true }))}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="absolute bottom-0 flex" style={{ left: `${OFFSET}vw`, width: `${CARD_W}vw` }}>
        <button
          onClick={() => go(-1)}
          className="w-20 h-12 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-stone-700" />
        </button>
        <div className="flex-1" />
        <button
          onClick={() => go(1)}
          className="w-20 h-12 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-stone-700" />
        </button>
      </div>
    </div>
    </>
  );
}
