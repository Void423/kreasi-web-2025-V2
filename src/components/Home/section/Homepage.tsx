"use client";
import Image from "next/image";
import Billboard from "@/assets/images/Billboard Kreasi.jpeg";
import { Satoshi } from "@/lib/font";
import HireUs from "@/components/CtaButton";
import { BsBriefcaseFill } from "react-icons/bs";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const sectionHome = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animasi child, bukan parent
      gsap.fromTo(
        Array.from(sectionHome.current?.children || []), // convert ke array
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          delay: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionHome.current,
            start: "top 80%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset", // play sekali doang
          },
        },
      );
    }, sectionHome);
    return () => ctx.revert(); // cleanup GSAP
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div
        className={`flex flex-col lg:flex-row md:justify-start justify-center items-center min-h-screen bg-[#0F2166] text-white gap-3 md:gap-5 lg:gap-8 px-8 md:px-0 ${Satoshi.className}`}
      >
        {/* Gambar */}
        <Image
          src={Billboard}
          loading="lazy"
          alt="Billboard"
          className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-screen object-cover rounded-xl lg:rounded-none"
        />

        {/* Teks */}
        <div
          ref={sectionHome}
          className="flex flex-col max-w-3xl gap-3 text-left my-3 lg:mt-0 px-3 will-change-transform will-change-opacity overflow-hidden"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[76px] font-bold">
            Beriklan Bersama Kreasi Advertising
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#B4B4B4]">
            Tempat periklanan terpercaya di Bukittinggi untuk bisnis Anda. Kami
            menyediakan layanan iklan billboard, spanduk, dan media promosi
            kreatif yang efektif menjangkau lebih banyak pelanggan.
          </p>
          <div className="flex justify-center lg:justify-start">
            <HireUs link="https://linktr.ee/KreasiADV">
              <BsBriefcaseFill />
              Contact Us
            </HireUs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
