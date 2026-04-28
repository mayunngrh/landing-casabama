export type Villa = {
  id: string;
  slug: string;
  name: string;
  image: string;
  sizeSqM: number;
  bedroomCount: number;
  rooms: string[];
};

export type KeyDetail = {
  icon: "star" | "users" | "bed-double" | "bed" | "tv" | "waves" | "utensils" | "armchair" | "sparkles";
  text: string;
};

export type VillaDetail = Villa & {
  galleryImages: string[];
  descriptions: string[];
  keyDetails: KeyDetail[];
  additionalFeatures: [string, string][]; // pairs: [left, right]
  floorPlanImage?: string;
};

// ─── Raw data (bilingual) ────────────────────────────────────────────────────

type I18n = Record<"en" | "id", string>;
type I18nArr = Record<"en" | "id", string[]>;

type RawVilla = Omit<Villa, "rooms"> & {
  roomsI18n: I18nArr;
};

type RawVillaDetail = Omit<VillaDetail, "rooms" | "descriptions" | "keyDetails" | "additionalFeatures"> & {
  roomsI18n: I18nArr;
  descriptionsI18n: I18nArr;
  keyDetailsI18n: { icon: KeyDetail["icon"]; textI18n: I18n }[];
  additionalFeaturesI18n: { left: I18n; right: I18n }[];
};

