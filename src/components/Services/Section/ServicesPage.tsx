"use client";
import CtaButton from "@/components/CtaButton";
import { cardServices } from "@/lib/data";
import React from "react";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MoreServices from "../MoreServices";

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionServices = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const children = Array.from(sectionServices.current?.children || []);

      children.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            x: index % 2 === 0 ? 200 : -200, // genap dari kanan, ganjil dari kiri
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reset",
            },
          }
        );
      });
    }, sectionServices);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionServices}
      className="flex flex-col items-center gap-8 min-h-screen px-4 sm:px-8 lg:px-8 py-16 overflow-hidden"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-[57px] font-bold text-white text-center">
        What We Provide To You
      </h1>
      {/* Services Cards */}
      {cardServices.map((item, index) => (
        <MoreServices
          item={{
            ...item,
            position: index % 2 === 0 ? "right" : "left",
          }}
          key={index}
          src={item.image}
          title={item.title}
          desc={item.Desc}
          serviceId={index + 1}
        />
      ))}

      {/* CTA */}
      <CtaButton>
        <MdEmail className="text-xl sm:text-2xl lg:text-3xl" />
        <span className="ml-2 text-sm sm:text-base lg:text-lg">Contact Us</span>
      </CtaButton>
    </div>
  );
};

export default ServicesPage;
