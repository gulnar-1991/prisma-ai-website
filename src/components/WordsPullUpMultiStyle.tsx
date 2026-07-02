import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  id?: string;
}

export default function WordsPullUpMultiStyle({ segments, className = "", id }: WordsPullUpMultiStyleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px -10% 0px" });

  // Map segments into individual words with their respective styles
  const wordsList: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    const words = segment.text.split(" ");
    words.forEach((w) => {
      // Retain words, keeping spaces represented as separate elements
      if (w !== "") {
        wordsList.push({
          word: w,
          className: segment.className || "",
        });
      }
    });
  });

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
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {wordsList.map((item, index) => {
        return (
          <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.22em] last:mr-0">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${item.className}`}
            >
              {item.word}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}
