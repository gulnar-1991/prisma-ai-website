/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import InquiryModal from "./components/InquiryModal";

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Smooth scroll handler for nav clicks
  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* SECTION 1: HERO */}
      <HeroSection 
        id="hero" 
        onNavClick={handleNavClick} 
        onOpenInquiry={() => setIsInquiryOpen(true)} 
      />

      {/* SECTION 2: ABOUT */}
      <AboutSection id="about" />

      {/* SECTION 3: FEATURES */}
      <FeaturesSection id="features" />

      {/* INQUIRY LIGHTBOX */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />

      {/* Minimalistic Cinematic Footer */}
      <footer className="w-full bg-black py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase select-none">
        <div>
          <span>© {new Date().getFullYear()} PRISMA CLINIC. ALL RIGHTS PRESERVED.</span>
        </div>
        <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-0">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }} className="hover:text-primary transition-colors">Top</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }} className="hover:text-primary transition-colors">Approach</a>
          <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick("features"); }} className="hover:text-primary transition-colors">Therapies</a>
          <button onClick={() => setIsInquiryOpen(true)} className="hover:text-primary transition-colors cursor-pointer uppercase">Inquire</button>
        </div>
      </footer>
    </div>
  );
}
