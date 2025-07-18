"use client";
import Image from "next/image";
import React, { useState } from "react";

import Testimonials from "../components/testimonials";
import CoreFocus from "../components/core-focus";

// Skeleton component for loading state
const ImageSkeleton = () => (
  <div className="w-full h-[350px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse relative overflow-hidden"></div>
);

function AboutUs() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className="w-full relative mt-6">
        {/* Skeleton loader */}
        {!imageLoaded && <ImageSkeleton />}

        {/* Hero Image with overlay text */}
        <div className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[800px] mt-6 overflow-hidden">
          {/* Desktop Image - Visible on medium screens and up */}
          <Image
            src="/assets/about.jpg"
            alt="About Us"
            fill
            className={`object-cover object-center transition-opacity duration-500 md:block ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1512px"
            priority
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)} // Hide skeleton even on error
          />

          {/* Mobile Image - Visible on small screens only */}
          <Image
            src="/assets/about-mobile.png"
            alt="About Us"
            fill
            className={`object-cover object-center transition-opacity duration-500 md:hidden ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1512px"
            priority
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)} // Hide skeleton even on error
          />

          {/* Text content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-8 max-w-4xl mx-auto text-center md:text-left">
              <h1 className="font-noto text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                About Us
              </h1>
              <div className="mt-4 font-cabin text-white font-normal text-base md:text-lg leading-relaxed">
                <p>
                  At Safe & Secure Marriage, we believe that a successful
                  marriage begins with transparency, trust, and informed
                  choices. We are a purpose-driven platform committed to
                  empowering individuals and families with services that promote
                  clarity—whether it’s through pre-marriage medical screenings,
                  background checks, legal support, or counseling.
                </p>
                <p className="mt-3">
                  Our goal is to normalize open conversations around health,
                  finance, and compatibility so that couples can enter their new
                  journey with confidence and peace of mind. Rooted in cultural
                  values and powered by modern tools, we’re redefining how India
                  prepares for marriage — not just as a tradition, but as a
                  partnership built on truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Testimonials />
      <CoreFocus />
    </>
  );
}

export default AboutUs;
