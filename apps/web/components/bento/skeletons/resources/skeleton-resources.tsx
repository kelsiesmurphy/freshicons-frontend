"use client";

import { motion } from "motion/react";
import { SkeletonResourcesMobile } from "./skeleton-resources-mobile";
import { skeletonCards } from "./shared-card-data";

export default function SkeletonResources() {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <>
      {/* Mobile view */}
      <div className="flex md:hidden w-full justify-center py-4">
        <SkeletonResourcesMobile items={skeletonCards} />
      </div>

      {/* Desktop view */}
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="hidden md:flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 flex rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex-col items-center justify-center"
        >
          {skeletonCards[0]?.content}
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            {skeletonCards[0]?.name}
          </p>
        </motion.div>

        <motion.div className="flex h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex-col items-center justify-center">
          {skeletonCards[1]?.content}
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            {skeletonCards[1]?.name}
          </p>
        </motion.div>

        <motion.div
          variants={second}
          className="h-full w-1/3 flex rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex-col items-center justify-center"
        >
          {skeletonCards[2]?.content}
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            {skeletonCards[2]?.name}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
