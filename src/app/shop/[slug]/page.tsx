"use client";

// app/shop/[slug]/page.tsx
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

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

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [isNavigating, setIsNavigating] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1200); // Show logo splash for 1.2 seconds
    return () => clearTimeout(timer);
  }, []);

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  const handleBack = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push("/");
    }, 1000); // Delay to show animation
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
          <p className="mt-4 text-lg font-semibold text-black">Returning to Home...</p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 text-gray-800 p-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover w-full md:w-1/2"
        />
        <div className="p-6 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-blue-900">{product.name}</h1>
          <p className="text-sm text-gray-600">{product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex space-x-4 mt-auto">
            <a
              href={`https://wa.me/923032966692?text=Hello! I am interested in the product: ${product.name} (${product.price})`}
              target="_blank"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Order Now
            </a>
            <button
              onClick={handleBack}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
