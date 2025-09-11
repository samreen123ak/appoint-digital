"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ContactTabs() {
  const [active, setActive] = useState("contact");

  return (
    <section className="relative w-full h-screen bg-bg">
      <div className="absolute inset-0">
        <Image
          src="/images/contactbg.svg"
          alt="Brand Background"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 px-6 py-16">
        <div className="container mx-auto text-center px-6">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">
            Take Your Digital Success
            <br /> to the Next Level
            <br /> with Us!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with our web agency to turn data into growth, insights into
            <br />
            impact, and strategies into success. Lets make every digital move
            <br />
            count
          </p>

          {/* Tab Bar */}
          <div className="inline-flex rounded-lg overflow-hidden border border-black bg-black p-1">
            <button
              onClick={() => setActive("contact")}
              className={`px-6 py-3 font-semibold rounded-md transition ${
                active === "contact"
                  ? "bg-primary text-black"
                  : "bg-black text-white"
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActive("call")}
              className={`px-6 py-3 font-semibold rounded-md transition ${
                active === "call"
                  ? "bg-primary text-black"
                  : "bg-black text-white"
              }`}
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