const RAW_VILLAS: RawVillaDetail[] = [
  {
    id: "panggung",
    slug: "panggung",
    name: "Villa Panggung",
    image: "/images/accommodation/panggung.jpg",
    galleryImages: [
      "/images/accommodation/panggung/gallery-1.jpg",
      "/images/accommodation/panggung/gallery-2.jpg",
      "/images/accommodation/panggung/gallery-3.jpg",
    ],
    sizeSqM: 399,
    bedroomCount: 3,
    floorPlanImage: "/images/accommodation/panggung/floorplan.jpg",
    roomsI18n: {
      en: [
        "Master Bedroom with King Size",
        "1 Bedroom with King Size",
        "1 Bedroom with King Size or 2 single beds",
      ],
      id: [
        "Kamar Utama dengan Kasur King Size",
        "1 Kamar Tidur dengan Kasur King Size",
        "1 Kamar Tidur dengan Kasur King Size atau 2 kasur single",
      ],
    },
    descriptionsI18n: {
      en: [
        "The living room of Panggung overlooks the garden and pool towards the sea and waves 300m away.",
        "From below, the room appears as a stage (or \"panggung\"). The living area is flanked by the music room/den and kitchen/bar. 3 bedrooms and the massage room are located on the 2nd floor.",
        "The master suite has a large bath and balcony terrace that allows views of Gunung Agung on a clear day.",
      ],
      id: [
        "Ruang tamu Panggung menghadap ke taman dan kolam renang menuju lautan dan ombak 300m jauhnya.",
        "Dilihat dari bawah, ruangan ini tampak seperti sebuah panggung. Area ruang tamu diapit oleh ruang musik/den dan dapur/bar. 3 kamar tidur dan ruang pijat berada di lantai 2.",
        "Suite utama memiliki kamar mandi besar dan teras balkon yang menawarkan pemandangan Gunung Agung pada hari yang cerah.",
      ],
    },
    keyDetailsI18n: [
      { icon: "star",       textI18n: { en: "399sq M of Indoor and Outdoor Space",               id: "399 sq M Ruang Indoor dan Outdoor" } },
      { icon: "users",      textI18n: { en: "Sleeps up to 6 guests",                              id: "Dapat menampung hingga 6 tamu" } },
      { icon: "bed-double", textI18n: { en: "Master Bedroom and ensuite with bathtub",            id: "Kamar Utama dengan kamar mandi dalam dan bathtub" } },
      { icon: "tv",         textI18n: { en: "Family Room with TV and access to Netflix",          id: "Ruang Keluarga dengan TV dan akses Netflix" } },
      { icon: "bed",        textI18n: { en: "2 Bedrooms and ensuite with showers",                id: "2 Kamar Tidur dengan kamar mandi dalam dan shower" } },
      { icon: "sparkles",   textI18n: { en: "Massage room",                                      id: "Ruang Pijat" } },
      { icon: "waves",      textI18n: { en: "15m Long Pool",                                     id: "Kolam Renang 15m" } },
      { icon: "utensils",   textI18n: { en: "Kitchen, Living & Dining",                          id: "Dapur, Ruang Tamu & Makan" } },
      { icon: "armchair",   textI18n: { en: "Sundeck",                                           id: "Sundeck" } },
    ],
    additionalFeaturesI18n: [
      { left: { en: "Arranging airport transfers (additional charges apply)", id: "Pengaturan transfer bandara (biaya tambahan berlaku)" }, right: { en: "Lunch and Dinner on request, with 24-hour notice (provided by our in-house chef)", id: "Makan siang dan malam atas permintaan, dengan pemberitahuan 24 jam (disediakan oleh chef internal kami)" } },
      { left: { en: "Inclusive Breakfast",     id: "Sarapan termasuk" },                right: { en: "Extra beds are chargeable",              id: "Tempat tidur tambahan dikenakan biaya" } },
      { left: { en: "Housekeeping",            id: "Layanan kebersihan" },              right: { en: "Private Safe in each room",             id: "Brankas pribadi di setiap kamar" } },
      { left: { en: "Yoga mats available",     id: "Matras yoga tersedia" },            right: { en: "TV Den",                                id: "Ruang TV" } },
      { left: { en: "Free Wi-Fi access",       id: "Akses Wi-Fi gratis" },             right: { en: "Bathroom amenities, hairdryer",          id: "Perlengkapan kamar mandi, pengering rambut" } },
      { left: { en: "Massage bookings, with 24-hour notice, in our in-house massage rooms", id: "Pemesanan pijat, dengan pemberitahuan 24 jam, di ruang pijat internal kami" }, right: { en: "Parking", id: "Parkir" } },
    ],
  },
  {
    id: "sandiwara",
    slug: "sandiwara",
    name: "Villa Sandiwara",
    image: "/images/accommodation/sandiwara.jpg",
    galleryImages: [
      "/images/accommodation/sandiwara/gallery-1.jpg",
      "/images/accommodation/sandiwara/gallery-2.jpg",
      "/images/accommodation/sandiwara/gallery-3.jpg",
    ],
    sizeSqM: 911,
    bedroomCount: 4,
    floorPlanImage: "/images/accommodation/sandiwara/floorplan.jpg",
    roomsI18n: {
      en: ["Master Bedroom with King Size", "2 Bedrooms with King Size", "1 Bedroom with King Size or 2 single beds"],
      id: ["Kamar Utama dengan Kasur King Size", "2 Kamar Tidur dengan Kasur King Size", "1 Kamar Tidur dengan Kasur King Size atau 2 kasur single"],
    },
    descriptionsI18n: {
      en: [
        "The living room of Sandiwara opens directly to the sun-soaked pool terrace and expansive tropical garden, with ocean glimpses through the treeline.",
        "Four spacious bedrooms, each with ensuite bathrooms, are spread across two floors. A generous open-plan ground floor brings together kitchen, dining and living seamlessly.",
        "The master suite occupies the entire upper rear of the villa, offering a private balcony and stunning views toward Gunung Agung.",
      ],
      id: [
        "Ruang tamu Sandiwara terbuka langsung ke teras kolam renang yang cerah dan taman tropis yang luas, dengan sedikit pemandangan laut melalui pepohonan.",
        "Empat kamar tidur yang luas, masing-masing dengan kamar mandi dalam, tersebar di dua lantai. Lantai dasar yang terbuka menggabungkan dapur, ruang makan, dan ruang tamu secara harmonis.",
        "Suite utama menempati seluruh bagian atas belakang vila, menawarkan balkon pribadi dan pemandangan indah menuju Gunung Agung.",
      ],
    },
    keyDetailsI18n: [
      { icon: "star",       textI18n: { en: "911sq M of Indoor and Outdoor Space",               id: "911 sq M Ruang Indoor dan Outdoor" } },
      { icon: "users",      textI18n: { en: "Sleeps up to 8 guests",                              id: "Dapat menampung hingga 8 tamu" } },
      { icon: "bed-double", textI18n: { en: "Master Bedroom and ensuite with bathtub",            id: "Kamar Utama dengan kamar mandi dalam dan bathtub" } },
      { icon: "tv",         textI18n: { en: "TV & Entertainment Room",                           id: "Ruang TV & Hiburan" } },
      { icon: "bed",        textI18n: { en: "3 Bedrooms with ensuite showers",                   id: "3 Kamar Tidur dengan shower kamar mandi dalam" } },
      { icon: "sparkles",   textI18n: { en: "Massage room",                                      id: "Ruang Pijat" } },
      { icon: "waves",      textI18n: { en: "18m Long Pool",                                     id: "Kolam Renang 18m" } },
      { icon: "utensils",   textI18n: { en: "Kitchen, Living & Dining",                          id: "Dapur, Ruang Tamu & Makan" } },
      { icon: "armchair",   textI18n: { en: "Sundeck",                                           id: "Sundeck" } },
    ],
    additionalFeaturesI18n: [
      { left: { en: "Arranging airport transfers (additional charges apply)", id: "Pengaturan transfer bandara (biaya tambahan berlaku)" }, right: { en: "Lunch and Dinner on request, with 24-hour notice (provided by our in-house chef)", id: "Makan siang dan malam atas permintaan, dengan pemberitahuan 24 jam (disediakan oleh chef internal kami)" } },
      { left: { en: "Inclusive Breakfast",     id: "Sarapan termasuk" },                right: { en: "Extra beds are chargeable",              id: "Tempat tidur tambahan dikenakan biaya" } },
      { left: { en: "Housekeeping",            id: "Layanan kebersihan" },              right: { en: "Private Safe in each room",             id: "Brankas pribadi di setiap kamar" } },
      { left: { en: "Yoga mats available",     id: "Matras yoga tersedia" },            right: { en: "TV Den",                                id: "Ruang TV" } },
      { left: { en: "Free Wi-Fi access",       id: "Akses Wi-Fi gratis" },             right: { en: "Bathroom amenities, hairdryer",          id: "Perlengkapan kamar mandi, pengering rambut" } },
      { left: { en: "Massage bookings, with 24-hour notice, in our in-house massage rooms", id: "Pemesanan pijat, dengan pemberitahuan 24 jam, di ruang pijat internal kami" }, right: { en: "Parking", id: "Parkir" } },
    ],
  },
  {
    id: "panjang",
    slug: "panjang",
    name: "Villa Panjang",
    image: "/images/accommodation/panjang.jpg",
    galleryImages: [
      "/images/accommodation/panjang/gallery-1.jpg",
      "/images/accommodation/panjang/gallery-2.jpg",
      "/images/accommodation/panjang/gallery-3.jpg",
    ],
    sizeSqM: 906,
    bedroomCount: 4,
    floorPlanImage: "/images/accommodation/panjang/floorplan.jpg",
    roomsI18n: {
      en: ["Master Bedroom with King Size", "2 Bedrooms with King Size", "1 Bedroom with King Size or 2 single beds"],
      id: ["Kamar Utama dengan Kasur King Size", "2 Kamar Tidur dengan Kasur King Size", "1 Kamar Tidur dengan Kasur King Size atau 2 kasur single"],
    },
    descriptionsI18n: {
      en: [
        "Villa Panjang stretches elegantly along the estate, its long axis framing a generous private pool and manicured lawn running down to the field edge.",
        "The ground floor is an open-plan sanctuary of living, dining and kitchen spaces, with floor-to-ceiling doors that dissolve the boundary between inside and out.",
        "Four bedrooms with ensuite bathrooms occupy both floors, each finished with locally-sourced timber, stone and artisan textiles.",
      ],
      id: [
        "Villa Panjang membentang dengan elegan di sepanjang estate, dengan sumbu panjangnya yang membingkai kolam renang pribadi yang luas dan halaman rumput terawat yang memanjang hingga tepi lapangan.",
        "Lantai dasar adalah ruang terbuka yang menggabungkan ruang tamu, ruang makan, dan dapur, dengan pintu dari lantai ke langit-langit yang menghapus batas antara dalam dan luar ruangan.",
        "Empat kamar tidur dengan kamar mandi dalam menempati kedua lantai, masing-masing diselesaikan dengan kayu, batu, dan tekstil pengrajin lokal.",
      ],
    },
    keyDetailsI18n: [
      { icon: "star",       textI18n: { en: "906sq M of Indoor and Outdoor Space",               id: "906 sq M Ruang Indoor dan Outdoor" } },
      { icon: "users",      textI18n: { en: "Sleeps up to 8 guests",                              id: "Dapat menampung hingga 8 tamu" } },
      { icon: "bed-double", textI18n: { en: "Master Bedroom and ensuite with bathtub",            id: "Kamar Utama dengan kamar mandi dalam dan bathtub" } },
      { icon: "tv",         textI18n: { en: "TV Lounge",                                         id: "Ruang TV" } },
      { icon: "bed",        textI18n: { en: "3 Bedrooms with ensuite showers",                   id: "3 Kamar Tidur dengan shower kamar mandi dalam" } },
      { icon: "sparkles",   textI18n: { en: "Massage room",                                      id: "Ruang Pijat" } },
      { icon: "waves",      textI18n: { en: "20m Long Pool",                                     id: "Kolam Renang 20m" } },
      { icon: "utensils",   textI18n: { en: "Kitchen, Living & Dining",                          id: "Dapur, Ruang Tamu & Makan" } },
      { icon: "armchair",   textI18n: { en: "Sundeck",                                           id: "Sundeck" } },
    ],
    additionalFeaturesI18n: [
      { left: { en: "Arranging airport transfers (additional charges apply)", id: "Pengaturan transfer bandara (biaya tambahan berlaku)" }, right: { en: "Lunch and Dinner on request, with 24-hour notice (provided by our in-house chef)", id: "Makan siang dan malam atas permintaan, dengan pemberitahuan 24 jam (disediakan oleh chef internal kami)" } },
      { left: { en: "Inclusive Breakfast",     id: "Sarapan termasuk" },                right: { en: "Extra beds are chargeable",              id: "Tempat tidur tambahan dikenakan biaya" } },
      { left: { en: "Housekeeping",            id: "Layanan kebersihan" },              right: { en: "Private Safe in each room",             id: "Brankas pribadi di setiap kamar" } },
      { left: { en: "Yoga mats available",     id: "Matras yoga tersedia" },            right: { en: "TV Den",                                id: "Ruang TV" } },
      { left: { en: "Free Wi-Fi access",       id: "Akses Wi-Fi gratis" },             right: { en: "Bathroom amenities, hairdryer",          id: "Perlengkapan kamar mandi, pengering rambut" } },
      { left: { en: "Massage bookings, with 24-hour notice, in our in-house massage rooms", id: "Pemesanan pijat, dengan pemberitahuan 24 jam, di ruang pijat internal kami" }, right: { en: "Parking", id: "Parkir" } },
    ],
  },
];

