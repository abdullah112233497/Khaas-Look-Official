"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black p-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-3">
        <Image
          src="/Khaas Look logo.jpg"
          alt="Khaas Look Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg sm:text-xl font-extrabold text-[#F6D86A]">
          Khaas Look
        </span>
      </div>

      {/* Hamburger Menu */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#F6D86A] focus:outline-none"
        >
          <Menu size={28} />
        </button>

        <div
          className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded py-2 z-50 transition-opacity duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
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
        </div>
      </div>
    </nav>
  );
}
