// import React from "react";
// import Image from "next/image";
// import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="relative bg-black text-white px-6 md:px-16 pt-10 overflow-hidden">
//       {/* Background Globe (decorative) */}
//       <div className="absolute -top-20 right-[30%] flex items-center justify-center z-0 pointer-events-none">
//         <Image
//           src="/images/globeYellowbg.svg"
//           alt="Globe Background"
//           height={500}
//           width={500}
//           className="object-contain animate-spin-slow "
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
//         {/* Contact */}
//         <div>
//           <h3 className="text-md font-semibold mb-2">Contact</h3>
//           <a
//             href="mailto:Hi@yogaaditama.com"
//             className="text-gray-300 text-sm cursor-pointer block"
//           >
//             Hi@yogaaditama.com
//           </a>
//           <a
//             href="tel:+6282159495854"
//             className="text-gray-300 text-sm cursor-pointer block"
//           >
//             +62821-5949-5854
//           </a>
//         </div>

//         {/* Center column (kept empty for CTA or logo) */}
//         <div className="flex flex-col items-center justify-center text-center">
//           {/* optional CTA or logo */}
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

//       {/* Centered Terms & Conditions (visible above the globe) */}
//       {/* Footer bottom */}
//       <div className="relative z-10 mt-8 flex flex-col md:flex-row items-center justify-between  border-white/10 pt-4">
//         {/* Left side: Copyright */}
//         <div className=" flex">
//           <p className="text-xs text-gray-400">
//             © Copyright 2024. Aditama Studio. All rights reserved.
//           </p>

//           {/* Middle: Terms & Conditions */}
//           {/* <a
//             href="/terms"
//             className="text-xs text-gray-300 hover:text-primary transition-colors duration-200 ml-[220px]"
//           >
//             Terms & Conditions
//           </a> */}
//         </div>

//         {/* Right side: Social Icons */}
//         <div className="flex gap-4">
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
//       </div>

//       {/* Footer text image */}
//       <div className="relative z-10 mt-6 overflow-hidden">
//         <div className="animate-marquee whitespace-nowrap flex">
//           <Image
//             src="/images/textFooter.svg"
//             alt="Footer Text"
//             width={1200}
//             height={1200}
//             className="object-cover"
//           />
//           {/* duplicate image for seamless loop */}
//           <Image
//             src="/images/textFooter.svg"
//             alt="Footer Text Duplicate"
//             width={1200}
//             height={1200}
//             className="object-cover  ml-8"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 px-6 bg-black"
      style={{
        backgroundImage: "url('/images/tech-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5">
                <img
                  src="/images/tech-sphere.png"
                  alt="Tech Sphere Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold">hashnode</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Hassle-free blogging platform that developers and teams love.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">All systems operational</span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: "#FFD74B" }}>
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  Headless CMS
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">New</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  GraphQL APIs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Open source Starter-kit
                </a>
              </li>
            </ul>

            <h3 className="font-semibold mb-4 mt-8" style={{ color: "#FFD74B" }}>
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  My feed
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Hashnode AI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: "#FFD74B" }}>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Hashnode
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Logos and media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Feature Requests
                </a>
              </li>
            </ul>

            <h3 className="font-semibold mb-4 mt-8" style={{ color: "#FFD74B" }}>
              Blogs
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Official Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Engineering Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Hashnode Townhall
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Column */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: "#FFD74B" }}>
              Partner with us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Host a Hackathon
                </a>
              </li>
            </ul>

            <h3 className="font-semibold mb-4 mt-8" style={{ color: "#FFD74B" }}>
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Support docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Join discord
                </a>
              </li>
            </ul>
          </div>

          {/* Comparisons Column */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ color: "#FFD74B" }}>
              Comparisons
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Hashnode — LinearBytes Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Code of conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

