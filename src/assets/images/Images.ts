import Andromax from "@/assets/images/Homepage/35.jpg";
import { StaticImageData } from "next/image";

export interface ImageData {
  src: StaticImageData;
  alt: string;
}
export const image = [
  {
    src: Andromax,
    alt: "Andromax",
  },
];
