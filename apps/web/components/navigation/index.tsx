import Link from "next/link";
import WordMark3 from "@workspace/ui/components/branding/wordmark3";
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

export function Navigation() {
  return (
    <header className="gap-4 z-40 px-4 flex container justify-between items-center py-6">
      <Link href="/" className="outline-brand">
        <WordMark3 height={30} />
      </Link>

      <nav className="hidden md:flex gap-2">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navConfig.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
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
      </nav>
    </header>
  );
}
