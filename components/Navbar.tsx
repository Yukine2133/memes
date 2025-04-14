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

      <NavbarContent className="gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-white bg-[#7c3aed] px-3 py-2 rounded-md shadow-md"
                : "text-[#a78bfa] hover:text-white hover:bg-[#4c1d95] px-3 py-2 rounded-md transition-colors"
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
                ? "text-white bg-[#7c3aed] px-3 py-2 rounded-md shadow-md"
                : "text-[#a78bfa] hover:text-white hover:bg-[#4c1d95] px-3 py-2 rounded-md transition-colors"
            }
          >
            List View
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
}
