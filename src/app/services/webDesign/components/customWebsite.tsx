"use client";

import React, { useState } from "react";
import Image from "next/image";

const services = [
  "Custom Website Design",
  "Responsive Web Design",
  "User Experience (UX) Design",
  "Landing Page Design",
  "Website Redesign",
  "E-Commerce Web Design",
  "Web Maintenance & Support",
];

export default function CustomWebsite() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-bg text-white overflow-hidden">
      {/* Right-side globe as background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <div className="relative ">
          <Image
            src="/images/customwebBg.svg"
            alt="Globe background"
            width={500}
            height={500}
            className="object-contain "
            priority
          />
          <div className="absolute -inset-40 " />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Complete Solutions for a <br />
            Website That Stands Out
          </h2>
          <p className="mt-4 text-gray-300">
            We offer a variety of web design services to make your business
            shine online.
          </p>
        </div>

        {/* Full-width tab bar (7 equal tabs) */}
        <div className="mt-10 w-full">
          <div className="grid grid-cols-7 border border-primary rounded-full overflow-hidden text-cente bg-bg/50 shadow-[2px_2px_8px_0px_rgba(234,179,8,0.8)]">
            {services.map((svc, idx) => (
              <button
                key={svc}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-4 text-xs sm:text-sm font-semibold leading-snug whitespace-normal m-1 rounded-full break-words ${
                  activeTab === idx
                    ? "bg-primary text-black"
                    : "text-primary  hover:cursor-pointer"
                }`}
              >
                {svc}
              </button>
            ))}
          </div>
        </div>

        {/* Section below shows active tab content */}
        <div className="mt-12 max-w-2xl">
          <h3 className="text-2xl font-semibold text-yellow-500">
            {services[activeTab]}
          </h3>
          <p className="mt-2 text-gray-300">
            {activeTab === 0 &&
              "We create unique designs that match your brands style and vision."}
            {activeTab === 1 &&
              "Our designs are fully responsive and look great on all devices."}
            {activeTab === 2 &&
              "We focus on user experience to ensure smooth interactions."}
            {activeTab === 3 &&
              "Landing pages optimized for conversions and business growth."}
            {activeTab === 4 &&
              "Redesign your website with modern, engaging layouts."}
            {activeTab === 5 &&
              "Beautiful e-commerce designs to boost your online sales."}
            {activeTab === 6 &&
              "Ongoing maintenance & support to keep your site running smoothly."}
          </p>

          <h4 className="mt-6 text-lg font-bold text-primary">BENEFIT</h4>
          <p className="mt-2 text-gray-300">
            Your website will look professional and make a strong impression,
            helping you attract the right audience. Every detail is customized
            to showcase your brands strengths, setting you apart from
            competitors.
          </p>
        </div>
      </div>
    </section>
  );
}
