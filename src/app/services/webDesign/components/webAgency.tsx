"use client";

import Image from "next/image";

export default function WebAgency() {
  const features = [
    {
      title: "Optimized Shopping Interface",
      subtitle:
        "Intuitive purchasing process with user-friendly site navigation.",
    },
    {
      title: "Optimized Shopping Interface",
      subtitle:
        "Intuitive purchasing process with user-friendly site navigation.",
    },
    {
      title: "Optimized Shopping Interface",
      subtitle:
        "Intuitive purchasing process with user-friendly site navigation.",
    },
    {
      title: "Optimized Shopping Interface",
      subtitle:
        "Intuitive purchasing process with user-friendly site navigation.",
    },
  ];

  return (
    <section className="relative bg-black pt-10 pb-30 px-6 text-center text-white overflow-hidden ">
      {/* Left & Right Decorative Images (Bottom Layer) */}
      <Image
        src="/images/apponitbgleft.svg"
        alt="Left Decoration"
        width={250}
        height={250}
        className="absolute left-0 top-[85%] -translate-y-1/2 z-0 pointer-events-none"
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
        className="object-cover z-10 "
      />

      {/* Content (Top Layer) */}
      <div className="relative z-20  flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="mb-16 max-w-xl flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl  font-extrabold">
            <span className="text-primary">Web Design Agency.</span>
          </h2>
          <h3 className="text-md  tracking-widest text-white font-bold mt-5">
            Bespoke web design services .
          </h3>
          <h1 className="text-xs mt-5 font-bold">
            In the dynamic realm of digital marketing, Bird emerges as a beacon
            of innovation and expertise. Our agency stands as a testament to the
            transformative power of digital strategies in propelling businesses
            towards unprecedented growth and success. At Bird, we understand
            that the digital landscape is perpetually evolving, and staying
            ahead of these changes is paramount. Our team, composed of seasoned
            professionals and visionary thinkers, is dedicated to harnessing the
            latest digital trends and technologies to create bespoke marketing
            solutions that resonate with your unique business needs.
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-500/20 border border-yellow-500/40 rounded-2xl px-6 pt-5 flex flex-col items-start hover:bg-yellow-500/10 transition"
            >
              {/* Main Title */}
              <h2 className="text-2xl font-bold text-primary text-left mb-3">
                E-commerce Web
                <br /> Design
              </h2>

              {/* Features */}
              <div className="grid grid-cols-1 text-left mb-3 w-68">
                {features.map((f, i) => (
                  <div key={i} className="mb-3">
                    <h3 className="text-yellow-400 font-semibold">{f.title}</h3>
                    <p className="text-gray-300 text-sm">{f.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
