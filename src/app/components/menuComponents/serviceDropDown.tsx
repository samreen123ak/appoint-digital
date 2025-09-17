"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDiamond } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdown: React.FC<Props> = ({ isOpen, onClose }) => {
  const col1 = [
    { name: "Accountants" },
    { name: "Search Engine Optimization" },
    { name: "Social Media Marketing" },
    { name: "Social Media Management" },
    { name: "Email Marketing" },
    { name: "Paid Search Marketing" },
    { name: "Brand Identity" },
    { name: "Lead Generation" },
  ];

  const col2 = [
    { name: "PPC Marketing" },
    { name: "Digital Marketing" },
    { name: "Local SEO" },
  ];

  const col3 = [
    { name: "Web Development" },
    { name: "Web Design", href: "/services/webDesign" },
  ];

  if (!isOpen) return null;

  // Reusable renderer
  const renderColumn = (items: { name: string; href?: string }[]) => (
    <div className="space-y-5">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-5 font-bold text-sm">
          <FaDiamond className="text-primary" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition">
              {item.name}
            </Link>
          ) : (
            <span>{item.name}</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-10 pt-12 relative">
        <div className="flex justify-between items-center w-full ">
          <Image src="/logo.svg" alt="Logo" width={120} height={1200} />
          <button
            onClick={onClose}
            className="absolute top-10 right-8 text-black text-xl bg-primary rounded-full px-2 py-2 z-50 cursor-pointer"
          >
            <RxCross1 />
          </button>
        </div>
      </header>

      <div className="relative w-screen h-screen pl-28">
        {/* Background Image */}
        <div className="absolute bottom-24 left-0 -z-10">
          <Image
            src="/images/industrybgright.svg"
            alt="Dropdown Background"
            width={180}
            height={180}
            className="object-contain rotate-120"
          />
        </div>

        {/* Corner Globe */}
        <div className="absolute right-0 bottom-[90px] -z-10">
          <Image
            src="/images/cornerGlobe.svg"
            alt="graphic"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 max-w-5xl mx-auto items-start relative z-10">
          {/* Column 1 */}
          <div className="space-y-5 p-4">
            <h3 className="text-2xl font-bold mb-4">MARKETING SOLUTIONS</h3>
            {renderColumn(col1)}
          </div>

          {/* Column 2 with border starting after title */}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4"></h3>
            <div className="border-l h-[350px] border-gray-600 pl-10 mt-10">
              {renderColumn(col2)}
            </div>
          </div>

          {/* Column 3 with border starting after title */}
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4">WEB SOLUTIONS </h3>
            <div className="border-l h-[350px] border-gray-600 pl-10">
              {renderColumn(col3)}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <Image
            src="/images/Services.svg"
            alt="graphic"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
