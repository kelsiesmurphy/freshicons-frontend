import { ReactNode } from "react";
import SkeletonOne from "./skeletons/skeleton-one";
import SkeletonTwo from "./skeletons/skeleton-two";
import SkeletonThree from "./skeletons/skeleton-three";
import SkeletonFour from "./skeletons/skeleton-four";
import SkeletonFive from "./skeletons/skeleton-five";
import { Album, Anvil, Cpu, Leaf, Sparkles } from "lucide-react";

type BentoItem = {
  title: string;
  description: ReactNode;
  header: ReactNode;
  className?: string;
  icon?: ReactNode;
};

export const bentoItems: BentoItem[] = [
  {
    title: "Featured Icons",
    description: (
      <span className="text-sm">
        A curated collection of high-quality icons across styles and use cases.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Environmental Icons",
    description: (
      <span className="text-sm">
        Icons representing sustainability, nature, weather, and green tech.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Leaf className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technology Icons",
    description: (
      <span className="text-sm">
        Explore a variety of tech-inspired icons from devices to cloud systems.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Creative Resources",
    description: (
      <span className="text-sm">
        Useful free resources to enhance your project.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Album className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Assets",
    description: (
      <span className="text-sm">
        Backgrounds, templates, and extras to complete your creative toolkit.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <Anvil className="h-4 w-4 text-neutral-500" />,
  },
];
