"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AimSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/assets/hero-img2.png"
                alt="Indian wedding couple in traditional attire representing safer and healthier marriages"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
                quality={85}
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-600 text-sm sm:text-base font-medium tracking-wide uppercase">
                Safer and Healthier Marriages
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Our Aim and Motto
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We believe that trust, health, and legal understanding form the
              true foundation for a happy and stable married life. We evolved
              this platform to ease pre marital transparency for couples. Backed
              by professionals in law, medicine, and counselling, we're here to
              support your journey with compassion and confidentiality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="text-white bg-[#E92063] hover:bg-[#E92063]/90 px-12 py-6.5 text-base sm:text-lg font-semibold rounded-md transition-colors"
              >
                Discover
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
