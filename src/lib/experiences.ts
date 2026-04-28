type I18n = Record<"en" | "id", string>;

type RawExperience = {
  id: string;
  image: string;
  nameI18n: I18n;
  descriptionI18n: I18n;
};

export type Experience = {
  id: string;
  image: string;
  name: string;
  description: string;
};

const RAW: RawExperience[] = [
  {
    id: "white-water-rafting",
    image: "/images/experiences/rafting.jpg",
    nameI18n: {
      en: "WHITE WATER RAFTING",
      id: "ARUNG JERAM",
    },
    descriptionI18n: {
      en: "There are quite a few white water rafting options to choose from in Bali, but this is one of our favourites. Allow half a day in total for this activity, which is managed professionally by Telaga Waja River Rafting Bali. Drive 22km from caSabama to reach, Jl. Raya Muncan. \"Very friendly staff, great guide and amazing scenery\".",
      id: "Ada cukup banyak pilihan arung jeram di Bali, namun ini adalah salah satu favorit kami. Alokasikan setengah hari untuk kegiatan ini, yang dikelola secara profesional oleh Telaga Waja River Rafting Bali. Berkendara 22km dari caSabama melalui Jl. Raya Muncan. \"Staf yang sangat ramah, pemandu hebat, dan pemandangan menakjubkan\".",
    },
  },
  {
    id: "tirta-empul",
    image: "/images/experiences/tirta-empul.jpg",
    nameI18n: {
      en: "WATER BLESSING TIRTA EMPUL",
      id: "PEMBERKATAN AIR TIRTA EMPUL",
    },
    descriptionI18n: {
      en: "Tirta Empul Temple has been around since 926 AD and is still being actively used to this day. Participate in the purification ritual in the water of the holy spring, considered one of the most holy temples in Bali. Pack a towel and a sarong and probably your swim gear. A morning visit will be over by lunch. 26km drive from caSabama.",
      id: "Pura Tirta Empul telah ada sejak 926 Masehi dan masih aktif digunakan hingga hari ini. Ikuti ritual penyucian diri di mata air suci, yang dianggap sebagai salah satu pura paling suci di Bali. Bawa handuk, kain sarung, dan mungkin pakaian renang. Kunjungan pagi hari akan selesai sebelum makan siang. Berkendara 26km dari caSabama.",
    },
  },
  {
    id: "batur-caldera",
    image: "/images/experiences/batur.jpg",
    nameI18n: {
      en: "MORNING HIKE BATUR CALDERA",
      id: "PENDAKIAN PAGI KALDERA BATUR",
    },
    descriptionI18n: {
      en: "A hike starting from Songan village, Kintamani, at the foot of Mount Batur. We recommend an earlier start to avoid the heat of the day. Drive 52km to the start point. From behind Pura Ulun uphill for around 45 min before reaching the crater edge. The rest of the hike is not difficult, returning to the drop-off by Sampan before noon.",
      id: "Pendakian dimulai dari desa Songan, Kintamani, di kaki Gunung Batur. Kami merekomendasikan keberangkatan lebih awal untuk menghindari terik matahari. Berkendara 52km ke titik awal. Dari belakang Pura Ulun mendaki sekitar 45 menit sebelum mencapai tepi kawah. Sisa pendakian tidak terlalu sulit, kembali ke titik penjemputan dengan Sampan sebelum tengah hari.",
    },
  },
  {
    id: "beji-guwang",
    image: "/images/experiences/beji-guwang.jpg",
    nameI18n: {
      en: "HIDDEN CANYON BEJI GUWANG HIKE",
      id: "PENDAKIAN NGARAI TERSEMBUNYI BEJI GUWANG",
    },
    descriptionI18n: {
      en: "An epic adventure to see and experience some of the nature in rural Bali. Only 10 mins drive from caSabama to the starting point, this trek is through a wet canyon, so you will be advised to bring wet shoes. The active hike is around an hour in and an hour out. Total around 3 hrs. Very dependent on the weather.",
      id: "Petualangan epik untuk melihat dan merasakan keindahan alam pedesaan Bali. Hanya 10 menit berkendara dari caSabama ke titik awal, perjalanan ini melewati ngarai basah, sehingga disarankan membawa sepatu tahan air. Pendakian aktif sekitar satu jam pergi dan satu jam pulang. Total sekitar 3 jam. Sangat bergantung pada cuaca.",
    },
  },
  {
    id: "gallery-trip",
    image: "/images/experiences/gallery.jpg",
    nameI18n: {
      en: "GALLERY TRIP",
      id: "WISATA GALERI SENI",
    },
    descriptionI18n: {
      en: "There are plenty of galleries to visit in Bali, but a nearby favourite is The Art Lounge which combines Balinese art work with locally inspired meals. It promotes diverse art forms by marrying art, design, and lifestyle. 12km drive from caSabama.",
      id: "Ada banyak galeri untuk dikunjungi di Bali, namun favorit terdekat adalah The Art Lounge yang memadukan karya seni Bali dengan hidangan berbahan lokal. Galeri ini mempromosikan berbagai bentuk seni dengan memadukan seni, desain, dan gaya hidup. Berkendara 12km dari caSabama.",
    },
  },
  {
    id: "tukad-cepung",
    image: "/images/experiences/tukad-cepung.jpg",
    nameI18n: {
      en: "TUKAD CEPUNG WATERFALL",
      id: "AIR TERJUN TUKAD CEPUNG",
    },
    descriptionI18n: {
      en: "This spectacular waterfall has a height of about 15 meters and is not visible from the outside because of its location in a cave, squeezed between cliffs, accessible only via a 20 minute forest trail. A 24km drive from caSabama.",
      id: "Air terjun spektakuler ini memiliki ketinggian sekitar 15 meter dan tidak terlihat dari luar karena lokasinya di dalam gua, terjepit di antara tebing-tebing, hanya dapat diakses melalui jalur hutan selama 20 menit. Berkendara 24km dari caSabama.",
    },
  },
];

function resolveLocale(locale: string): "en" | "id" {
  return locale === "id" ? "id" : "en";
}

// Swap body for: fetch(`/api/experiences?locale=${locale}`) → Experience[]
export async function getExperiences(locale: string): Promise<Experience[]> {
  const loc = resolveLocale(locale);
  return RAW.map(({ nameI18n, descriptionI18n, ...rest }) => ({
    ...rest,
    name: nameI18n[loc],
    description: descriptionI18n[loc],
  }));
}
