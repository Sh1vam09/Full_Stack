import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js, Prisma, and Better Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}
      >
        {/* Navbar sits at the top */}
        <Navbar />

        {/* Main content grows to fill space */}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
