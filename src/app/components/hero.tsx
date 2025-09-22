"use client";
import React from "react";
import Image from "next/image";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="bg-bg text-white flex flex-col pt-12 sm:pt-12 md:pt-20 overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <p className="text-sm sm:text-md font-bold mb-2 uppercase text-[#FFD74B]">
          Win at Your Marketing with
        </p>

        <BlurText
          text="Appoint Digital Solutions"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white"
        />

        <p className="text-gray-300 text-sm sm:text-base md:text-sm mt-3 max-w-3xl text-center mx-auto">
          Get Help from Our Data-Centric and Performance-Driven Digital
          Marketing Solution to Enjoy Growth & Edge in the Digital Market Place.
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative w-full max-w-[800px] h-[60px] sm:h-[80px] md:h-[100px] flex items-center mx-auto justify-center overflow-hidden sm:mt-10 bg-bg">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 pointer-events-none z-20">
          <div className="h-full w-full bg-gradient-to-r from-black to-transparent"></div>
        </div>

        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 pointer-events-none z-20">
          <div className="h-full w-full bg-gradient-to-l from-black to-transparent"></div>
        </div>

        {/* Scrolling images */}
        <div className="flex animate-scroll gap-6 sm:gap-8 z-10">
          {[
            "bravo",
            "circle",
            "discord",
            "google",
            "jump",
            "lollapaloza",
            "magiceden",
          ].map((logo, i) => (
            <Image
              key={i}
              src={`/images/${logo}.svg`}
              alt={logo}
              width={40}
              height={40}
              className="sm:w-[50px] sm:h-[50px]"
            />
          ))}

          {/* Repeat for seamless loop */}
          {[
            "bravo",
            "circle",
            "discord",
            "google",
            "jump",
            "lollapaloza",
            "magiceden",
          ].map((logo, i) => (
            <Image
              key={`repeat-${i}`}
              src={`/images/${logo}.svg`}
              alt={logo}
              width={40}
              height={40}
              className="sm:w-[50px] sm:h-[50px]"
            />
          ))}
        </div>
      </div>

      {/* Background image */}
      <div className="flex items-center justify-center -mt-12 sm:-mt-16 md:-mt-32 lg:-mt-40 px-0">
        <Image
          src="/images/herobg.gif"
          alt="Hero background"
          width={1400}
          height={1000}
          className="w-full max-w-[1400px] h-auto"
          priority
        />
      </div>
    </section>
  );
}
