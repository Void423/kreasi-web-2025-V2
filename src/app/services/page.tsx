import React from "react";
import Hero from "@/components/Services/Section/Hero";
import ServicesPage from "@/components/Services/Section/ServicesPage";
import OurWorks from "@/components/Services/Section/OurWorks";
import CtaServices from "@/components/Services/Section/CtaServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | Kreasi Advertising Bukittinggi",
  description:
    "Kreasi Advertising menyediakan layanan iklan billboard, spanduk, baliho, billboard, dan media promosi kreatif di Bukittinggi. Solusi periklanan efektif untuk meningkatkan brand awareness bisnis Anda.",
  keywords: [
    "jasa iklan Bukittinggi",
    "layanan periklanan",
    "iklan billboard",
    "jasa spanduk",
    "media promosi",
    "advertising Bukittinggi",
    "baliho Bukittinggi",
    "brand awareness",
  ],
  openGraph: {
    title: "Layanan Periklanan Kreasi Advertising",
    description:
      "Tingkatkan visibilitas bisnis Anda dengan layanan iklan outdoor, billboard, spanduk, dan media promosi dari Kreasi Advertising.",
    url: "/services",
    siteName: "Kreasi Advertising",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Layanan Kreasi Advertising Bukittinggi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

const page = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="services" className="min-h-screen bg-[#0F2166]">
        <ServicesPage />
      </section>
      <section id="ourworks">
        <OurWorks />
      </section>
      <section id="ctaServices">
        <CtaServices />
      </section>
    </main>
  );
};

export default page;
