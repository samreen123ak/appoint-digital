"use client";
import React from "react";
import Image from "next/image";

import BlurText from "@/app/components/BlurText";

const philosophies = [
  {
    title: "ROI Focused",
    description:
      "We succeed if you succeed, that’s why we focus on your Return On Investment as our number one priority.",
  },
  {
    title: "ROI Focused",
    description:
      "We succeed if you succeed, that’s why we focus on your Return On Investment as our number one priority.",
  },
  {
    title: "ROI Focused",
    description:
      "We succeed if you succeed, that’s why we focus on your Return On Investment as our number one priority.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="bg-black text-white py-20 ">
      {/* Top Heading */}
      <div className="text-center mb-16">
        <h4 className="text-gray-300 mb-2 text-lg font-semibold">
          Our ethos .
        </h4>

        <BlurText
          text="Our unique"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-6xl font-[600px] text-white"
        />
        <BlurText
          text="operating philosophy"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-6xl font-[600px] text-white"
        />

        <p className="text-gray-300 max-w-2xl text-xl mx-auto mt-8">
          As an extremely principled company, we stand by the following core
          operating philosophies.
        </p>
      </div>

      {/* Yellow Cards */}

      <div className="relative w-full flex justify-start items-start overflow-hidden">
        {/* Yellow base image (globe is inside this) */}
        <Image
          src="/images/philosophyimg1.svg"
          alt="yellow background"
          width={800}
          height={200}
          className="w-[75%] h-auto z-20 relative"
        />

        {/* Decorative image (behind globe, right side) */}
        <Image
          src="/images/philosophydecore1.svg"
          alt="decor overlay"
          width={400}
          height={200}
          className="absolute top-0 right-0 w-[350px] md:w-[450px] h-auto  z-10"
        />

        {/* Text on top of yellow image */}
        <div className="absolute z-30 left-10 md:left-20 top-1/2 -translate-y-1/2 text-black max-w-md">
          <h3 className="text-xl  font-bold mb-2">ROI Focused</h3>
          <p className="text-base  leading-relaxed font-semibold">
            We succeed if you succeed, thats why we focus on your Return On
            Investment as our number one priority.
          </p>
        </div>
      </div>

      <div className="relative w-full flex justify-start items-start overflow-hidden">
        {/* Decorative image (left side, visible behind or slightly over yellow) */}
        <Image
          src="/images/philosophydecore1.svg"
          alt="decor overlay"
          width={400}
          height={200}
          className="relative top-0 left-0 w-[350px] h-auto z-20 rotate-180"
        />

        {/* Yellow base image (rotated and on right side) */}
        <Image
          src="/images/philosophyimg1.svg"
          alt="yellow background"
          width={800}
          height={200}
          className="w-[75%]  absolute rotate-180 z-0  right-0 "
        />

        {/* Text on top of rotated yellow image */}
        <div className="absolute z-40 right-10 md:right-20 top-1/2 -translate-y-1/2 text-black max-w-md text-right">
          <h3 className="text-xl font-bold mb-2 text-left">ROI Focused</h3>
          <p className="text-base leading-relaxed font-semibold text-left mb-15">
            We succeed if you succeed, thats why we focus on your Return On
            Investment as our number one priority.
          </p>
        </div>
      </div>

      <div className="relative w-full flex justify-start items-start overflow-hidden">
        {/* Yellow base image (globe is inside this) */}
        <Image
          src="/images/philosophyimg1.svg"
          alt="yellow background"
          width={800}
          height={200}
          className="w-[75%] h-auto z-20 relative"
        />

        {/* Decorative image (behind globe, right side) */}
        <Image
          src="/images/philosophydecore1.svg"
          alt="decor overlay"
          width={400}
          height={200}
          className="absolute top-0 right-0 w-[350px] md:w-[450px] h-auto  z-10"
        />

        {/* Text on top of yellow image */}
        <div className="absolute z-30 left-10 md:left-20 top-1/2 -translate-y-1/2 text-black max-w-md">
          <h3 className="text-xl  font-bold mb-2">ROI Focused</h3>
          <p className="text-base  leading-relaxed font-semibold">
            We succeed if you succeed, thats why we focus on your Return On
            Investment as our number one priority.
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-start items-start overflow-hidden">
        {/* Decorative image (left side, visible behind or slightly over yellow) */}
        <Image
          src="/images/philosophydecore1.svg"
          alt="decor overlay"
          width={400}
          height={200}
          className="relative top-0 left-0 w-[350px] h-auto z-40 rotate-180"
        />

        {/* Yellow base image (rotated and on right side) */}
        <Image
          src="/images/philosophyimg1.svg"
          alt="yellow background"
          width={800}
          height={200}
          className="w-[75%] absolute rotate-180 z-10 right-0"
        />

        {/* Text on top of rotated yellow image */}
        <div className="absolute z-50 right-10 md:right-20 top-1/2 -translate-y-1/2 text-black max-w-md text-left">
          <h3 className="text-xl font-bold mb-2">ROI Focused</h3>
          <p className="text-base leading-relaxed font-semibold mb-15">
            We succeed if you succeed, that's why we focus on your Return On
            Investment as our number one priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
