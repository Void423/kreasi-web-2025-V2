"use client";

import React, { useState } from "react";
import { MoveUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { ServicesItems } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface ItemPosition {
  position?: string;
}

interface MoreServicesProps {
  src: string | StaticImageData;
  title: string;
  item: ItemPosition;
  desc: string;
  serviceId: number;
}

export default function MoreServices({
  src,
  title,
  desc,
  item,
  serviceId = 0,
}: MoreServicesProps) {
  // Mendapatkan data service yang sesuai berdasarkan serviceId
  const serviceData =
    ServicesItems.find((item) => item.id === serviceId) || ServicesItems[0];

  // State untuk menyimpan data gambar yang aktif
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  // Data gambar yang aktif
  const activeItem = serviceData.data[activeItemIndex];

  return (
    <div className=" flex flex-col  w-full md:max-w-[180vh]  ">
      <Dialog>
        {/* === Trigger (Card Preview) === */}
        <div
          className={`flex flex-col ${
            item.position === "left" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center  gap-4 md:gap-8 `}
        >
          {/* Image Section */}
          <DialogTrigger asChild>
            <div className="w-2xl  p-2">
              <div className="relative group h-[250px] md:h-[300px] rounded-lg hover:scale-[115%] shadow-lg transition-all duration-500 ease-in-out will-change-transform">
                {/* Gambar */}
                <Image
                  src={src}
                  width={800}
                  height={500}
                  alt="gambar"
                  className="object-cover object-center   w-full h-full rounded-lg  transform transition-transform duration-300 ease-in-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 rounded-lg  group-hover:opacity-100 transition-opacity duration-800 flex items-end justify-end p-4">
                  <Button
                    variant="default"
                    className={`bg-primary hover:bg-primary/90 text-sm md:text-base z-10 cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out`}
                  >
                    View Project
                    <MoveUpRight className="ml-2 text-xl" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogTrigger>

          {/* Text Section */}
          <div
            className={`flex flex-col justify-center text-center ${
              item.position === "left"
                ? "md:text-left md:pl-4"
                : "md:text-right md:pr-4"
            } mt-4 md:mt-0 w-full md:w-1/2`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-white mb-2 md:mb-3 leading-tight">
              {title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#B0B0B0] leading-relaxed">
              {desc}
            </p>
          </div>
        </div>

        {/* === Dialog Content === */}
        <DialogContent className="p-0 overflow-hidden border-none bg-[#0B0C10]/95 backdrop-blur-xl text-white max-w-[98vw] sm:max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] max-h-[95vh] overflow-y-auto">
          <DialogHeader className="p-4 sm:p-6 border-b border-white/10">
            <DialogTitle className="text-xl sm:text-2xl font-semibold tracking-tight">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            {/* Main Content Section (Combined Image and Text) */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Image Section */}
                <div className="w-full rounded-xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    // width={800}
                    // height={400}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>

                {/* Text Section */}
                <div className="w-full space-y-2 sm:space-y-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    {activeItem.title}
                  </h1>
                  <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                    {activeItem.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Pinterest-like Photo Gallery Section */}
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden mt-4 md:mt-0">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full max-h-[400px] md:max-h-[500px]">
                {/* Gambar utama tinggi (dominant) */}
                {serviceData.data[0] && (
                  <div
                    className="col-span-2 rounded-2xl overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] cursor-pointer relative group"
                    onClick={() => setActiveItemIndex(0)}
                  >
                    <Image
                      src={serviceData.data[0].src}
                      alt={serviceData.data[0].title}
                      // width={500}
                      // height={250}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                        activeItemIndex === 0
                          ? "opacity-50"
                          : "opacity-0 group-hover:opacity-30"
                      }`}
                    >
                      {activeItemIndex === 0 && (
                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary border-2 border-white"></div>
                      )}
                    </div>
                  </div>
                )}

                {/* Dua gambar kecil di bawah */}
                {serviceData.data[1] && (
                  <div
                    className="rounded-2xl overflow-hidden h-[80px] sm:h-[100px] md:h-[120px] cursor-pointer relative group"
                    onClick={() => setActiveItemIndex(1)}
                  >
                    <Image
                      src={serviceData.data[1].src}
                      alt={serviceData.data[1].title}
                      // width={250}
                      // height={120}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                        activeItemIndex === 1
                          ? "opacity-50"
                          : "opacity-0 group-hover:opacity-30"
                      }`}
                    >
                      {activeItemIndex === 1 && (
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 border-white"></div>
                      )}
                    </div>
                  </div>
                )}

                {serviceData.data[2] && (
                  <div
                    className="rounded-2xl overflow-hidden h-[80px] sm:h-[100px] md:h-[120px] cursor-pointer relative group"
                    onClick={() => setActiveItemIndex(2)}
                  >
                    <Image
                      src={serviceData.data[2].src}
                      alt={serviceData.data[2].title}
                      // width={250}
                      // height={120}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                        activeItemIndex === 2
                          ? "opacity-50"
                          : "opacity-0 group-hover:opacity-30"
                      }`}
                    >
                      {activeItemIndex === 2 && (
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 border-white"></div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
