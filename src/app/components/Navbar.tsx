"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tempQuery, setTempQuery] = useState("");
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

  const handleSearch = () => {
    if (setSearchQuery) {
      // If input is empty → show all products
      if (tempQuery.trim() === "") {
        setSearchQuery(""); // reset filter
      } else {
        setSearchQuery(tempQuery); // apply filter
      }

      // Clear search bar after searching
      setTempQuery("");

      // Scroll to products section
      setTimeout(() => {
        const productsSection = document.getElementById("products-section");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#46656F] px-3 sm:px-6 py-3 flex items-center justify-between relative shadow-md sticky top-0 z-50"
    >
      {/* Left: Logo */}
      <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center">
        <Link href="/" passHref>
          <Image
            src="/styvenza_nav_logo_white.png"
            alt="Styvenza Logo"
            width={160}
            height={50}
            className="cursor-pointer h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </motion.div>

      {/* Center: Search Bar */}
      <div className="flex flex-1 min-w-0 justify-center px-2 sm:px-4">
        {setSearchQuery && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm"
          >
            <input
              type="text"
              value={tempQuery}
              onChange={(e) => setTempQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for products..."
              className="flex-grow px-2 py-1 text-[#1B1B1B] placeholder-gray-500 focus:outline-none text-sm sm:text-base min-w-0"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleSearch}
              className="bg-[#46656F] hover:bg-[#8FABB7] px-3 sm:px-4 flex items-center justify-center transition-colors duration-300"
            >
              <Search size={18} className="text-white" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Right: Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-[#FFFFFF] font-semibold">
        {["Home", "About", "Contact"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-[#D8DFE5] transition-colors duration-300 inline-block"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#FFFFFF] focus:outline-none"
        >
          <Menu size={28} />
        </motion.button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded py-2 z-50"
            >
              {["Home", "About", "Contact"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  whileTap={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 inline-block"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
