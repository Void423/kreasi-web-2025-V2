import Client1 from "@/assets/images/logo-bsi.png";
import Client2 from "@/assets/images/logo-gudang-garam.png";
import Client3 from "@/assets/images/logo-honda.png";
import Client4 from "@/assets/images/logo-lenovo.png";
import Client5 from "@/assets/images/logo-sampoerna.png";
import Client6 from "@/assets/images/logo-telkomsel.png";
import Client7 from "@/assets/images/logo-bank-mandiri.png";
import Client8 from "@/assets/images/logo-bank-bni.png";
import Client9 from "@/assets/images/logo-epson.png";
import Client10 from "@/assets/images/logo-rokok-camel copy.png";
import Client11 from "@/assets/images/logo-djarum.png";
import Client12 from "@/assets/images/kredivo-seeklogo.png";
import Client13 from "@/assets/images/logo-class-mild.png";
// card services
import Billboard from "@/assets/images/baliho-missGlam.jpg";
import Neonbox from "@/assets/images/Our Works/neonbox-posIndonesia.jpg";
import Banner from "@/assets/images/Our Works/im3-printing.jpg";
// Our Works
import ourWorks1 from "@/assets/images/Our Works/1c.jpg";
import ourWorks2 from "@/assets/images/Our Works/baliho-pegadaian.jpg";
import ourWorks4 from "@/assets/images/Our Works/61.jpg";
import ourWorks5 from "@/assets/images/Our Works/52.jpg";
import ourWorks6 from "@/assets/images/Our Works/21.jpg";
import ourWorks3 from "@/assets/images/Our Works/ourWorks-honda.jpg";
import { StaticImageData } from "next/image";

