// app/about/page.tsx
"use client";
import Image from "next/image";

export default function PhilosophySection() {
  const philosophies = [
    {
      id: 1,
      title: "ROI Focused",
      description:
        "We succeed if you succeed, that’s why we focus on your Return On Investment as our number one priority.",
      direction: "left",
    },
    {
      id: 2,
      title: "Customer First",
      description:
        "Your growth is our mission, and we prioritize your needs at every step of the journey.",
      direction: "right",
    },
    {
      id: 3,
      title: "Data-Driven",
      description:
        "We rely on numbers, research, and insights to drive impactful decisions for your success.",
      direction: "left",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="text-center px-6 pt-16 max-w-3xl mx-auto">
        <p className="text-sm text-gray-400">our ethos.</p>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mt-2">
          Our unique operating philosophy
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          As an extremely principled company, we stand by the following core
          operating philosophies.
        </p>
      </div>

      {/* Yellow Cards */}
      <div className="mt-20 space-y-20 w-full">
        {philosophies.map((item) => (
          <div
            key={item.id}
            className={`relative flex ${
              item.direction === "left" ? "flex-row" : "flex-row-reverse"
            } items-center w-full`}
          >
            {/* Yellow Card */}
            <div
              className={`relative h-48 bg-yellow-400 w-[75%] flex items-center ${
                item.direction === "left"
                  ? "rounded-r-full pl-52"
                  : "rounded-l-full pr-52"
              }`}
            >
              {/* Text */}
              <div
                className={`${
                  item.direction === "left" ? "text-left" : "text-right ml-auto"
                } px-6`}
              >
                <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                <p className="mt-2 text-black/80 max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Wave Overlay */}
              <div
                className={`absolute top-0 ${
                  item.direction === "left" ? "right-0" : "left-0"
                } h-full w-32`}
              >
                <Image
                  src="/images/wave-overlay.svg" // replace with your wave design
                  alt="Wave Overlay"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>

            {/* Globe inside circular edge */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-yellow-500 flex items-center justify-center ${
                item.direction === "left" ? "-left-20" : "-right-20"
              }`}
            >
              <Image
                src="/images/globeYellowbg.svg"
                alt="Globe"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
