import React from "react";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";

export default function Industries() {
  return (
    <section className="relative min-h-screen bg-bg flex items-center justify-center py-20 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0" />

      {/* Top-left background image */}
      <Image
        src="/images/industrybgleft.svg"
        alt="Decoration Left"
        width={300}
        height={300}
        className="absolute top-[15%] left-0 opacity-60 pointer-events-none select-none"
      />

      {/* Top-right background image */}
      <Image
        src="/images/industrybgright.svg"
        alt="Decoration Right"
        width={300}
        height={300}
        className="absolute top-[15%] right-0 opacity-60 pointer-events-none select-none"
      />

      <div className="relative z-10 mx-auto text-center">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-white mb-8">
            Industries We Work With
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
            At Blitz, we extend our Digital Marketing Agency expertise across a
            diverse range of industries, tailoring strategies to meet the unique
            demands and opportunities each sector presents.
          </p>
        </div>

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
                    <FaDiamond className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
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
          <div className="col-span-6 flex justify-center">
            <div className="relative">
              <div className="relative w-52 h-52 md:w-64 md:h-64">
                <Image
                  src="/images/dice.svg"
                  alt="Cube"
                  width={300}
                  height={300}
                  className="drop-shadow-[0_0_40px_rgba(255,200,0,0.6)]"
                />
              </div>
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
    </section>
  );
}
