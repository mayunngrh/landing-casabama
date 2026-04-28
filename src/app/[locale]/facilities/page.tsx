"use client";

import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";
import Gallery from "@/components/Gallery";
import { AMENITIES_GALLERY_IMAGES, SERVICES_GALLERY_IMAGES } from "@/lib/facilities";

export default function FacilitiesPage() {
  const t = useTranslations("facilities");

  return (
    <div className="bg-white text-stone-700">
      {/* Intro section */}
      <section className="py-16 px-8 md:px-24">
        <Animate>
          <h1 className="text-[36px] md:text-[48px] font-light tracking-widest text-stone-800 uppercase mb-8">
            {t("heading")}
          </h1>
        </Animate>
        <Animate delay={100}>
          <p className="text-[13px] leading-8 text-stone-500 max-w-3xl">
            {t("p1")}
          </p>
        </Animate>
        <Animate delay={200}>
          <p className="text-[13px] leading-8 text-stone-500 max-w-3xl mt-5">
            {t("p2")}
          </p>
        </Animate>
      </section>

      {/* Amenities Gallery */}
      <section className="pb-16">
        <Animate from="up">
          <div className="px-8 md:px-24 mb-12 text-center">
            <h2 className="text-[20px] md:text-[24px] font-light tracking-widest text-stone-800 uppercase mb-8">
              {t("amenitiesHeading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <p className="text-[13px] leading-7 text-stone-600">Private pool with pool towels provided in each villa</p>
              <p className="text-[13px] leading-7 text-stone-600">TV Den</p>
              <p className="text-[13px] leading-7 text-stone-600">Free Wi-Fi access</p>
              <p className="text-[13px] leading-7 text-stone-600">Hairdryer</p>
              <p className="text-[13px] leading-7 text-stone-600">Yoga mats available</p>
              <p className="text-[13px] leading-7 text-stone-600">Bathroom amenities</p>
              <p className="text-[13px] leading-7 text-stone-600">Private Safe in each room</p>
              <p className="text-[13px] leading-7 text-stone-600">Ample Parking</p>
              <p className="text-[13px] leading-7 text-stone-600">Access to Gym</p>
            </div>
          </div>
        </Animate>
        <Gallery images={AMENITIES_GALLERY_IMAGES} />
      </section>

      {/* Services section */}
      <section className="pb-16">
        <Animate from="up">
          <div className="px-8 md:px-24 mb-12 text-center">
            <h2 className="text-[20px] md:text-[24px] font-light tracking-widest text-stone-800 uppercase mb-8">
              {t("servicesHeading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              <p className="text-[13px] leading-7 text-stone-600">Arranging airport transfers</p>
              <p className="text-[13px] leading-7 text-stone-600">Housekeeping</p>
              <p className="text-[13px] leading-7 text-stone-600">Drivers and guides to local destinations in Bali (see more details of our suggested Experiences)</p>
              <p className="text-[13px] leading-7 text-stone-600">Massage bookings, with 24 hour notice, in our in-house massage rooms</p>
              <p className="text-[13px] leading-7 text-stone-600">Inclusive breakfast</p>
              <p className="text-[13px] leading-7 text-stone-600">Laundry services</p>
              <p className="text-[13px] leading-7 text-stone-600">Lunch and dinner on request, with 24 hour notice (provided by our in-house chef)</p>
              <p className="text-[13px] leading-7 text-stone-600">Complimentary Tea and coffee and mineral water.</p>
            </div>
          </div>
        </Animate>
        <Gallery images={SERVICES_GALLERY_IMAGES} />
      </section>
    </div>
  );
}
