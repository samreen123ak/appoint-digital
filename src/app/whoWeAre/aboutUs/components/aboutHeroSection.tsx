// app/about/page.tsx (if using Next.js App Router)
"use client";
import Image from "next/image";
import BlurText from "@/app/components/BlurText";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="relative flex items-center justify-center">
        {/* Centered Image */}
        <Image
          src="/images/globeYellowbg.svg"
          alt="About Background"
          width={800}
          height={800}
          className="object-contain opacity-50 animate-spin-slow"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute z-10 text-center  items-center px-4">
          <div className="mb-5">
            <BlurText
              text="Allow Your Brand To"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-6xl font-[600px] text-white"
            />
            <BlurText
              text="Grow with Our Digital"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-6xl font-[600px] text-white"
            />
            <BlurText
              text="Help"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-6xl font-[600px] text-white"
            />
          </div>

          <p className="mt-4 text-lg md:text-xl text-center text-gray-300 max-w-xl font-[600px] mx-auto">
            We help businesses reach heights by creating customized strategies
            that deliver real results.
          </p>
        </div>
      </div>
    </section>
  );
}
