"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function TestimonialCard({ testimonial }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative aspect-[4/3] bg-gray-100">
        {!imageLoaded && !imageError && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}

        {!imageError ? (
          <img
            ref={imgRef}
            src={testimonial.image}
            alt={`${testimonial.coupleName} wedding photo`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 italic flex-1">
          "{testimonial.description}"
        </blockquote>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <h4 className="font-semibold text-gray-900 text-lg mb-1">
            {testimonial.coupleName}
          </h4>
          <p className="text-gray-500 text-sm">Married: {testimonial.Date}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Testimonials() {
  const testimonialData = useMemo(
    () => [
      {
        id: 1,
        description:
          "In our families, open discussions around health and legal matters before marriage were uncommon. But with this platform, everything became transparent — from medical checks to background verifications. It helped us build trust from day one and made our journey smoother.",
        image: "/assets/testimonial-1.png",
        coupleName: "Neha and Ravi",
        Date: "25 June 2025",
      },
      {
        id: 2,
        description:
          "We appreciated the platform's focus on safety and values. It felt more than just matchmaking — it was a thoughtful process that respected tradition and modern needs. The comprehensive approach gave us confidence in our decision to move forward together.",
        image: "/assets/testimonial-2.png",
        coupleName: "Pooja and Aman",
        Date: "18 April 2025",
      },
      {
        id: 3,
        description:
          "From background verification to a warm introduction — everything felt transparent and trustworthy. It gave us the confidence to take the next step together. The platform's attention to detail and genuine care for our compatibility was remarkable.",
        image: "/assets/testimonial-3.png",
        coupleName: "Ritika and Varun",
        Date: "12 February 2025",
      },
      {
        id: 4,
        description:
          "We felt safe and respected throughout the process. It's not just a platform — it's a service that builds real trust for life-long partnerships. The thorough screening and genuine approach to matchmaking exceeded our expectations completely.",
        image: "/assets/testimonial-4.png",
        coupleName: "Anjali and Rohit",
        Date: "7 January 2025",
      },
    ],
    []
  );

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 font-medium">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real Stories, Real Trust
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-6 md:gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Optional: Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#F5821E] hover:bg-[#F5821E]/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            View More Stories
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
