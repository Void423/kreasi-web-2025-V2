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
import Billboard from "@/assets/images/Billboard_Homepage.jpg";
import Neonbox from "@/assets/images/app-billboard.jpg";
import Banner from "@/assets/images/Banner.jpg";
// Our Works
import ourWorks1 from "@/assets/images/Our Works/Our-Works (1).jpg";
import ourWorks2 from "@/assets/images/Our Works/Our-Works (2).jpg";
import ourWorks3 from "@/assets/images/Our Works/Our-Works (3).jpg";
import ourWorks4 from "@/assets/images/Our Works/Our-Works (4).jpg";
import { StaticImageData } from "next/image";

// services
import gambar01 from "@/assets/images/NeonBox.jpg";
import gambar02 from "@/assets/images/billdoard (1).jpg";
import gambar03 from "@/assets/images/billdoard (2).jpg";

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
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique gravida risus, non commodo magna varius vitae. Pellentesque eget feugiat augue, eget ultrices tortor.",
      },
      {
        id: 2,
        src: gambar02,
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique gravida risus, non commodo magna varius vitae. Pellentesque eget feugiat augue, eget ultrices tortor.",
      },
      {
        id: 3,
        src: gambar03,
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique gravida risus, non commodo magna varius vitae. Pellentesque eget feugiat augue, eget ultrices tortor.",
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        src: ourWorks1,
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique gravida risus, non commodo magna varius vitae. Pellentesque eget feugiat augue, eget ultrices tortor.",
      },
      {
        id: 2,
        src: ourWorks2,
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique gravida risus, non commodo magna varius vitae. Pellentesque eget feugiat augue, eget ultrices tortor.",
      },
      {
        id: 3,
        src: ourWorks3,
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique gravida risus, non commodo magna varius vitae. Pellentesque eget feugiat augue, eget ultrices tortor.",
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

export const cardServices = [
  {
    title: "Premium Billboard & Street Sign Installation",
    Desc: "Kami menyediakan layanan pemasangan baliho (billboard) berkualitas tinggi di area strategis seperti Lake Angelita. Hadirkan pesan brand Anda dengan visibilitas maksimal di ruang publik.",
    position: "right",
    image: Billboard,
  },
  {
    title: "Neon Box & Digital Printing Solutions",
    Desc: "Tingkatkan daya tarik bisnis Anda dengan neon box terang dan desain mencolok, dilengkapi dengan layanan cetak digital (printing) berkualitas untuk berbagai kebutuhan promosi.",
    position: "left",
    image: Neonbox,
  },
  {
    title: "Pemasangan Spanduk",
    Desc: "Tingkatkan daya tarik bisnis Anda dengan neon box terang dan desain mencolok, dilengkapi dengan layanan cetak digital (printing) berkualitas untuk berbagai kebutuhan promosi.",
    position: "right",
    image: Banner,
  },
];

export const OurWorks = [
  {
    image: ourWorks4,
    title: "Billboard Sampoerna ",
    address: "Jl. Sudirman No. 120, Jakarta Pusat, DKI Jakarta",
  },
  {
    image: Neonbox,
    title: "Neon Box Bank BSI",
    address: "Jl. Asia Afrika No. 22, Bandung, Jawa Barat",
  },
  {
    image: Banner,
    title: "Spanduk Puskesmas Kurai",
    address: "Jl. Adisucipto No. 88, Pontianak, Kalimantan Barat",
  },
  {
    image: ourWorks3,
    title: "Billboard Indomie",
    address: "Jl. Diponegoro No. 14, Surabaya, Jawa Timur",
  },
  {
    image: ourWorks1,
    title: "Neon Box Alfamart",
    address: "Jl. Gajah Mada No. 9, Medan, Sumatera Utara",
  },
  {
    image: ourWorks2,
    title: "Banner Kampus UGM",
    address: "Jl. Kaliurang Km. 5, Sleman, Yogyakarta",
  },
];
