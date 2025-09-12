"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="relative">
      {/* Dropdown Panel */}
      <div className="absolute right-[420px] top-24 bg-black text-white rounded-lg shadow-2xl w-[800px] h-[400px] py-8 pl-8 z-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/images/industrybgright.svg"
            alt="Dropdown Background"
            width={180}
            height={180}
            className="object-contain rotate-150"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-xl bg-primary rounded-full px-2 z-20 cursor-pointer"
        >
          ✕
        </button>

        {/* Content on top of background */}
        <div className="grid grid-cols-2 gap-8 relative z-10">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image src="/images/home.svg" alt="Home" width={20} height={20} />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image
                src="/images/solutions.svg"
                alt="Solutions"
                width={20}
                height={20}
              />
              <span>Our Solutions</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image
                src="/images/resources.svg"
                alt="Resources"
                width={20}
                height={20}
              />
              <span>Resources</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image
                src="/images/industries.svg"
                alt="Industries"
                width={20}
                height={20}
              />
              <span>Industries</span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image
                src="/images/contact.svg"
                alt="Contact"
                width={20}
                height={20}
              />
              <span>Contact</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image
                src="/images/logout.svg"
                alt="Logout"
                width={20}
                height={20}
              />
              <span>LogOut</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary text-2xl font-bold">
              <Image
                src="/images/whoweare.svg"
                alt="Who We Are"
                width={20}
                height={20}
              />
              <span>Who We Are</span>
            </div>

            {/* Free Audit Button */}
            <button className="mt-4 bg-primary text-black font-semibold px-5 py-4 w-40 rounded-md cursor-pointer">
              Free audit
            </button>
          </div>

          {/* Floating Globe image */}
          <div className="absolute right-0 top-[70%] -translate-y-1/2 z-0">
            <Image
              src="/images/globehalf1.svg"
              alt="Dropdown Graphic"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-25 justify-end mr-5 relative z-10">
          <FaInstagram className="cursor-pointer text-primary text-xl" />
          <FaFacebook className="cursor-pointer text-primary text-xl" />
          <FaLinkedin className="cursor-pointer text-primary text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
