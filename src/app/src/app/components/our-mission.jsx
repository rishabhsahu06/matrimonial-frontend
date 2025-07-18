"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function OurMission() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  const missionData = [
    {
      id: 1,
      title: "Our Mission",
      image: "/assets/mission.png",
      description:
        "At Safe & Secure Marriage, our mission is to empower couples with clarity, trust, and confidence before marriage. We aim to normalize transparent conversations around health, legal, financial, and personal matters — helping individuals build stronger, more secure relationships that begin with honesty and mutual respect.",
    },
    {
      id: 2,
      title: "Our Vision",
      image: "/assets/vision.png",
      description:
        "To redefine the foundation of marriage in India by making transparency, trust, and informed decision-making a cultural norm — ensuring every couple begins their journey with clarity, confidence, and mutual understanding.",
    },
    {
      id: 3,
      title: "Empowering Informed Marriages",
      image: "/assets/informed.png",
      description:
        'Driven by our vision of clarity and confidence in relationships, this service helps couples make informed decisions through expert-led sessions, self-reflection tools, and guided discussions — creating a strong emotional, legal, and practical foundation before saying "yes" for life.',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const isImageLoaded = (id) => loadedImages.has(id);

  return (
    <section className="container mx-auto py-12 lg:py-20">
      <div className="space-y-16 lg:space-y-24 pb-12">
        {missionData.map((mission, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={mission.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12  ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[491/290] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg max-w-[495px]">
                    {!isImageLoaded(mission.id) && (
                      <Skeleton className="absolute inset-0 w-full h-full" />
                    )}
                    <Image
                      src={mission.image || "/placeholder.svg"}
                      alt={mission.title}
                      fill
                      className={`object-cover transition-all duration-500 hover:scale-105 ${
                        isImageLoaded(mission.id) ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 491px"
                      priority={index === 0}
                      onLoad={() => handleImageLoad(mission.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {mission.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurMission;
