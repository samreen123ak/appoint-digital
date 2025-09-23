"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function MovingOutlineDiamond() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-20 h-20 flex items-center justify-center"
      >
        {/* Animated diamond outline */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full rotate-45"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="12"
            ry="12"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="320"
            strokeDashoffset="320"
            className="transition-all duration-700 ease-linear hover:stroke-dashoffset-0"
          />
        </svg>

        {/* Inside content */}
        <div className="absolute text-white -rotate-45">
          {open ? <X size={22} /> : null}
        </div>
      </button>
    </div>
  );
}
