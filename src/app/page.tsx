"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";

const products = [
  {
    id: 1,
    name: "Brown flower | 2 Piece Lawn",
    image: "/Brown _lawn.jpg",
    slug: "Lawn-brown-2_piece",
    price: "PKR 1,499",
    description:
      "An elegant Brown Flowers design 2 Piece Printed Lawn, perfect for parties and formal event",
  },
  {
    id: 2,
    name: "Golden Party Wear",
    image: "/Limelight_lawn.jpeg",
    slug: "golden-party-wear",
    price: "PKR 1,499",
    description:
      "Shimmering golden dress designed for glamorous evening occasions.",
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState(""); // 🔹 added state for search
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 filter products when search changes
  useEffect(() => {
    const value = searchQuery.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Khaas Look logo.jpg"
            alt="Khaas Look Logo"
            width={150}
            height={150}
            className="rounded-full animate-pulse"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1B1B1B] overflow-x-hidden font-montserrat">
      <Head>
        <title>Khaas Look - Official Store</title>
        <meta
          name="description"
          content="Elegant ladies clothing at affordable prices. Order now from Khaas Look!"
        />
      </Head>

      {/* 🔹 Navbar with search props */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-snug">
            LET’S <span className="text-blue-700">EXPLORE</span>{" "}
            <span className="bg-yellow-400 px-2">UNIQUE</span> CLOTHES.
          </h1>
          <p className="mt-4 text-gray-600">
            Live for Influential and Innovative fashion!
          </p>
          <Link
            href="#products"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
          >
            Shop Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <Image
            src="/Fashion_Khaas.png"
            alt="Fashion Model"
            width={550}
            height={550}
            className="rounded-xl "
          />
        </motion.div>
      </section>

      {/* 🔹 Removed old search bar from here */}
      <br />
      <br />
      <br />
       <br />
      <br />
      <br />
      {/* <hr className="border-t border-gray-400" /> */}

       

      {/* Product Grid */}
      <div
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 pb-16"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden flex flex-col transition-all cursor-pointer"
          >
            <Link href={`/shop/${product.slug}`} className="flex flex-col h-full">
              <div className="relative w-full pt-[100%]">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={550}
                  height={400}
                />
              </div>

              <div className="p-5 flex flex-col space-y-3 flex-grow">
                <h2 className="text-lg font-bold text-blue-900">
                  {product.name}
                </h2>
                <p className="text-gray-700 font-medium">{product.price}</p>
                <p className="text-sm text-gray-500 flex-grow">
                  {product.description}
                </p>

                <button className="w-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition">
                  View Details
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-8 px-6 text-center">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/share/1FdjigndyY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-125 transition-transform"
              src="/icons/facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://www.instagram.com/khaaslook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-125 transition-transform"
              src="/icons/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://wa.me/923032966692"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-125 transition-transform"
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://www.tiktok.com/@khaaslook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-125 transition-transform"
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={28}
              height={28}
            />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2025 Khaas Look. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
