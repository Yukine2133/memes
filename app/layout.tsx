import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Meme Directory",
  description: "A collection of popular memes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen `}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto py-6 px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
