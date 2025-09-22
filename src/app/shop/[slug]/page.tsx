"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Shimmering Pink Flowerable dress designed for glamorous evening occasions.",
  },
  {
    id: 5,
    name: "black Flowerable formal",
    image: "/blue lawn.jpeg",
    slug: "black-flowerable-formal",
    price: "PKR 3,199",
    description:
      "Shimmering Pink Flowerable dress designed for glamorous evening occasions.",
  },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const [isNavigating, setIsNavigating] = useState(false);

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const handleBack = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  return (
    <AnimatePresence>
      {/* Navbar with white background */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <Navbar />
      </div>

      <motion.div
        className="min-h-screen bg-gradient-to-b from-[#EAF0F2] via-[#F6F6F6] to-[#FFFFFF] text-gray-800 px-3 sm:px-6 lg:px-12 py-6 sm:py-10 flex items-center justify-center font-montserrat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Product Image */}
          <motion.div
            className="flex-1 flex items-center justify-center bg-[#F7FAFC] p-4 sm:p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-md w-full max-h-[350px] sm:max-h-[450px] md:max-h-[500px]"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="flex-1 p-4 sm:p-8 md:p-10 flex flex-col space-y-4 sm:space-y-5"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B1B]">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#46656F]">
              {product.price}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/923032966692?text=Hello! I am interested in the product: ${product.name} (${product.price})`}
                target="_blank"
                className="text-center px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FFD700] to-[#FFC300] text-[#1B1B1B] font-semibold shadow-md hover:shadow-xl transition-all duration-300"
              >
                Order Now
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#46656F] to-[#8FABB7] text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
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
