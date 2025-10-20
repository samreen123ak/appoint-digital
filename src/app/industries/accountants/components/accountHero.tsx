"use client";
import React from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import BlurText from "@/app/components/BlurText";

export default function AcountHero() {
  return (
    <section className="relative bg-bg text-white min-h-screen flex flex-col overflow-hidden">
      {/* Background Image (right side only) */}

      {/* Navbar / Logo */}

      {/* Hero Content */}
      <div className="flex flex-1 px-4 relative z-10">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center text-start px-10">
          <p className="text-2xl mb-6 mt-5">Top Rated and Award Winning</p>
          <h1>
            <BlurText
              text="Accountant Digital"
              delay={120}
              animateBy="words"
              direction="top"
              align="left"
              className="text-6xl font-[600px] text-white"
            />
            <BlurText
              text="Marketing Agency"
              delay={120}
              animateBy="words"
              direction="top"
              align="left"
              className="text-6xl font-[600px] text-white leading-relaxed"
            />
            <BlurText
              text="That Delivers Results"
              delay={120}
              animateBy="words"
              direction="top"
              align="left"
              className="text-6xl font-[600px] text-white "
            />
          </h1>
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
                width={80}
                height={80}
              />
              <Image
                src="/images/circle.svg"
                alt="Circle"
                width={80}
                height={80}
              />
              <Image
                src="/images/discord.svg"
                alt="Discord"
                width={80}
                height={80}
              />
              <Image
                src="/images/google.svg"
                alt="Google"
                width={80}
                height={80}
              />
              <Image src="/images/jump.svg" alt="Jump" width={80} height={80} />
              <Image
                src="/images/lollapaloza.svg"
                alt="LP"
                width={80}
                height={80}
              />
              <Image
                src="/images/magiceden.svg"
                alt="Magic"
                width={80}
                height={80}
              />

              {/* Repeat images for seamless loop */}
              <Image
                src="/images/bravo.svg"
                alt="Bravo"
                width={80}
                height={80}
              />
              <Image
                src="/images/circle.svg"
                alt="Circle"
                width={80}
                height={80}
              />
              <Image
                src="/images/discord.svg"
                alt="Discord"
                width={80}
                height={80}
              />
              <Image
                src="/images/google.svg"
                alt="Google"
                width={80}
                height={80}
              />
              <Image src="/images/jump.svg" alt="Jump" width={80} height={80} />
              <Image
                src="/images/lollapaloza.svg"
                alt="LP"
                width={80}
                height={80}
              />
              <Image
                src="/images/magiceden.svg"
                alt="Magic"
                width={80}
                height={80}
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
