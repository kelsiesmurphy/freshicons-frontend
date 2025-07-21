import {
  LucideIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href?: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavItem[];
};

export const navConfig: NavItem[] = [
  {
    title: "Icons",
    href: "/icons",
    children: [
      {
        title: "Featured",
        href: "/icons/featured",
        description:
          "A curated collection of high-quality icons across styles and use cases.",
      },
      {
        title: "New",
        href: "/icons/new",
        description:
          "The latest additions to our icon library, showcasing the newest designs and trends.",
      },
      {
        title: "Random",
        href: "/icons/random",
        description: "Get a randomly selected icon from our library.",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      {
        title: "SVG Pattern Maker",
        href: "/resources/svg-pattern-maker",
        description:
          "A tool for creating unique SVG patterns for your projects.",
      },
      {
        title: "CSS Gradient Maker",
        href: "/resources/css-gradient-maker",
        description:
          "A tool for creating beautiful CSS gradients for your projects.",
      },
      {
        title: "Blob Shape Maker",
        href: "/resources/blob-shape-maker",
        description:
          "A tool for creating unique blob shapes for your projects.",
      },
    ],
  },
  {
    title: "Other Assets",
    href: "/assets",
  },
];
