"use client";

import WordMark from "@workspace/ui/components/branding/wordmark";
import Link from "next/link";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export function Navigation() {
  return (
    <header className="gap-4 z-40 px-4 flex container justify-between items-center py-6">
      <Link href="/" className="outline-brand">
        <WordMark height={30} />
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}
