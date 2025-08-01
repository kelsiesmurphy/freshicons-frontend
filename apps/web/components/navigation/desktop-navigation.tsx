import { SignedOut, SignUpButton, SignedIn } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import React from "react";
import Link from "next/link";
import { navConfig } from "./nav.config";
import { NavigationItem } from "./navigation-item";
import UserDropdown from "./user-dropdown";

export default function DesktopNavigation() {
  return (
    <nav className="hidden sm:flex items-center gap-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {navConfig.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger>
                    <Link
                      href={item.href ?? "#"}
                      className="flex items-center justify-between w-full"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-2 w-[300px] md:w-[400px]">
                      {item.children.map((child) => (
                        <NavigationItem
                          key={child.title}
                          title={child.title}
                          href={child.href ?? "#"}
                          description={child.description}
                        >
                          {child.icon && (
                            <child.icon className="mr-2 inline-block" />
                          )}
                        </NavigationItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href ?? "#"}>{item.title}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <SignedOut>
        <SignUpButton>
          <Button variant="wordmark" className="cursor-pointer">
            Sign up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserDropdown />
      </SignedIn>
    </nav>
  );
}
