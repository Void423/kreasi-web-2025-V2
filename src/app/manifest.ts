import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kreasi Advertising Bukittinggi",
    short_name: "Kreasi Advertising",
    description:
      "Jasa iklan billboard, spanduk, dan media promosi terbaik di Bukittinggi.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
