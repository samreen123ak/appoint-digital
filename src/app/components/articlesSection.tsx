"use client";
import React from "react";
import BlurText from "./BlurText";

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      date: "May 7, 2025",
      title: "Warning: Rise in ‘Task Scams’ Targeting Job Seekers",
    },
    {
      id: 2,
      date: "October 8, 2024",
      title: "Ethical Considerations in AI-Driven Marketing",
    },
    {
      id: 3,
      date: "October 8, 2024",
      title: "AI for Visual Content Creation",
    },
    {
      id: 4,
      date: "October 8, 2024",
      title: "AI for Visual Content Creation",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center text-center mb-16 px-4 sm:px-6 md:px-0">
        <p className="text-gray-400 text-sm uppercase tracking-wide mb-5">
          Learn Everything
        </p>
        <BlurText
          text=" Your Next Big Move in the Digital World"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl font-light text-center text-white leading-snug"
        />
        <p className="mt-10 text-gray-400 max-w-full sm:max-w-2xl text-sm sm:text-base">
          With Appoint Digital, you can easily stay aware of all the updates in
          the marketing domain. So what are you waiting for? Stay ahead with
          insights that drive smarter decisions and real growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-40 px-4 md:px-10">
        {/* Left Section */}
        <div className="mb-10 md:mb-0">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4 underline">
            News & Information
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[600] mb-6 leading-tight">
            Stay <br /> up-to-date
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-sm sm:max-w-xs md:max-w-sm">
            Stay up-to-date with industry news and information with our articles
            covering all subjects in the Web and Digital Marketing landscape.
          </p>
          <a
            href="#"
            className="text-primary border-b border-primary cursor-pointer text-sm sm:text-base"
          >
            Read all articles
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-10 sm:space-y-16">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="relative group cursor-pointer flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              {/* Divider line (hidden on small screens) */}
              {index > 0 && (
                <div className="absolute -top-8 left-0 w-full h-px bg-primary hidden sm:block"></div>
              )}

              {/* Number + Date */}
              <div className="flex items-center gap-4 sm:gap-8 min-w-[120px]">
                <div className="w-8 h-8 flex items-center justify-center border border-primary rounded-full text-sm font-semibold transition-transform duration-300 group-hover:translate-x-2 sm:group-hover:translate-x-4">
                  {article.id}
                </div>
                <span className="text-xs sm:text-sm text-gray-400">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl font-semibold flex-1 leading-snug transition-transform duration-300 group-hover:translate-x-2 sm:group-hover:translate-x-4">
                {article.title}
              </h3>

              {/* Read More */}
              <a
                href="#"
                className="relative text-xs sm:text-sm text-gray-400 transition group-hover:text-white mt-2 sm:mt-0"
              >
                READ MORE
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
