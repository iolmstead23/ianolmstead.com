"use client"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ui/darkmode-toggle"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from "next/link";

const Navbar = () => {

  return (
      <div className="flex flex-row flex-wrap justify-end">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>
                    <Link href="/">
                        Home
                    </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                    <Link href="/blogs">
                        Blog
                    </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
  );
};

export default Navbar;