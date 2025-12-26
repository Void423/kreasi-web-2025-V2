"use client";

import Carousel from "@/components/ui/carousel";
import gambar1 from "@/assets/images/Billboard_Homepage.jpg";
import gambar2 from "@/assets/images/billdoard (1).jpg";
import gambar3 from "@/assets/images/billdoard (2).jpg";
export const CarouselDemo = () => {
  const slideData = [
    {
      title: "Street Sign provider Indosat.",
      button: "Jelajahi Lokasi",
      desc: "Jl. Raya Padang Panjang - Bukittinggi, Belakang Balok, Kec. Aur Birugo Tigo Baleh, Kota Bukittinggi, Sumatera Barat 26181",
      src: gambar1,
    },
    {
      title: "Billboard Indofood.",
      button: "Jelajahi Lokasi",
      desc: "Jl. Sumbar-Riau No.Km. 19, Air Putih Lubuk Bangku, Kec. Harau, Kabupaten Lima Puluh Kota, Sumatera Barat 26271",
      src: gambar2,
    },
    {
      title: "Baliho Oppo ",
      button: "Jelajahi Lokasi",
      desc: "Jl. Ahmad Yani No.1, Benteng Ps. Atas, Kec. Guguk Panjang, Kota Bukittinggi, Sumatera Barat 26136",
      src: gambar3,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};
