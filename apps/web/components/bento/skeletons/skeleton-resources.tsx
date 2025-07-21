"use client";

import { motion } from "motion/react";
import React from "react";
import SkeletonThree from "./skeleton-three";
import SkeletonGrid from "./skeleton-grid";
import SkeletonBlob from "./skeleton-blob";

export default function SkeletonResources() {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  const avatarUrl =
    "https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg";

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="hidden md:flex h-full w-1/1 sm:w-1/2 md:w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex-col items-center justify-center"
      >
        <SkeletonGrid />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          SVG Pattern Maker
        </p>
      </motion.div>

      <motion.div className="flex h-full relative z-20 w-1/1 sm:w-1/2 md:w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex-col items-center justify-center">
        <SkeletonThree />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          CSS Gradient Maker
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="hidden md:flex h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex-col items-center justify-center"
      >
        <SkeletonBlob />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Blob Shape Maker
        </p>
      </motion.div>
    </motion.div>
  );
}
