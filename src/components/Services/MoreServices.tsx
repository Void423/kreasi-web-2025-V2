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
            <div className="w-full md:w-1/2  p-2">
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
        <DialogContent className="p-0 overflow-hidden border-none bg-[#0B0C10]/95 backdrop-blur-xl text-white max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[90vw] max-h-[95vh] overflow-y-auto">
          <DialogHeader className="p-4 sm:p-6 border-b border-white/10">
            <DialogTitle className="text-xl sm:text-2xl font-semibold tracking-tight">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row h-full max-h-[85vh] overflow-hidden">
            {/* Left Section (Fixed/Sticky) - Main Preview & Text */}
            <div className="w-full md:w-2/3 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Active Image Section */}
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/20">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={activeItem.src}
                      alt={activeItem.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    {activeItem.title}
                  </h1>
                  <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-light">
                    {activeItem.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section (Scrollable) - Masonry Grid Gallery */}
            <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-white/10 bg-black/20 overflow-y-auto p-4 custom-scrollbar">
              <div className="columns-2 gap-3 space-y-3">
                {serviceData.data.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="break-inside-avoid mb-3 rounded-xl overflow-hidden cursor-pointer relative group"
                      onClick={() => setActiveItemIndex(index)}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 ${
                          activeItemIndex === index
                            ? "opacity-100 ring-2 ring-primary ring-inset"
                            : "opacity-0 group-hover:opacity-40"
                        }`}
                      >
                        {activeItemIndex === index && (
                          <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
