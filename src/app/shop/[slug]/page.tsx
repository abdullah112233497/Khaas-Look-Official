"use client";

import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";


import Navbar from "../../components/Navbar";

const products = [
  {
    id: 1,
    name: "Brown flower | 2 Piece Lawn",
    image: "/blue lawn.jpeg",
    slug: "Lawn-brown-2_piece",
    price: "PKR 3,999",
    description:
      "An elegant Brown Flowers design 2 Piece Printed Lawn, perfect for parties and formal event",
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


// SEO////////////////////////////////////////////////
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${params.slug} | Khaas Look`,
    description: `Buy ${params.slug} from Khaas Look. Elegant, stylish, and perfect for any occasion.`,
  };
}

// SEO ENDDDDDDDDDDDDDDDDDDDDDDD
export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [isNavigating, setIsNavigating] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const handleBack = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  if (isPageLoading || isNavigating) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Image
          src="/Khaas Look logo.jpg"
          alt="Khaas Look Logo"
          width={150}
          height={150}
          className="rounded-full animate-pulse"
        />
        {isNavigating && (
          <p className="mt-4 text-lg font-semibold text-black">
            Returning to Home...
          </p>
        )}
      </div>
    );
  }

  return (
    <AnimatePresence>
      <Navbar/>

      <motion.div
        className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 text-gray-800 p-6 flex items-center justify-center font-montserrat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover " 
              // w-full md:w-1/2 I removed that from the above
            />
          </motion.div>

          <motion.div
            className="p-6 flex flex-col space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-blue-900">{product.name}</h1>
            <p className="text-sm text-gray-600">{product.price}</p>
            <p className="text-gray-700">{product.description}</p>

            <div className="flex space-x-4 mt-auto">
              {/* ✅ Same button style as View Details */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/923032966692?text=Hello! I am interested in the product: ${product.name} (${product.price})`}
                target="_blank"
                className="px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Order Now
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
