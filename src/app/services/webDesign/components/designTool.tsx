"use client";
import React from "react";
import Image from "next/image";

interface ImageItem {
  url: string;
  alt: string;
}

const images: ImageItem[] = [
  { url: "/images/tool1.svg", alt: "Tool 1" },
  { url: "/images/tool2.svg", alt: "Tool 2" },
  { url: "/images/tool3.svg", alt: "Tool 3" },
  { url: "/images/tool4.svg", alt: "Tool 4" },
  { url: "/images/tool5.svg", alt: "Tool 5" },
  { url: "/images/tool6.svg", alt: "Tool 6" },
];

const DesignTools: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-10">
      <div className="bg-white p-10 rounded-[100px] border-[20px] border-primary shadow-[4px_4px_12px_0px_white] max-w-6xl w-full">
        <div className="flex flex-col justify-center items-center">
          {/* Title */}

          <h1 className="text-4xl font-bold text-black mb-2 text-center">
            Web Design tools & software
          </h1>

          {/* Subtitle */}
          <h2 className="text-xs font-semibold  mb-4 text-center max-w-md w-full">
            At Bird Marketing, we have the necessary software tools and industry
            know-how to help your firm enjoy a much better web design. Why not
            ask us about how we can improve your online presence with a website
            design that really packs a punch?
          </h2>

          {/* Underlined Text Button */}
          <button className=" underline mb-8 text-center font-bold text-xs">
            Start a project
          </button>
        </div>

        {/* Image Grid */}
        <div className="flex justify-center mb-5">
          <div className="grid grid-cols-3 gap-20">
            {images.map((item, i) => (
              <div
                key={i}
                className="w-60 h-20 flex items-center justify-center "
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTools;
