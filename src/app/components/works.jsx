"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const WORKS_DATA = [
  {
    id: 1,
    step: "Register",
    description:
      "Create a detailed profile that showcases your background, values, interests, and expectations to help find the most compatible partner.",
    img: "/assets/register.png",
  },
  {
    id: 2,
    step: "Match",
    description:
      "Receive tailored partner suggestions based on your values, lifestyle, and compatibility to build genuine connections.",
    img: "/assets/match.png",
  },
  {
    id: 3,
    step: "Verify",
    description:
      "Ensure complete transparency with thorough checks on identity, social background, health, financial, and legal status for added trust.",
    img: "/assets/verify.png",
  },
  {
    id: 4,
    step: "Connect",
    description:
      "Engage in secure and meaningful conversations with verified matches to build trust and take the next step with confidence.",
    img: "/assets/connect.png",
  },
];

function Works() {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const handleImageError = (id) => {
    console.warn(`Failed to load image for step ${id}`);
    // Still mark as "loaded" to hide skeleton
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const isImageLoaded = (id) => loadedImages.has(id);

  // Check if images are already cached/loaded on component mount
  useEffect(() => {
    const checkCachedImages = () => {
      WORKS_DATA.forEach((work) => {
        const img = new Image();
        img.onload = () => {
          if (img.complete) {
            handleImageLoad(work.id);
          }
        };
        img.src = work.img;
      });
    };

    checkCachedImages();
  }, []);

  return (
    <section className="container mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          How It Works
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our simple four-step process helps you find your perfect match with
          ease and confidence
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {WORKS_DATA.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            isLoaded={isImageLoaded(work.id)}
            onImageLoad={() => handleImageLoad(work.id)}
            onImageError={() => handleImageError(work.id)}
          />
        ))}
      </div>
    </section>
  );
}

function WorkCard({ work, isLoaded, onImageLoad, onImageError }) {
  const [imgRef, setImgRef] = useState(null);

  // Check if image is already loaded when component mounts
  useEffect(() => {
    if (imgRef && imgRef.complete && imgRef.naturalWidth > 0) {
      onImageLoad();
    }
  }, [imgRef, onImageLoad]);

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="w-full h-48 md:h-56 lg:h-48 bg-gray-200 animate-pulse rounded-t-lg flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}

          {/* Actual Image */}
          <img
            ref={setImgRef}
            src={work.img}
            alt={`${work.step} illustration`}
            className={`w-full h-48 md:h-56 lg:h-48 object-cover rounded-t-lg transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
            onLoad={onImageLoad}
            onError={onImageError}
            loading="lazy"
          />

          {/* Step Number Badge */}
          <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10">
            <span className="text-lg font-bold text-gray-900">{work.id}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
            {work.step}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {work.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Works;
