"use client";

import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import gambar from "@/assets/images/38.jpg";
import HireUs from "@/components/CtaButton";
import { useRef } from "react";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      Array.from(sectionRef.current.children),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // baru jalan pas muncul di layar
          toggleActions: "play none none reset", // play sekali doang
        },
      }
    );
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
        ref={sectionRef}
        className="relative flex flex-col gap-5 items-center z-10 max-w-3xl px-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Growth Your Business
        </h1>
        <p className="text-white text-lg md:text-xl">
          Bersama kami naikan brand awareness anda
        </p>
        <HireUs link={"https://linktr.ee/KreasiADV"}>
          <BsBriefcaseFill />
          Hire Us
        </HireUs>
      </div>
    </div>
  );
};

export default CTA;
