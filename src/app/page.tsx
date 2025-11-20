import type { Metadata } from "next";
import CTA from "@/components/Home/section/Cta/Cta";
import Homepage from "@/components/Home/section/Homepage";
import WhatWeWorking from "@/components/Home/section/WhatWeWorkingOn/WhatWeWorkingOn";
import Whychooseus from "@/components/Home/section/WhyChooseUs/Whychooseus";

export const metadata: Metadata = {
  title: "Kreasi Advertising | Jasa Iklan & Promosi Terbaik di Bukittinggi",
  description:
    "Tingkatkan visibilitas bisnis Anda dengan layanan iklan outdoor, billboard, spanduk, dan media promosi kreatif dari Kreasi Advertising Bukittinggi.",
  alternates: {
    canonical: "/",
  },
};

const page = () => {
  return (
    <>
      <section id="homepage">
        <Homepage />
      </section>
      <section id="whychooseus" className="bg-[#FFF8EA] overflow-hidden">
        <Whychooseus />
      </section>
      <section id="whatweworkingon" className="overflow-hidden">
        <WhatWeWorking />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </>
  );
};

export default page;
