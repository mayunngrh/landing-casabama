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
          <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-[#737373] uppercase mb-8 pt-12">
            {t("heading")}
          </h1>
        </Animate>
        <Animate delay={100}>
          <p className="text-[13px] leading-8 text-stone-500 max-w-3xl">
            {t("p1")}
          </p>
        </Animate>
        <Animate delay={200}>
          <p className="text-[13px] leading-8 text-stone-500 mt-5">
            {t("p2")}
          </p>
        </Animate>
      </section>

      {/* Amenities Gallery */}
      <section className="pb-16">
        <Animate from="up">
          <div className="px-8 md:px-24 mb-12 flex flex-col items-center">
            <div className="w-full max-w-3xl ">
              <h2 className="text-center text-[20px] md:text-[24px] font-light tracking-widest text-[#737373] uppercase mb-10">
                {t("amenitiesHeading")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 md:ml-28">
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Private pool with pool towels provided in each villa</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">TV Den</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Free Wi-Fi access</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Hairdryer</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Yoga mats available</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Bathroom amenities</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Private Safe in each room</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Ample Parking</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Access to Gym</p>
              </div>
            </div>
          </div>
        </Animate>
        <Gallery images={AMENITIES_GALLERY_IMAGES} />
      </section>

      {/* Services section */}
      <section className="pb-16">
        <Animate from="up">
          <div className="px-8 md:px-24 mb-12 flex flex-col items-center">
            <div className="w-full max-w-3xl md:ml-12">
              <h2 className="text-center text-[20px] md:text-[24px] font-light tracking-widest text-[#737373] uppercase mb-10">
                {t("servicesHeading")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Arranging airport transfers</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Housekeeping</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Drivers and guides to local destinations in Bali (see more details of our suggested Experiences)</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Massage bookings, with 24 hour notice, in our in-house massage rooms</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Inclusive breakfast</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Laundry services</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Lunch and dinner on request, with 24 hour notice (provided by our in-house chef)</p>
                <p className="text-[13px] leading-7 text-[#737373] text-center md:text-left">Complimentary Tea and coffee and mineral water.</p>
              </div>
            </div>
          </div>
        </Animate>
        <Gallery images={SERVICES_GALLERY_IMAGES} />
      </section>
    </div>
  );
}
