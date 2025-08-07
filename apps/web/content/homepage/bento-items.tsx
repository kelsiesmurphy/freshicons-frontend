import { ReactNode } from "react";
import SkeletonIcons from "../../components/bento/skeletons/skeleton-icons";
import SkeletonOther from "../../components/bento/skeletons/skeleton-other";
import SkeletonResources from "../../components/bento/skeletons/resources/skeleton-resources";

import {
  Album,
  Anvil,
  Cpu,
  Leaf,
  Sparkles,
  Activity,
  Airplay,
  Archive,
  Aperture,
  Atom,
  Award,
  Backpack,
  BatteryFull,
  Bell,
  Beaker,
  Camera,
  Cloud,
  Smartphone,
  TabletSmartphone,
  MonitorSmartphone,
  Router,
  Code,
  Terminal,
  CloudCog,
  Server,
  ShieldCheck,
  MousePointerClick,
  CircuitBoard,
  Droplet,
  CloudRain,
  TreePine,
  Sun,
  Wind,
  Recycle,
  BatteryCharging,
  Globe,
  Flame,
} from "lucide-react";

type BentoItem = {
  title: string;
  description: ReactNode;
  header: ReactNode;
  className?: string;
  icon?: ReactNode;
};

const featuredIconSet = [
  [Activity, Airplay, Archive, Aperture],
  [Atom, Award, Backpack, BatteryFull],
  [Bell, Beaker, Camera, Cloud],
];

const environmentalIconSet = [
  [Leaf, Droplet, CloudRain, TreePine],
  [Sun, Wind, Cloud, Recycle],
  [BatteryCharging, Globe, Beaker, Flame],
];

const techIconSet = [
  [Cpu, Smartphone, TabletSmartphone, MonitorSmartphone],
  [Router, Code, Terminal, CloudCog],
  [Server, ShieldCheck, MousePointerClick, CircuitBoard],
];

export const bentoItems: BentoItem[] = [
  {
    title: "Featured Icons",
    description: (
      <span className="text-sm">
        A curated collection of high-quality icons across styles and use cases.
      </span>
    ),
    header: (
      <SkeletonIcons icons={featuredIconSet} iconColor="text-neutral-700 dark:text-white" />
    ),
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
    header: (
      <SkeletonIcons icons={environmentalIconSet} iconColor="text-green-900 dark:text-green-400" />
    ),
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
    header: <SkeletonIcons icons={techIconSet} iconColor="text-blue-900 dark:text-blue-400" />,
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
    header: <SkeletonResources />,
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
    header: <SkeletonOther />,
    className: "md:col-span-1",
    icon: <Anvil className="h-4 w-4 text-neutral-500" />,
  },
];
