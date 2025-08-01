"use client";

import * as React from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import { cn } from "@workspace/ui/lib/utils";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
} from "@clerk/nextjs";
import { navConfig, NavItem } from "./nav.config";
import WordMark from "@workspace/ui/components/branding/wordmark";
import UserDropdown from "./user-dropdown";

const MenuItemComponent: React.FC<{ item: NavItem; depth?: number }> = ({
  item,
  depth = 0,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center justify-between py-3 text-md font-semibold transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.children.map((subItem) => (
            <MenuItemComponent
              key={subItem.title}
              item={subItem}
              depth={depth + 1}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <a
      href={item.href}
      className={cn(
        "block py-2 text-md font-semibold transition-colors hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
    >
      {item.title}
    </a>
  );
};

export default function MobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col">
          <Link href="/" className="outline-brand p-4">
            <WordMark height={30} />
          </Link>
          <div className="py-5 px-4">
              {navConfig.map((item) => (
                <MenuItemComponent key={item.title} item={item} />
              ))}
          </div>
          <hr />
          <div className="flex flex-col gap-3 py-6 px-4">
              <SignedOut>
                <SignUpButton>
                  <Button variant="wordmark" className="cursor-pointer">
                    Sign up
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button variant="outline" className="cursor-pointer">
                    Log in
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserDropdown />
              </SignedIn>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
