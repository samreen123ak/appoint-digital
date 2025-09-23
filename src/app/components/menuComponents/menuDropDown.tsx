"use client";
import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onServicesClick: () => void;
  onResourcesClick: () => void;
  onIndustriesClick: () => void;
  onWhowereClick: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  onServicesClick,
  onResourcesClick,
  onIndustriesClick,
  onWhowereClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white">
      <header className="flex items-center justify-between px-10 py-12 relative">
        <div className="flex justify-between items-center w-full ">
          <Image src="/logo.svg" alt="Logo" width={120} height={120} />
          <button
            onClick={onClose}
            className="absolute top-10 right-8 text-black text-xl bg-primary rounded-full px-2 py-2 z-50 cursor-pointer"
          >
            <RxCross1 />
          </button>
        </div>
      </header>

      <div className="relative w-screen h-screen py-15 pl-28">
        <div className="absolute bottom-36 left-0 z-0">
          <Image
            src="/images/industrybgright.svg"
            alt="Dropdown Background"
            width={180}
            height={180}
            className="object-contain rotate-120"
          />
        </div>

        <div className="grid grid-cols-3 gap-8  relative z-10">
          <div className="flex flex-col gap-6">
            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
            >
              <Image src="/images/home.svg" alt="Home" width={30} height={30} />
              <span>Home</span>
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
              onClick={onServicesClick}
            >
              <Image
                src="/images/solutions.svg"
                alt="Solutions"
                width={30}
                height={30}
              />
              <span>Services</span>
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
              onClick={onResourcesClick}
            >
              <Image
                src="/images/resources.svg"
                alt="Resources"
                width={30}
                height={30}
              />
              <span>Resources</span>
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
              onClick={onIndustriesClick}
            >
              <Image
                src="/images/industries.svg"
                alt="Industries"
                width={30}
                height={30}
              />
              <span>Industries</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
            >
              <Image
                src="/images/contact.svg"
                alt="Contact"
                width={30}
                height={30}
              />
              <span>Contact</span>
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
            >
              <Image
                src="/images/logout.svg"
                alt="Logout"
                width={30}
                height={30}
              />
              <span>LogOut</span>
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer text-3xl font-bold 
             hover:text-primary transform transition-transform duration-300 hover:translate-x-4"
              onClick={onWhowereClick}
            >
              <Image
                src="/images/whoweare.svg"
                alt="Who We Are"
                width={30}
                height={30}
              />
              <span>Who We Are</span>
            </div>

            <button className="bg-primary text-black font-semibold px-5 py-3 w-52 text-xl rounded-md cursor-pointer transform transition-transform duration-300 hover:translate-x-4">
              Free audit
            </button>
          </div>

          <div className="absolute -right-72 top-[50%] -translate-y-1/2 z-0">
            <Image
              src="/images/globeYellowbg.svg"
              alt="Dropdown Graphic"
              width={700}
              height={700}
              className="object-contain rotate-180"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-30 justify-end mr-5 relative z-10">
          <FaInstagram className="cursor-pointer text-primary text-3xl" />
          <FaFacebook className="cursor-pointer text-primary text-3xl" />
          <FaLinkedin className="cursor-pointer text-primary text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
