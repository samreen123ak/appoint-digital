"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/images/b1.svg",
  "/images/Gemini_Generated_Image_1vk3m51vk3m51vk3-removebg-preview.png",
  "/images/Gemini_Generated_Image_2dpdtv2dpdtv2dpd-removebg-preview.png",
  "/images/b4.svg",
  "/images/b5.svg",
];

export default function BrandPortion() {
  return (
    <section className="w-full h-[300px] overflow-hidden bg-black">
      {/* Yellow bar */}
      <div className="w-full h-10 bg-yellow-400"></div>

      {/* Scrolling logos */}
      <div className="relative w-full overflow-hidden bg-black py-8">
        <div className="flex gap-20 animate-scroll">
          {[...logos, ...logos].map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`logo-${idx}`}
              style={
                logo.endsWith(".png")
                  ? { width: "100px", height: "200px" } // for PNG
                  : { width: "200px", height: "200px" }
                // for SVG (or just leave empty {})
              }
              width={200}
              height={200}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
