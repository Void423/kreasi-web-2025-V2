import type { Metadata } from "next";
import CTA from "@/components/Home/section/Cta/Cta";
import Homepage from "@/components/Home/section/Homepage";
import WhatWeWorking from "@/components/Home/section/WhatWeWorkingOn/WhatWeWorkingOn";
import Whychooseus from "@/components/Home/section/WhyChooseUs/Whychooseus";

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
