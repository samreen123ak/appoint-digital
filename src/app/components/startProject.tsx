"use client";
import React, { useState } from "react";

const projects = [
  {
    name: "Project 1",
    description:
      " Build custom blockchain solutions from the ground up — secure, scalable, and optimized for your ecosystem",
  },
  {
    name: "Project 2",
    description:
      " Build custom blockchain solutions from the ground up — secure, scalable, and optimized for your ecosystem",
  },
  {
    name: "Project 3",
    description:
      " Build custom blockchain solutions from the ground up — secure, scalable, and optimized for your ecosystem",
  },
];

export default function StartProject() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* LEFT SIDE */}
        <div className="pl-15 py-20">
          {/* Title */}
          <h2 className="text-[42px] font-bold text-black mb-6 leading-tight">
            Start a project
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed mb-12 max-w-md">
            Do you have a digital marketing objective you like to achieve? Are
            you ready to find out how Bird can help to build your business
            online? If so, make contact with us today...
          </p>

          {/* Project Name Section */}
          <div>
            <p className="text-sm font-semibold text-black mb-2">
              Project Name
            </p>
            <div className="grid grid-cols-2 gap-40">
              {/* Left side - description */}
              <p className="text-gray-600 text-sm max-w-2xl ">
                Build custom blockchain solutions from the ground up — secure,
                scalable, and optimized for your ecosystem
              </p>
              {/* Right side - project list */}
              <ul className="space-y-2 text-md text-gray-800 font-medium cursor-pointer ml-28">
                {projects.map((p, i) => (
                  <li
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition ${
                      active === i ? "font-bold underline" : "cursor-pointer"
                    }`}
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b w-72 mb-5 mt-5"></div>

          {/* Project Type Section */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-black mb-2">
              Project Type
            </p>
            <div className="border-b w-72 mb-5 mt-5"></div>
            <div className="flex gap-8 text-sm text-gray-800 font-medium">
              <span>Creation</span>
              <span>Security</span>
              <span>Solutions</span>
            </div>
            <div className="border-b w-72 mb-5 mt-5"></div>
          </div>

          {/* Button */}
          <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-stretch overflow-hidden relative h-[700px] w-full ">
          <div
            className="transition-transform ease-in-out"
            style={{ transform: `translateY(-${active * 100}%)` }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="relative bg-black text-white flex flex-col h-[700px] w-[600px] mb-5"
              >
                {/* Background wave */}
                <div className="absolute inset-0 opacity-25">
                  <img
                    src="/images/wave.svg"
                    alt="Waves"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 mt-auto">
                  <h3 className="text-3xl font-bold mb-4">{p.name}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="relative z-10 bg-primary text-black px-8 py-6 font-semibold">
                  <div className="grid grid-cols-2 gap-8 mb-6 text-sm">
                    <div className="space-y-2">
                      <p>Client Name:</p>
                      <p>Project Date:</p>
                      <p>Website:</p>
                      <p>Category:</p>
                    </div>
                    <div className="space-y-2">
                      <p>Location:</p>
                      <p>Budget:</p>
                      <p>Status:</p>
                      <p>Duration:</p>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between text-gray-600 text-sm">
                    <div className="gap-10 flex items-center">
                      <span>Copyright © 2025</span>
                      <span>Privacy Policy</span>
                    </div>
                    <span>Terms & Conditions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
