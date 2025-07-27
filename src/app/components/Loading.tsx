"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("hidden");
      setShow(false);
    }, 1000);

    // Initially hide the body content
    document.body.classList.add("hidden");

    return () => clearTimeout(timer);
  }, []);

  if (show) {
    return (
      <div className="flex items-center justify-center h-screen bg-black z-50 fixed inset-0">
        <Image
          src="/Khaas Look logo.jpg"
          alt="Loading Logo"
          width={100}
          height={100}
          className="animate-pulse rounded-full"
        />
      </div>
    );
  }

  return null;
}
