/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import PediatricTherapySection from "./components/PediatricTherapySection";
import WhyStarTherapySection from "./components/WhyStarTherapySection";
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
    <div className="relative min-h-screen bg-[#f5f3f0] text-slate-900 selection:bg-primary selection:text-black">
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

      {/* SECTION 4: PEDIATRIC THERAPY */}
      <PediatricTherapySection id="therapy" />

      {/* SECTION 5: WHY STAR THERAPY */}
      <WhyStarTherapySection id="why" />

      {/* INQUIRY LIGHTBOX */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Enhanced Footer */}
      <footer className="w-full bg-[#1f2d4d] border-t border-white/5 select-none">
        <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#E1E0CC] tracking-tight">Star Therapy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pediatric therapy excellence through compassionate, play-based care.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Navigate</h4>
              <ul className="space-y-2">
                <li><a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }} className="text-gray-400 text-sm hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }} className="text-gray-400 text-sm hover:text-primary transition-colors">Our Approach</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick("features"); }} className="text-gray-400 text-sm hover:text-primary transition-colors">Services</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); handleNavClick("testimonials"); }} className="text-gray-400 text-sm hover:text-primary transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">Occupational Therapy</li>
                <li className="text-gray-400 text-sm">Speech Therapy</li>
                <li className="text-gray-400 text-sm">Family Support</li>
                <li><button onClick={() => setIsInquiryOpen(true)} className="text-primary text-sm hover:text-[#eae8db] transition-colors">Book Consultation</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📧 <a href="mailto:info@startherapy.ca" className="hover:text-primary transition-colors">info@startherapy.ca</a></li>
                <li>📞 <a href="tel:+16476878024" className="hover:text-primary transition-colors">647-687-8024</a></li>
                <li>📍 Hamilton, ON</li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase">
              © {new Date().getFullYear()} STAR THERAPY. ALL RIGHTS RESERVED.
            </p>
            <div className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase mt-4 sm:mt-0">
              PHIPA Compliant • Evidence-Based Care
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
