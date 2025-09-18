"use client";

import Image from "next/image";
import BlurText from "@/app/components/BlurText";
export default function WebCompany() {
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

      <div className="relative z-10 px-32 py-24 container mx-auto ">
        {/* title row */}
        <div className="flex justify-between items-center ">
          <h1 className="flex flex-col">
            <BlurText
              text="Recognised as a Leading"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-5xl font-[600px] text-black "
            />
            <BlurText
              text="Web Design Company"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-5xl font-[600px] text-black leading-relaxed"
            />
          </h1>
          {/* <h1 className="text-4xl font-bold">
            Recognised as a Leading
            <br /> Web Design Company
          </h1> */}
          <p className=" text-xs max-w-sm">
            This document serves to act as a contract between the client and our
            agency. It details the scopeof the project, pricing, feedback
            rounds, and other terms that ensure all parties are in complete
            agreement for this project and engagement.
          </p>
        </div>
        <div className="flex justify-evenly  max-w-full pt-15 ">
          <Image
            src="/images/cloudways 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
          <Image
            src="/images/teamwork 1 (1).svg"
            alt="Company"
            width={250}
            height={250}
          />
          <Image
            src="/images/digital-journal 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
          <Image
            src="/images/influencer-marketing-hub 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
        </div>
        <div className="flex justify-evenly  max-w-full  ">
          <Image
            src="/images/yahoo-finance 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
          <Image
            src="/images/business-insider 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
          <Image
            src="/images/tech-times 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
          <Image
            src="/images/msn 1.svg"
            alt="Company"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
