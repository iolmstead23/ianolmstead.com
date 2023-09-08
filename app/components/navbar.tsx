"use client"

import { navigationMenuTriggerStyle } from "./ui/navigationmenu"
import { ModeToggle } from "./ui/darkmode"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigationmenu"
import Link from "next/link";

const Navbar = () => {

  return (
      <div className="container flex flex-row flex-wrap justify-end">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link href="/blogs">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Blog
                      </NavigationMenuLink>
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