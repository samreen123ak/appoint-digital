// "use client";

// import Image from "next/image";
// import PixelCard from "@/components/PixelCard";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: "/images/service1.svg",
//       title: "Paid Search Marketing",
//       desc: "Maximize your ROI with targeted campaigns that drive qualified leads.",
//     },
//     {
//       icon: "/images/service2.svg",
//       title: "Search Engine Optimization",
//       desc: "Enhance search rankings, boost web content visibility, and drive traffic.",
//     },
//     {
//       icon: "/images/service3.svg",
//       title: "Email Marketing",
//       desc: "Engage buyers with customized campaigns that convert and nurture leads.",
//     },
//     {
//       icon: "/images/service4.svg",
//       title: "Web Design",
//       desc: "Create beautiful, responsive websites tailored to your business needs.",
//     },
//     {
//       icon: "/images/service5.svg",
//       title: "Social Media Marketing",
//       desc: "Build influence and boost brand awareness with engaging campaigns.",
//     },
//     {
//       icon: "/images/service6.svg",
//       title: "Web Development",
//       desc: "Build full-fledged websites and applications with modern technology.",
//     },
//     {
//       icon: "/images/service7.svg",
//       title: "Lead Generation",
//       desc: "Generate high-quality leads that fuel business growth consistently.",
//     },
//     {
//       icon: "/images/service8.svg",
//       title: "Content Writing",
//       desc: "Engage audiences with impactful blogs, articles, and web content.",
//     },
//     {
//       icon: "/images/service9.svg",
//       title: "Social Media Management",
//       desc: "Drive engagement & maintain brand voice across multiple platforms.",
//     },
//     {
//       icon: "/images/service10.svg",
//       title: "Search Engine Marketing",
//       desc: "Boost targeted visibility and maximize clicks with optimized campaigns.",
//     },
//     {
//       icon: "/images/service11.svg",
//       title: "Brand Identity",
//       desc: "Craft a professional brand presence with logo design and guidelines.",
//     },
//   ];

//   return (
//     <section className="relative bg-black pt-60 pb-20 px-6 text-center text-white overflow-hidden">
//       {/* Left & Right Decorative Images (Bottom Layer) */}
//       <Image
//         src="/images/apponitbgleft.svg"
//         alt="Left Decoration"
//         width={250}
//         height={250}
//         className="absolute left-0 top-[70%] -translate-y-1/2 z-0 pointer-events-none"
//       />
//       <Image
//         src="/images/appointbgright.svg"
//         alt="Right Decoration"
//         width={250}
//         height={250}
//         className="absolute right-0 top-[30%] -translate-y-1/2 z-0 pointer-events-none"
//       />

//       {/* Globe Background (Middle Layer) */}
//       {/* Globe Background (Middle Layer) */}
//       <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none ">
//         <Image
//           src="/images/globebg.svg"
//           alt="Background"
//           width={1200} // control size here
//           height={1200} // control size here
//           priority
//           className="object-contain "
//         />
//       </div>

//       {/* Content (Top Layer) */}
//       <div className="relative z-20 mt-30">
//         {/* Heading */}
//         <div className="mb-16">
//           <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-5">
//             Leading digital marketing Firm.
//           </h3>
//           <h2 className="text-6xl font-[600px]">
//             <span className="text-primary">Appoint</span>{" "}
//             <span className="text-white">Digital Solutions</span>
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto  ">
//           {services.map((service, index) => (
//             <PixelCard
//               key={index}
//               variant="pink"
//               gap={6}
//               speed={80}
//               colors="#ffffff,#FFD74B"
//               noFocus={true}
//             >
//               <div className="pixel-card absolute  ">
//                 <div className="p-8 flex flex-col items-center text-center justify-center h-full w-full  ">
//                   <div className="mb-6">
//                     <Image
//                       src={service.icon}
//                       alt={service.title}
//                       width={60}
//                       height={60}
//                       className="mx-auto"
//                     />
//                   </div>
//                   <h3 className="text-primary font-semibold text-xl mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm">{service.desc}</p>
//                 </div>
//               </div>
//             </PixelCard>
//           ))}
//         </div>

