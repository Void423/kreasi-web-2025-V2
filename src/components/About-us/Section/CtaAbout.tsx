"use client";
import Image from "next/image";
import gambar from "@/assets/images/smiley-entrepreneur-talking-phone.jpg";
import HireUs from "@/components/CtaButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
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
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionHero.current,
            start: "top 100%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionHero);

    return () => ctx.revert(); // cleanup GSAP
  }, []);
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src={gambar}
        alt="Background CTA"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Overlay content */}
      <div
        ref={sectionHero}
        className="relative flex flex-col gap-5 items-center z-10 max-w-3xl px-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Let&apos;s Get In Touch
        </h1>
        <p className="text-white text-lg md:text-xl">
          For Growth Your Business
        </p>
        <HireUs link={"/contact-us"}>Let&apos;s Start</HireUs>
      </div>
    </div>
  );
};

export default CTA;
