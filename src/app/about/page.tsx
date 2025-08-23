// app/about/page.tsx
"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
    <div className="font-montserrat">
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>About Us | Khaas Look</title>
        <meta
          name="description"
          content="Khaas Look is a ladies unstitched clothing brand based in Faisalabad, Pakistan. We offer stylish fashion at affordable prices with fast delivery and return policies."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khaas-look.vercel.app/about" />
      </Head>

      {/* ✅ About Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 md:px-20 py-16 text-gray-800">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            About <span className="text-yellow-500">Khaas Look</span>
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <strong>Khaas Look</strong> is a modern{" "}
            <strong>ladies&apos; unstitched clothing</strong> brand based in{" "}
            <strong>Faisalabad, Punjab, Pakistan</strong>. Our mission is to
            provide high-quality fabrics and elegant designs at{" "}
            <span className="text-yellow-500 font-semibold">
              very affordable prices
            </span>{" "}
            — bringing style and comfort to every woman.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Whether you&apos;re shopping for daily wear, festive outfits, or
            something special, Khaas Look has the perfect option tailored to
            your taste.
          </motion.p>

          {/* ✅ Info Cards */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-600 hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                🚚 Delivery Across Pakistan
              </h2>
              <p className="text-lg">
                We provide <strong>fast and secure delivery</strong> to all
                cities in Pakistan. Our team ensures every order is packed with
                care and shipped promptly so you receive your fashion in time.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
                🔄 Easy Return Policy
              </h2>
              <p className="text-lg">
                Your satisfaction is our priority. If something isn&apos;t
                right, don&apos;t worry! We offer a{" "}
                <strong>customer-friendly return policy</strong> to make your
                shopping experience stress-free and reliable.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-lg font-medium text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Thank you for choosing{" "}
            <span className="font-bold text-blue-900">Khaas Look</span>. We&apos;re
            proud to be a part of your wardrobe journey.
          </motion.p>
        </motion.div>
      </div>

      {/* ✅ Footer Section */}
      <motion.footer
        className="bg-white border-t mt-16 py-10 px-4 md:px-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Follow Us
        </h3>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/share/1FdjigndyY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
              className="hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/khaaslook?igsh=MWd2eTl1ODM5cml1NQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
              className="hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://wa.me/923032966692"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={28}
              height={28}
              className="hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://www.tiktok.com/@khaaslook?_t=ZS-8yLTrVlsfcQ&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={28}
              height={28}
              className="hover:scale-125 transition-transform"
            />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2025 Khaas Look. All rights reserved.
        </p>
      </motion.footer>
      </div>
    </>
  );
}
