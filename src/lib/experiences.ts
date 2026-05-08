type I18n = Record<"en" | "id", string>;
type I18nArr = Record<"en" | "id", string[]>;

type RawExperience = {
  id: string;
  image: string;
  nameI18n: I18n;
  descriptionI18n: I18n;
  detailParagraphsI18n: I18nArr;
};

export type Experience = {
  id: string;
  image: string;
  name: string;
  description: string;
};

export type ExperienceDetail = Experience & {
  detailParagraphs: string[];
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
    detailParagraphsI18n: {
      en: [
        "The Telaga Waja River is widely regarded as one of the best white water rafting rivers in Bali, winding through lush jungle gorges and past traditional Balinese villages. The rapids range from grade II to IV, making it suitable for both beginners and more experienced adventurers. All safety equipment and a professional guide are provided throughout the journey.",
        "The full experience takes approximately half a day, including a safety briefing, the river run of around 2 hours, and a meal at the end. The drive from caSabama takes around 22km along scenic roads through Jl. Raya Muncan, passing through rice fields and forest before reaching the launch point.",
        "We recommend wearing clothes you don't mind getting wet and bringing a change of clothes for after. Sandals or secure footwear are ideal. The activity is weather dependent, so a morning slot is generally more reliable. Ask our team to arrange booking and transport.",
      ],
      id: [
        "Sungai Telaga Waja dikenal luas sebagai salah satu sungai arung jeram terbaik di Bali, berkelok-kelok melalui ngarai hutan lebat dan melewati desa-desa Bali yang tradisional. Jeram-jeramnya berkisar dari grade II hingga IV, cocok untuk pemula maupun petualang yang lebih berpengalaman. Semua perlengkapan keselamatan dan pemandu profesional disediakan sepanjang perjalanan.",
        "Pengalaman penuh membutuhkan sekitar setengah hari, termasuk pengarahan keselamatan, perjalanan sungai sekitar 2 jam, dan makan di akhir. Perjalanan dari caSabama sekitar 22km melalui jalan-jalan indah di Jl. Raya Muncan, melewati sawah dan hutan sebelum mencapai titik peluncuran.",
        "Kami menyarankan untuk mengenakan pakaian yang tidak masalah jika basah dan membawa baju ganti. Sandal atau alas kaki yang kokoh sangat ideal. Aktivitas ini tergantung pada cuaca, jadi slot pagi hari umumnya lebih terpercaya. Tanyakan kepada tim kami untuk mengatur pemesanan dan transportasi.",
      ],
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
    detailParagraphsI18n: {
      en: [
        "Pura Tirta Empul, founded in 926 AD, is one of Bali's most sacred and visited temples. Built around a natural spring believed to have been created by the god Indra, the water is considered holy and healing. Balinese Hindus travel from across the island to participate in the melukat purification ritual, moving through a series of spouts in the sacred bathing pools.",
        "Visitors are welcome to participate in the ritual themselves. You will need to wear a sarong — these can be rented at the entrance — and bring a towel. It is customary to move slowly and respectfully through the pools, pausing at each spout as part of the spiritual cleansing. The atmosphere is deeply moving, especially in the early morning before crowds arrive.",
        "The temple is located in Tampaksiring, approximately 26km from caSabama, around a 45-minute drive. A morning visit is strongly recommended to avoid the midday heat and tour groups. Our team can assist with arranging transport and any guidance you may need before your visit.",
      ],
      id: [
        "Pura Tirta Empul, didirikan pada tahun 926 Masehi, adalah salah satu pura paling suci dan banyak dikunjungi di Bali. Dibangun di sekitar mata air alami yang dipercaya diciptakan oleh dewa Indra, airnya dianggap suci dan menyembuhkan. Umat Hindu Bali berdatangan dari seluruh pulau untuk mengikuti ritual penyucian melukat, bergerak melalui serangkaian pancoran di kolam pemandian suci.",
        "Pengunjung dipersilakan untuk berpartisipasi dalam ritual tersebut. Anda perlu mengenakan kain sarung — tersedia disewakan di pintu masuk — dan membawa handuk. Sudah menjadi kebiasaan untuk bergerak perlahan dan penuh hormat melalui kolam-kolam tersebut, berhenti di setiap pancoran sebagai bagian dari penyucian spiritual. Suasananya sangat menyentuh, terutama di pagi hari sebelum keramaian datang.",
        "Pura ini terletak di Tampaksiring, sekitar 26km dari caSabama, sekitar 45 menit berkendara. Kunjungan pagi hari sangat direkomendasikan untuk menghindari terik siang hari dan rombongan wisata. Tim kami dapat membantu mengatur transportasi dan panduan apa pun yang Anda butuhkan sebelum kunjungan.",
      ],
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
    detailParagraphsI18n: {
      en: [
        "Mount Batur is an active stratovolcano rising 1,717 metres above sea level in the Kintamani highlands of Bali. The caldera hike from Songan village offers a less-crowded alternative to the popular sunrise trek, with dramatic views across the vast crater lake and surrounding lava fields. On a clear day, the silhouette of Mount Agung dominates the eastern horizon.",
        "The hike begins from behind Pura Ulun Danu Batur and ascends steadily for around 45 minutes to the crater rim. The terrain is volcanic — loose rock and ash underfoot — so sturdy shoes are essential. From the rim, you can explore along the caldera edge, peering into the inner craters and steaming vents. The descent follows a different path and takes a similar amount of time.",
        "We recommend departing caSabama by 6am to reach the trailhead by around 7:30am, completing the hike before the midday heat sets in. Bring plenty of water, sunscreen, and a light jacket for the summit. Our team can arrange a local guide and transport for the full day outing.",
      ],
      id: [
        "Gunung Batur adalah stratovolkano aktif yang menjulang setinggi 1.717 meter di atas permukaan laut di dataran tinggi Kintamani, Bali. Pendakian kaldera dari desa Songan menawarkan alternatif yang lebih sepi dibandingkan pendakian matahari terbit yang populer, dengan pemandangan dramatis melintasi danau kawah yang luas dan ladang lava di sekitarnya. Pada hari yang cerah, siluet Gunung Agung mendominasi cakrawala timur.",
        "Pendakian dimulai dari belakang Pura Ulun Danu Batur dan menanjak secara bertahap selama sekitar 45 menit hingga ke tepi kawah. Medannya berupa bebatuan vulkanik — batu lepas dan abu di bawah kaki — sehingga sepatu yang kokoh sangat penting. Dari tepi kawah, Anda dapat menjelajahi sepanjang tepi kaldera, mengintip ke dalam kawah bagian dalam dan lubang-lubang yang mengeluarkan uap. Pendakian turun mengikuti jalur yang berbeda dan membutuhkan waktu yang serupa.",
        "Kami merekomendasikan berangkat dari caSabama pukul 06.00 untuk mencapai titik awal sekitar pukul 07.30, menyelesaikan pendakian sebelum terik siang hari. Bawa banyak air, tabir surya, dan jaket ringan untuk di puncak. Tim kami dapat mengatur pemandu lokal dan transportasi untuk perjalanan seharian penuh.",
      ],
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
    detailParagraphsI18n: {
      en: [
        "The Hidden Canyon at Beji Guwang is one of Bali's best-kept secrets, carved through ancient rock by the Oos River over thousands of years. Located just 10 minutes from caSabama in the village of Sukawati, it is remarkably close yet feels like a world apart. The narrow canyon walls rise steeply overhead, creating a dramatic natural corridor draped in moss and ferns.",
        "The trek involves wading through shallow river water and navigating narrow passages between the canyon walls, so waterproof shoes or sandals with good grip are strongly advised. A local guide will lead you through safely, pointing out the most photogenic spots along the way. The active section of the hike takes approximately one hour in each direction, with the total outing lasting around three hours.",
        "This experience is highly weather dependent — after heavy rain the water level rises and the trek may be closed for safety. We recommend checking conditions the evening before and aiming for a morning slot. Our staff can arrange a guide and confirm conditions on your behalf.",
      ],
      id: [
        "Ngarai Tersembunyi di Beji Guwang adalah salah satu rahasia terbaik Bali, terukir melalui bebatuan purba oleh Sungai Oos selama ribuan tahun. Terletak hanya 10 menit dari caSabama di desa Sukawati, jaraknya sangat dekat namun terasa seperti dunia yang berbeda. Dinding ngarai yang sempit menjulang tinggi di atas kepala, menciptakan koridor alam yang dramatis dengan lumut dan pakis yang menggantung.",
        "Perjalanan ini melibatkan berjalan menembus air sungai yang dangkal dan menavigasi lorong-lorong sempit di antara dinding ngarai, sehingga sepatu tahan air atau sandal dengan cengkeraman yang baik sangat disarankan. Pemandu lokal akan memimpin Anda dengan aman, menunjukkan spot-spot paling fotogenik di sepanjang jalan. Bagian aktif pendakian membutuhkan sekitar satu jam pergi dan pulang, dengan total perjalanan sekitar tiga jam.",
        "Pengalaman ini sangat bergantung pada cuaca — setelah hujan lebat, permukaan air naik dan trek mungkin ditutup demi keselamatan. Kami menyarankan untuk memeriksa kondisi pada malam sebelumnya dan bertujuan untuk slot pagi. Staf kami dapat mengatur pemandu dan mengkonfirmasi kondisi atas nama Anda.",
      ],
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
    detailParagraphsI18n: {
      en: [
        "Bali has a vibrant and diverse arts scene, and spending a morning or afternoon exploring its galleries is a deeply rewarding experience. Our favourite nearby destination is The Art Lounge in Gianyar, a beautifully designed space that brings together traditional Balinese painting, contemporary sculpture, and artisan crafts under one roof. The gallery also serves locally inspired food, making it a perfect half-day outing.",
        "Beyond The Art Lounge, the nearby town of Ubud is Bali's cultural heartland and home to dozens of galleries ranging from the Agung Rai Museum of Art (ARMA) to smaller independent studios tucked along Monkey Forest Road and Jalan Hanoman. Many galleries offer demonstrations by working artists and the chance to purchase original works directly.",
        "We recommend pairing a gallery visit with a walk through central Ubud — browsing the market, exploring the Palace grounds, and stopping for lunch at one of the many excellent warungs. The drive from caSabama to Ubud takes around 30 minutes. Our team is happy to suggest a personalised itinerary based on your interests.",
      ],
      id: [
        "Bali memiliki scene seni yang semarak dan beragam, dan menghabiskan pagi atau sore hari menjelajahi galeri-galerinya adalah pengalaman yang sangat memuaskan. Destinasi favorit kami di dekat sini adalah The Art Lounge di Gianyar, sebuah ruang yang dirancang dengan indah yang memadukan lukisan Bali tradisional, patung kontemporer, dan kerajinan pengrajin di bawah satu atap. Galeri ini juga menyajikan makanan berbahan lokal, menjadikannya perjalanan setengah hari yang sempurna.",
        "Di luar The Art Lounge, kota Ubud di dekatnya adalah jantung budaya Bali dan rumah bagi puluhan galeri mulai dari Agung Rai Museum of Art (ARMA) hingga studio independen yang lebih kecil tersembunyi di sepanjang Monkey Forest Road dan Jalan Hanoman. Banyak galeri menawarkan demonstrasi oleh seniman yang bekerja dan kesempatan untuk membeli karya asli langsung.",
        "Kami merekomendasikan untuk menggabungkan kunjungan galeri dengan jalan-jalan di pusat Ubud — menelusuri pasar, menjelajahi area Istana, dan mampir makan siang di salah satu warung yang sangat baik. Perjalanan dari caSabama ke Ubud membutuhkan sekitar 30 menit. Tim kami dengan senang hati menyarankan itinerari yang dipersonalisasi berdasarkan minat Anda.",
      ],
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
    detailParagraphsI18n: {
      en: [
        "Tukad Cepung Waterfall is one of Bali's most enchanting natural wonders. Unlike most waterfalls, it is hidden entirely within a cave formed by towering cliff faces, meaning the first sight of it — a curtain of water catching shafts of light through a gap in the rock above — feels truly magical. The waterfall drops approximately 15 metres into a shallow pool below.",
        "Reaching the waterfall requires a 20-minute forest trail followed by a short wade through the river that flows through the base of the canyon. The path is well-marked but involves stepping over rocks and through ankle-deep water, so wear shoes you don't mind getting wet. The canyon is narrow and cool, a welcome contrast to the Balinese heat.",
        "Tukad Cepung is located near Bangli, approximately 24km from caSabama — around a 40-minute drive. The best light inside the cave is between 9am and 11am when the sun is at the right angle to filter through the crack in the cliff above. We recommend arriving early before the crowds. Our team can arrange transport and a local guide.",
      ],
      id: [
        "Air Terjun Tukad Cepung adalah salah satu keajaiban alam paling memesona di Bali. Tidak seperti kebanyakan air terjun, air terjun ini tersembunyi sepenuhnya di dalam gua yang terbentuk oleh tebing-tebing yang menjulang tinggi, artinya pemandangan pertama kali — tirai air yang menangkap berkas cahaya melalui celah di bebatuan di atas — terasa benar-benar magis. Air terjun ini jatuh sekitar 15 meter ke dalam kolam dangkal di bawahnya.",
        "Mencapai air terjun memerlukan jalur hutan selama 20 menit diikuti dengan sedikit berjalan menerobos sungai yang mengalir melalui dasar ngarai. Jalurnya sudah ditandai dengan baik tetapi melibatkan melangkahi bebatuan dan melalui air setinggi pergelangan kaki, jadi kenakan sepatu yang tidak masalah jika basah. Ngarainya sempit dan sejuk, kontras yang menyambut di bawah terik Bali.",
        "Tukad Cepung terletak di dekat Bangli, sekitar 24km dari caSabama — sekitar 40 menit berkendara. Cahaya terbaik di dalam gua adalah antara pukul 09.00 dan 11.00 ketika matahari berada pada sudut yang tepat untuk menyaring melalui retakan di tebing di atas. Kami merekomendasikan untuk tiba lebih awal sebelum keramaian. Tim kami dapat mengatur transportasi dan pemandu lokal.",
      ],
    },
  },
];

function resolveLocale(locale: string): "en" | "id" {
  return locale === "id" ? "id" : "en";
}

export async function getExperiences(locale: string): Promise<Experience[]> {
  const loc = resolveLocale(locale);
  return RAW.map(({ nameI18n, descriptionI18n, detailParagraphsI18n, ...rest }) => ({
    ...rest,
    name: nameI18n[loc],
    description: descriptionI18n[loc],
  }));
}

export async function getExperienceDetail(slug: string, locale: string): Promise<ExperienceDetail | null> {
  const raw = RAW.find((e) => e.id === slug);
  if (!raw) return null;
  const loc = resolveLocale(locale);
  const { nameI18n, descriptionI18n, detailParagraphsI18n, ...rest } = raw;
  return {
    ...rest,
    name: nameI18n[loc],
    description: descriptionI18n[loc],
    detailParagraphs: detailParagraphsI18n[loc],
  };
}
