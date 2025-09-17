"use client";
import React from "react";
import Image from "next/image";

export default function WebHero() {
  return (
    <section className="relative bg-bg text-white min-h-screen flex flex-col overflow-hidden pt-32">
      {/* Background Image (right side only) */}

      <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
        <Image
          src="/images/wglobe.svg"
          alt="Kasr"
          width={1000}
          height={1000}
          className="object-contain h-full w-auto opacity-80"
        />
      </div>

      {/* Navbar / Logo */}

      {/* Hero Content */}
      <div className="flex flex-1 px-4 relative z-10">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center text-start px-10">
          <p className="text-2xl mb-8">Top Rated and Award Winning</p>
          <h1 className="text-6xl font-bold text-primary">
            Web Design Company
            <br /> That Delivers Results
          </h1>
          <p className="text-gray-300 text-md max-w-xl mt-8">
            We create web designs that not only look stunning but also engage
            visitors and help generate conversions. Make a lasting impact with a
            site built to impress and convert users into loyal customers.
          </p>

          {/* Logo Row */}
          <div className="flex items-center justify-center gap-5 mt-15 flex-wrap mb-10">
            <Image src="/images/bravo.svg" alt="Bravo" width={50} height={50} />
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
          <button className="bg-primary text-black font-semibold px-5 py-3 w-40 text-md rounded-md cursor-pointer  mb-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
