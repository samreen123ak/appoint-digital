"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactTabs() {
  const [active, setActive] = useState<"contact" | "call">("contact");

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
        <div className="text-center max-w-4xl mx-auto mt-15">
          <h1 className="text-6xl font-[600px] text-black mb-8 leading-tight">
            Take Your Digital Success
            <br />
            to the Next Level
            <br />
            with Us!
          </h1>

          <p className="text-lg md:text-xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Partner with our web agency to turn data into growth, insights into
            impact, and strategies into success. Lets make every digital move
            count
          </p>

          <div className="inline-flex rounded-lg overflow-hidden border border-black bg-black">
            <button
              onClick={() => setActive("contact")}
              className={`flex-1 px-6 py-2 font-semibold transition-all duration-200 text-sm whitespace-nowrap  ${
                active === "contact"
                  ? "bg-primary text-black m-1 rounded-md"
                  : "bg-black text-white"
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActive("call")}
              className={`flex-1 px-8 py-2 font-semibold transition-all duration-200 text-sm ${
                active === "call"
                  ? "bg-primary text-black m-1 rounded-md"
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
