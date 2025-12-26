"use client";
import React from "react";
import { CarouselDemo } from "./Caraousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const WhatWeWorking = () => {
  const sectionWorking = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(sectionWorking.current?.children || []),
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionWorking.current,
            toggleActions: "play none none reset",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionWorking);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div className="bg-[#0F2166]">
      <div
        ref={sectionWorking}
        className="flex flex-col items-center justify-center min-h-screen   py-10 md:py-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[57px] font-bold text-white">
          What Are We Working On
        </h1>
        <CarouselDemo />
        <p className="text-[#B4B4B4] max-w-7xl text-center p-6 md:p-0">
          Kami adalah penyedia jasa advertising profesional yang melayani
          pembuatan baliho, spanduk, neon box, billboard, dan media promosi
          outdoor lainnya. Solusi promosi efektif dengan desain kreatif,
          kualitas terbaik, dan harga bersahabat untuk bisnis Anda.
        </p>
      </div>
    </div>
  );
};

export default WhatWeWorking;
