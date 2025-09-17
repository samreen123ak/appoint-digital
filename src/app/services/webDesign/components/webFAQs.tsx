"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

interface FAQ {
  id: number;
  title: string;
  subtitle: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 2,

    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 3,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 4,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 5,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 6,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 7,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
  {
    id: 8,
    title: "What is an AI Music Generator?",
    subtitle:
      "An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.",
  },
];

const WebFAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-black text-white py-28 px-4 flex justify-center items-center">
      {/* Background Image */}
      <Image
        src="/images/faqBG.svg"
        alt="FAQ Background"
        width={800}
        height={800}
        className="absolute inset-0  top-30 left-[18%] object-cover mb-25  "
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-center mb-10">
          Web Design Company
          <br /> FAQs at <span className="text-primary">Appoint Digital</span>
        </h2>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggleFAQ(faq.id)}
              className={`cursor-pointer rounded-md px-4 py-3 transition-all duration-300 ${
                openId === faq.id
                  ? "bg-[#1c1a1a]"
                  : "bg-[#3a3400]/90 text-white"
              }`}
            >
              {/* Row 1: counting + title + icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-white/80">{faq.id}.</span>
                  <p className="font-medium text-white/80 text-sm">
                    {faq.title}
                  </p>
                </div>
                <div>
                  {openId === faq.id ? (
                    <RxCross1 className="text-white/80 text-xl" />
                  ) : (
                    <GoPlus className="text-white/80 text-2xl" />
                  )}
                </div>
              </div>

              {/* Row 2: subtitle */}
              {openId === faq.id && (
                <p className="text-xs mt-2 text-white/50 max-w-2xl mb-3">
                  {faq.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebFAQSection;
