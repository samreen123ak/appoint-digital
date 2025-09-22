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
    <section className="relative w-full h-[48vh] bg-bg sm:h-[120vh]">
      {/* Mobile Background (yellow only) */}
      <div className="absolute inset-0 bg-primary sm:hidden" />

      {/* Background Image (only for sm and up) */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/images/brandbg.svg"
          alt="Brand Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-7 py-6 sm:py-16 container mx-auto ">
        {/* Title + Subtitle */}
        <div className="mb-6 sm:mb-16 px-2 sm:px-10">
          <div className="mb-2 sm:mb-5">
            <BlurText
              text="The best brands choose"
              delay={120}
              animateBy="words"
              direction="top"
              align="left"
              className="text-2xl sm:text-4xl md:text-6xl font-light text-black"
            />
            <BlurText
              text="Appoint Digital"
              delay={150}
              animateBy="words"
              direction="top"
              align="left"
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-black"
            />
          </div>

          <p className="text-xs sm:text-base md:text-lg text-black text-start mt-1 sm:mt-3 max-w-xs sm:max-w-xl md:max-w-3xl">
            As a trusted Digital Marketing Agency Company, Bird has been
            featured in top-tier media and industry-leading platforms,
            showcasing our expertise in delivering exceptional digital marketing
            results.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="relative w-full overflow-hidden my-6 sm:my-20">
          <div className="flex animate-scroll gap-3 sm:gap-8">
            {[
              "/images/brand1.svg",
              "/images/brand2.svg",
              "/images/brand3.svg",
              "/images/brand4.svg",
              "/images/brand5.svg",
            ].map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-14 w-28 sm:h-20 sm:w-44 md:h-28 md:w-52 rounded-full border border-gray-400/50 bg-primary"
              >
                <Image
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  width={70}
                  height={40}
                  className="w-14 sm:w-20 md:w-24"
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
            ].map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-14 w-28 sm:h-20 sm:w-44 md:h-28 md:w-52 rounded-full border border-gray-400/50 bg-primary"
              >
                <Image
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  width={70}
                  height={40}
                  className="w-14 sm:w-20 md:w-24"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Globe Image (hidden on mobile) */}
      <div className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
          <Image
            src="/images/globeYellowbg.svg"
            alt="Global Reach"
            fill
            className="object-contain drop-shadow-2xl animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
}
