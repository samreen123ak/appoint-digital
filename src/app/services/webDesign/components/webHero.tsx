"use client";
import React from "react";
import Image from "next/image";
import BlurText from "@/app/components/BlurText";

export default function WebHero() {
  return (
    <section className="relative bg-bg text-white min-h-screen flex flex-col overflow-hidden pt-32">
      {/* Background Image (right side only) */}

      <div className="absolute  -right-20 top-0 h-full flex justify-end items-center pointer-events-none">
        <Image
          src="/images/globeYellowbg.svg"
          alt="Kasr"
          width={800}
          height={800}
          className="object-contain  opacity-80 animate-spin-slow"
        />
      </div>

      {/* Navbar / Logo */}

      {/* Hero Content */}
      <div className="flex flex-1 px-4 relative z-10">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center text-start px-10">
          <p className="text-2xl mb-8">Top Rated and Award Winning</p>
          <BlurText
            text="Web Design Company"
            delay={120}
            animateBy="words"
            direction="top"
            className="text-6xl font-[600px] text-white"
          />
          <BlurText
            text="That Delivers Results"
            delay={120}
            animateBy="words"
            direction="top"
            className="text-6xl font-[600px] text-white leading-relaxed"
          />
          {/* <h1 className="text-6xl font-[600px] text-primary">
            Web Design Company
            <br /> That Delivers Results
          </h1> */}
          <p className="text-gray-300 text-md max-w-xl mt-8">
            We create web designs that not only look stunning but also engage
            visitors and help generate conversions. Make a lasting impact with a
            site built to impress and convert users into loyal customers.
          </p>

          {/* Logo Row */}
          <div className="relative w-[600px] h-[100px] flex items-center  justify-start overflow-hidden bg-bg">
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
              <Image
                src="/images/bravo.svg"
                alt="Bravo"
                width={50}
                height={50}
              />
              <Image
                src="/images/circle.svg"
                alt="Circle"
                width={50}
                height={50}
              />
              <Image
                src="/images/discord.svg"
                alt="Discord"
                width={50}
                height={50}
              />
              <Image
                src="/images/google.svg"
                alt="Google"
                width={50}
                height={50}
              />
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
              <Image
                src="/images/bravo.svg"
                alt="Bravo"
                width={50}
                height={50}
              />
              <Image
                src="/images/circle.svg"
                alt="Circle"
                width={50}
                height={50}
              />
              <Image
                src="/images/discord.svg"
                alt="Discord"
                width={50}
                height={50}
              />
              <Image
                src="/images/google.svg"
                alt="Google"
                width={50}
                height={50}
              />
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
          <button className="bg-primary text-black font-semibold px-5 py-3 w-40 text-md rounded-md cursor-pointer  mb-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
