"use client";
import Image from "next/image";
import React from "react";
import backgroundImage from "@/assets/images/management-coaching-business-dealing-mentor-concept.jpg";
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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          delay: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionHero.current,
            start: "top 100%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset", // play sekali doang
          },
        }
      );
    }, sectionHero);

    return () => ctx.revert(); // cleanup GSAP
  }, []);
  return (
    <div className="relative w-full  min-h-screen flex items-end justify-start  overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Background CTA"
        fill
        priority
        className="object-cover object-top brightness-50 "
      />

      {/* Overlay content */}
      <div
        ref={sectionHero}
        className="relative flex flex-col gap-5 items-start  z-10 max-w-5xl p-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#FEEABE] drop-shadow-lg">
          Apa Saja Layanan Kami?
        </h1>
        <p className="text-white text-start text-lg md:text-xl">
          Mulai dari pemasangan baliho yang mencolok hingga neon box yang
          memikat perhatian, kami hadir untuk membantu brand Anda tampil
          menonjol di ruang publik.
        </p>
      </div>
    </div>
  );
};

export default Hero;
