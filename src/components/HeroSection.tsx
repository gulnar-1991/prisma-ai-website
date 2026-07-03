import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
  onOpenInquiry: () => void;
  id?: string;
}

export default function HeroSection({ onNavClick, onOpenInquiry, id }: HeroSectionProps) {
  // Navigation Links
  const navItems = [
    { label: "Our approach", action: () => onNavClick("about") },
    { label: "Specialists", action: () => onNavClick("about") },
    { label: "Therapies", action: () => onNavClick("features") },
    { label: "Environments", action: () => onNavClick("features") },
    { label: "Inquiries", action: onOpenInquiry },
  ];

  const customTransition = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <section id={id} className="relative w-full h-screen p-4 md:p-6 bg-transparent flex flex-col justify-between overflow-hidden select-none">
      {/* Rounded inset container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#050505] flex flex-col justify-between border border-white/5 shadow-2xl">
        
        {/* Background Video */}
        <video
          id="hero-bg-video"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-1" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none z-1" />

        {/* Navbar */}
        <nav 
          id="navbar-pill"
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-transparent rounded-b-2xl md:rounded-b-3xl border-x border-b border-white/10 px-4 py-2.5 md:px-8 shadow-lg flex items-center"
        >
          <div className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                id={`nav-item-${idx}`}
                onClick={item.action}
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase cursor-pointer hover:text-[#E1E0CC] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Spacer for top layout */}
        <div className="h-1" />

        {/* Hero Content (bottom-aligned) */}
        <div className="relative z-10 w-full p-6 sm:p-10 md:p-12 lg:p-16 mt-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            
            {/* Left 8 columns - Giant Heading "Prisma" */}
            <div className="lg:col-span-8 flex flex-col justify-end">
              <WordsPullUp
                id="hero-title-words"
                text="Star Therapy"
                showAsterisk={true}
                className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] 2xl:text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] select-none"
                style={{ color: "#E1E0CC" } as React.CSSProperties}
              />
            </div>

            {/* Right 4 columns - Description paragraph + CTA */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4 sm:gap-6 mb-4">
              <motion.p
                id="hero-description"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...customTransition, delay: 0.5 }}
                className="text-white text-xs sm:text-sm md:text-base leading-relaxed tracking-wide max-w-xs font-medium drop-shadow-lg"
              >
                Star Therapy is a pediatric therapy clinic specializing in occupational, speech, and developmental therapy. We combine clinical expertise with compassionate, play-based approaches to help every child reach their fullest potential.
              </motion.p>

              <motion.button
                id="hero-cta-btn"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...customTransition, delay: 0.7 }}
                className="group flex items-center gap-2 hover:gap-3 bg-primary text-black font-medium text-sm sm:text-base rounded-full pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2.5 sm:py-2 hover:bg-[#eae8db] transition-all duration-300 shadow-md cursor-pointer select-none"
              >
                <span>Start therapy journey</span>
                <div className="bg-transparent rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#DEDBC8]" />
                </div>
              </motion.button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
