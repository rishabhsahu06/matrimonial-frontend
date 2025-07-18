"use client";
import Image from "next/image";
import React, { useState } from "react";
import SafeHonest from "../components/safe-honest";
import OurMission from "../components/our-mission";
import ContactForm from "./contact";

// Skeleton component for loading state
const ImageSkeleton = () => (
  <div className="w-full h-[350px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse relative overflow-hidden"></div>
);

function Contact() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className="w-full relative">
        {/* Skeleton loader */}
        {!imageLoaded && <ImageSkeleton />}

        {/* Hero Image with overlay text */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <Image
            src="/assets/contact.png"
            alt="Services"
            fill
            className={`object-cover object-center transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1512px"
            priority
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)} // Hide skeleton even on error
          />

          {/* Services Title */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="container mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <ContactForm />
    </>
  );
}

export default Contact;
