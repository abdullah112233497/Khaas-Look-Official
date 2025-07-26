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
          <span className="text-xl font-bold text-blue-900">Khaas Look</span>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Welcome to Khaas Look</h1>

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
    </div>
  );
}
