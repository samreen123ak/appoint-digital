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
      <div className=" flex flex-col justify-center items-center text-center mb-16">
        <p className="text-gray-400 text-sm uppercase tracking-wide mb-5">
          Learn Everything
        </p>
        <BlurText
          text=" Your Next Big Move in the Digital World"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-6xl font-light text-center text-white"
        />

        <p className="mt-10 text-gray-400 max-w-2xl mx-auto ">
          With Appoint Digital, you can easily stay aware of all the updates in
          the marketing domain. So what are you waiting for? Stay ahead with
          insights that drive smarter decisions and real growth.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex  gap-40 px-10">
        {/* Left Section */}
        <div className="ml-15">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4  underline">
            News & Information
          </p>
          <h2 className="text-6xl font-[600px] mb-6 leading-tight">
            Stay <br /> up-to-date
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm">
            Stay up-to-date with industry news and information with our articles
            covering all subjects in the Web and Digital Marketing landscape.
          </p>
          <a
            href="#"
            className="text-primary border-b border-primary cursor-pointer"
          >
            Read all articles
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-20">
          {articles.map((article, index) => (
            <div key={article.id} className="relative group cursor-pointer">
              {/* Divider line (skip first item) */}
              {index > 0 && (
                <div className="absolute -top-8 left-0 w-full h-px bg-primary"></div>
              )}

              <div className="flex items-center justify-between gap-8">
                {/* Number + Date */}
                <div className="flex items-center gap-8 min-w-[140px]">
                  <div
                    className="w-8 h-8 flex items-center justify-center border border-primary rounded-full text-sm font-semibold
                       transition-transform duration-300 group-hover:translate-x-4"
                  >
                    {article.id}
                  </div>
                  <span className="text-sm text-gray-400 mx-10 ">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-semibold flex-1 leading-snug mr-10 
                     transition-transform duration-300 group-hover:translate-x-4"
                >
                  {article.title}
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="relative text-sm text-gray-400 transition group-hover:text-white"
                >
                  READ MORE
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
