// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar"; // ✅ this works from layout.tsx
// import Loading from "./components/Loading";
// SEO
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styvenza | Official Clothing Store",
  description:
    "Discover ladies' suits and fashion at Khaas Look. Stylish, elegant, and affordable clothing for every occasion.",
  keywords: [
    "Styvenza",
    "ladies suits",
    "Pakistani fashion",
    "online clothing store",
    "boutique dresses",
    "unstitched clothes",
    "Styvenza collections",
    "Styvenza styles",
    "Styvenza suits",
    "Styvenza clothes",
    "Store",
  ],
  icons: {
    icon: "/styvenza_logo_only.png",  // ✅ make sure you add favicon file in /public folder
    shortcut: "/styvenza_logo_only.png",
    apple: "/styvenza_logo_only.png", // ✅ optional (for iOS)
  },
  openGraph: {
    title: "Styvenza | Official Clothing Store",
    description:
      "Stylish ladies' suits and dresses from Khaas Look. Shop latest collections now.",
    url: "https://Styvenza.vercel.app",
    siteName: "Khaas Look",
    images: [
      {
        url: "https://Styvenza.vercel.app/Fashion_Styvenza.png", // ✅ Use your uploaded SEO image
        width: 1200,
        height: 630,
        alt: "Styvenza Clothing Banner",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

// SEO End

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {children}

        {/* ✅ Floating WhatsApp Chat Button */}
        <a
          href="https://wa.me/923032966692?text=Hello%20I%20need%20help%20with%20a%20product%20on%20Khaas%20Look"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-[#46656F] hover:bg-[#8FABB7] text-white p-3 rounded-full shadow-xl z-50 flex items-center justify-center transition-transform transform hover:scale-110"
        >
          <img src="./icons/Whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
        </a>
      </body>
    </html>
  );
}
