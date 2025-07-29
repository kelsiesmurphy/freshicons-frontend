import { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href?: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavItem[];
};

export const navConfig: NavItem[] = [
  {
    title: "All",
    href: "/search",
  },
  {
    title: "Icons",
    href: "/search?type=icon",
    children: [
      {
        title: "Featured",
        href: "/search?type=icon&featured=true",
        description: "A curated collection of high-quality icons.",
      },
      {
        title: "New",
        href: "/search?type=icon&sort=new",
        description: "The latest additions to our icon library.",
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
];
