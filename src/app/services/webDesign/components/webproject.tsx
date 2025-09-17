// "use client";
// import React from "react";

// export default function WebProject() {
//   return (
//     <section className="bg-white py-5">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
//         {/* LEFT SIDE */}
//         <div className="pl-15 py-20">
//           {/* Title */}
//           <h2 className="text-[42px] font-bold text-primary mb-6 leading-tight">
//             Web Design Project
//           </h2>

//           {/* Paragraph */}
//           <p className="text-gray-700 text-base leading-relaxed mb-12 max-w-md">
//             Do you have a digital marketing objective you like to achieve? Are
//             you ready to find out how Bird can help to build your business
//             online? If so, make contact with us today...
//           </p>

//           {/* Project Name Section */}
//           <div className="">
//             <p className="text-sm font-semibold text-black mb-2">
//               Project Name
//             </p>
//             <div className="grid grid-cols-2 gap-8">
//               {/* Left side - description */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Build custom blockchain solutions from the ground up — secure,
//                 scalable, and optimized for your ecosystem
//               </p>
//               {/* Right side - project list */}
//               <ul className="space-y-2 text-sm text-gray-800 font-medium">
//                 <li>Project 1</li>
//                 <li>Project 2</li>
//                 <li>Project 3</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-b w-72 mb-5 mt-5"></div>
//           {/* Project Type Section */}
//           <div className="mb-10">
//             <p className="text-sm font-semibold text-black mb-2">
//               Project Type
//             </p>
//             <div className="border-b w-72 mb-5 mt-5"></div>
//             <div className="flex gap-8 text-sm text-gray-800 font-medium">
//               <span>Creation</span>
//               <span>Security</span>
//               <span>Solutions</span>
//             </div>
//             <div className="border-b w-72 mb-5 mt-5"></div>
//           </div>

//           {/* Button */}
//           <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
//             Learn More
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-stretch">
//           <div className="relative w-full bg-black text-white flex flex-col">
//             {/* Background wave */}
//             <div className="absolute inset-0 opacity-25">
//               <img
//                 src="/images/wave.svg"
//                 alt="Waves"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content pushed to bottom */}
//             <div className="relative z-10 p-10 mt-auto w-72">
//               <h3 className="text-xl font-bold mb-4">
//                 Project Name and all its Detail
//               </h3>
//               <p className="text-gray-300 text-[8px] leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                 feugiat, velit eget ultrices sagittis, lorem nulla dapibus
//                 risus, nec posuere arcu lorem non metus.
//               </p>
//             </div>

//             {/* Footer Section */}
//             <div className="relative z-10 bg-primary text-black px-8 py-3 font-semibold">
//               <div className="grid grid-cols-2 gap-8 mb-6">
//                 {/* Left Column */}
//                 <div className="space-y-2 text-[8px]">
//                   <p>Client Name:</p>
//                   <p>Project Date:</p>
//                   <p>Website:</p>
//                   <p>Category:</p>
//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-2 text-[8px]">
//                   <p>Location:</p>
//                   <p>Budget:</p>
//                   <p>Status:</p>
//                   <p>Duration:</p>
//                 </div>
//               </div>

//               {/* Bottom Row */}
//               <div className="flex justify-between text-gray-600 text-[8px]">
//                 <div className="gap-10 flex items-center">
//                   <span>Copyright © 2025</span>
//                   <span>Privacy Policy</span>
//                 </div>
//                 <span>Terms & Conditions</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";

export default function WebProject() {
  return (
    <section className="bg-white py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* LEFT SIDE */}
        <div className="pl-15 py-20">
          {/* Title */}
          <h2 className="text-[42px] font-bold text-primary mb-6 leading-tight">
            Web Design Project
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed mb-12 max-w-md">
            Do you have a digital marketing objective you like to achieve? Are
            you ready to find out how Bird can help to build your business
            online? If so, make contact with us today...
          </p>

          {/* Project Name Section */}
          <div className="">
            <p className="text-sm font-semibold text-black mb-2">
              Project Name
            </p>
            <div className="grid grid-cols-2 gap-8">
              {/* Left side - description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                Build custom blockchain solutions from the ground up — secure,
                scalable, and optimized for your ecosystem
              </p>
              {/* Right side - project list */}
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
          </div>
          <div className="border-b w-72 mb-5 mt-5"></div>
          {/* Project Type Section */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-black mb-2">
              Project Type
            </p>
            <div className="border-b w-72 mb-5 mt-5"></div>
            <div className="flex gap-8 text-sm text-gray-800 font-medium">
              <span>Creation</span>
              <span>Security</span>
              <span>Solutions</span>
            </div>
            <div className="border-b w-72 mb-5 mt-5"></div>
          </div>

          {/* Button */}
          <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-stretch">
          <div className="relative w-full bg-black text-white flex flex-col">
            {/* Background wave */}
            <div className="absolute inset-0 opacity-25">
              <Image
                src="/images/wave.svg"
                alt="Waves"
                fill
                className="object-cover"
              />
            </div>

            {/* Content pushed to bottom */}
            <div className="relative z-10 p-10 mt-auto w-72">
              <h3 className="text-xl font-bold mb-4">
                Project Name and all its Detail
              </h3>
              <p className="text-gray-300 text-[8px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                feugiat, velit eget ultrices sagittis, lorem nulla dapibus
                risus, nec posuere arcu lorem non metus.
              </p>
            </div>

            {/* Footer Section */}
            <div className="relative z-10 bg-primary text-black px-8 py-3 font-semibold">
              <div className="grid grid-cols-2 gap-8 mb-6">
                {/* Left Column */}
                <div className="space-y-2 text-[8px]">
                  <p>Client Name:</p>
                  <p>Project Date:</p>
                  <p>Website:</p>
                  <p>Category:</p>
                </div>

                {/* Right Column */}
                <div className="space-y-2 text-[8px]">
                  <p>Location:</p>
                  <p>Budget:</p>
                  <p>Status:</p>
                  <p>Duration:</p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between text-gray-600 text-[8px]">
                <div className="gap-10 flex items-center">
                  <span>Copyright © 2025</span>
                  <span>Privacy Policy</span>
                </div>
                <span>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
