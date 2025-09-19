// "use client";
// import React from "react";
// import Image from "next/image";

// export default function AgencyIntro() {
//   return (
//     <section className="relative bg-black text-white py-30 overflow-hidden">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-20 relative z-10">
//         {/* LEFT SIDE */}
//         <div className="space-y-6">
//           <h2 className="text-4xl font-bold leading-snug text-primary">
//             A Leading Global Full Service <br /> Digital Marketing Agency
//           </h2>

//           <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
//             Bird is a premier Digital Marketing Agency with a global presence,
//             known for delivering top-tier digital solutions to businesses
//             worldwide. Our dynamic agency stands out for its ability to enhance
//             digital visibility for businesses, using the latest technologies and
//             innovative approaches.
//           </p>

//           <h3 className="text-4xl font-semibold text-primary">
//             Enhancing Your Digital Presence
//           </h3>

//           <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
//             In the rapidly changing digital environment, having a strong digital
//             presence is crucial. Companies around the world recognize the
//             importance of this digital domain, and Birds digital marketing
//             services are at the forefront of this digital revolution. We
//             specialize in boosting the digital profiles of businesses, ensuring
//             their success in the online marketplace.
//           </p>

//           <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       {/* RIGHT SIDE - Globe (Bleeds out to screen edge) */}

//       <Image
//         src="/images/halfGlobeleft.svg"
//         alt="Globe"
//         width={400}
//         height={300}
//         className="absolute right-0 top-[15%] object-contain rotate-180 "
//       />
//     </section>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AgencyIntro() {
  return (
    <section className="relative bg-black text-white py-30 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-20 relative z-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-snug text-primary">
            A Leading Global Full Service <br /> Digital Marketing Agency
          </h2>

          <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
            Bird is a premier Digital Marketing Agency with a global presence,
            known for delivering top-tier digital solutions to businesses
            worldwide. Our dynamic agency stands out for its ability to enhance
            digital visibility for businesses, using the latest technologies and
            innovative approaches.
          </p>

          <h3 className="text-4xl font-semibold text-primary">
            Enhancing Your Digital Presence
          </h3>

          <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
            In the rapidly changing digital environment, having a strong digital
            presence is crucial. Companies around the world recognize the
            importance of this digital domain, and Birds digital marketing
            services are at the forefront of this digital revolution. We
            specialize in boosting the digital profiles of businesses, ensuring
            their success in the online marketplace.
          </p>

          <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - Globe Animated */}
      {/* <motion.div
        initial={{ x: 200, scale: 0.8, opacity: 0 }} // start hidden on right
        whileInView={{ x: 0, scale: 1, opacity: 1 }} // slide to position
        viewport={{ once: false, amount: 0.3 }} // animate every time on scroll
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-[15%]"
      >
        <Image
          src="/images/halfGlobeleft.svg"
          alt="Globe"
          width={500}
          height={500}
          className="object-contain rotate-180"
        />
      </motion.div> */}
      <motion.div
        initial={{ x: 200, scale: 0.8, opacity: 0 }} // start hidden on right
        whileInView={{ x: 0, scale: 1, opacity: 1 }} // slide to position
        viewport={{ once: false, amount: 0.3 }} // animate every time on scroll
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 -top-40"
      >
        <Image
          src="/images/halfGlobeleft.svg"
          alt="Globe"
          width={900}
          height={900}
          className="object-contain rotate-180"
        />
      </motion.div>
    </section>
  );
}
