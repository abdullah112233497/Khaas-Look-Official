// app/contact/page.tsx

import Head from "next/head";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Contact Us | Khaas Look</title>
        <meta
          name="description"
          content="Contact Khaas Look via WhatsApp or Email. We're happy to assist you with your ladies clothing orders or inquiries."
        />
        <link rel="canonical" href="https://khaas-look.vercel.app/contact" />
      </Head>

      {/* ✅ Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 py-16 md:px-20 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-10">
            Contact <span className="text-yellow-500">Khaas Look</span>
          </h1>

          <p className="text-lg mb-10">
            We'd love to hear from you! Reach out to us via WhatsApp or Email and our team will get back to you as soon as possible.
          </p>

          {/* ✅ WhatsApp Contact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <a
              href="https://wa.me/923032966692"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 transition"
            >
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
              <span className="text-lg font-medium">Chat on WhatsApp</span>
            </a>

            {/* ✅ Email Contact */}
            <a
              href="mailto:khaaslook@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
            >
              <Image className="text-white" src="/icons/mail.svg" alt="Email" width={28} height={28} />
              <span className="text-lg font-medium">Send Email</span>
            </a>
          </div>

          <p className="text-sm text-gray-600">
            Available 24/7 for orders and inquiries.
          </p>
        </div>
      </div>

      {/* ✅ Footer Section */}
      <footer className="bg-white border-t mt-10 py-8 px-4 md:px-10 text-center">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com/share/1FdjigndyY/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={28} height={28} />
          </a>
          <a href="https://www.instagram.com/khaaslook?igsh=MWd2eTl1ODM5cml1NQ==" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={28} height={28} />
          </a>
          <a href="https://wa.me/923032966692" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
          </a>
          <a href="https://www.tiktok.com/@khaaslook?_t=ZS-8yLTrVlsfcQ&_r=1" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/tiktok.svg" alt="TikTok" width={28} height={28} />
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 Khaas Look. All rights reserved.</p>
      </footer>
    </>
  );
}
