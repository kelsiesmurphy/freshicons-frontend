import React from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@workspace/ui/components/navigation-menu";

export function NavigationItem({
  title,
  href,
  description,
  children,
}: {
  title: string;
  href: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block p-2 rounded-md hover:bg-muted/20 transition"
        >
          <div className="text-sm font-medium">{title}</div>
          {description && (
            <p className="text-muted-foreground text-sm leading-snug">
              {description}
            </p>
          )}
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
