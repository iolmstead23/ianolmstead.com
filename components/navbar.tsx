"use client"

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
import { ModeToggle } from "./toggle-darkmode"
import Link from "next/link"

export default function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="mx-5">
                    <Link href="/">Home</Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="mx-5">
                    <Link href="/blogs">Blog</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <div  className="mx-5">
                  <ModeToggle />
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}