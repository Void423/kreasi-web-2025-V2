import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Satoshi } from "@/lib/font";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://kreasi-web-2025-v2.vercel.app"),
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
  authors: [{ name: "Kreasi Advertising" }],
  creator: "Kreasi Advertising",
  publisher: "Kreasi Advertising",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kreasi Advertising | Solusi Periklanan Terbaik",
    description:
      "Solusi periklanan terbaik di Bukittinggi: billboard, spanduk, dan media promosi untuk meningkatkan brand awareness bisnis Anda.",
    url: "https://kreasi-web-2025-v2.vercel.app",
    siteName: "Kreasi Advertising Bukittinggi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tempat Periklanan di Bukittinggi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreasi Advertising | Jasa Iklan & Promosi Terbaik",
    description:
      "Solusi periklanan terbaik di Bukittinggi: billboard, spanduk, dan media promosi untuk meningkatkan brand awareness bisnis Anda.",
    creator: "@kreasiadvertising",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
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
