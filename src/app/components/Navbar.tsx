"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#F5F5F5] px-3 sm:px-6 py-4 flex items-center justify-between relative shadow-md">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Link href="/" passHref>
          <Image
            src="/khaaslookNav.png"
            alt="Khaas Look Logo"
            width={150}
            height={50}
            className="cursor-pointer w-24 sm:w-36 md:w-40 h-auto"
          />
        </Link>
      </div>

      {/* Center: Amazon-style Search Bar */}
      <div className="flex flex-1 min-w-0 justify-center px-2 sm:px-4">
        {setSearchQuery && (
          <div className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm">
            <input
              type="text"
              value={searchQuery ?? ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="flex-grow px-2 py-1 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base min-w-0"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-3 sm:px-4 flex items-center justify-center">
              <Search size={18} className="text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Right: Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-[#1B1B1B] font-semibold">
        <Link href="/" className="hover:text-yellow-500 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-500 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#1B1B1B] focus:outline-none"
        >
          <Menu size={28} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded py-2 z-50 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
