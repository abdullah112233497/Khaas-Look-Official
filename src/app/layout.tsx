// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar"; // ✅ this works from layout.tsx
// import Loading from "./components/Loading";
// SEO
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khaas Look | Official Clothing Store",
  description:
    "Discover ladies' suits and fashion at Khaas Look. Stylish, elegant, and affordable clothing for every occasion.",
  keywords: [
    "Khaas Look",
    "ladies suits",
    "Pakistani fashion",
    "online clothing store",
    "boutique dresses",
    "unstitched colth",
  ],
  openGraph: {
    title: "Khaas Look | Official Clothing Store",
    description:
      "Stylish ladies' suits and dresses from Khaas Look. Shop latest collections now.",
    url: "https://khaas-look.vercel.app",
    siteName: "Khaas Look",
    images: [
      {
        url: "https://khaas-look.vercel.app/Khaas Look logo.jpg",
        width: 1200,
        height: 630,
        alt: "Khaas Look Clothing Banner",
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

// export const metadata: Metadata = {
//   title: "Khaas Look Official",
//   description: "Khaas look Official Site",
//  icons: {
//   icon: "/favicon.ico",
// },
// };

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
      </body>
    </html>
  );
}
