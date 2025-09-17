// "use client";

// import Image from "next/image";

// export default function BrandSection() {
//   return (
//     <section className="relative w-full bg-black h-[120vh]">
//       <div className="absolute inset-0">
//         <Image
//           src="/images/brandbg.svg"
//           alt="Brand Background"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 "></div>

//       <div className="relative z-10 px-7 py-16 container mx-auto ">
//         {/* Title + Subtitle */}
//         <div className="mb-16 px-10">
//           <h2 className="text-6xl font-[600px] mb-5">
//             <span className="text-black font-light">The best brands choose</span><br></br>{" "}
//             <span className="text-black">Appoint Digital</span>
//           </h2>
//           <p className="text-lg text-black mt-3 max-w-3xl mb-15">
//             As a trusted Digital Marketing Agency Company, Bird has been
//             featured in top-tier media and industry-leading platforms,
//             showcasing our expertise in delivering exceptional digital marketing
//             results.
//           </p>
//         </div>

//         {/* Brand Logos Row */}
//         <div className="relative w-full overflow-hidden my-20">
//           <div className="flex animate-scroll gap-8">
//             {/* First row of logos */}
//             {[
//               "/images/brand1.svg",
//               "/images/brand2.svg",
//               "/images/brand3.svg",
//               "/images/brand4.svg",
//               "/images/brand5.svg",
//               "/images/brand4.svg",
//             ].map((brand, i) => (
//               <div
//                 key={i}
//                 className={`flex items-center justify-center h-28 w-52 rounded-full border border-gray-400/50 
//       ${i === 1 || i === 3 || i === 5 ? "bg-primary" : "bg-black"}`}
//               >
//                 <Image
//                   src={brand}
//                   alt={`Brand ${i + 1}`}
//                   width={100}
//                   height={60}
//                 />
//               </div>
//             ))}

//             {/* Duplicate row for seamless loop */}
//             {[
//               "/images/brand1.svg",
//               "/images/brand2.svg",
//               "/images/brand3.svg",
//               "/images/brand4.svg",
//               "/images/brand5.svg",
//               "/images/brand4.svg",
//             ].map((brand, i) => (
//               <div
//                 key={i}
//                 className={`flex items-center justify-center h-28 w-52 rounded-full border border-gray-400/50 
//       ${i === 1 || i === 3 || i === 5 ? "bg-primary" : "bg-black"}`}
//               >
//                 <Image
//                   src={brand}
//                   alt={`Brand ${i + 1}`}
//                   width={100}
//                   height={60}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
//   <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
//     <Image
//       src="/images/globeb.svg"
//       alt="Global Reach"
//       fill
//       className="object-contain drop-shadow-2xl animate-spin-slow"
//     />
//   </div>
// </div>

//     </section>
//   );
// }
"use client";

import Image from "next/image";
import BlurText from "./BlurText";

export default function BrandSection() {
  return (
    <section className="relative w-full bg-black h-[120vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/brandbg.svg"
          alt="Brand Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 px-7 py-16 container mx-auto ">
        {/* Title + Subtitle */}
        <div className="mb-16 px-10">
          {/* 👇 Replace h2 with BlurText */}
          <div className="mb-5">
            <BlurText
              text="The best brands choose"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-6xl font-light text-black"
            />
            <BlurText
              text="Appoint Digital"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-6xl font-bold text-black"
            />
          </div>

          <p className="text-lg text-black mt-3 max-w-3xl mb-15">
            As a trusted Digital Marketing Agency Company, Bird has been
            featured in top-tier media and industry-leading platforms,
            showcasing our expertise in delivering exceptional digital marketing
            results.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="relative w-full overflow-hidden my-20">
          <div className="flex animate-scroll gap-8">
            {[
              "/images/brand1.svg",
              "/images/brand2.svg",
              "/images/brand3.svg",
              "/images/brand4.svg",
              "/images/brand5.svg",
              "/images/brand4.svg",
            ].map((brand, i) => (
              <div
                key={i}
                className={`flex items-center justify-center h-28 w-52 rounded-full border border-gray-400/50 
        ${i === 1 || i === 3 || i === 5 ? "bg-primary" : "bg-black"}`}
              >
                <Image
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  width={100}
                  height={60}
                />
              </div>
            ))}

            {/* Duplicate row for seamless loop */}
            {[
              "/images/brand1.svg",
              "/images/brand2.svg",
              "/images/brand3.svg",
              "/images/brand4.svg",
              "/images/brand5.svg",
              "/images/brand4.svg",
            ].map((brand, i) => (
              <div
                key={i}
                className={`flex items-center justify-center h-28 w-52 rounded-full border border-gray-400/50 
        ${i === 1 || i === 3 || i === 5 ? "bg-primary" : "bg-black"}`}
              >
                <Image
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  width={100}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Globe Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
          <Image
            src="/images/globeb.svg"
            alt="Global Reach"
            fill
            className="object-contain drop-shadow-2xl animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
}
