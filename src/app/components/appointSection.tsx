// // export default function AppointSection() {
// //   return (
// //     <section className="bg-white py-24  ">
// //       <h2 className="text-6xl font-[600px] leading-snug text-black text-center">
// //         Best brands choose <br />
// //         <span className="text-primary"> Appoint Digital</span>
// //       </h2>
// //       <div className="relative overflow-hidden">
// //         <div className="flex animate-scroll gap-48 mt-20">
// //           <img src="/images/brand1.svg" alt="Brand 1" className="w-1/4" />
// //           <img src="/images/brand2.svg" alt="Brand 2" className="w-1/4" />
// //           <img src="/images/brand3.svg" alt="Brand 3" className="w-1/4" />
// //           <img src="/images/brand4.svg" alt="Brand 4" className="w-1/4" />

// //           {/* Duplicate logos for seamless loop */}
// //           <img src="/images/brand1.svg" alt="Brand 1" className="w-1/4" />
// //           <img src="/images/brand2.svg" alt="Brand 2" className="w-1/4" />
// //           <img src="/images/brand3.svg" alt="Brand 3" className="w-1/4" />
// //           <img src="/images/brand4.svg" alt="Brand 4" className="w-1/4" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import Image from "next/image";

// export default function AppointSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24">
//       <div className="container mx-auto px-6 text-center">
//         {/* Title */}
//         <h2 className="text-5xl md:text-6xl leading-snug text-gray-900">
//           Best brands choose <br />
//           <span className="text-[#FFD74B]">Appoint Digital</span>
//         </h2>
//         <p className="text-black-600 mt-4 max-w-2xl mx-auto">
//           Trusted by global companies for innovation, design, and marketing
//           success.
//         </p>

//         {/* Logos Scrolling Row */}
//         <div className="relative overflow-hidden mt-16">
//           <div className="flex animate-scroll gap-12">
//             {[
//               "/images/brand1.svg",
//               "/images/brand2.svg",
//               "/images/brand3.svg",
//               "/images/brand4.svg",
//               "/images/brand5.svg",
//             ].map((brand, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 w-40 h-24 rounded-2xl shadow-md bg-white flex items-center justify-center border border-gray-200 hover:shadow-xl transition"
//               >
//                 <Image src={brand} alt={`Brand ${i + 1}`} width={120} height={60} />
//               </div>
//             ))}

//             {/* Duplicate logos for seamless loop */}
//             {[
//               "/images/brand1.svg",
//               "/images/brand2.svg",
//               "/images/brand3.svg",
//               "/images/brand4.svg",
//               "/images/brand5.svg",
//             ].map((brand, i) => (
//               <div
//                 key={i + 100}
//                 className="flex-shrink-0 w-40 h-24 rounded-2xl shadow-md bg-white flex items-center justify-center border border-gray-200 hover:shadow-xl transition"
//               >
//                 <Image src={brand} alt={`Brand ${i + 1}`} width={120} height={60} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import BlurText from "./BlurText";

export default function AppointSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-28 overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#FFD74B]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated Title */}
        <h2 className="text-5xl md:text-6xl leading-snug text-gray-900 mb-4 text-center flex flex-col items-center justify-center">
          <BlurText
            text="Best brands choose"
            delay={120}
            animateBy="words"
            direction="top"
            className="block"
          />
          <BlurText
            text="Appoint Digital"
            delay={120}
            animateBy="words"
            direction="top"
            className="block font-bold text-[#FFD74B]"
          />
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Trusted by global companies for innovation, design, and marketing
          success.
        </p>

        {/* Logos Scrolling Row */}
        <div className="relative overflow-hidden mt-20">
          <div className="flex animate-scroll gap-12">
            {[
              "/images/brand1.svg",
              "/images/brand2.svg",
              "/images/brand3.svg",
              "/images/brand4.svg",
              "/images/brand5.svg",
            ].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-24 rounded-2xl shadow-md bg-white flex items-center justify-center border border-gray-200  "
              >
                <Image
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  width={120}
                  height={60}
                />
              </div>
            ))}

            {/* Duplicate for infinite scroll */}
            {[
              "/images/brand1.svg",
              "/images/brand2.svg",
              "/images/brand3.svg",
              "/images/brand4.svg",
              "/images/brand5.svg",
            ].map((brand, i) => (
              <div
                key={i + 100}
                className="flex-shrink-0 w-40 h-24 rounded-2xl shadow-md bg-white flex items-center justify-center border border-gray-200 "
              >
                <Image
                  src={brand}
                  alt={`Brand ${i + 1}`}
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
