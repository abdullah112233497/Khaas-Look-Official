// app/contact/page.tsx
"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";




import Navbar from "../components/Navbar";
export default function ContactPage() {
  return (
    <>
    
      <div className="font-montserrat">
        {/* ✅ SEO Meta Tags */}
        <Head>
          <title>Contact Us | Khaas Look</title>
          <meta
            name="description"
            content="Contact Khaas Look via WhatsApp, Instagram, or Email. We're happy to assist you with your ladies clothing orders or inquiries."
          />
          <link rel="canonical" href="https://khaas-look.vercel.app/contact" />
        </Head>
        {/* ✅ Page Content */}
       <Navbar/>
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-16 md:px-20 text-gray-800">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Contact <span className="text-yellow-500">Khaas Look</span>
            </motion.h1>

            <motion.p
              className="text-lg mb-12 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              We&apos;d love to hear from you! Reach out via WhatsApp, Instagram,
              or Email and our team will get back to you as soon as possible.
            </motion.p>

            {/* ✅ WhatsApp, Instagram & Email Buttons */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/923032966692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-medium">Chat on WhatsApp</span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/khaaslook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-medium">Follow on Instagram</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:khaaslook@gmail.com"
                className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/icons/mail.svg"
                  alt="Email"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-medium">Send Email</span>
              </motion.a>
            </motion.div>

            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Available 24/7 for orders and inquiries.
            </motion.p>
          </motion.div>
        </div>

        {/* ✅ Footer Section */}
        <motion.footer
          className="bg-white border-t mt-10 py-10 px-6 md:px-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Follow Us</h3>
          <motion.div
            className="flex justify-center space-x-6 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              { href: "https://www.facebook.com/share/1FdjigndyY/", icon: "facebook.svg" },
              { href: "https://www.instagram.com/khaaslook", icon: "instagram.svg" },
              { href: "https://wa.me/923032966692", icon: "whatsapp.svg" },
              { href: "https://www.tiktok.com/@khaaslook?_t=ZS-8yLTrVlsfcQ&_r=1", icon: "tiktok.svg" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="transition-transform"
              >
                <Image
                  src={`/icons/${social.icon}`}
                  alt="Social Icon"
                  width={28}
                  height={28}
                />
              </motion.a>
            ))}
          </motion.div>
          <p className="text-sm text-gray-500">
            &copy; 2025 Khaas Look. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </>
  );
}
