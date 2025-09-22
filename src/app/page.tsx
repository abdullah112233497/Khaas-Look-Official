"use client";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";

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
  {
    id: 3,
    name: "Pink Flowerable formal",
    image: "/blue lawn.jpeg",
    slug: "pink-flowerable-formal",
    price: "PKR 1,599",
    description:
      "Shimmering Pink Flowerable dress designed for glamorous evening occasions.",
  },
  {
    id: 4,
    name: "Red Flowerable formal",
    image: "/blue lawn.jpeg",
    slug: "red-flowerable-formal",
    price: "PKR 2,599",
    description:
      "Shimmering Red Flowerable dress designed for glamorous evening occasions.",
  },
  {
    id: 5,
    name: "Black Flowerable formal",
    image: "/blue lawn.jpeg",
    slug: "black-flowerable-formal",
    price: "PKR 3,199",
    description:
      "Shimmering Black Flowerable dress designed for glamorous evening occasions.",
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="min-h-screen flex items-center justify-center bg-[#D8DFE5] overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/styvenza_logo.jpg"
            alt="Styvenza Logo"
            width={150}
            height={150}
            className="rounded-full animate-pulse"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1B1B1B] overflow-x-hidden font-montserrat">
      <Head>
        <title>Styvenza - Official Store</title>
        <meta
          name="description"
          content="Elegant ladies clothing at affordable prices. Order now from Khaas Look!"
        />
      </Head>

      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-snug text-[#46656F] min-h-[80px] flex items-center">
            {/* 👇 This keeps height even when text is empty */}
            <TypeAnimation
              sequence={[
                "LET’S EXPLORE UNIQUE CLOTHES.",
                2000,
                "",
                500,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
              className="text-[#46656F]"
            />
          </h1>
          <p className="mt-4 text-gray-700">
            Live for Influential and Innovative fashion!
          </p>
          <Link
            href="#products"
            className="inline-block mt-6 px-6 py-3 bg-[#46656F] text-white font-semibold rounded-full shadow-lg hover:bg-[#8FABB7] hover:scale-105 hover:shadow-xl transition transform duration-300"
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
            className="rounded-xl"
          />
        </motion.div>
      </section>

      {/* Product Section */}
      <section id="products-section" className="mt-6">
        <motion.div
          id="products"
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }} // 👈 will animate every time
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95, rotate: -1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D8DFE5] border border-[#8FABB7] shadow-md hover:shadow-xl rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all"
            >
              <Link
                href={`/shop/${product.slug}`}
                className="flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative w-full pt-[100%] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110"
                    width={550}
                    height={400}
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col space-y-3 flex-grow">
                  <h2 className="text-lg font-bold text-[#1B1B1B]">
                    {product.name}
                  </h2>
                  <p className="text-[#46656F] font-medium">{product.price}</p>
                  <p className="text-sm text-gray-600 flex-grow hidden sm:block">
                    {product.description.length > 60
                      ? `${product.description.slice(0, 20)}... `
                      : product.description}
                    {product.description.length > 20 && (
                      <span className="text-[#46656F] underline text-xs ml-1">
                        Read More
                      </span>
                    )}
                  </p>
                  <button className="w-full bg-[#46656F] text-white hover:bg-[#8FABB7] px-4 py-2 rounded-full text-sm font-medium transition duration-300">
                    View Details
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#46656F] border-t mt-10 py-8 px-6 text-center text-white">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/share/1FdjigndyY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-125 transition-transform"
              src="/icons/facebook.png"
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
              src="/icons/instagram.png"
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
              src="/icons/whatsap.png"
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
              src="/icons/tiktok.png"
              alt="TikTok"
              width={28}
              height={28}
            />
          </a>
        </div>
        <p className="text-sm text-gray-200">
          &copy; 2025 Styvenza. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
