"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Shield } from "lucide-react";

const SafeHonest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const ProductCard = ({
    id,
    variant = "light",
    title,
    description,
    price,
    className = "",
  }) => {
    const isSelected = selectedPlan === id;

    return (
      <Card
        onClick={() => setSelectedPlan(id)}
        className={`
          cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}
          ${isSelected ? "ring-2 ring-[#F5821E] shadow-lg" : ""}
          ${
            variant === "dark"
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }
        `}
      >
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`p-2 rounded-lg ${
                variant === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-[16px] md:text-lg lg:text-2xl font-bold leading-tight">
              {title}
            </h3>
          </div>

          <p
            className={`text-[13px] md:text-base leading-relaxed mb-8 ${
              variant === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}{" "}
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
              Read More
            </span>
          </p>

          <Button
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group ${
              variant === "dark"
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            size="lg"
          >
            Buy Now {price}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    );
  };

  const LoadingSkeleton = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="h-80 rounded-lg" />
          <Skeleton className="h-80 rounded-lg" />
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="bg-[#FBF6EE]  py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Preparing You for a Safe, Honest, and Confident
            <br className="hidden md:block" />
            <span className="text-black"> Marriage</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            From medical check-ups to legal agreements and counselling, we offer
            everything you need to build trust and transparency before saying I
            do.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <ProductCard
            id="plan1"
            variant="dark"
            title="Pre-Marital Health & Legal Kit"
            description="A practical option for couples who want basic but essential health screenings (STD tests, full body checkup, blood group, etc.) A legally binding agreement to"
            price="₹9,999.00"
          />
          <ProductCard
            id="plan2"
            variant="light"
            title="Pre-Marital Health & Legal Kit"
            description="A practical option for couples who want basic but essential health screenings (STD tests, full body checkup, blood group, etc.) A legally binding agreement to"
            price="₹9,999.00"
          />
        </div>
      </div>
    </div>
  );
};

export default SafeHonest;