//         {/* <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
//   {services.map((service, index) => (
//     <PixelCard
//       key={index}
//       variant="pink"
//       gap={6}
//       speed={80}
//       colors="#fecdd3,#fda4af,#e11d48"
//       noFocus={true}
//     >
//       <div className="bg-black border border-yellow-500/40 rounded-3xl p-8 flex flex-col items-center text-center justify-center h-80 w-64">
//         <div className="mb-6">
//           <Image
//             src={service.icon}
//             alt={service.title}
//             width={60}
//             height={60}
//             className="mx-auto"
//           />
//         </div>
//         <h3 className="text-primary font-semibold text-xl mb-4">
//           {service.title}
//         </h3>
//         <p className="text-gray-300 text-sm">{service.desc}</p>
//       </div>
//     </PixelCard>
//   ))}
// </div> */}
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import PixelCard from "@/components/PixelCard";
import BlurText from "./BlurText";

export default function ServicesSection() {
  const services = [
    {
      icon: "/images/service1.svg",
      title: "Paid Search Marketing",
      desc: "Maximize your ROI with targeted campaigns that drive qualified leads.",
    },
    {
      icon: "/images/service2.svg",
      title: "Search Engine Optimization",
      desc: "Enhance search rankings, boost web content visibility, and drive traffic.",
    },
    {
      icon: "/images/service3.svg",
      title: "Email Marketing",
      desc: "Engage buyers with customized campaigns that convert and nurture leads.",
    },
    {
      icon: "/images/service4.svg",
      title: "Web Design",
      desc: "Create beautiful, responsive websites tailored to your business needs.",
    },
    {
      icon: "/images/service5.svg",
      title: "Social Media Marketing",
      desc: "Build influence and boost brand awareness with engaging campaigns.",
    },
    {
      icon: "/images/service6.svg",
      title: "Web Development",
      desc: "Build full-fledged websites and applications with modern technology.",
    },
    {
      icon: "/images/service7.svg",
      title: "Lead Generation",
      desc: "Generate high-quality leads that fuel business growth consistently.",
    },
    {
      icon: "/images/service8.svg",
      title: "Content Writing",
      desc: "Engage audiences with impactful blogs, articles, and web content.",
    },
    {
      icon: "/images/service9.svg",
      title: "Social Media Management",
      desc: "Drive engagement & maintain brand voice across multiple platforms.",
    },
    {
      icon: "/images/service10.svg",
      title: "Search Engine Marketing",
      desc: "Boost targeted visibility and maximize clicks with optimized campaigns.",
    },
    {
      icon: "/images/service11.svg",
      title: "Brand Identity",
      desc: "Craft a professional brand presence with logo design and guidelines.",
    },
  ];

  return (
    <section className="relative bg-black pt-60 pb-20 px-6 text-center text-white overflow-hidden">
      {/* Left & Right Decorative Images */}
      <Image
        src="/images/apponitbgleft.svg"
        alt="Left Decoration"
        width={250}
        height={250}
        className="absolute left-0 top-[70%] -translate-y-1/2 z-0 pointer-events-none"
      />
      <Image
        src="/images/appointbgright.svg"
        alt="Right Decoration"
        width={250}
        height={250}
        className="absolute right-0 top-[30%] -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Globe Background */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
        <Image
          src="/images/globebg.svg"
          alt="Background"
          width={1200}
          height={1200}
          priority
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-30">
        {/* Heading */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-5">
            Leading digital marketing Firm.
          </h3>
          <div className="flex justify-center">
          <BlurText
            text="Appoint Digital Solutions"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl font-[600px] text-white"
          />
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <PixelCard
              key={index}
              variant="pink"
              gap={6}
              speed={80}
              colors="#ffffff,#FFD74B"
              noFocus={true}
            >
              <div className="pixel-card absolute">
                <div className="p-8 flex flex-col items-center text-center justify-center h-full w-full">
                  <div className="mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-primary font-semibold text-xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
