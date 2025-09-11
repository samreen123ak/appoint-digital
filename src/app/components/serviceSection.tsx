"use client";

import Image from "next/image";

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
    <section className="relative bg-black py-20 px-6 text-center text-white overflow-hidden">
      {/* Left & Right Decorative Images (Bottom Layer) */}
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
        className="absolute right-0 top-1/4 -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Globe Background (Middle Layer) */}
      <Image
        src="/images/globebg.svg"
        alt="Background"
        fill
        priority
        className="object-cover z-10"
      />

      {/* Content (Top Layer) */}
      <div className="relative z-20 mt-30">
        {/* Heading */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-widest text-primary font-bold">
            Leading digital marketing Firm.
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-primary">Appoint</span>{" "}
            <span className="text-white">Digital Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-500/20 border border-yellow-500/40 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-yellow-500/10 transition h-72 w-52"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-primary font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-xs">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
