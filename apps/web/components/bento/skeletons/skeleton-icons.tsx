"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

type SkeletonIconsProps = {
  icons: LucideIcon[][];
  iconColor?: string;
};

export default function SkeletonIcons({
  icons,
  iconColor,
}: SkeletonIconsProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-col justify-between p-4 gap-4 h-full w-full"
    >
      {icons.map((Row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 justify-between w-full">
          {Row.map((Icon, colIndex) => {
            const rowVariants = {
              initial: { opacity: 0.8, scale: 1, y: 0, rotate: 0 },
              hover:
                rowIndex === 0
                  ? { rotate: 28 }
                  : rowIndex === 1
                    ? { rotate: -28 }
                    : { rotate: 28 },
            };

            return (
              <motion.div
                key={colIndex}
                className="flex-1 flex justify-center"
                variants={rowVariants}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: colIndex * 0.05,
                }}
              >
                <Icon
                  className={`h-6 w-6 ${
                    iconColor || "text-neutral-700 dark:text-neutral-200"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}
