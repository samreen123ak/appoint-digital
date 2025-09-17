"use client";
import React from "react";
import Image from "next/image";

export default function DesignConsulting() {
  return (
    <section className="relative bg-bg text-white py-30 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-20 relative z-10">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold leading-snug text-primary mb-5">
            Web Design Consulting:
            <br /> Elevating Your Online Presence
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-5">
            We begin with a deep analysis of your brand and audience, crafting a
            web design strategy that aligns with your business goals.
          </p>

          <p className="text-gray-300  text-sm  max-w-2xl">
            <span className="text-md text-white font-semibold">
              Targeted Strategy:
            </span>{" "}
            We begin with a deep analysis of your brand and audience, crafting a
            web design strategy that aligns with your business goals.
          </p>
          <p className="text-gray-300  text-sm leading-relaxed max-w-2xl">
            <span className="text-md text-white font-semibold">
              {" "}
              User Experience Focus:
            </span>{" "}
            Our designs prioritize user experience, ensuring intuitive,
            accessible, and engaging websites.
          </p>
          <p className="text-gray-300  text-sm leading-relaxed max-w-2xl">
            <span className="text-md text-white font-semibold">
              {" "}
              Innovative Design:
            </span>{" "}
            We employ the latest trends and technologies for standout,
            innovative web solutions.
          </p>
          <p className="text-gray-300  text-sm leading-relaxed max-w-2xl">
            <span className="text-md text-white font-semibold">
              {" "}
              Responsive and Mobile-Optimized:
            </span>{" "}
            Every design is responsive, guaranteeing a seamless experience on
            all devices.
          </p>
          <p className="text-gray-300  text-sm leading-relaxed max-w-2xl">
            <span className="text-md text-white font-semibold">
              {" "}
              Continued Support:
            </span>{" "}
            Our commitment extends beyond launch, with ongoing support to keep
            your website at the forefront of digital trends.
          </p>
          <p className="text-gray-300  text-sm leading-relaxed max-w-2xl mb-5 mt-5">
            At Bird, we turn your digital aspirations into reality, ensuring
            your website not only looks great but performs exceptionally.
          </p>
          <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - Globe (Bleeds out to screen edge) */}
      <Image
        src="/images/globehalf1.svg"
        alt="Globe"
        width={400}
        height={300}
        className="absolute right-0 top-[10%] object-contain "
      />
    </section>
  );
}
