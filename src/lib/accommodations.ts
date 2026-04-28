export type Villa = {
  id: string;
  slug: string;
  name: string;
  image: string;
  sizeSqM: number;
  bedroomCount: number;
  rooms: string[];
};

type RawVilla = Omit<Villa, "rooms"> & {
  roomsI18n: Record<string, string[]>;
};

const RAW_VILLAS: RawVilla[] = [
  {
    id: "panggung",
    slug: "panggung",
    name: "Villa Panggung",
    image: "/images/accommodation/panggung.jpg",
    sizeSqM: 399,
    bedroomCount: 3,
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
  },
  {
    id: "sandiwara",
    slug: "sandiwara",
    name: "Villa Sandiwara",
    image: "/images/accommodation/sandiwara.jpg",
    sizeSqM: 911,
    bedroomCount: 4,
    roomsI18n: {
      en: [
        "Master Bedroom with King Size",
        "2 Bedrooms with King Size",
        "1 Bedroom with King Size or 2 single beds",
      ],
      id: [
        "Kamar Utama dengan Kasur King Size",
        "2 Kamar Tidur dengan Kasur King Size",
        "1 Kamar Tidur dengan Kasur King Size atau 2 kasur single",
      ],
    },
  },
  {
    id: "panjang",
    slug: "panjang",
    name: "Villa Panjang",
    image: "/images/accommodation/panjang.jpg",
    sizeSqM: 906,
    bedroomCount: 4,
    roomsI18n: {
      en: [
        "Master Bedroom with King Size",
        "2 Bedrooms with King Size",
        "1 Bedroom with King Size or 2 single beds",
      ],
      id: [
        "Kamar Utama dengan Kasur King Size",
        "2 Kamar Tidur dengan Kasur King Size",
        "1 Kamar Tidur dengan Kasur King Size atau 2 kasur single",
      ],
    },
  },
];

// Swap this function body for a fetch() call once the admin API is ready.
// Expected API shape: GET /api/accommodations?locale=en → Villa[]
export async function getAccommodations(locale: string): Promise<Villa[]> {
  return RAW_VILLAS.map(({ roomsI18n, ...villa }) => ({
    ...villa,
    rooms: roomsI18n[locale] ?? roomsI18n["en"],
  }));
}
