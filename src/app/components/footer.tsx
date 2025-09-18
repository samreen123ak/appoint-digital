import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white px-6 md:px-16 pt-10 overflow-hidden">
      {/* Background Globe (decorative) */}
      <div className="absolute -top-20 right-[30%] flex items-center justify-center z-0 pointer-events-none">
        <Image
          src="/images/globeYellowbg.svg"
          alt="Globe Background"
          height={500}
          width={500}
          className="object-contain animate-spin-slow "
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <a
            href="mailto:Hi@yogaaditama.com"
            className="text-gray-300 text-sm cursor-pointer block"
          >
            Hi@yogaaditama.com
          </a>
          <a
            href="tel:+6282159495854"
            className="text-gray-300 text-sm cursor-pointer block"
          >
            +62821-5949-5854
          </a>
        </div>

        {/* Center column (kept empty for CTA or logo) */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* optional CTA or logo */}
        </div>

        {/* Locations */}
        <div className="text-right">
          <h3 className="text-md font-semibold mb-2">Indonesia</h3>
          <p className="text-gray-300 text-sm">Jln. Bambu No. 375</p>
          <p className="text-gray-300 text-sm">Samarinda, Kalimantan Timur</p>

          <h3 className="text-md font-semibold mt-4 mb-2">Hong Kong</h3>
          <p className="text-gray-300 text-sm">60 Ya Fung Sung</p>
          <p className="text-gray-300 text-sm">San Tsuen, 75129</p>
        </div>
      </div>

      {/* Centered Terms & Conditions (visible above the globe) */}
      {/* Footer bottom */}
      <div className="relative z-10 mt-8 flex flex-col md:flex-row items-center justify-between  border-white/10 pt-4">
        {/* Left side: Copyright */}
        <div className=" flex">
          <p className="text-xs text-gray-400">
            © Copyright 2024. Aditama Studio. All rights reserved.
          </p>

          {/* Middle: Terms & Conditions */}
          <a
            href="/terms"
            className="text-xs text-gray-300 hover:text-primary transition-colors duration-200 ml-[220px]"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">
            <FaBehance size={18} />
          </a>
          <a href="#" className="hover:text-primary">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-primary">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>

      {/* Footer text image */}
      <div className="relative z-10 flex justify-center items-center mt-6">
        <Image
          src="/images/textFooter.svg"
          alt="Footer Text"
          width={1200}
          height={1200}
          className="object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
