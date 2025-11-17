import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Satoshi } from "@/lib/font";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: {
    default: "Kreasi Advertising | Jasa Iklan & Promosi Terbaik",
    template: "%s | Kreasi Advertising Bukittinggi",
  },
  description:
    "Butuh tempat periklanan di Bukittinggi? Kami menyediakan layanan iklan outdoor, billboard, spanduk, dan media promosi lainnya untuk bisnis Anda. Jangkau lebih banyak pelanggan dengan iklan yang efektif.",
  keywords: [
    "tempat periklanan di Bukittinggi",
    "jasa iklan Bukittinggi",
    "billboard Bukittinggi",
    "baliho Bukittinggi",
    "spanduk Bukittinggi",
    "jasa promosi Bukittinggi",
    "advertising Bukittinggi",
    "periklanan Sumatera Barat",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@kreasiadvertising",
    creator: "@kreasiadvertising",
  },
  openGraph: {
    title: "kreasi advertising",
    description:
      "Solusi periklanan terbaik di Bukittinggi: billboard, spanduk, dan media promosi untuk meningkatkan brand awareness bisnis Anda.",
    url: "http://localhost:3000",
    siteName: "kreasi advrtising bukittinggi",
    images: [
      {
        url: "http://localhost:3000/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tempat Periklanan di Bukittinggi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${Satoshi.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
