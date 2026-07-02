import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

interface PediatricTherapySectionProps {
  id?: string;
}

export default function PediatricTherapySection({ id }: PediatricTherapySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const therapyApproaches = [
    {
      title: "Sensory Play Therapy",
      description: "Children learn and grow through sensory experiences. Our specially designed play spaces engage touch, sight, sound, and movement to build neural connections and developmental skills.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },
    {
      title: "Movement & Motor Development",
      description: "From fine motor coordination to gross motor skills, we guide children through playful movements that build strength, balance, and body awareness in a supportive environment.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300"
    },
    {
      title: "Speech & Communication",
      description: "Language blooms through play and conversation. Our speech therapists create engaging interactions that naturally develop communication skills and social confidence.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },
    {
      title: "Emotional & Social Growth",
      description: "We create safe, nurturing spaces where children develop emotional intelligence, social skills, and resilience through guided play and meaningful interactions.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const headingSegments = [
    { text: "How pediatric therapy transforms development.", className: "text-gray-500 font-normal" }
  ];

  return (
    <section id={id} className="relative min-h-screen bg-transparent py-24 px-4 sm:px-6 md:px-8 flex flex-col justify-center overflow-hidden select-none">
      <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none z-0" />

      <div className="relative z-10 text-center mb-20 max-w-4xl mx-auto">
        <div className="text-gray-500 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          Pediatric Therapy
        </div>
        <WordsPullUpMultiStyle
          id="therapy-title"
          segments={headingSegments}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto"
      >
        {therapyApproaches.map((approach, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative bg-[#1f2d4d] rounded-2xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300 flex flex-col group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={approach.image}
                alt={approach.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d4d] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#E1E0CC] mb-4 tracking-tight">
                {approach.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {approach.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom insight */}
      <div className="relative z-10 mt-20 text-center max-w-2xl mx-auto">
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Every child develops at their own pace. Our therapists tailor each session to celebrate your child's unique strengths and support their individual journey toward confidence and growth.
        </p>
      </div>
    </section>
  );
}
