"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignRole() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Globe absolute on left */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        initial={{ x: -200, scale: 0.9, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/halfGlobeleft.svg"
          alt="Globe"
          width={900}
          height={900}
          className="object-contain w-[250px] sm:w-[400px] md:w-[900px] h-auto"
        />
      </motion.div>

      {/* Content aligned right */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="md:ml-auto max-w-lg space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-snug text-primary">
            A Leading Global Full Service <br /> Digital Marketing Agency
          </h2>

          <p className="text-gray-300 text-sm sm:text-md md:text-md leading-relaxed">
            Bird is a premier Digital Marketing Agency with a global presence,
            known for delivering top-tier digital solutions to businesses
            worldwide. Our dynamic agency stands out for its ability to enhance
            digital visibility for businesses, using the latest technologies and
            innovative approaches.
          </p>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
            Enhancing Your Digital Presence
          </h3>

          <p className="text-gray-300 text-sm sm:text-md md:text-md leading-relaxed">
            In the rapidly changing digital environment, having a strong digital
            presence is crucial. Companies around the world recognize the
            importance of this digital domain, and Birds digital marketing
            services are at the forefront of this digital revolution. We
            specialize in boosting the digital profiles of businesses, ensuring
            their success in the online marketplace. specialize in boosting the
            digital profiles of businesses, ensuring their success in the online
            marketplace.
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
            Enhancing Your Digital Presence
          </h3>

          <p className="text-gray-300 text-sm sm:text-md md:text-md leading-relaxed">
            In the rapidly changing digital environment, having a strong digital
            presence is crucial. Companies around the world recognize the
            importance of this digital domain, and Birds digital marketing
            services are at the forefront of this digital revolution. We
            specialize in boosting the digital profiles of businesses, ensuring
            their success in the online marketplace. specialize in boosting the
            digital profiles of businesses, ensuring their success in the online
            marketplace.
          </p>

          <button className="bg-primary text-black px-5 sm:px-6 py-2 sm:py-3 rounded font-semibold cursor-pointer text-sm sm:text-base transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
