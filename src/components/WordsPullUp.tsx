import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export default function WordsPullUp({ text, className = "", showAsterisk = false, id, style }: WordsPullUpProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px -10% 0px" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      id={id}
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
      style={style}
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        return (
          <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.25em] last:mr-0 relative" style={style}>
            <motion.span
              variants={wordVariants}
              className="inline-block relative"
              style={style}
            >
              {word}
              {isLastWord && showAsterisk && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] pointer-events-none select-none font-sans font-normal text-[#E1E0CC]">
                  *
                </span>
              )}
            </motion.span>
            {/* If it's the last word and we show the asterisk, we add extra spacing so the asterisk is not clipped */}
            {isLastWord && showAsterisk && <span className="inline-block w-[0.25em]" />}
          </span>
        );
      })}
    </motion.div>
  );
}
