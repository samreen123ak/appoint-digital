"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="bg-bg text-white min-h-screen flex flex-col pt-32">
      {/* Hero Content */}
      <div className="flex  flex-col items-center justify-center text-center w-full  ">
        <p className="text-2xl mb-2 uppercase text-[#FFD74B]">
          Win at Your Marketing with
        </p>

        {/* <p className="text-2xl mb-2 uppercase">Win at Your Marketing with</p> */}
        <BlurText
          text=" Appoint Digital Solutions"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-6xl font-[600px] text-white"
        />

        <p className="text-gray-300 text-md max-w-lg mt-3">
          Get Help from Our Data-Centric and Performance-Driven Digital
          Marketing Solution to Enjoy Growth & Edge in the Digital Market Place.
        </p>
      </div>
      <div className="relative w-[800px] h-[100px] flex items-center mx-auto justify-center overflow-hidden bg-bg">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none z-20">
          <div className="h-full w-full bg-gradient-to-r from-black to-transparent"></div>
        </div>

        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none z-20">
          <div className="h-full w-full bg-gradient-to-l from-black to-transparent"></div>
        </div>

        {/* Scrolling images */}
        <div className="flex animate-scroll gap-8 z-10">
          {/* Original images */}
          <Image src="/images/bravo.svg" alt="Bravo" width={50} height={50} />
          <Image src="/images/circle.svg" alt="Circle" width={50} height={50} />
          <Image
            src="/images/discord.svg"
            alt="Discord"
            width={50}
            height={50}
          />
          <Image src="/images/google.svg" alt="Google" width={50} height={50} />
          <Image src="/images/jump.svg" alt="Jump" width={50} height={50} />
          <Image
            src="/images/lollapaloza.svg"
            alt="LP"
            width={50}
            height={50}
          />
          <Image
            src="/images/magiceden.svg"
            alt="Magic"
            width={50}
            height={50}
          />

          {/* Repeat images for seamless loop */}
          <Image src="/images/bravo.svg" alt="Bravo" width={50} height={50} />
          <Image src="/images/circle.svg" alt="Circle" width={50} height={50} />
          <Image
            src="/images/discord.svg"
            alt="Discord"
            width={50}
            height={50}
          />
          <Image src="/images/google.svg" alt="Google" width={50} height={50} />
          <Image src="/images/jump.svg" alt="Jump" width={50} height={50} />
          <Image
            src="/images/lollapaloza.svg"
            alt="LP"
            width={50}
            height={50}
          />
          <Image
            src="/images/magiceden.svg"
            alt="Magic"
            width={50}
            height={50}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/images/herobg.svg" alt="" width={1400} height={1000} />
      </div>
    </section>
  );
}
