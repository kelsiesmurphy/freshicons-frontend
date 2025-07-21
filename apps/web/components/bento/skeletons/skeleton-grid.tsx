"use client";

import { motion } from "motion/react";
import React from "react";

const ROWS = 6;
const COLUMNS = 10;

export default function SkeletonGrid() {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="grid grid-cols-10 gap-2 p-4 w-full h-full min-h-[6rem] place-items-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
    >
      {Array.from({ length: ROWS * COLUMNS }).map((_, i) => {
        const delay = (i % COLUMNS) * 0.05 + Math.floor(i / COLUMNS) * 0.03;

        return (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"
            variants={{
              initial: { scale: 0.5, opacity: 0.7 },
              hover: {
                scale: [0.5, 1.2, 1],
                opacity: [0.7, 1, 0.7],
                transition: {
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 0,
                  delay,
                },
              },
            }}
          />
        );
      })}
    </motion.div>
  );
}
