"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [expandedItems, setExpandedItems] = useState(new Set([1]));

  const faqData = [
    {
      id: 1,
      que: "What Is Safe & Secure Marriage?",
      ans: "Safe & Secure Marriage is a platform dedicated to helping couples build a strong foundation before marriage by offering services that promote trust, health transparency, and legal clarity. Their offerings include medical screenings, legal agreements, and professional counselling to ensure couples enter marriage with confidence and mutual understanding.",
    },
    {
      id: 2,
      que: "What Services Do We Offer?",
      ans: "We offer comprehensive pre-marriage services including medical health screenings, legal documentation assistance, professional counselling sessions, and relationship guidance to ensure couples are well-prepared for their marriage journey.",
    },
    {
      id: 3,
      que: "Are The Test Results Confidential?",
      ans: "Yes, all test results and personal information are kept strictly confidential. We follow industry-standard privacy protocols and only share information with your explicit consent and as required by law.",
    },
    {
      id: 4,
      que: "What Documents Are Needed For The Legal Service?",
      ans: "For our legal services, you'll typically need government-issued IDs, proof of address, birth certificates, and any relevant previous legal documents. Our team will provide a complete checklist based on your specific requirements.",
    },
    {
      id: 5,
      que: "What If A Red Flag Appears During Screening?",
      ans: "If any concerns arise during screening, our professional counsellors will guide you through the process with sensitivity and confidentiality. We provide support and resources to help you make informed decisions about your relationship.",
    },
    {
      id: 6,
      que: "Are The Services Legally Recognized?",
      ans: "Yes, our legal services are provided by qualified legal professionals and are fully recognized. All documentation and agreements prepared through our platform meet legal standards and requirements.",
    },
    {
      id: 7,
      que: "What Is A Pre-Marriage Medical Check-Up, And Why Is It Important?",
      ans: "A pre-marriage medical check-up is a comprehensive health screening that helps identify any health conditions that could affect your marriage or future family. It promotes transparency and helps couples make informed decisions about their health and future together.",
    },
    {
      id: 8,
      que: "How Is My Personal Information Handled?",
      ans: "We take data privacy seriously and use advanced security measures to protect your personal information. All data is encrypted, stored securely, and only accessed by authorized personnel when necessary for providing our services.",
    },
    {
      id: 9,
      que: "What Happens After We Complete All The Steps?",
      ans: "After completing all steps, you'll receive a comprehensive report and any relevant documentation. Our team remains available for follow-up support and guidance as you move forward with your marriage plans.",
    },
    {
      id: 10,
      que: "Are The Services Legally Recognized?",
      ans: "Yes, our legal services are provided by qualified legal professionals and are fully recognized. All documentation and agreements prepared through our platform meet legal standards and requirements.",
    },
    {
      id: 11,
      que: "How Is My Personal Information Handled?",
      ans: "We take data privacy seriously and use advanced security measures to protect your personal information. All data is encrypted, stored securely, and only accessed by authorized personnel when necessary for providing our services.",
    },
  ];

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="w-full py-12  bg-gray-50">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Frequently Asked Questions (FAQ)
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Everything You Need to Know Before Starting Your Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Here are answers to some of the most common questions about our
                services. If you need more information, don't hesitate to reach
                out to our team.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/testimonial-3.png"
                  alt="Happy couple in traditional wedding attire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Content - FAQ List */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between "
                  aria-expanded={expandedItems.has(item.id)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.que}
                  </span>
                  <div className="flex-shrink-0">
                    {expandedItems.has(item.id) ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {expandedItems.has(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {item.ans}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
