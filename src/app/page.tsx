"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/Khaas Look logo.jpg"
            alt="Khaas Look Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xl font-extrabold text-black">Khaas Look</span>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-6 text-center text-black">Welcome to Khaas Look</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition-all"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-blue-800">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <div className="flex space-x-2">
                <Link
                  href={`/shop/${product.slug}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
                <a
                  href={`https://wa.me/923032966692?text=Hello! I am interested in the product: ${product.name} (${product.price})`}
                  target="_blank"
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
<div className="bg-white border-t mt-10 py-6 px-4 text-center">
  <h3 className="text-lg font-semibold text-blue-900 mb-4">Follow Us</h3>
  <div className="flex justify-center space-x-6 mb-4">
    <a
      href="https://www.facebook.com/share/1FdjigndyY/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 transition"
    >
      <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
    </a>
    <a
      href="https://www.instagram.com/khaaslook?igsh=MWd2eTl1ODM5cml1NQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:text-pink-800 transition"
    >
      <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
    </a>
    <a
      href="https://wa.me/923032966692"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:text-green-800 transition"
    >
      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
    </a>
    <a
      href="https://www.tiktok.com/@khaaslook?_t=ZS-8yLTrVlsfcQ&_r=1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-gray-800 transition"
    >
      <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
    </a>
  </div>
  <p className="text-sm text-gray-500">&copy; 2025 Khaas Look. All rights reserved.</p>
</div>

    </div>
  );
}
