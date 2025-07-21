"use client";

import React from "react";
import { motion } from "motion/react";

export default function SkeletonBlob() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      {/* Purple Blob */}
      <svg
        viewBox="0 0 206 142"
        className="absolute w-full h-full opacity-50 mix-blend-multiply"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          fill="#a78bfa"
          initial={{
            d: "M103,20C128,-10 175,0 190,30C205,60 190,100 160,115C130,130 95,130 70,110C45,90 40,50 60,30C80,10 90,50 103,20Z",
          }}
          animate={{
            d: [
              "M103,20C128,-10 175,0 190,30C205,60 190,100 160,115C130,130 95,130 70,110C45,90 40,50 60,30C80,10 90,50 103,20Z",
              "M100,30C125,10 160,20 175,45C190,70 180,100 150,115C120,130 85,120 65,100C45,80 40,50 55,35C70,20 85,50 100,30Z",
              "M110,40C130,20 160,35 170,60C180,85 160,110 135,120C110,130 80,115 60,95C40,75 35,50 50,35C65,20 90,20 110,40Z",
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

      {/* Green Blob */}
      <svg
        viewBox="0 0 206 142"
        className="absolute w-full h-full opacity-40 mix-blend-multiply"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          fill="#34d399"
          initial={{
            d: "M120,40C140,15 180,25 190,55C200,85 170,110 140,120C110,130 80,110 60,90C40,70 30,40 50,25C70,10 100,15 120,40Z",
          }}
          animate={{
            d: [
              "M120,40C140,15 180,25 190,55C200,85 170,110 140,120C110,130 80,110 60,90C40,70 30,40 50,25C70,10 100,15 120,40Z",
              "M115,45C135,20 170,35 180,60C190,85 165,110 135,120C105,130 75,110 55,90C35,70 30,40 50,30C70,20 95,25 115,45Z",
              "M125,35C145,15 175,30 185,55C195,80 165,105 130,115C95,125 60,105 45,85C30,65 35,35 60,20C85,5 105,20 125,35Z",
            ],
            transition: {
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
              repeatType: "mirror",
            },
          }}
        />
      </svg>
    </div>
  );
}
