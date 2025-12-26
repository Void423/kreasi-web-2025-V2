"use client";
import CtaButton from "@/components/CtaButton";
import Image from "next/image";
import React from "react";
import billboard from "@/assets/images/Billboard Kreasi.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const CtaServices = () => {
  const sectionCta = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(sectionCta.current?.children || []), // convert ke array
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionCta.current,
            start: "top 100%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset", // play sekali doang
          },
        }
      );
    }, sectionCta);

    return () => ctx.revert();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row min-h-[80dvh] bg-[#0F2166]">
      {/* Text Section */}
      <div
        className="flex flex-col justify-center w-full lg:w-1/2 px-6 md:px-8 lg:px-12 xl:px-16 
      py-12 lg:py-16 text-center lg:text-left order-2 lg:order-1"
      >
        <div ref={sectionCta} className="max-w-xl mx-auto lg:mx-0">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] 
          font-bold text-[#fefefe] leading-tight mb-4 md:mb-6"
          >
            Siap Buat Bisnismu Lebih Terlihat?
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b4b4b4] 
          leading-relaxed mb-6 md:mb-8"
          >
            Kami bantu wujudkan tampilan visual yang mencuri perhatian dari
            baliho, neon box, street sign hingga layanan cetak profesional.
          </p>
          <div className="flex justify-center lg:justify-start">
            <CtaButton>Get In Touch</CtaButton>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto min-h-[300px] lg:min-h-[80dvh] 
      relative overflow-hidden order-1 lg:order-2"
      >
        <Image
          src={billboard}
          alt="billboard"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
};

export default CtaServices;
