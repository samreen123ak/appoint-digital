"use client";
import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { FaDiamond } from "react-icons/fa6";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesDropDown: React.FC<Props> = ({ isOpen, onClose }) => {
  const col1 = [
    { name: "Blogs", href: "/resources/blogs" },
    { name: "Case Studies" },
    { name: "Testimonials" },
  ];

  if (!isOpen) return null;

  // Reusable renderer
  const renderColumn = (items: { name: string; href?: string }[]) => (
    <div className="space-y-5">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-5 font-bold text-sm">
          <FaDiamond className="text-primary text-2xl" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary transition font-bold text-3xl"
            >
              {item.name}
            </Link>
          ) : (
            <span className="font-bold text-3xl">{item.name}</span>
          )}
        </div>
      ))}
    </div>
  );

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
        <div className="absolute bottom-34 left-0 z-0">
          <Image
            src="/images/industrybgright.svg"
            alt="Dropdown Background"
            width={180}
            height={180}
            className="object-contain rotate-120"
          />
        </div>
        <div className="space-y-5 p-20">{renderColumn(col1)}</div>
        <div className="absolute right-0 top-[30%] -translate-y-1/2 z-0">
          <Image
            src="/images/globehalf1.svg"
            alt="Dropdown Graphic"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center w-full mt-5 ">
          <Image
            src="/images/Resources (1).svg"
            alt="graphic"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropDown;
