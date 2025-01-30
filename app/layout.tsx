import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedLayout } from "./components/AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers";

export const metadata = {
  title: "Social SBT Gallery | AI-Generated NFT Evolution",
  description:
    "Experience unique AI-generated artwork that evolves based on your social activity. View, like, and showcase your Soulbound Tokens in our community gallery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = headers().get("cookie");

  return (
    <html lang="en">
      <body
        className={`bg-[#00008B] text-white overflow-x-hidden ${inter.className}`}
      >
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
