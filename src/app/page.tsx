"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Elegant Blue Dress",
    image: "/Limelight_lawn.jpeg",
    slug: "elegant-blue-dress",
    price: "PKR 3,999",
    description: "An elegant blue formal dress, perfect for parties and formal events.",
  },
  {
    id: 2,
    name: "Golden Party Wear",
    image: "/Limelight_lawn.jpeg",
    slug: "golden-party-wear",
    price: "PKR 5,499",
    description: "Shimmering golden dress designed for glamorous evening occasions.",
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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
        <Image
          src="/Khaas Look logo.jpg"
          alt="Khaas Look Logo"
          width={150}
          height={150}
          className="rounded-full animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1B1B1B] overflow-x-hidden">
      <Head>
        <title>Khaas Look - Official Store</title>
        <meta
          name="description"
          content="Elegant ladies clothing at affordable prices. Order now from Khaas Look!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Khaas Look" />
        <link rel="canonical" href="https://khaas-look.vercel.app" />
        <meta name="google-site-verification" content="google5b63d1fb5b3e5579.html" />
      </Head>

      {/* Navbar */}
      <nav className="bg-black p-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-3">
          <Image
            src="/Khaas Look logo.jpg"
            alt="Khaas Look Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg sm:text-xl font-extrabold text-[#F6D86A]">Khaas Look</span>
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

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center mt-6 mb-4 px-4">
        Welcome to Khaas Look
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center px-4 mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            const filtered = products.filter(
              (p) =>
                p.name.toLowerCase().includes(value) ||
                p.description.toLowerCase().includes(value)
            );
            setFilteredProducts(filtered);
          }}
          className="w-full max-w-md px-4 py-2 rounded border text-black bg-white border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 pb-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative w-full pt-[110%]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="absolute top-0 left-0 object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-full space-y-2">
              <h2 className="text-lg font-bold text-blue-900">{product.name}</h2>
              <p className="text-gray-700 font-medium">{product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href={`/shop/${product.slug}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  View Details
                </Link>
                <a
                  href={`https://wa.me/923032966692?text=Hello! I am interested in the product: ${product.name} (${product.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-6 px-4 text-center">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com/share/1FdjigndyY/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/khaaslook?igsh=MWd2eTl1ODM5cml1NQ==" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://wa.me/923032966692" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@khaaslook?_t=ZS-8yLTrVlsfcQ&_r=1" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 Khaas Look. All rights reserved.</p>
      </footer>
    </div>
  );
}