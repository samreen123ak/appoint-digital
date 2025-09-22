"use client";
import React from "react";
import BlurText from "./BlurText";

export default function StartProject() {
  return (
    <div className="h-[400px] sm:h-auto flex items-start justify-start px-6 sm:px-16 py-12 sm:py-20 bg-black text-white">
      <div className="max-w-3xl">
        {/* Heading */}
        <h1 className="flex flex-row sm:items-baseline">
          <BlurText
            text="Start a"
            delay={120}
            animateBy="words"
            direction="top"
            align="left"
            className="text-3xl sm:text-6xl font-[600px] mb-4 sm:mb-6 -mr-36 sm:-mr-40"
          />
          <BlurText
            text="project"
            delay={120}
            animateBy="words"
            direction="top"
            align="left"
            className="text-3xl sm:text-6xl font-[600px]  text-primary"
          />
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg leading-relaxed max-w-full sm:max-w-lg mt-4">
          Do you have a digital marketing objective{" "}
          <span className="relative inline-block group cursor-pointer">
            you&apos;d like to achieve?
            <span className="absolute right-0 bottom-0 h-[2px] w-full bg-white origin-right scale-x-100 transition-transform duration-500 group-hover:scale-x-0 "></span>
          </span>{" "}
          Are you ready to find out how Bird can help to{" "}
          <span className="relative inline-block group cursor-pointer">
            build your business online?
            <span className="absolute right-0 bottom-0 h-[2px] w-full bg-white origin-right scale-x-100 transition-transform duration-500 group-hover:scale-x-0"></span>
          </span>{" "}
          If so, make contact with us today…
        </p>
      </div>
    </div>
  );
}
