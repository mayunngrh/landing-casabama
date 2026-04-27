"use client";

import Image from "next/image";
import { useState, ReactNode } from "react";
import Animate from "@/components/Animate";

// ── next/image wrapper: shows a stone-200 gray box if the file is missing ──
function FillImg({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
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
      priority={priority}
    />
  );
}

// ── Shared primitives ─────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-5">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 leading-tight uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-stone-500 hover:text-stone-900 transition-colors duration-300 group mt-6"
    >
      <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-white text-stone-700 overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════
       *  HERO  — single full-screen photo
       *    hero.jpg   ← wide villa/garden/pool shot (landscape works best)
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="relative -mt-16 h-screen overflow-hidden">
        {/* Full-screen photo */}
        <div className="absolute inset-0">
          <FillImg
            src="/images/hero.jpg"
            alt="caSabama villa"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient overlay — darkens bottom-left for text legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />

        {/* Brand text — lower-center-left */}
        <div className="absolute bottom-[15%] left-15">
          <Animate from="up" delay={300}>
            <h1 className="text-[52px] md:text-[72px] font-light tracking-widest text-white leading-none">
              caSabama
            </h1>
            <p className="text-[13px] tracking-[0.45em] text-white/75 mt-3">
              saba &nbsp;&nbsp;&nbsp; bali
            </p>
          </Animate>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  INTRO — no images needed
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 px-8 md:px-24">
        <div className="space-y-5">
          <Animate>
            <p className="text-[13px] leading-8 text-stone-500">
              Inspired by traditional Balinese village clusters combined with original modern design and
              detailed attention to comfort, Casabama is a modern 3-villa complex offering a total of 11
              bedrooms and 3 pools. Adorned with Indonesian art and craft, the villas provide a relaxing
              and tranquil homely environment.
            </p>
          </Animate>
          <Animate delay={100}>
            <p className="text-[13px] leading-8 text-stone-500">
              Each house is self-contained and interlinked via a garden gateway. A gym room at the front
              of this property is shared by the three villas, while between the villas and the ocean lies
              a beautiful 29 are grassy field, perfect for weddings and events.
            </p>
          </Animate>
          <Animate delay={200}>
            <p className="text-[13px] leading-8 text-stone-500">
              Surrounded by corn fields, banana plantations and coconut groves, Casabama is a short walk
              from the sandy shores of Saba Bay, South East Bali.
            </p>
          </Animate>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  LOCATION
       *    location.jpg   ← Saba beach / ocean / fishing boats view
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Animate from="left">
            <div className="relative aspect-4/3 overflow-hidden">
              <FillImg
                src="/images/location.jpg"
                alt="Saba Beach, Gianyar"
                sizes="(max-width:768px) 100vw, 50vw"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Animate>
          <Animate from="right" className="py-4">
            <SectionLabel>Location</SectionLabel>
            <SectionHeading className="mb-6">
              SABA BEACH<br />GIANYAR
            </SectionHeading>
            <p className="text-[13px] leading-8 text-stone-500">
              Located near Saba Bay on the East coast of Bali, which has views across to the islands
              of Lembongan and Penida. It is 15km up the coast from Sanur, and a similar distance to
              Ubud, which can be reached via delightful routes through Balinese villages and temples.
            </p>
            <CtaLink href="/contact">GET DIRECTIONS</CtaLink>
          </Animate>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  ACCOMMODATION
       *    accommodation.jpg   ← villa bedroom or bright living area interior
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-8 md:px-24">
        <Animate>
          <SectionLabel>Accommodation</SectionLabel>
        </Animate>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <Animate from="left" delay={100}>
            <SectionHeading>
              PEACEFUL<br />HIDEAWAYS
            </SectionHeading>
          </Animate>
          <Animate from="right" delay={200} className="pt-1">
            <p className="text-[13px] leading-8 text-stone-500">
              Each two-storey private luxury Villa is composed to offer views of the nearby ocean
              to the South East and the slopes of the mountain Gunung Agung to the North.
            </p>
            <CtaLink href="/accommodation">VIEW ROOMS</CtaLink>
          </Animate>
        </div>
        {/* Right-aligned wide room photo */}
        <Animate delay={250} className="flex justify-end">
          <div className="relative w-full md:w-[70%] aspect-4/3 overflow-hidden">
            <FillImg
              src="/images/accommodation.jpg"
              alt="Villa room interior"
              sizes="(max-width:768px) 100vw, 70vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  GALLERY  (full-width photo)
       *    gallery-1.jpg   ← villa interior / sitting room
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="mt-6">
        <Animate from="up">
          <div className="relative aspect-5/3 overflow-hidden">
            <FillImg
              src="/images/gallery-1.jpg"
              alt="Villa sitting room"
              sizes="100vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Animate>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  DINING
       *    dining.jpg   ← close-up of a Balinese dish / plated food
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Animate from="left">
            <SectionLabel>Dining</SectionLabel>
            <SectionHeading className="mb-6">
              FLAVOURS<br />OF BALI
            </SectionHeading>
            <p className="text-[13px] leading-8 text-stone-500">
              Our in-house chef and team can provide delicious meals from our suggestive menu,
              with sufficient notice.
            </p>
            <CtaLink href="/dining">FIND OUT MORE</CtaLink>
          </Animate>
          <Animate from="right">
            <div className="relative aspect-4/3 overflow-hidden">
              <FillImg
                src="/images/dining.jpg"
                alt="Balinese cuisine"
                sizes="(max-width:768px) 100vw, 50vw"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  EXPERIENCES  (3-photo row)
       *    exp-1.jpg   ← river rafting / water adventure
       *    exp-2.jpg   ← beach / single palm tree / blue sky
       *    exp-3.jpg   ← mountain / rice terraces / green landscape
       * ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-8 md:px-24 pb-24">
        <Animate>
          <SectionLabel>Experiences</SectionLabel>
        </Animate>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <Animate from="left" delay={100}>
            <SectionHeading>
              DISCOVER<br />GIANYAR<br />EXPERIENCES
            </SectionHeading>
          </Animate>
          <Animate from="right" delay={200} className="pt-1">
            <p className="text-[13px] leading-8 text-stone-500">
              From sunrise surf at Keramas to river rafting and hidden canyon walks, Gianyar is
              Bali&apos;s playground for nature and adventure. Slow it down in the rice terraces,
              artisan villages, temples, and local markets — then finish the day with great food
              and a massage in Ubud.
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(
            [
              { src: "/images/exp-1.jpg", alt: "River rafting" },
              { src: "/images/exp-2.jpg", alt: "Beach and palms" },
              { src: "/images/exp-3.jpg", alt: "Mountain scenery" },
            ] as const
          ).map(({ src, alt }, i) => (
            <Animate key={src} delay={i * 80} from="up">
              <div className="relative aspect-square overflow-hidden">
                <FillImg
                  src={src}
                  alt={alt}
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
       *  FOOTER
       *    logo.png   ← caSabama circular badge logo (PNG with transparency)
       * ════════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#1c1c1c] text-white py-16 px-8 md:px-24">
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">

          {/* Circular logo */}
          <Animate from="up" className="shrink-0">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <FillImg src="/images/logo.png" alt="caSabama logo" sizes="64px" />
            </div>
          </Animate>

          {/* Contact columns */}
          <Animate from="up" delay={100} className="flex-1">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-[9px] tracking-[0.35em] text-stone-500 mb-5 uppercase">
                  Contact Us
                </p>
                <p className="text-[11px] leading-7 text-stone-400 mb-4">
                  General Enquiries<br />
                  <a
                    href="mailto:info@casabama.id"
                    className="hover:text-white transition-colors"
                  >
                    info@casabama.id
                  </a>
                </p>
                <p className="text-[11px] leading-7 text-stone-400">
                  Booking Enquiries<br />
                  <a
                    href="mailto:bookings@casabama.id"
                    className="hover:text-white transition-colors"
                  >
                    bookings@casabama.id
                  </a>
                </p>
              </div>
              <div>
                <p className="text-[11px] leading-7 text-stone-400 mb-4">
                  Jalan Pantai Saba 680<br />
                  Banjar Saba, Gianyar 80581
                </p>
                <p className="text-[11px] leading-7 text-stone-400">
                  WA:{" "}
                  <a
                    href="tel:+62811366884"
                    className="hover:text-white transition-colors"
                  >
                    +62 811 366 8864
                  </a>
                  <span className="text-stone-600"> (text only)</span>
                </p>
              </div>
            </div>
          </Animate>
        </div>

        {/* Social icons */}
        <Animate from="up" delay={200}>
          <div className="flex gap-4">
            {(
              [
                { label: "Facebook", icon: "f" },
                { label: "Instagram", icon: "ig" },
                { label: "YouTube", icon: "▶" },
              ] as const
            ).map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[9px] text-white/40 hover:border-white/50 hover:text-white/80 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </Animate>
      </footer>
    </div>
  );
}
