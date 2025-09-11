"use client";

import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="relative w-full h-screen bg-bg">
      <div className="absolute inset-0">
        <Image
          src="/images/brandbg.svg"
          alt="Brand Background"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 px-20 py-16 container mx-auto ">
        {/* Title + Subtitle */}
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold mb-5">
            <span className="text-white">The best brands choose</span>{" "}
            <span className="text-black">Appoint Digital</span>
          </h2>
          <p className="text-lg font-bold text-black mt-3 max-w-3xl mb-15">
            As a trusted Digital Marketing Agency Company, Bird has been
            featured in top-tier media and industry-leading platforms,
            showcasing our expertise in delivering exceptional digital marketing
            results.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-full mx-auto my-20">
          <div className="flex items-center justify-center bg-black h-24 rounded-full">
            <Image
              src="/images/brand1.svg"
              alt="Brand 1"
              width={100}
              height={60}
            />
          </div>

          <div className="flex items-center justify-center bg-primary h-24 rounded-full border border-gray-400/50 shadow-[0_4px_0_rgba(0,0,0,0.15)]">
            <Image
              src="/images/brand2.svg"
              alt="Brand 2"
              width={100}
              height={60}
            />
          </div>

          <div className="flex items-center justify-center bg-black h-24 rounded-full">
            <Image
              src="/images/brand3.svg"
              alt="Brand 3"
              width={100}
              height={60}
            />
          </div>

          <div className="flex items-center justify-center bg-primary h-24 rounded-full border border-gray-400/50 shadow-[0_4px_0_rgba(0,0,0,0.15)]">
            <Image
              src="/images/brand4.svg"
              alt="Brand 4"
              width={100}
              height={60}
            />
          </div>

          <div className="flex items-center justify-center bg-black h-24 rounded-full">
            <Image
              src="/images/brand5.svg"
              alt="Brand 5"
              width={100}
              height={60}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
          <Image
            src="/images/globeb.svg"
            alt="Global Reach"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
