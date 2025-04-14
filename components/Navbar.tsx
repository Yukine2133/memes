"use client";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <HeroUINavbar className="bg-background border-b border-gray-700 px-4 h-16">
      <NavbarBrand>
        <Link href="/" className="text-white font-bold text-xl">
          Meme Directory
        </Link>
      </NavbarBrand>

      <NavbarContent className=" gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-foreground bg-gray-900 px-3 py-2 rounded-md"
                : "text-gray-300 hover:text-foreground hover:bg-gray-700 px-3 py-2 rounded-md"
            }
          >
            Table View
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/list"}>
          <Link
            href="/list"
            className={
              pathname === "/list"
                ? "text-foreground bg-gray-900 px-3 py-2 rounded-md"
                : "text-gray-300 hover:text-foreground hover:bg-gray-700 px-3 py-2 rounded-md"
            }
          >
            List View
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
}
