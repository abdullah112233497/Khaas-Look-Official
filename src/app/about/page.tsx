// app/about/page.tsx

import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
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
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 md:px-20 py-12 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black-800 mb-8 text-center">
            About <span className="text-yellow-500">Khaas Look</span>
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-center">
            <strong>Khaas Look</strong> is a modern <strong>ladies&apos; unstitched clothing</strong> brand based in the heart of{" "}
            <strong>Faisalabad, Punjab, Pakistan</strong>. Our mission is to provide high-quality fabrics and elegant designs at{" "}
            <span className="text-yellow-500 font-semibold">very affordable prices</span> — bringing style and comfort to every woman.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-center">
            Whether you&apos;re shopping for daily wear, festive outfits, or something special, Khaas Look has the perfect option tailored to your taste.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-black-800 mb-3">🚚 Delivery Across Pakistan</h2>
            <p className="text-lg mb-6">
              We provide <strong>fast and secure delivery</strong> to all cities in Pakistan. Our team ensures every order is packed with care and shipped promptly so you receive your fashion in time.
            </p>

            <h2 className="text-2xl font-semibold text-black-800 mb-3">🔄 Easy Return Policy</h2>
            <p className="text-lg mb-6">
              Your satisfaction is our priority. If something isn&apos;t right, don&apos;t worry! We offer a <strong>customer-friendly return policy</strong> to make your shopping experience stress-free and reliable.
            </p>

            <p className="text-lg font-medium text-center mt-10">
              Thank you for choosing <span className="text-black-800 font-bold">Khaas Look</span>. We&apos;re proud to be a part of your wardrobe journey.
            </p>
          </div>
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
