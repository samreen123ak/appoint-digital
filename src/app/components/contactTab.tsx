"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactTabs() {
  const [active, setActive] = useState("contact");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-bg">
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

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Take Your Digital Success
            <br />
            to the Next Level
            <br />
            with Us!
          </h1>

          <p className="text-lg md:text-xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with our web agency to turn data into growth, insights into
            impact, and strategies into success. Lets make every digital move
            count
          </p>

          <div className="inline-flex rounded-lg overflow-hidden bg-black p-1">
            <button
              onClick={() => setActive("contact")}
              className={`px-8 py-4 font-semibold rounded-md transition-all duration-200 ${
                active === "contact"
                  ? "bg-black text-white"
                  : "bg-yellow-400 text-black hover:bg-yellow-300"
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActive("call")}
              className={`px-8 py-4 font-semibold rounded-md transition-all duration-200 ${
                active === "call"
                  ? "bg-black text-white"
                  : "bg-yellow-400 text-black hover:bg-yellow-300"
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