// ─── Resolvers ───────────────────────────────────────────────────────────────

function resolveLocale(locale: string): "en" | "id" {
  return locale === "id" ? "id" : "en";
}

// Swap body for: fetch(`/api/accommodations?locale=${locale}`) → Villa[]
export async function getAccommodations(locale: string): Promise<Villa[]> {
  const loc = resolveLocale(locale);
  return RAW_VILLAS.map(({ roomsI18n, descriptionsI18n, keyDetailsI18n, additionalFeaturesI18n, ...villa }) => ({
    ...villa,
    rooms: roomsI18n[loc],
  }));
}

// Swap body for: fetch(`/api/accommodations/${slug}?locale=${locale}`) → VillaDetail | null
export async function getVillaDetail(slug: string, locale: string): Promise<VillaDetail | null> {
  const raw = RAW_VILLAS.find((v) => v.slug === slug);
  if (!raw) return null;
  const loc = resolveLocale(locale);
  const { roomsI18n, descriptionsI18n, keyDetailsI18n, additionalFeaturesI18n, ...rest } = raw;
  return {
    ...rest,
    rooms: roomsI18n[loc],
    descriptions: descriptionsI18n[loc],
    keyDetails: keyDetailsI18n.map(({ icon, textI18n }) => ({ icon, text: textI18n[loc] })),
    additionalFeatures: additionalFeaturesI18n.map(({ left, right }) => [left[loc], right[loc]]),
  };
}
