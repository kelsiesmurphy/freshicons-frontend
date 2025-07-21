"use client";

import { motion } from "motion/react";
import React from "react";

export default function SkeletonBlob() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full opacity-50 mix-blend-multiply"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          fill="#a78bfa"
          initial={{
            d: "M60,40 C80,10 120,10 140,40 C170,60 170,90 140,110 C120,140 80,140 60,110 C30,90 30,60 60,40 Z",
          }}
          animate={{
            d: [
              "M60,40 C80,10 120,10 140,40 C170,60 170,90 140,110 C120,140 80,140 60,110 C30,90 30,60 60,40 Z",
              "M70,50 C90,20 130,30 150,50 C180,70 160,100 140,110 C120,130 80,130 60,110 C40,90 40,60 70,50 Z",
              "M65,45 C85,15 125,15 145,45 C175,65 160,95 135,105 C115,125 85,125 65,105 C35,85 40,55 65,45 Z",
            ],
            transition: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              repeatType: "mirror",
            },
          }}
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full opacity-40 mix-blend-multiply"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          fill="#34d399"
          initial={{
            d: "M80,60 C100,30 140,40 160,60 C190,80 170,110 150,120 C130,140 90,130 70,110 C50,90 50,70 80,60 Z",
          }}
          animate={{
            d: [
              "M80,60 C100,30 140,40 160,60 C190,80 170,110 150,120 C130,140 90,130 70,110 C50,90 50,70 80,60 Z",
              "M85,65 C105,35 145,45 165,65 C195,85 175,115 155,125 C135,145 95,135 75,115 C55,95 55,75 85,65 Z",
              "M75,55 C95,25 135,35 155,55 C185,75 165,105 145,115 C125,135 85,125 65,105 C45,85 45,65 75,55 Z",
            ],
            transition: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
              repeatType: "mirror",
            },
          }}
        />
      </svg>
    </div>
  );
}
