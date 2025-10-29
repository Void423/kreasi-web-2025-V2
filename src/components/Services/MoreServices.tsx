"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

interface MoreServicesProps {
  src: string | StaticImageData;
  title: string;
  item: any;
  desc: string;
}

export default function MoreServices({
  src,
  title,
  desc,
  item,
}: MoreServicesProps) {
  return (
    <div className="w-full md:w-[42rem]">
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
                {item.title}
              </h2>
              <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
                {item.Desc}
              </p>
            </div>

            {/* Hover Accent */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-300" />
          </div>
        </DialogTrigger>

        {/* === Dialog Content === */}
        <DialogContent className="p-0 overflow-hidden border-none bg-[#0B0C10]/95 backdrop-blur-xl text-white">
          <DialogHeader className="p-6 border-b border-white/10">
            <DialogTitle className="text-2xl font-semibold tracking-tight">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md-[40rem] gap-8 p-6 md:p-10">
            {/* Image Section */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={title}
                width={640}
                height={360}
                className="w-full  h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className="text-[#B0B0B0] text-base leading-relaxed">{desc}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
