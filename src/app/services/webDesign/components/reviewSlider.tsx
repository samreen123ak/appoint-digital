"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    img: "/images/profilepic.svg",
    rating: 5,
    review: "Amazing product! Super high quality and great support.",
    time: "2h ago",
  },
  {
    name: "Jane Smith",
    img: "/images/profilepic.svg",
    rating: 4,
    review: "Really happy with it, exceeded my expectations.",
    time: "5h ago",
  },
  {
    name: "Alice Brown",
    img: "/images/profilepic.svg",
    rating: 5,
    review: "Fantastic! Works perfectly.",
    time: "1d ago",
  },
  {
    name: "Bob White",
    img: "/images/profilepic.svg",
    rating: 4,
    review: "Solid experience, great quality.",
    time: "2d ago",
  },
  {
    name: "Emma Green",
    img: "/images/profilepic.svg",
    rating: 5,
    review: "Love this! Will recommend to friends.",
    time: "3d ago",
  },
  {
    name: "Tom Black",
    img: "/images/profilepic.svg",
    rating: 4,
    review: "Very good, worth the money.",
    time: "4d ago",
  },
  {
    name: "Sara Blue",
    img: "/images/profilepic.svg",
    rating: 5,
    review: "Top-notch product, very reliable.",
    time: "5d ago",
  },
  {
    name: "Mike Gray",
    img: "/images/profilepic.svg",
    rating: 4,
    review: "Happy with my purchase!",
    time: "6d ago",
  },
];

const ReviewSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-bg py-10 overflow-hidden">
      <div
        className={`flex gap-4 w-max ${isPaused ? "" : "animate-scroll"}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate reviews for seamless loop */}
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={i}
            className="w-[400px] p-6 bg-white rounded-3xl shadow-md flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="gap-3 flex items-center">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold">{review.name}</span>
              </div>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={idx < review.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-2">{review.review}</p>
            <span className="text-gray-400 text-sm">{review.time}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite; /* slowed down */
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewSection;
