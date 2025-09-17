// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa";

// const reviews = [
//   {
//     name: "John Doe",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 5,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "2h ago",
//   },
//   {
//     name: "Jane Smith",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 4,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing..",
//     time: "5h ago",
//   },
//   {
//     name: "Alice Brown",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 5,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "1d ago",
//   },
//   {
//     name: "Bob White",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 4,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "2d ago",
//   },
//   {
//     name: "Emma Green",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 5,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "3d ago",
//   },
//   {
//     name: "Tom Black",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 4,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "4d ago",
//   },
//   {
//     name: "Sara Blue",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 5,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "5d ago",
//   },
//   {
//     name: "Mike Gray",
//     img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
//     rating: 4,
//     review:
//       "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
//     time: "6d ago",
//   },
// ];

// const ReviewSection = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [currentDot, setCurrentDot] = useState(0);
//   const totalDots = 4;

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const scrollLeft = scrollRef.current.scrollLeft;
//       const width = scrollRef.current.clientWidth;
//       const totalWidth = scrollRef.current.scrollWidth;
//       const newDot = Math.round(
//         (scrollLeft / (totalWidth - width)) * (totalDots - 1)
//       );
//       setCurrentDot(newDot);
//     }
//   };

//   return (
//     <div className="bg-bg py-10">
//       <div
//         ref={scrollRef}
//         onScroll={handleScroll}
//         className="overflow-x-auto scrollbar-hide"
//       >
//         <div className="flex gap-4 min-w-max flex-wrap">
//           {reviews.map((review, i) => (
//             <div
//               key={i}
//               className="w-[500px] p-8 bg-white rounded-3xl shadow-md flex-shrink-0"
//             >
//               <div className="flex items-center justify-between gap-2 mb-2">
//                 <div className="gap-5 flex items-center">
//                   <img
//                     src={review.img}
//                     alt={review.name}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <span className="font-semibold">{review.name}</span>
//                 </div>

//                 <div className="flex text-yellow-400">
//                   {Array.from({ length: 5 }).map((_, idx) => (
//                     <FaStar
//                       key={idx}
//                       className={idx < review.rating ? "" : "text-gray-300"}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-2">{review.review}</p>
//               <span className="text-gray-400 text-sm">{review.time}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center gap-2 mt-10">
//         {Array.from({ length: totalDots }).map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full ${
//               currentDot === idx ? "bg-primary" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;
"use client";
import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 5,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "2h ago",
  },
  {
    name: "Jane Smith",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 4,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing..",
    time: "5h ago",
  },
  {
    name: "Alice Brown",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 5,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "1d ago",
  },
  {
    name: "Bob White",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 4,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "2d ago",
  },
  {
    name: "Emma Green",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 5,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "3d ago",
  },
  {
    name: "Tom Black",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 4,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "4d ago",
  },
  {
    name: "Sara Blue",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 5,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "5d ago",
  },
  {
    name: "Mike Gray",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    rating: 4,
    review:
      "I absolutely loved this product! It exceeded my expectations in every way. The quality is fantastic, it works perfectly, and the customer service was amazing.",
    time: "6d ago",
  },
];

const ReviewSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentDot, setCurrentDot] = useState(0);
  const totalDots = 4;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const totalWidth = scrollRef.current.scrollWidth;
      const newDot = Math.round(
        (scrollLeft / (totalWidth - width)) * (totalDots - 1)
      );
      setCurrentDot(newDot);
    }
  };

  return (
    <div className="bg-bg py-10">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-4 min-w-max flex-wrap">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="w-[500px] p-8 bg-white rounded-3xl shadow-md flex-shrink-0"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="gap-5 flex items-center">
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
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentDot === idx ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
