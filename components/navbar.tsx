import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { MdOutlineMenuOpen } from "react-icons/md";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <NavigationMenu className="p-3 w-full px-7">
      <NavigationMenuList className="gap-36">
        <NavigationMenuItem>
          <p className="text-md font-bold">MyPortFolio</p>
        </NavigationMenuItem>

        <NavigationMenuItem className=" hidden sm:block">
          <NavigationMenuLink href="/" className="">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className=" hidden sm:block">
          <NavigationMenuLink href="/">About Me</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className=" hidden sm:block">
          <NavigationMenuLink href="/">Contact</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className=" hidden sm:block">
          <NavigationMenuLink href="/">Projects</NavigationMenuLink>
        </NavigationMenuItem>

        <MdOutlineMenuOpen className="text-2xl cursor-pointer md:hidden" />

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/project1">Project 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
