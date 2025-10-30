"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { ServicesItem, ServicesItems } from "@/lib/data";

interface MoreServicesProps {
  src: string | StaticImageData;
  title: string;
  item: any;
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
  const serviceData = ServicesItems.find(item => item.id === serviceId) || ServicesItems[0];
  
  // State untuk menyimpan data gambar yang aktif
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  
  // Data gambar yang aktif
  const activeItem = serviceData.data[activeItemIndex];
  
  return (
    <div className="w-full md:w-[40vw]">
      <Dialog>
        {/* === Trigger (Card Preview) === */}
        <DialogTrigger asChild>
          <div
            className={`group relative flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl bg-[#0B0C10]/50 hover:bg-[#101217]/80 border border-white/10 transition-all duration-300 cursor-pointer backdrop-blur-md ${
              item.position === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={title}
                width={640}
                height={360}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center text-left md:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white mb-3 leading-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
                {desc}
              </p>
            </div>

            {/* Hover Accent */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-300" />
          </div>
        </DialogTrigger>

        {/* === Dialog Content === */}
        <DialogContent className="p-0 overflow-hidden border-none bg-[#0B0C10]/95 backdrop-blur-xl text-white max-w-[95vw] md:max-w-[90vw] lg:max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="p-6 border-b border-white/10">
            <DialogTitle className="text-2xl font-semibold tracking-tight">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
            {/* Main Content Section (Combined Image and Text) */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                {/* Image Section */}
                <div className="w-full rounded-xl overflow-hidden h-[300px] md:h-[350px]">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full space-y-4">
                  <h1 className="text-3xl font-semibold">
                    {activeItem.title}
                  </h1>
                  <p className="text-[#B0B0B0] text-base leading-relaxed">
                    {activeItem.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Pinterest-like Photo Gallery Section */}
            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-3 h-full max-h-[500px]">
                {/* Gambar utama tinggi (dominant) */}
                {serviceData.data[0] && (
                  <div
                    className="col-span-2 rounded-2xl overflow-hidden h-[250px] cursor-pointer relative group"
                    onClick={() => setActiveItemIndex(0)}
                  >
                    <Image
                      src={serviceData.data[0].src}
                      alt={serviceData.data[0].title}
                      width={500}
                      height={250}
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
                        <div className="w-6 h-6 rounded-full bg-primary border-2 border-white"></div>
                      )}
                    </div>
                  </div>
                )}

                {/* Dua gambar kecil di bawah */}
                {serviceData.data[1] && (
                  <div
                    className="rounded-2xl overflow-hidden h-[120px] cursor-pointer relative group"
                    onClick={() => setActiveItemIndex(1)}
                  >
                    <Image
                      src={serviceData.data[1].src}
                      alt={serviceData.data[1].title}
                      width={250}
                      height={120}
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
                        <div className="w-4 h-4 rounded-full bg-primary border-2 border-white"></div>
                      )}
                    </div>
                  </div>
                )}
                
                {serviceData.data[2] && (
                  <div
                    className="rounded-2xl overflow-hidden h-[120px] cursor-pointer relative group"
                    onClick={() => setActiveItemIndex(2)}
                  >
                    <Image
                      src={serviceData.data[2].src}
                      alt={serviceData.data[2].title}
                      width={250}
                      height={120}
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
                        <div className="w-4 h-4 rounded-full bg-primary border-2 border-white"></div>
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
