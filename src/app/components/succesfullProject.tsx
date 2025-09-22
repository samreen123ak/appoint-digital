"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlurText from "./BlurText";

const projects = [
  {
    id: 1,
    image: "https://cms.pixso.net/images/articles/ui-ux-websites.png",
    title: "Creative Branding Campaign",
    company: "BrandX Agency",
  },
  {
    id: 2,
    image:
      "https://uizard.io/static/f1407273150e997d67ccf6ed18f7083a/d961d/3a918aa82d582cd3c767a20076c9e9e0fc8e0ebd-1512x840.png",
    title: "E-commerce Redesign",
    company: "ShopNow Inc.",
  },
  {
    id: 3,
    image:
      "https://www.bigscal.com/wp-content/uploads/2024/02/Product-UI-UX-Design-Services-1-714x430.webp",
    title: "Social Media Growth",
    company: "BuzzMedia",
  },
];

export default function SuccessfulProjects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col lg:flex-row relative">
      {/* LEFT SIDE (Sticky Info) */}
      <div className="lg:w-1/2 w-full px-6 sm:px-16 py-12 lg:py-28 sticky lg:top-0 self-start">
        {/* Our Work */}
        <div className="relative inline-block mb-4">
          <span className="text-lg font-medium relative z-10">Our Work</span>
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black"></span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[600px] text-black mb-10">
          <BlurText
            text="Case Studies, a selection of"
            delay={100}
            animateBy="words"
            direction="top"
            align="left"
            className="block"
          />
          <BlurText
            text="successful projects"
            delay={100}
            animateBy="words"
            direction="top"
            align="left"
            className="block text-primary"
          />
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          We always put our clients first to deliver our best time after time.
          Below is some of our proudest work.
        </p>

        {/* CTA with line */}
        <span className="relative inline-block group cursor-pointer text-lg font-medium">
          View all Case Studies
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0"></span>
        </span>
      </div>

      {/* RIGHT SIDE (Scrollable Projects) */}
      <div
        className="lg:w-1/2 w-full px-6 sm:px-10 py-10 lg:py-20 space-y-10 relative"
        onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        {projects.map((project) => (
          <div key={project.id} className="space-y-3">
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />

            {/* Project Title */}
            <h3 className="text-xl sm:text-lg font-light">{project.title}</h3>

            {/* Company Name with hover line */}
            <span className="relative inline-block font-bold group cursor-pointer text-lg sm:text-base">
              {project.company}
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
          </div>
        ))}

        {/* Hover Cursor (Circle with "view") - hidden on small screens */}
        {hoverRight && (
          <div
            className="hidden lg:flex fixed z-50 pointer-events-none items-center justify-center w-24 h-24 font-bold rounded-full bg-gray-400/80 text-black text-sm uppercase"
            style={{
              left: cursorPos.x - 48,
              top: cursorPos.y - 48,
              transition: "transform 0.1s linear",
            }}
          >
            view
          </div>
        )}
      </div>
    </div>
  );
}
