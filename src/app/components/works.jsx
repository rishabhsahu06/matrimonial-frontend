"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
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

  // Memoize handlers to prevent unnecessary re-renders
  const handleImageLoad = useCallback((id) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  }, []);

  const handleImageError = useCallback((id) => {
    console.warn(`Failed to load image for step ${id}`);
    // Still mark as "loaded" to hide skeleton
    setLoadedImages((prev) => new Set([...prev, id]));
  }, []);

  const isImageLoaded = useCallback(
    (id) => loadedImages.has(id),
    [loadedImages]
  );

  // Memoize the cached image check function
  const checkCachedImages = useMemo(() => {
    return () => {
      WORKS_DATA.forEach((work) => {
        const img = new Image();
        img.onload = () => {
          if (img.complete && img.naturalWidth > 0) {
            handleImageLoad(work.id);
          }
        };
        img.onerror = () => {
          handleImageError(work.id);
        };
        img.src = work.img;
      });
    };
  }, [handleImageLoad, handleImageError]);

  // Check if images are already cached/loaded on component mount
  useEffect(() => {
    checkCachedImages();
  }, [checkCachedImages]);

  // Memoize the work cards to prevent unnecessary re-renders
  const workCards = useMemo(() => {
    return WORKS_DATA.map((work) => (
      <WorkCard
        key={work.id}
        work={work}
        isLoaded={isImageLoaded(work.id)}
        onImageLoad={() => handleImageLoad(work.id)}
        onImageError={() => handleImageError(work.id)}
      />
    ));
  }, [loadedImages, handleImageLoad, handleImageError, isImageLoaded]);

  return (
    <div className="bg-[#FBF6EE] py-20">
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
          {workCards}
        </div>
      </section>
    </div>
  );
}

const WorkCard = ({ work, isLoaded, onImageLoad, onImageError }) => {
  const [imgRef, setImgRef] = useState(null);

  // Check if image is already loaded when component mounts
  useEffect(() => {
    if (imgRef && imgRef.complete && imgRef.naturalWidth > 0) {
      onImageLoad();
    }
  }, [imgRef, onImageLoad]);

  // Memoize the skeleton component
  const skeletonLoader = useMemo(
    () => (
      <div className="absolute inset-0 z-10">
        <Skeleton className="w-full h-full rounded-t-lg" />
        <div className="absolute top-4 left-4 w-10 h-10">
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </div>
    ),
    []
  );

  // Memoize the step badge
  const stepBadge = useMemo(
    () => (
      <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-20">
        <span className="text-lg font-bold text-gray-900">{work.id}</span>
      </div>
    ),
    [work.id]
  );

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#EED6B4]">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative">
          {/* Loading Skeleton - only show when not loaded */}
          {!isLoaded && skeletonLoader}

          {/* Actual Image */}
          <img
            ref={setImgRef}
            src={work.img}
            alt={`${work.step} illustration`}
            className={`w-full h-48 md:h-56 lg:h-48 p-2 rounded-2xl object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={onImageLoad}
            onError={onImageError}
            loading="lazy"
          />

          {/* Step Number Badge - only show when image is loaded */}
          {isLoaded && stepBadge}
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
};

export default Works;
