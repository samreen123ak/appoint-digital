"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-bg text-white min-h-screen flex flex-col">
      {/* Navbar / Logo */}
      <header className="flex items-center justify-between px-8 py-4">
        <Image src="/logo.svg" alt="Logo" width={70} height={70} />
      </header>

      {/* Hero Content */}
      <div className="flex  flex-col items-center justify-center text-center px-6">
        <p className="text-2xl mb-2">Win at Your Marketing with</p>
        <h1 className="text-5xl font-extrabold text-primary">
          Appoint Digital Solutions
        </h1>
        <p className="text-gray-300 text-xs max-w-md mt-3">
          Get Help from Our Data-Centric and Performance-Driven Digital
          Marketing Solution to Enjoy Growth & Edge in the Digital Market Place.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-5 ">
        <Image src="/images/bravo.svg" alt="Bravo" width={50} height={50} />
        <Image src="/images/circle.svg" alt="Circle" width={50} height={50} />
        <Image src="/images/discord.svg" alt="Discord" width={50} height={50} />
        <Image src="/images/google.svg" alt="Google" width={50} height={50} />
        <Image src="/images/jump.svg" alt="Jump" width={50} height={50} />
        <Image src="/images/lollapaloza.svg" alt="LP" width={50} height={50} />
        <Image src="/images/magiceden.svg" alt="Magic" width={50} height={50} />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/globe.svg"
          alt=""
          width={900}
          height={900}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
