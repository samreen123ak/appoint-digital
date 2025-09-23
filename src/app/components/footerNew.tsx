"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";
import LookAtCursor from "./lookAtCursor";

export default function FooterNew() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer className="relative w-full bg-black text-white px-10 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-20 items-start relative">
        {/* Left */}
        <div className="flex flex-col items-start">
          <Image src="/logo.svg" alt="logo" width={130} height={130} />
        </div>

        {/* Offices */}
        <div className="md:col-span-3 grid md:grid-cols-3 gap-16 text-lg">
          {/* Malta */}
          <div>
            <h3 className="font-bold flex items-center gap-3 text-2xl">
              <FaDiamond className="w-4 h-4 text-primary  " /> Malta
            </h3>
            <p className="mt-4 text-sm">+35622269617</p>
            <p className="text-sm">contact@digital-cover.com</p>
            <p className="text-sm">
              Punchbowl Centre, Elia Zammit Street, St Julian’s, STJ 3154, Malta
            </p>
          </div>

          {/* Lyon */}
          <div>
            <h3 className="font-bold flex items-center gap-3 text-2xl">
              <FaDiamond className="w-4 h-4 text-primary  " /> Lyon
            </h3>
            <p className="mt-4 text-sm">+33472321197</p>
            <p className="text-sm">contact@digital-cover.fr</p>
            <p className="text-sm">4 Bis rue Jarente, 69002 Lyon, France</p>
          </div>

          {/* Paris */}
          <div>
            <h3 className="font-bold flex items-center gap-3 text-2xl">
              <FaDiamond className="w-4 h-4 text-primary  " /> Paris
            </h3>
            <p className="mt-4 text-sm">+33189163382</p>
            <p className="text-sm">contact@digital-cover.fr</p>
            <p className="text-sm">207 rue de Bercy, 75012 Paris, France</p>
          </div>
        </div>

        {/* Globe in empty space */}
        {/* <motion.div
          className="absolute right-[35%] top-[30] translate-y-[5%] pointer-events-none hidden md:block"
          animate={{
            x: (mousePos.x - window.innerWidth / 2) * 0.05,
            y: (mousePos.y - window.innerHeight / 2) * 0.05,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <Image
            src="/images/globeYellowbg.svg"
            alt="shape"
            width={400}
            height={400}
          />
        </motion.div> */}

        <LookAtCursor
          imageSrc="/images/globeYellowbg.svg"
          size={320}
          tilt3D
          maxTilt={40}
          perspectivePx={600}
          rotate2D={false}
        />
      </div>

      {/* Bottom Section */}
      <div className="mt-56 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>2025 – © Digital Cover</p>
        <div className="flex gap-10 mt-8 md:mt-0 text-sm">
          <a href="#">Contact us</a>
          <a href="#">Join the team</a>
          <a href="#">Web terms and conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
