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
    { text: "Clinical-grade therapies for visionary growth.", className: "text-[#E1E0CC] font-normal" }
  ];

  const heading2 = [
    { text: "Built for pure development. Guided by compassion.", className: "text-gray-500 font-normal" }
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
    "Tailored sensory gym exercises",
    "Vestibular & proprioceptive play",
    "Fine & gross motor coordination",
    "Self-regulation milestone tracking"
  ];

  const checklist2 = [
    "Interactive speech playgrounds",
    "Expressive vocabulary expansion",
    "Social communication coaching"
  ];

  const checklist3 = [
    "Zero-noise distraction shielding",
    "Generative ambient calming drone",
    "Intelligent family progress sync"
  ];

  return (
    <section id={id} className="relative min-h-screen bg-black py-24 px-4 sm:px-6 md:px-8 flex flex-col justify-center overflow-hidden select-none">
      
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
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
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
              Your child's growth space.
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
          className="relative bg-[#212121] rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between p-6 sm:p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300 min-h-[360px] lg:h-full"
        >
          {/* Top content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                alt="Storyboard Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover select-none border border-white/5"
              />
              <span className="text-xs font-mono text-primary/40 tracking-widest font-semibold">01</span>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E1E0CC] tracking-tight mb-4">
                Sensory Integration.
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
          className="relative bg-[#212121] rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between p-6 sm:p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300 min-h-[360px] lg:h-full"
        >
          {/* Top content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                alt="Critique Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover select-none border border-white/5"
              />
              <span className="text-xs font-mono text-primary/40 tracking-widest font-semibold">02</span>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E1E0CC] tracking-tight mb-4">
                Speech & Language.
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
          className="relative bg-[#212121] rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between p-6 sm:p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300 min-h-[360px] lg:h-full"
        >
          {/* Top content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                alt="Immersion Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover select-none border border-white/5"
              />
              <span className="text-xs font-mono text-primary/40 tracking-widest font-semibold">03</span>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E1E0CC] tracking-tight mb-4">
                Mindful Play.
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
