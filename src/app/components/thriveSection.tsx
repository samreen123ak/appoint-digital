"use client";

import Image from "next/image";

export default function ThriveSection() {
  return (
    <section className="relative bg-bg py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Ready To See Your <br />
            <span className="text-primary">Brand Thrive?</span>
          </h2>

          {/* Right - Paragraph */}
          <div>
            <h3 className="font-semibold text-lg text-white">
              Clients Trusted Marketing Partner
            </h3>
            <p className="text-gray-300 text-xs mt-3 mb-4 max-w-80 ">
              With Appoint Digital, we bring expertise, transparency, and
              results to every project. As a trusted, full-service digital
              agency, we handle everything from SEO and social media to PPC,
              email marketing, and web development. With our client-focused
              approach, we are here to help you succeed in every aspect of your
              digital journey. Read more about these aspects in detail.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] ">
          {/* Left - Campaign transparency */}
          <div className="flex items-start gap-4">
            <Image
              src="/images/line.svg"
              alt="Target Icon"
              width={20}
              height={48}
              className="self-start mt-3"
            />
            <div>
              <h3 className="font-semibold text-lg text-white">
                100% Campaign transparency
              </h3>
              <p className="text-gray-300 text-xs mt-3 mb-4">
                We are committed to open and honest communication at every
                stage. With Appoint Digital, you all always know whats happening
                with your campaign—no surprises, no guesswork. We keep you
                informed by sharing regular updates and insights, so you are
                always in the loop and in full control of the direction we are
                heading. Transparency is our promise to you.
              </p>
              <button className="bg-primary text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Middle - Three inline texts */}
          <div className="flex flex-col items-center justify-start gap-2">
            <span className="text-gray-400 text-sm">Team of experts</span>

            <span className=" text-white text-sm">Transparency</span>
            <span className="text-gray-400 text-sm ">Results</span>
          </div>

          {/* Right - Statistics Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 shadow-lg max-w-3xl ">
            {/* Row 1: Title & Subtitle */}
            <div className="flex  mb-4 gap-5">
              <h4 className="text-lg font-semibold text-white ml-10">
                Statistics
              </h4>
              <p className="text-gray-400 text-xs w-40 ml-20 ">
                Distributed validator nodes ensuring network consensus and
                decentralization.
              </p>
            </div>

            {/* Row 2: Learn More button centered */}
            <div className="flex justify-center mt-10">
              <button className=" text-white px-5 py-2 rounded-md font-medium hover:font-bold transition">
                Learn More
              </button>
            </div>

            {/* Row 3: Large text + Graph */}
            <div className="flex items-end ">
              <h2 className="text-4xl font-bold text-white">1,200+</h2>
              <Image
                src="/images/Graph.svg"
                alt="Chart"
                width={250}
                height={100}
                className="ml-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
