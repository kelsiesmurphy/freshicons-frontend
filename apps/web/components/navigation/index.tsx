"use client";

import WordMark2 from "@workspace/ui/components/branding/wordmark2";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";

import { NavigationItem } from "./navigation-item";
import { navConfig } from "./nav.config";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { SignedOut, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

export function Navigation() {
  return (
    <header className="gap-4 z-40 px-4 flex container justify-between items-center py-6">
      <Link href="/" className="outline-brand">
        <WordMark2 height={30} />
      </Link>

      <nav className="hidden md:flex items-center gap-2">
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
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Help"
                labelIcon={<DotIcon />}
                open="help"
              />
            </UserButton.MenuItems>
            <UserButton.UserProfilePage
              label="Help"
              labelIcon={<DotIcon />}
              url="help"
            >
              <div>
                <h1>Help Page</h1>
                <p>This is the custom help page</p>
              </div>
            </UserButton.UserProfilePage>
          </UserButton>
        </SignedIn>
      </nav>
    </header>
  );
}
