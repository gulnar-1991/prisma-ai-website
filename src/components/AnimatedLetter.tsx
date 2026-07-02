import React from "react";
import { motion, useTransform, MotionValue } from "motion/react";

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  id?: string;
  key?: React.Key;
}

export default function AnimatedLetter({ char, progress, range, id }: AnimatedLetterProps) {
  // Ensure the range bounds are within [0, 1] and strictly ordered
  const start = Math.max(0, Math.min(1, range[0]));
  const end = Math.max(0, Math.min(1, range[1]));
  
  // Safe bounds handling
  const safeRange: [number, number] = start >= end ? [start, Math.min(1, start + 0.01)] : [start, end];

  const opacity = useTransform(progress, safeRange, [0.2, 1]);

  return (
    <motion.span 
      id={id}
      style={{ opacity }} 
      className="inline-block whitespace-pre"
    >
      {char}
    </motion.span>
  );
}
