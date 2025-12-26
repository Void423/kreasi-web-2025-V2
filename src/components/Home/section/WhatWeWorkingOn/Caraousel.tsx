"use client";

import Carousel from "@/components/ui/carousel";
import gambar1 from "@/assets/images/oppo-spanduk.jpg";
import gambar2 from "@/assets/images/baliho-yamaha.jpg";
import gambar3 from "@/assets/images/baliho-missGlam.jpg";
import gambar4 from "@/assets/images/baliho-konvermex.jpg";
import gambar5 from "@/assets/images/baliho-oxygen.jpg";
export const CarouselDemo = () => {
  const slideData = [
    {
      title: "Street Sign provider Indosat.",
      button: "Jelajahi Lokasi",
      desc: "Jl. Raya Padang Panjang - Bukittinggi, Belakang Balok, Kec. Aur Birugo Tigo Baleh, Kota Bukittinggi, Sumatera Barat 26181",
      src: gambar1,
    },
    {
      title: "Billboard Yamaha",
      button: "Jelajahi Lokasi",
      desc: "Jl. Raya Padang Panjang - Bukittinggi 92, Taluak Ampek Suku, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      src: gambar2,
    },
    {
      title: "Billboard Miss Glam",
      button: "Jelajahi Lokasi",
      desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      src: gambar3,
    },
    {
      title: "Billboard Konvermex",
      button: "Jelajahi Lokasi",
      desc: "Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      src: gambar4,
    },
    {
      title: "Billboard Oxygen",
      button: "Jelajahi Lokasi",
      desc: "Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam, Sumatera Barat 26181",
      src: gambar5,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};
