"use client";
import Image from "next/image";
import React from "react";
import gambar from "@/assets/images/Our Works/Our-Works (3).jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const sectionHero = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animasi child, bukan parent
      gsap.fromTo(
        Array.from(sectionHero.current?.children || []), // convert ke array
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          delay: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionHero.current,
            start: "top 80%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionHero);

    return () => ctx.revert(); // cleanup GSAP
  }, []);
  return (
    <div className="relative w-full min-h-screen flex items-end justify-start overflow-hidden">
      <Image
        src={gambar}
        alt="About Us"
        fill
        priority
        className="object-cover object-center saturate-100"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div
        ref={sectionHero}
        className="absolute inset-0 flex flex-col gap-3 items-center justify-center max-w-7xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-[101px] text-white font-bold text-center">
          Siapa sih Kreasi Advertising sebenarnya?
        </h1>
      </div>
    </div>
  );
};

export default Hero;
