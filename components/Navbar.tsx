"use client";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="border-b  border-gray-700 px-4 h-16"
    >
      <NavbarBrand>
        <Link href="/" className="text-white font-bold text-xl">
          Meme Directory
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex  gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-white bg-[#7c3aed] px-3 py-2 rounded-md shadow-md"
                : "text-[#a78bfa] hover:text-white hover:bg-[#4c1d95] px-3 py-2 rounded-md transition-colors duration-300"
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
                : "text-[#a78bfa] hover:text-white hover:bg-[#4c1d95] px-3 py-2 rounded-md transition-colors duration-300"
            }
          >
            List View
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarMenu className="sm:hidden flex flex-col pt-16 items-center space-y-4 ">
        <NavbarMenuItem isActive={pathname === "/"}>
          <Link
            href="/"
            className="block bg-[#7c3aed] w-[140px] text-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
            onPress={() => setIsMenuOpen(false)}
          >
            Table View
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={pathname === "/list"}>
          <Link
            href="/list"
            className="block bg-[#7c3aed] w-[140px] text-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
            onPress={() => setIsMenuOpen(false)}
          >
            List View
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
