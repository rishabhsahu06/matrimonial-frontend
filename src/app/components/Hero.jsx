"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link

export default function Hero() {
  return (
    <div className=" mx-auto">
      <section className="relative min-h-screen w-full overflow-hidden ">
        {/* Background Image with animation and mobile-friendly responsiveness */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          {/* Desktop/Tablet Image */}
          <div className="hidden sm:block h-full w-full">
            <Image
              src="/assets/hero-img1.png"
              alt="Woman in traditional dress representing trust and clarity in marriage"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:rounded-4xl rounded-none md:mt-14 mt-6"
            />
          </div>

          {/* Mobile Image */}
          <div className="block sm:hidden h-auto w-full">
            <Image
              src="/assets/couple-mobile.png"
              alt="Couple in traditional dress on mobile screen"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center rounded-none mt-6"
            />
          </div>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-10 px-6 sm:px-12 mx-auto">
          <div className="flex min-h-screen items-center">
            <div className="max-w-2xl">
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-2xl text-white/90 font-medium mb-4 sm:mb-6"
              >
                Start Your Married Life with Trust and Clarity
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-noto font-bold text-white leading-12 mb-8 sm:mb-10"
              >
                We help you to get transparent in{" "}
                <span className="block">
                  Social, Financial, Health and Legal Status Before Marriage
                </span>
              </motion.h1>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <Link href="/register">
                  <Button
                    size="lg"
                    className="text-white bg-[#F5821E] hover:bg-[#F5821E]/90 cursor-pointer px-12 py-6.5 text-base sm:text-lg font-semibold rounded-md transition-colors"
                  >
                    Discover
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-base sm:text-lg font-semibold rounded-md transition-colors bg-transparent"
                >
                  Contact US
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
