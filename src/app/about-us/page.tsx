import Hero from "@/components/About-us/Section/Hero";
import Stories from "@/components/About-us/Section/Stories";
import Visi from "@/components/About-us/Section/Visi";
import CtaAbout from "@/components/About-us/Section/CtaAbout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tentang Kami | Kreasi Advertising Bukittinggi",
  description:
    "Kenali lebih dekat Kreasi Advertising, penyedia jasa periklanan terpercaya di Bukittinggi. Kami berkomitmen membantu bisnis Anda tumbuh melalui iklan billboard, spanduk, baliho, dan media promosi kreatif.",
  keywords: [
    "tentang Kreasi Advertising",
    "jasa periklanan Bukittinggi",
    "advertising terpercaya",
    "iklan billboard",
    "media promosi",
    "baliho Bukittinggi",
    "tim kreatif periklanan",
  ],
  openGraph: {
    title: "Tentang Kreasi Advertising",
    description:
      "Kreasi Advertising adalah mitra periklanan terpercaya di Bukittinggi. Fokus kami adalah membantu bisnis meningkatkan brand awareness dengan media iklan outdoor dan digital.",
    url: "/about-us",
    siteName: "Kreasi Advertising",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tentang Kreasi Advertising Bukittinggi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "/about-us",
  },
};
const page = () => {
  return (
    <main>
      <section id="heroAbout">
        <Hero />
      </section>
      <section id="Story">
        <Stories />
      </section>
      <section id="visi">
        <Visi />
      </section>
      <section id="cta">
        <CtaAbout />
      </section>
    </main>
  );
};

export default page;
