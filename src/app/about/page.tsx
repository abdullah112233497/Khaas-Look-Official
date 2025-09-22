// app/about/page.tsx
"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <div className="font-montserrat min-h-screen bg-[#FFFFFF] text-[#1B1B1B] overflow-x-hidden">
        {/* ✅ SEO Meta Tags */}
        <Head>
          <title>About Us | Styvenza</title>
          <meta
            name="description"
            content="Styvenza is a ladies unstitched clothing brand based in Faisalabad, Pakistan. We offer stylish fashion at affordable prices with fast delivery and return policies."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://styvenza.vercel.app/about" />
        </Head>

        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ About Page Content */}
        <div className="px-6 sm:px-12 py-16">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#46656F]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              About <span className="text-[#8FABB7]">Styvenza</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg leading-relaxed mb-6 text-center text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <strong>Styvenza</strong> is a modern{" "}
              <strong>ladies&apos; unstitched clothing</strong> brand based in{" "}
              <strong>Faisalabad, Punjab, Pakistan</strong>. Our mission is to
              provide high-quality fabrics and elegant designs at{" "}
              <span className="text-[#46656F] font-semibold">
                very affordable prices
              </span>{" "}
              — bringing style and comfort to every woman.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6 text-center text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Whether you&apos;re shopping for daily wear, festive outfits, or
              something special, Styvenza has the perfect option tailored to
              your taste.
            </motion.p>

            {/* ✅ Info Cards */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#D8DFE5] border border-[#8FABB7] shadow-md rounded-2xl p-6 hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h2 className="text-2xl font-semibold text-[#46656F] mb-3">
                  Delivery Across Pakistan
                </h2>
                <p className="text-lg text-gray-700">
                  We provide <strong>fast and secure delivery</strong> to all
                  cities in Pakistan. Our team ensures every order is packed
                  with care and shipped promptly so you receive your fashion in
                  time.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#D8DFE5] border border-[#8FABB7] shadow-md rounded-2xl p-6 hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h2 className="text-2xl font-semibold text-[#46656F] mb-3">
                  Easy Return Policy
                </h2>
                <p className="text-lg text-gray-700">
                  Your satisfaction is our priority. If something isn&apos;t
                  right, don&apos;t worry! We offer a{" "}
                  <strong>customer-friendly return policy</strong> to make your
                  shopping experience stress-free and reliable.
                </p>
              </motion.div>
            </div>

            {/* Closing line */}
            <motion.p
              className="text-lg font-medium text-center mt-12 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Thank you for choosing{" "}
              <span className="font-bold text-[#46656F]">Styvenza</span>. We&apos;re
              proud to be a part of your wardrobe journey.
            </motion.p>
          </motion.div>
        </div>

        {/* ✅ Footer Section (same theme as Home) */}
        <motion.footer
          className="bg-[#46656F] border-t mt-16 py-10 px-4 md:px-10 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.facebook.com/share/1FdjigndyY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={28}
                height={28}
                className="hover:scale-125 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/khaaslook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.png"
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
                src="/icons/whatsap.png"
                alt="WhatsApp"
                width={28}
                height={28}
                className="hover:scale-125 transition-transform"
              />
            </a>
            <a
              href="https://www.tiktok.com/@khaaslook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/tiktok.png"
                alt="TikTok"
                width={28}
                height={28}
                className="hover:scale-125 transition-transform"
              />
            </a>
          </div>
          <p className="text-sm text-gray-200">
            &copy; 2025 Styvenza. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </>
  );
}