// services
/* Billboard */
import gambar01 from "@/assets/images/baliho-missGlam.jpg";
import gambar02 from "@/assets/images/baliho-konvermex.jpg";
import gambar03 from "@/assets/images/baliho-oxygen.jpg";
/* neonBox */
import gambar1 from "@/assets/images/PNT/PNT (1).jpg";
import gambar2 from "@/assets/images/PNT/pnt-jariPerabot.jpg";
import gambar3 from "@/assets/images/PNT/PNT (3).jpg";
/* digital promosi */
import MediaPromosi from "@/assets/images/38.jpg";
import MediaPromosi1 from "@/assets/images/36a.jpg";
import MediaPromosi2 from "@/assets/images/67.jpg";
export interface ServicesItem {
  id: number;
  data: {
    id: number;
    src: string | StaticImageData;
    title: string;
    desc: string;
  }[];
}
export const ServicesItems: ServicesItem[] = [
  {
    id: 1,
    data: [
      {
        id: 1,
        src: gambar01,
        title: "Billboard Miss Glam",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 2,
        src: gambar02,
        title: "Billboard Konvermex",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 3,
        src: gambar03,
        title: "Billboard Oxygen",
        desc: "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 4,
        src: gambar01,
        title: "Billboard Miss Glam 2",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 5,
        src: gambar02,
        title: "Billboard Konvermex 2",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 6,
        src: gambar03,
        title: "Billboard Oxygen 2",
        desc: "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 7,
        src: gambar01,
        title: "Billboard Miss Glam 3",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 8,
        src: gambar02,
        title: "Billboard Konvermex 3",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 9,
        src: gambar03,
        title: "Billboard Oxygen 3",
        desc: "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 10,
        src: gambar01,
        title: "Billboard Miss Glam 4",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 11,
        src: gambar03,
        title: "Billboard Oxygen 2",
        desc: "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 12,
        src: gambar01,
        title: "Billboard Miss Glam 3",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 13,
        src: gambar02,
        title: "Billboard Konvermex 3",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 14,
        src: gambar03,
        title: "Billboard Oxygen 3",
        desc: "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
      {
        id: 15,
        src: gambar01,
        title: "Billboard Miss Glam 4",
        desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        src: gambar1,
        title: "Papan Nama Toko Telkomsel",
        desc: "Papan nama toko dengan posisi horizontal dan tipis",
      },
      {
        id: 2,
        src: gambar2,
        title: "Papan Nama Toko Jati Perabot",
        desc: "Papan nama toko Jati Perabotan.",
      },
      {
        id: 3,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 4,
        src: gambar1,
        title: "Papan Nama Toko Telkomsel",
        desc: "Papan nama toko dengan posisi horizontal dan tipis",
      },
      {
        id: 5,
        src: gambar2,
        title: "Papan Nama Toko Jati Perabot",
        desc: "Papan nama toko Jati Perabotan.",
      },
      {
        id: 6,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 7,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 8,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 9,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 10,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 11,
        src: gambar2,
        title: "Papan Nama Toko Jati Perabot",
        desc: "Papan nama toko Jati Perabotan.",
      },
      {
        id: 12,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 13,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 14,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 15,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        id: 1,
        src: gambar1,
        title: "Papan Nama Toko Telkomsel",
        desc: "Papan nama toko dengan posisi horizontal dan tipis",
      },
      {
        id: 2,
        src: gambar2,
        title: "Papan Nama Toko Jati Perabot",
        desc: "Papan nama toko Jati Perabotan.",
      },
      {
        id: 3,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 4,
        src: gambar1,
        title: "Papan Nama Toko Telkomsel",
        desc: "Papan nama toko dengan posisi horizontal dan tipis",
      },
      {
        id: 5,
        src: gambar2,
        title: "Papan Nama Toko Jati Perabot",
        desc: "Papan nama toko Jati Perabotan.",
      },
      {
        id: 6,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 7,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 8,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 9,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 10,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 11,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 12,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 13,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 14,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
      {
        id: 15,
        src: gambar3,
        title: "Etalase Toko",
        desc: "Etalase toko dilengkapi dengan kaca etalase. Pada bagian depan etalase juga ditambahkan branding OPPO.",
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        id: 1,
        src: MediaPromosi,
        title: "Ramzi Cell",
        desc: "Produksi Spanduk Indosat untuk PNT Toko",
      },
      {
        id: 2,
        src: MediaPromosi1,
        title: "R&J CELL",
        desc: "Produksi Spanduk Indosat ",
      },
      {
        id: 3,
        src: MediaPromosi2,
        title: "Warna Komunika ",
        desc: "Produksi Spanduk Indosat untuk PNT Toko",
      },
    ],
  },
];

export const navItem = [
  {
    menu: "Home",
    link: "/",
  },
  {
    menu: "Layanan",
    link: "/services",
  },
  {
    menu: "About Us",
    link: "/about-us",
  },
];

export const cardChooseUs = [
  {
    title: "Strategi Visual yang Berbasis Data",
    description:
      "Setiap billboard, baliho, maupun aset digital kami rancang berdasarkan riset dan data audiens. ",
  },
  {
    title: "Eksekusi Skala Besar dengan Standar Tinggi",
    description:
      "penempatan billboard premium hingga material cetak berkualitas tinggi, semua kami kelola secara profesional.",
  },
  {
    title: "Desain Konsisten di Semua Media",
    description:
      "Tim kreatif kami memahami pentingnya keselarasan visual untuk menciptakan dampak jangka panjang.",
  },
];
export const cardServices = [
  {
    title: "Billboard, Baliho & Street Sign Advertising",
    Desc: "Kreasi Bukittinggi menyediakan layanan pembuatan dan pemasangan billboard, baliho, dan street sign di lokasi strategis. Solusi media promosi outdoor dengan visibilitas tinggi untuk meningkatkan brand awareness dan menjangkau audiens secara maksimal.",
    position: "right",
    image: Billboard,
  },
  {
    title: "Neon Box, Papan Nama Toko (PNT) & Produksi Advertising",
    Desc: "Sebagai penyedia jasa advertising terpercaya, Kreasi Bukittinggi melayani pembuatan neon box, papan nama toko (PNT), huruf timbul, dan berbagai media advertising custom dengan desain profesional dan material berkualitas tinggi.",
    position: "left",
    image: Neonbox,
  },
  {
    title: "Digital Printing & Media Promosi",
    Desc: "Kreasi Bukittinggi menghadirkan layanan digital printing berkualitas tinggi untuk spanduk, banner, backdrop, stiker, dan berbagai kebutuhan media promosi. Hasil cetak tajam, tahan lama, dan siap mendukung aktivitas marketing bisnis Anda.",
    position: "right",
    image: Banner,
  },
];
export const logoClient = [
  {
    path: Client1,
    alt: "Bank BSI",
  },
  {
    path: Client2,
    alt: "Gudang Garam",
  },
  {
    path: Client3,
    alt: "Honda",
  },
  {
    path: Client4,
    alt: "Lenovo",
  },
  {
    path: Client5,
    alt: "Sampoerna",
  },
  {
    path: Client6,
    alt: "Telkomsel",
  },
  {
    path: Client7,
    alt: "Bank Mandiri",
  },
  {
    path: Client8,
    alt: "Bank BNI",
  },
  {
    path: Client9,
    alt: "EPSON",
  },
  {
    path: Client10,
    alt: "Camel",
  },
  {
    path: Client11,
    alt: "Djarum",
  },
  {
    path: Client12,
    alt: "Kredivo",
  },
  {
    path: Client13,
    alt: "Class Mild",
  },
];

export const FooterItem = [
  {
    title: "Services",
    subItems: [
      { label: "Billboard", link: "#" },
      { label: "Banner", link: "#" },
      { label: "Media Printing", link: "#" },
    ],
  },
  {
    title: "Legal",
    subItems: [
      { label: "Privacy Policy", link: "" },
      { label: "Terms & Condition", link: "" },
      { label: "Disclaimer", link: "" },
    ],
  },
  {
    title: "Contact",
    subItems: [
      {
        label: "Alamat",
        desc: "Jl. Soekarno Hatta No.79, Garegeh, Bukittinggi, Kota Bukittinggi, Sumatera Barat 26127",
        link: "#",
      },
      { label: "Whatsapp", desc: "+628134231232", link: "#" },
      { label: "Gmail", desc: "citramedia@kreasi.com", link: "#" },
    ],
  },
];

export const OurWorks = [
  {
    image: ourWorks1,
    title: "Billboard Asuransi Sinarmas. ",
    address: "Jl. Ahmad Karim No.2d, Benteng Ps. Atas Kota Bukittinggi",
  },
  {
    image: ourWorks2,
    title: "Billboard Pengadaian",
    address: "Jl. Raya Padang Panjang - Bukittinggi,  Kota Bukittinggi",
  },
  {
    image: ourWorks3,
    title: "Billboard Honda",
    address: "Jl. Ahmad Yani 148, Benteng Ps. Atas Kota Bukittinggi",
  },
  {
    image: ourWorks4,
    title: "Billboard Telkomsel",
    address:
      "Jl. Raya Padang Panjang - Bukittinggi, Bukit Cangang Kayu Ramang Kota Bukittinggi",
  },
  {
    image: ourWorks5,
    title: "Neonbox Bank Syariah Bukopin",
    address: "Jl. Perintis Kemerdekaan 30-8, Aur Tajungkang Kota Bukittinggi",
  },
  {
    image: ourWorks6,
    title: "Billboard Oxygen",
    address:
      "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kabupaten Agam",
  },
];
