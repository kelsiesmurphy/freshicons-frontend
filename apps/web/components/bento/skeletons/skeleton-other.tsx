"use client";

import { motion } from "motion/react";
import React, { useEffect, useState, useRef } from "react";

export default function SkeletonOther() {
  const [widths, setWidths] = useState<number[]>([]);
  const [animationState, setAnimationState] = useState<
    "initial" | "hover" | "animate"
  >("initial");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomWidths = new Array(6)
      .fill(0)
      .map(() => Math.random() * (100 - 40) + 40);
    setWidths(randomWidths);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setAnimationState("hover");
          const timeout = setTimeout(() => {
            setAnimationState("animate");
          }, 2000); // Revert to 'animate' after hover animation
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.3 },
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={animationState}
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {widths.map((width, i) => (
        <motion.div
          key={`skeleton-two-${i}`}
          variants={variants}
          style={{ maxWidth: `${width}%` }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-muted p-2 items-center space-x-2 bg-neutral-100 dark:bg-muted w-full h-4"
        />
      ))}
    </motion.div>
  );
}
