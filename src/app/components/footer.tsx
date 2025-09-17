// // components/Footer.tsx
// import React from "react";
// import Image from "next/image";
// import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white px-6 md:px-16 pt-10">
//       <div className="grid md:grid-cols-3 gap-8 items-center">
//         {/* Contact */}
//         <div>
//           <h3 className="text-md font-semibold mb-2">Contact</h3>
//           <p className="text-gray-300 text-sm">Hi@yogaaditama.com</p>
//           <p className="text-gray-300 text-sm">+62821-5949-5854</p>
//         </div>

//         {/* Center Globe + CTA */}
//         <div className="flex flex-col items-center text-center">
//           {/* Globe placeholder */}
//           <div className="relative    ">
//             <Image
//               src="/images/globeb.svg"
//               alt="Globe"
//               width={600}
//               height={600}
//               className="object-cover"
//             />
//             {/* <span className="absolute text-xs text-gray-300 text-end px-2">
//               Terms & Conditions
//             </span> */}
//           </div>
//         </div>

//         {/* Locations */}
//         <div className="text-right">
//           <h3 className="text-md font-semibold mb-2">Indonesia</h3>
//           <p className="text-gray-300 text-sm">Jln. Bambu No. 375</p>
//           <p className="text-gray-300 text-sm">Samarinda, Kalimantan Timur</p>

//           <h3 className="text-md font-semibold mt-4 mb-2">Hong Kong</h3>
//           <p className="text-gray-300 text-sm">60 Ya Fung Sung</p>
//           <p className="text-gray-300 text-sm">San Tsuen, 75129</p>
//         </div>
//       </div>

//       {/* Footer bottom */}
//       {/* <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-4">
//         <p className="text-sm text-gray-400">
//           © Copyright 2024. Aditama Studio. All rights reserved.
//         </p> */}

//       {/* Social Icons */}
//       {/* <div className="flex gap-4 mt-3 md:mt-0">
//           <a href="#" className="hover:text-primary">
//             <FaBehance size={18} />
//           </a>
//           <a href="#" className="hover:text-primary">
//             <FaInstagram size={18} />
//           </a>
//           <a href="#" className="hover:text-primary">
//             <FaLinkedin size={18} />
//           </a>
//         </div>
//       </div> */}
//       <div className="flex justify-center items-center">
//         <Image
//           src="/images/footertext.svg"
//           alt="Globe"
//           width={1200}
//           height={1200}
//           className="object-cover"
//         />
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// components/Footer.tsx
import React from "react";
import Image from "next/image";
// import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <p className="text-gray-300 text-sm">Hi@yogaaditama.com</p>
          <p className="text-gray-300 text-sm">+62821-5949-5854</p>
        </div>

        {/* Center Globe + CTA */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Image
              src="/images/globeb.svg"
              alt="Globe"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>

        {/* Locations */}
        <div className="text-right">
          <h3 className="text-md font-semibold mb-2">Indonesia</h3>
          <p className="text-gray-300 text-sm">Jln. Bambu No. 375</p>
          <p className="text-gray-300 text-sm">Samarinda, Kalimantan Timur</p>

          <h3 className="text-md font-semibold mt-4 mb-2">Hong Kong</h3>
          <p className="text-gray-300 text-sm">60 Ya Fung Sung</p>
          <p className="text-gray-300 text-sm">San Tsuen, 75129</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex justify-center items-center mt-8">
        <Image
          src="/images/footertext.svg"
          alt="Footer Text"
          width={1200}
          height={1200}
          className="object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
