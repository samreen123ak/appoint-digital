"use client";
import Image from "next/image";
import { useState } from "react";
import BlurText from "./BlurText";
import { motion } from "framer-motion";

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
        {/* LEFT SIDE - Globe */}
        <motion.div
          className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block"
          initial={{ x: -200, scale: 0.9, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1], // custom cubic-bezier for smoothness
          }}
        >
          <Image
            src="/images/halfGlobeleft.svg"
            alt="Globe Left"
            width={400}
            height={400}
            className="object-contain w-[100px] sm:w-[200px] md:w-[400px] h-auto"
          />
        </motion.div>

        {/* RIGHT SIDE - Globe */}
        <motion.div
          className="absolute -right-12 top-[54%] -translate-y-1/2 hidden md:block"
          initial={{ x: 200, scale: 0.9, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src="/images/halfGlobeleft.svg"
            alt="Globe Right"
            width={500}
            height={500}
            className="object-contain rotate-180 w-[100px] sm:w-[200px] md:w-[400px] h-auto"
          />
        </motion.div>

        {/* CENTER CONTENT */}
        <div className="text-center mx-auto max-w-full sm:max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-6xl font-[600] text-black mb-4 sm:mb-8 leading-snug sm:leading-tight">
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
              delay={200}
              animateBy="words"
              direction="top"
              className="block"
            />
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-black mb-6 sm:mb-12 max-w-3xl sm:max-w-2xl mx-auto leading-relaxed">
            Partner with our web agency to turn data into growth, insights into
            impact, and strategies into success. Let’s make every digital move
            count.
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
