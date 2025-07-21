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
    title: "Home",
    children: [
      {
        title: "shadcn/ui",
        href: "/",
        description: "Beautifully designed components built with Tailwind CSS.",
      },
      {
        title: "Introduction",
        href: "/docs",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "How to install dependencies and structure your app.",
      },
      {
        title: "Typography",
        href: "/docs/primitives/typography",
        description: "Styles for headings, paragraphs, lists...etc",
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
      },
    ],
  },
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "With Icon",
    children: [
      {
        title: "Backlog",
        href: "#",
        icon: CircleHelpIcon,
      },
      {
        title: "To Do",
        href: "#",
        icon: CircleIcon,
      },
      {
        title: "Done",
        href: "#",
        icon: CircleCheckIcon,
      },
    ],
  },
];
