"use client";

import { ReactNode } from "react";
import useLenis from "@/hooks/use-lenis";

export default function LenisWrapper({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
