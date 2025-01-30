"use client";

import { useState } from "react";
import Link from "next/link";
import LoginButton from "@/components/auth/LoginButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">SBT Gallery</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/gallery"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
              >
                Gallery
              </Link>
              <Link
                href="/challenges"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
              >
                Challenges
              </Link>
              <Link
                href="/profile"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <LoginButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
