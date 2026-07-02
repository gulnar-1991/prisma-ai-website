import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  id?: string;
}

export default function TestimonialsSection({ id }: TestimonialsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah & Michael K.",
      child: "Emma, age 5",
      text: "Star Therapy transformed our daughter's confidence. Within months, Emma went from struggling with coordination to thriving in her activities. The therapists here truly understand children.",
      focus: "Occupational Therapy",
      image: "https://images.unsplash.com/photo-1503454537688-e0cebf1ef58f"
    },
    {
      name: "Jessica L.",
      child: "Liam, age 7",
      text: "Liam's speech development accelerated remarkably. The team's compassionate approach made every session feel like play, not therapy. He actually asks to go back.",
      focus: "Speech Therapy",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },
    {
      name: "David & Monica R.",
      child: "Oliver, age 4",
      text: "The whole family approach at Star Therapy is exceptional. Our son's progress combined with the support and guidance we received has been life-changing.",
      focus: "Family Support",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const headingSegments = [
    { text: "Stories of growth and transformation.", className: "text-[#E1E0CC] font-normal" }
  ];

  return (
    <section id={id} className="relative min-h-screen bg-transparent py-24 px-4 sm:px-6 md:px-8 flex flex-col justify-center overflow-hidden select-none">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />

      <div className="relative z-10 text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
        <div className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          Testimonials
        </div>
        <WordsPullUpMultiStyle
          id="testimonials-title"
          segments={headingSegments}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative bg-[#1f2d4d] rounded-2xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.child}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/5 pt-4">
                <p className="text-[#E1E0CC] font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.child}</p>
                <p className="text-primary/70 text-xs mt-2">{testimonial.focus}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
