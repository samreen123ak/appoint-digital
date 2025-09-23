import React from "react";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";
import AnimatedUnionBoxes from "./industriesAnimation";
import BlurText from "./BlurText";

export default function Industries() {
  return (
    <section className="relative min-h-screen bg-bg flex items-center justify-center py-40 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0" />

      {/* Background images */}
      <Image
        src="/images/decoration.svg"
        alt="Decoration Left"
        width={400}
        height={300}
        className="absolute rotate-180 top-[14%] -left-20 opacity-60 pointer-events-none select-none"
      />
      <Image
        src="/images/decoration.svg"
        alt="Decoration Right"
        width={400}
        height={300}
        className="absolute rotate-x-180 top-[14%] -right-20 opacity-60 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto text-center">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-6xl font-[600px] text-white mb-8 flex flex-col items-center justify-center">
            <BlurText
              text="Industries"
              delay={100}
              animateBy="words"
              direction="top"
              className="block"
            />
            <BlurText
              text="We Work With"
              delay={150}
              animateBy="words"
              direction="top"
              className="block text-primary"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
            At Blitz, we extend our Digital Marketing Agency expertise across a
            diverse range of industries, tailoring strategies to meet the unique
            demands and opportunities each sector presents.
          </p>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-12 gap-6 items-center justify-items-center w-full">
          {/* Top 3 rows */}
          <div className="col-span-12 grid grid-cols-4 gap-6 mb-6">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`top-3-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 backdrop-blur-sm p-3"
                >
                  <div className="flex items-center justify-center h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3 " />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-6 mb-6">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`top-2-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 backdrop-blur-sm p-3"
                >
                  <div className="flex items-center justify-center h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-6 mb-12">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`top-1-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 p-3"
                >
                  <div className="flex items-center justify-center h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Middle section */}
          {/* Left Column */}
          <div className="col-span-3 flex flex-col gap-6">
            {Array(3)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`left-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 p-3"
                >
                  <div className="flex items-center justify-start h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Cube */}
          <div className="col-span-6 relative">
            <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 flex flex-col gap-6">
            {Array(3)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`right-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 p-3"
                >
                  <div className="flex items-center justify-start h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom 3 rows */}
          <div className="col-span-12 grid grid-cols-4 gap-6 mt-12">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`bottom-1-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 p-3"
                >
                  <div className="flex items-center justify-center h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-6 mt-6">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`bottom-2-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 p-3"
                >
                  <div className="flex items-center justify-center h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-6 mt-6">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`bottom-3-${index}`}
                  className="group relative w-64 h-16 text-left bg-black/40 p-3"
                >
                  <div className="flex items-center justify-center h-full">
                    <FaDiamond className="w-6 h-6 text-primary mr-3" />
                    <span className="text-white text-base font-semibold leading-snug">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* 🔥 Center Cube absolutely centered */}
      <div className="absolute left-[40%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-32 h-32">
          <AnimatedUnionBoxes />
        </div>
      </div>
    </section>
  );
}
