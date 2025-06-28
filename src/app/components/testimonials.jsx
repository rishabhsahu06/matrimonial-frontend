"use client";
import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function TestimonialCard({ testimonial, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative aspect-[4/3] bg-gray-100">
        {!imageLoaded && !imageError && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        {!imageError ? (
          <img
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

      <CardContent className="p-6">
        <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 italic">
          "{testimonial.description}"
        </blockquote>

        <div className="mt-4 pt-4 border-t border-gray-100">
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
          "In our Punjabi families, open discussions around health and legal matters before marriage were uncommon. But with this platform, everything became transparent — from medical checks to background verifications. It helped us build trust from day one.",
        image: "/assets/testimonial-1.png",
        coupleName: "Neha and Ravi",
        Date: "25 June 2025",
      },
      {
        id: 2,
        description:
          "In our Punjabi families, open discussions around health and legal matters before marriage were uncommon. But with this platform, everything became transparent — from medical checks to background verifications. It helped us build trust from day one.",
        image: "/assets/testimonial-2.png",
        coupleName: "Neha and Ravi",
        Date: "25 June 2025",
      },
      {
        id: 3,
        description:
          "In our Punjabi families, open discussions around health and legal matters before marriage were uncommon. But with this platform, everything became transparent — from medical checks to background verifications. It helped us build trust from day one.",
        image: "/assets/testimonial-3.png",
        coupleName: "Neha and Ravi",
        Date: "25 June 2025",
      },
      {
        id: 4,
        description:
          "In our Punjabi families, open discussions around health and legal matters before marriage were uncommon. But with this platform, everything became transparent — from medical checks to background verifications. It helped us build trust from day one.",
        image: "/assets/testimonial-4.png",
        coupleName: "Neha and Ravi",
        Date: "25 June 2025",
      },
    ],
    []
  );

  const memoizedTestimonials = useMemo(
    () =>
      testimonialData.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
        />
      )),
    [testimonialData]
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {memoizedTestimonials}
        </div>

        {/* Optional: Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            View More Stories
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
