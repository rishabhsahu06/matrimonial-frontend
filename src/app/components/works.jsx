"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Sample data
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
    step: "Profile Data Validation",
    description:
      "Profile data uploaded by the individual will be validated with respective departments",
    img: "/assets/match.png",
  },
  {
    id: 3,
    step: "Health Checkup",
    description: "Individual will be asked for health checkup.",
    img: "/assets/health.png",
  },
  {
    id: 4,
    step: "Police Verification",
    description: "Verification will be done if there is any criminal records.",
    img: "/assets/verficiation.png",
  },
  {
    id: 5,
    step: "Pre-marriage counselling",
    description:
      "Pre-marriage counselling will be conducted for boys/girls and their families.",
    img: "/assets/marital.png",
  },
  {
    id: 6,
    step: "Meetings",
    description:
      "Virtual as well as physical meeting amongst boys/girls and their families will be organized.",
    img: "/assets/connect.png",
  },
  {
    id: 7,
    step: "Search",
    description: "Individual can search for his/her compatible match.",
    img: "/assets/search.png",
  },
  {
    id: 8,
    step: "Help Centre",
    description:
      "Toll free numbers are available 24x7 for hassle free inquiries.",
    img: "/assets/support.png",
  },
];

function Works() {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = useCallback((id) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  const handleImageError = useCallback((id) => {
    console.warn(`Failed to load image for step ${id}`);
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  const isImageLoaded = useCallback(
    (id) => loadedImages.has(id),
    [loadedImages]
  );

  useEffect(() => {
    WORKS_DATA.forEach((work) => {
      const img = new Image();
      img.onload = () => handleImageLoad(work.id);
      img.onerror = () => handleImageError(work.id);
      img.src = work.img;
    });
  }, [handleImageLoad, handleImageError]);

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
  }, [isImageLoaded, handleImageLoad, handleImageError]);

  return (
    <div className="bg-[#FBF6EE] py-20">
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our simple eight-step process helps you find your perfect match with
            ease and confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-6 lg:gap-8">
          {workCards}
        </div>
      </section>
    </div>
  );
}

const WorkCard = ({ work, isLoaded, onImageLoad, onImageError }) => {
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
        <div className="relative">
          {!isLoaded && skeletonLoader}

          <img
            src={work.img}
            alt={`${work.step} illustration`}
            loading="eager"
            onLoad={onImageLoad}
            onError={onImageError}
            className={`w-full h-48 md:h-56 lg:h-48 p-2 rounded-2xl object-cover transition duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform-gpu ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } hover:scale-105 hover:-rotate-1 hover:shadow-2xl active:scale-100`}
          />

          {isLoaded && stepBadge}
        </div>

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
