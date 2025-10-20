"use client";
import React from "react";
import BlurText from "@/app/components/BlurText";
import { FaHandshake, FaLaptopCode, FaGlobe } from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaHandshake className="text-8xl mb-4" />,
      title: "Transparency",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. Well say what well do, and then do what we say.",
    },
    {
      icon: <FaLaptopCode className="text-8xl mb-4" />,
      title: "Transparency",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. Well say what well do, and then do what we say.",
    },
    {
      icon: <FaGlobe className="text-8xl mb-4" />,
      title: "Transparency",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. Well say what well do, and then do what we say.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 text-center">
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h4 className="text-lg font-semibold mb-2">Our values</h4>

        <BlurText
          text="  Driving Everything"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-6xl font-[600px] text-white"
        />
        <BlurText
          text=" We Do"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-6xl font-[600px] text-white"
        />
        <p className="text-gray-300 text-xl  leading-relaxed">
          With our team of experts with a wealth of experience, you will never
          have to worry about your brand growth in the digital realm.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-15">
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-primary text-black w-[220px] rounded-2xl  shadow-[8px_8px_0px_#374151] py-10 px-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
          >
            {item.icon}
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm font-medium text-center leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
