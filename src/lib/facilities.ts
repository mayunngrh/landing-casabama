type I18n = Record<"en" | "id", string>;

type RawFacilities = {
  amenities: { left: I18n; right: I18n }[];
  guestServices: { left: I18n; right: I18n }[];
  gallery1: string[];
  gallery2: string[];
};

export type FacilitiesData = {
  amenities: [string, string][];
  guestServices: [string, string][];
  gallery1: string[];
  gallery2: string[];
};

const RAW: RawFacilities = {
  gallery1: [
    "/images/facilities/facilities-1.jpg",
    "/images/facilities/facilities-2.jpg",
    "/images/facilities/facilities-3.jpg",
  ],
  gallery2: [
    "/images/facilities/team-1.jpg",
    "/images/facilities/team-2.jpg",
    "/images/facilities/team-3.jpg",
  ],
  amenities: [
    { left: { en: "Private pool with pool towels provided in each villa",  id: "Kolam renang pribadi dengan handuk kolam tersedia di setiap vila" }, right: { en: "TV Den",                    id: "Ruang TV" } },
    { left: { en: "Free Wi-Fi access",                                     id: "Akses Wi-Fi gratis" },                                              right: { en: "Hairdryer",               id: "Pengering rambut" } },
    { left: { en: "Yoga mats available",                                   id: "Matras yoga tersedia" },                                            right: { en: "Bathroom amenities",      id: "Perlengkapan kamar mandi" } },
    { left: { en: "Private Safe in each room",                             id: "Brankas pribadi di setiap kamar" },                                 right: { en: "Ample Parking",           id: "Parkir luas" } },
    { left: { en: "Access to Gym",                                         id: "Akses ke Gym" },                                                    right: { en: "",                        id: "" } },
  ],
  guestServices: [
    { left: { en: "Arranging airport transfers",                                                              id: "Pengaturan transfer bandara" },                                                                                             right: { en: "Housekeeping",                                                            id: "Layanan kebersihan" } },
    { left: { en: "Drivers and guides to local destinations in Bali (see more details of our suggested Experiences)", id: "Pengemudi dan pemandu ke destinasi lokal di Bali (lihat detail lebih lanjut di halaman Pengalaman kami)" }, right: { en: "Massage bookings, with 24 hour notice, in our in-house massage rooms",       id: "Pemesanan pijat, dengan pemberitahuan 24 jam, di ruang pijat internal kami" } },
    { left: { en: "Inclusive breakfast",                                                                      id: "Sarapan termasuk" },                                                                                                        right: { en: "Laundry services",                                                        id: "Layanan laundry" } },
    { left: { en: "Lunch and dinner on request, with 24 hour notice (provided by our in-house chef)",         id: "Makan siang dan malam atas permintaan, dengan pemberitahuan 24 jam (disediakan oleh chef internal kami)" },              right: { en: "Complimentary Tea and coffee and mineral water.",                          id: "Teh, kopi, dan air mineral gratis." } },
  ],
};

function resolveLocale(locale: string): "en" | "id" {
  return locale === "id" ? "id" : "en";
}

// Swap body for: fetch(`/api/facilities?locale=${locale}`) → FacilitiesData
export async function getFacilities(locale: string): Promise<FacilitiesData> {
  const loc = resolveLocale(locale);
  return {
    gallery1: RAW.gallery1,
    gallery2: RAW.gallery2,
    amenities: RAW.amenities.map(({ left, right }) => [left[loc], right[loc]]),
    guestServices: RAW.guestServices.map(({ left, right }) => [left[loc], right[loc]]),
  };
}
