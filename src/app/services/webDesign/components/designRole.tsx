"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignRole() {
  return (
    <section className="relative bg-bg text-white py-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Globe */}
        <div className="relative flex justify-start">
          <motion.div
            className="relative flex justify-start"
            initial={{ x: -200, scale: 0.8, opacity: 0 }} // start hidden, left, small
            whileInView={{ x: 0, scale: 1.2, opacity: 1 }} // animate to center + bigger
            viewport={{ once: false, amount: 0.3 }} // trigger every time it comes into view
            transition={{ duration: 1.2, ease: "easeOut" }} // smooth animation
          >
            <Image
              src="/images/halfGlobeleft.svg"
              alt="Globe"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE (Text Section) */}
        <div className="space-y-6 pr-20">
          <h2 className="text-4xl font-[600px] leading-snug text-primary">
            The Role of a Global Digital
            <br /> Marketing Agency
          </h2>

          <p className="text-gray-300 text-xs leading-relaxed max-w-2xl">
            As a comprehensive full service digital marketing agency with a
            worldwide reach, Bird designs and executes digital strategies that
            embrace the entirety of the online sphere. Beyond just offering
            individual services, Birds methodology is holistic, empowering
            businesses to leverage the full potential of the digital world and
            enhance their online presence.
            <br /> Our team of digital experts specializes in understanding each
            brands unique needs and devising custom strategies that make
            businesses stand out in the digital space. We take pride in driving
            digital transformation, employing forward-thinking methods to keep
            our clients at the cutting edge of digital advancements.
          </p>

          <h2 className="text-4xl font-[600px] leading-snug text-primary">
            The Role of a Global Digital
            <br /> Marketing Agency
          </h2>

          <p className="text-gray-300 text-xs leading-relaxed max-w-2xl">
            Bird acts as a reliable ally in your digital journey, offering the
            necessary support and insight to navigate the intricate and rapidly
            evolving digital environment. Our commitment to superior quality and
            client-centric service has established us as a favored digital
            partner for businesses seeking to boost their online visibility.
            <br />
            <br />
            In the realm of digital, success is defined by visibility and
            innovation, and our agency is dedicated to ensuring your business
            excels in both. We excel in applying digital solutions to their
            greatest effect, ensuring our clients not only adapt but excel in
            the digital age. Your digital triumph is our ultimate aim, and we
            possess the skills to achieve it.
          </p>

          <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
