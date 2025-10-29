"use client";
import CtaButton from "@/components/CtaButton";
import { cardServices } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
      className="flex flex-col gap-12 items-center min-h-screen px-4 sm:px-8 lg:px-16 py-16"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-[57px] font-bold text-white text-center">
        What We Provide To You
      </h1>

      {/* Services Cards */}
      {cardServices.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-6xl ${
            item.position === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="flex flex-col max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl text-center md:text-left lg:text-[43px] font-bold text-white mb-3">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
              {item.Desc}
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {/* Image */}
          <div className="w-full md:w-[40rem]">
            <Image
              src={item.image}
              alt={item.title}
              width={640}
              height={360}
              className="w-full h-auto max-h-[22rem] object-cover rounded-xl drop-shadow-2xl"
            />
          </div>
        </div>
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
