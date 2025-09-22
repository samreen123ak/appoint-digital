"use client";
import Image from "next/image";
import { useState } from "react";
import BlurText from "./BlurText";

export default function ContactTabs() {
  const [active, setActive] = useState<"contact" | "call">("contact");

  return (
    <section className="relative w-full bg-bg overflow-hidden sm:h-screen h-auto">
      {/* Background for desktop */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/images/contactbg.svg"
          alt="Brand Background"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Background for small screens */}
      <div className="sm:hidden absolute inset-0 bg-primary"></div>

      <div className="relative z-10 flex items-center justify-center sm:h-screen h-auto w-full px-4 sm:px-6 py-16 sm:py-0">
        <div className="text-center mt-8 mx-auto max-w-full sm:max-w-4xl">
          <h2 className="text-3xl sm:text-6xl font-[600] text-black mb-4 sm:mb-8 flex flex-col items-center justify-center leading-snug sm:leading-tight">
            <BlurText
              text="Take Your Digital"
              delay={100}
              animateBy="words"
              direction="top"
              className="block"
            />
            <BlurText
              text="Success to the Next"
              delay={150}
              animateBy="words"
              direction="top"
              className="block"
            />
            <BlurText
              text="Level with Us!"
              delay={150}
              animateBy="words"
              direction="top"
              className="block"
            />
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-black mb-6 sm:mb-12 max-w-full sm:max-w-4xl mx-auto leading-relaxed">
            Partner with our web agency to turn data into growth, insights into
            impact, and strategies into success. Lets make every digital move
            count
          </p>

          {/* Tab Buttons */}
          <div className="inline-flex rounded-lg overflow-hidden border border-black bg-black">
            <button
              onClick={() => setActive("contact")}
              className={`flex-1 px-3 sm:px-6 py-1 sm:py-2 font-semibold transition-all duration-200 text-xs sm:text-sm whitespace-nowrap ${
                active === "contact"
                  ? "bg-primary text-black m-1 rounded-md"
                  : "bg-black text-white"
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActive("call")}
              className={`flex-1 px-3 sm:px-8 py-1 sm:py-2 font-semibold transition-all duration-200 text-xs sm:text-sm ${
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
