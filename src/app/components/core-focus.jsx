"use client";

import { useMemo } from "react";
import {
  FileCheck,
  ShieldCheck,
  Scale,
  Heart,
  Database,
  Users,
} from "lucide-react";

// Icon mapping
const iconMap = {
  transparency: FileCheck,
  trust: ShieldCheck,
  legal: Scale,
  health: Heart,
  data: Database,
  family: Users,
};

function CoreFocus() {
  // Core values list
  const coreValues = useMemo(
    () => [
      {
        id: 1,
        title: "Transparency Before Togetherness",
        iconKey: "transparency",
      },
      {
        id: 2,
        title: "Trust Through Verification",
        iconKey: "trust",
      },
      {
        id: 3,
        title: "Legal Awareness for Peace of Mind",
        iconKey: "legal",
      },
      {
        id: 4,
        title: "Health & Well-being First",
        iconKey: "health",
      },
      {
        id: 5,
        title: "Confidentiality & Data Protection",
        iconKey: "data",
      },
      {
        id: 6,
        title: "Family-Centric Approach",
        iconKey: "family",
      },
    ],
    []
  );

  // Render core value items
  const coreValueItems = useMemo(
    () =>
      coreValues.map((value) => {
        const IconComponent = iconMap[value.iconKey];
        return (
          <div
            key={value.id}
            className="flex flex-col items-center text-center p-4 sm:p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <div className="mb-4 p-3 bg-[#fac08e]/90 rounded-full">
              <IconComponent
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#F5821E] hover:text-[#F5821E]/90 transition-colors duration-300"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-sm sm:text-base font-medium text-gray-900 leading-tight">
              {value.title}
            </h3>
          </div>
        );
      }),
    [coreValues]
  );

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Title */}
          <div className="lg:sticky lg:top-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Core Focus
              <br />
              <span className="text-gray-800">and Commitment</span>
            </h1>
          </div>

          {/* Right: Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {coreValueItems}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreFocus;
