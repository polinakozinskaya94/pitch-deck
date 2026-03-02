"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
  el?: "h1" | "h2" | "p" | "span";
  style?: React.CSSProperties;
}

function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  },
  className,
  el: Tag = "h1",
  style,
}: WordFadeInProps) {
  const _words = words.split(" ");
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(className)}
      style={style}
    >
      {_words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export { WordFadeIn };
