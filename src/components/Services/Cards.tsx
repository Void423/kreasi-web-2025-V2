"use client";
import Image from "next/image";
import React from "react";
import { OurWorks } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const Cardref = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(Cardref.current?.children || []), // convert ke array
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: Cardref.current,
            start: "top 100%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset", // play sekali doang
          },
        }
      );
    }, Cardref);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={Cardref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 lg:px-10 py-6 md:py-10"
    >
      {OurWorks.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-sm mx-auto md:max-w-none md:mx-0
  h-[420px] sm:h-[460px] md:h-[520px]
  bg-black rounded-lg relative overflow-hidden
  transition-all duration-300 ease-in-out hover:scale-105 hover:z-20
  shadow-lg hover:shadow-2xl"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 z-[5]" />

          {/* text */}
          <div className="flex flex-col justify-end absolute inset-0 z-10 p-4 md:p-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 leading-tight">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              {item.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
