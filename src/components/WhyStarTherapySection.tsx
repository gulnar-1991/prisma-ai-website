import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

interface WhyStarTherapySectionProps {
  id?: string;
}

export default function WhyStarTherapySection({ id }: WhyStarTherapySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      title: "Expert Clinicians",
      description: "Certified occupational therapists, speech pathologists, and developmental specialists with years of pediatric experience."
    },
    {
      title: "Child-Centered Approach",
      description: "Every child is unique. We tailor therapy to celebrate strengths and address individual developmental needs."
    },
    {
      title: "Play-Based Learning",
      description: "Therapy through joyful play creates engagement and natural skill development without pressure."
    },
    {
      title: "Family Partnership",
      description: "We work alongside families, providing strategies and support for home and everyday life."
    },
    {
      title: "Evidence-Based Methods",
      description: "Our approach combines proven therapeutic techniques with innovative, compassionate care."
    },
    {
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports keep families informed every step of the journey."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const headingSegments = [
    { text: "Why families choose Star Therapy.", className: "text-gray-500 font-normal" }
  ];

  return (
    <section id={id} className="relative min-h-screen bg-transparent py-24 px-4 sm:px-6 md:px-8 flex flex-col justify-center overflow-hidden select-none">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div>
            <div className="mb-8">
              <div className="text-gray-500 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Why Star Therapy
              </div>
              <WordsPullUpMultiStyle
                id="why-title"
                segments={headingSegments}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium leading-tight tracking-tight text-left"
              />
            </div>
          </div>

          {/* Right: Therapist Image */}
          <div className="hidden lg:block">
            <img
              src="/child-stars.png"
              alt="Star Therapy Journey"
              className="rounded-2xl border border-white/10 object-cover w-full h-full shadow-2xl"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative bg-[#1f2d4d] rounded-2xl border border-white/5 p-8 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#E1E0CC] mb-3 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
