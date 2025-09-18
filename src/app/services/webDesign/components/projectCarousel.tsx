"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const projects = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, velit eget ultrices sagittis, lorem nulla dapibus risus, nec posuere arcu lorem non metus.",
}));

const ProjectCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Continuous auto-scroll
  useEffect(() => {
    let animationFrame: number;
    const scrollSpeed = 0.5; // lower = slower (try 0.3–1)

    const animate = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += scrollSpeed;

        // reset when reaching the end (infinite loop effect)
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div className="relative bg-bg py-10">
      {/* Horizontal scroll container */}
      <div
        className="flex gap-10 overflow-x-hidden px-6"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.concat(projects).map(
          (
            project // duplicate for smooth loop
          ) => (
            <div
              key={project.id + Math.random()}
              className="relative w-80 h-[500px] flex-shrink-0 bg-black/5 text-white flex flex-col cursor-pointer"
              style={{
                boxShadow: "5px 5px 0px rgba(150, 150, 150, 0.5)",
              }}
            >
              {/* Background wave */}
              <div className="absolute inset-0 opacity-25 rounded-lg overflow-hidden">
                <Image
                  src="/images/wave.svg"
                  alt="Waves"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 mt-auto">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 bg-primary text-black px-4 py-3 font-semibold">
                <div className="grid grid-cols-2 gap-4 mb-4 text-[10px]">
                  <div className="space-y-1">
                    <p>Client Name:</p>
                    <p>Project Date:</p>
                    <p>Website:</p>
                    <p>Category:</p>
                  </div>
                  <div className="space-y-1">
                    <p>Location:</p>
                    <p>Budget:</p>
                    <p>Status:</p>
                    <p>Duration:</p>
                  </div>
                </div>

                <div className="flex justify-between text-gray-600 text-[8px]">
                  <div className="gap-4 flex items-center">
                    <span>© 2025</span>
                    <span>Privacy Policy</span>
                  </div>
                  <span>Terms & Conditions</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Optional Dots (not really useful for infinite scroll) */}
    </div>
  );
};

export default ProjectCarousel;
