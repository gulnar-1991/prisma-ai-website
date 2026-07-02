import React, { useRef } from "react";
import { useScroll } from "motion/react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Set up useScroll with the specified target offset
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const headingSegments = [
    { text: "Led by Dr. Evelyn Chen, ", className: "font-normal text-[#E1E0CC]" },
    { text: "a visionary pediatric specialist. ", className: "font-serif italic text-primary" },
    { text: "We nurture cognitive growth, sensory integration, and emotional resilience through playful, state-of-the-art therapeutic designs.", className: "font-normal text-[#E1E0CC]" },
  ];

  const bodyText = "Over the last seven years, we have collaborated with leading developmental institutes and neurodiverse thinkers in Paris and Berlin. Together, we have pioneered adaptive play spaces and personalized therapy models that have set international benchmarks.";
  const chars = bodyText.split("");
  const totalChars = chars.length;

  return (
    <section id={id} className="bg-black py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative select-none">
      <div
        id="about-card"
        ref={cardRef}
        className="w-full max-w-6xl bg-[#101010] rounded-2xl md:rounded-[2.5rem] border border-white/5 px-6 py-12 sm:px-12 sm:py-20 md:p-20 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
      >
        {/* Subtle background noise overlay for About card */}
        <div className="noise-overlay absolute inset-0 opacity-[0.05] pointer-events-none" />

        {/* Top Label */}
        <div 
          id="about-label"
          className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-8 sm:mb-10 select-none"
        >
          Child development
        </div>

        {/* WordsPullUpMultiStyle Heading */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <WordsPullUpMultiStyle
            id="about-heading"
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] sm:leading-[1.0] tracking-tight text-center"
          />
        </div>

        {/* Scroll-Linked Character Opacity Body Paragraph */}
        <div 
          id="about-body-container"
          className="max-w-2xl mx-auto text-center mt-6 sm:mt-10"
        >
          <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-light select-none inline-block flex-wrap justify-center">
            {chars.map((char, index) => {
              const charProgress = index / totalChars;
              const start = charProgress - 0.1;
              const end = charProgress + 0.05;
              return (
                <AnimatedLetter
                  key={index}
                  id={`char-${index}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
