"use client";

import {
  BentoGrid,
  BentoGridItem,
} from "@workspace/ui/components/aceternity-ui/bento-grid";
import { cn } from "@workspace/ui/lib/utils";
import { bentoItems } from "./bento-items";
import React from "react";

export function Bento() {
  return (
    <section className="-mt-8 sm:-mt-20 relative z-10 pb-12 px-8">
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {bentoItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
