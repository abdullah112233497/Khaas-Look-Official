"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
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
    <nav className="bg-[#F5F5F5] p-4 flex items-center justify-between relative shadow-md">
      {/* Left: Logo */}
     {/* Left: Logo */}
<div className="flex items-center">
  <Link href="/" passHref>
    <Image
      src="/khaaslookNav.png"  // make sure this file is placed inside your public/ folder
      alt="Khaas Look Logo"
      width={150}   // adjust size as per your need
      height={50}
      className="cursor-pointer"
    />
  </Link>
</div>


      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-[#1B1B1B] font-semibold">
        <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
        <Link href="/about" className="hover:text-yellow-500 transition">About</Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
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
          <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
          <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
        </motion.div>
      </div>
    </nav>
  );
}
