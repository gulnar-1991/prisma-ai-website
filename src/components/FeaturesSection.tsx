import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

interface FeaturesSectionProps {
  id?: string;
}

export default function FeaturesSection({ id }: FeaturesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // useInView for triggering card entrance animations once
  const isGridInView = useInView(containerRef, { once: true, margin: "-100px" });

  const heading1 = [
    { text: "Comprehensive pediatric therapy services.", className: "text-gray-500 font-normal" }
  ];

  const heading2 = [
    { text: "Evidence-based care. Child-centered approach.", className: "text-gray-500 font-normal" }
  ];

  // Card staggered entrance animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const checklist1 = [
    "Sensory integration therapy",
    "Motor skill development",
    "Adaptive play environments",
    "Progress tracking & family coaching"
  ];

  const checklist2 = [
    "Speech-language pathology",
    "Communication & language skills",
    "Social interaction coaching"
  ];

  const checklist3 = [
    "Tranquil therapy spaces",
    "Personalized care plans",
    "Parent-child partnership model"
  ];

  return (
    <section id={id} className="relative min-h-screen bg-transparent py-24 px-4 sm:px-6 md:px-8 flex flex-col justify-center overflow-hidden select-none">
      
      {/* Subtle background noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 sm:mb-20 max-w-4xl mx-auto flex flex-col gap-3">
        <WordsPullUpMultiStyle
          id="features-title-1"
          segments={heading1}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-wide"
        />
        <WordsPullUpMultiStyle
          id="features-title-2"
          segments={heading2}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-wide"
        />
      </div>

      {/* Feature cards grid */}
      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-1.5 w-full max-w-7xl mx-auto lg:h-[490px] items-stretch"
      >
        
        {/* CARD 1 - Video Card */}
        <motion.div
          id="feature-card-0"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="relative rounded-2xl overflow-hidden min-h-[360px] lg:h-full border border-white/5 shadow-2xl flex flex-col justify-end p-6 sm:p-8 group cursor-pointer"
        >
          {/* Full video background */}
          <video
            src="/dreamina-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          />
          {/* Soft dark bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-1" />
          
          <div className="relative z-10 mt-auto">
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#E1E0CC] group-hover:translate-x-1 transition-transform duration-300">
              Welcoming therapy spaces.
            </h3>
          </div>
        </motion.div>

        {/* CARD 2 - Project Storyboard */}
        <motion.div
          id="feature-card-1"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="relative bg-[#2a4a6d] rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between p-6 sm:p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300 min-h-[360px] lg:h-full"
        >
          {/* Top content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-end items-start">
              <span className="text-xs font-mono text-primary/40 tracking-widest font-semibold">01</span>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E1E0CC] tracking-tight mb-4">
                Occupational Therapy.
              </h3>
              
              {/* Checklist */}
              <ul className="flex flex-col gap-2.5">
                {checklist1.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 flex items-center gap-1 text-xs font-medium text-primary/80 group-hover:text-primary transition-colors duration-200">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </motion.div>

        {/* CARD 3 - Smart Critiques */}
        <motion.div
          id="feature-card-2"
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="relative bg-[#2a4a6d] rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between p-6 sm:p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300 min-h-[360px] lg:h-full"
        >
          {/* Top content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-end items-start">
              <span className="text-xs font-mono text-primary/40 tracking-widest font-semibold">02</span>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E1E0CC] tracking-tight mb-4">
                Speech Therapy.
              </h3>
              
              {/* Checklist */}
              <ul className="flex flex-col gap-2.5">
                {checklist2.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 flex items-center gap-1 text-xs font-medium text-primary/80 group-hover:text-primary transition-colors duration-200">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </motion.div>

        {/* CARD 4 - Immersion Capsule */}
        <motion.div
          id="feature-card-3"
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="relative bg-[#2a4a6d] rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between p-6 sm:p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300 min-h-[360px] lg:h-full"
        >
          {/* Top content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-end items-start">
              <span className="text-xs font-mono text-primary/40 tracking-widest font-semibold">03</span>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E1E0CC] tracking-tight mb-4">
                Family Support.
              </h3>
              
              {/* Checklist */}
              <ul className="flex flex-col gap-2.5">
                {checklist3.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 flex items-center gap-1 text-xs font-medium text-primary/80 group-hover:text-primary transition-colors duration-200">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
