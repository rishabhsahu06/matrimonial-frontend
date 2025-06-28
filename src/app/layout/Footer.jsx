"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Facebook, Send } from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerData = useMemo(
    () => ({
      importantLinks: {
        title: "Important Links",
        links: [{ label: "Services", href: "/services" }],
      },
      companyLinks: {
        title: "Company Links",
        links: [
          { label: "Cookie Policy", href: "/cookie-policy" },
          {
            label: "Cancellation & Return Policy",
            href: "/cancellation-return-policy",
          },
          {
            label: "Shipping & Delivery Policy",
            href: "/shipping-delivery-policy",
          },
          { label: "Term Of Service", href: "/terms-of-service" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ],
      },
      socialLinks: [
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
      ],
      contactInfo: {
        phone: "+91 9876543210",
        email: "support@safeandsecuremarriage.in",
        address: "201 Harmony Tower, Sector 45 New Delhi India 110044",
      },
    }),
    []
  );

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleNewsletterSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email.trim()) return;

      setIsSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Newsletter subscription:", email);
        setEmail("");
        // You can add a toast here
      } catch (error) {
        console.error("Newsletter subscription failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [email]
  );

  const renderFooterSection = useCallback(
    (section) => (
      <div key={section.title} className="space-y-4">
        <h3 className="text-white font-semibold text-lg mb-4">
          {section.title}
        </h3>
        <ul className="space-y-3">
          {section.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    []
  );

  return (
    <footer className="bg-black text-white ">
      <div className="container mx-auto px-4 py-12  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6 ">
            <div className="space-y-4">
              <Image
                src="/assets/logo.svg"
                width={250}
                height={50}
                alt="Safe & Secure Marriage Logo"
                className="h-28 md:h-50 w-auto"
                priority
              />
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Have a questions or need help getting started? Our team is
                here...
              </p>
            </div>

            <div className="flex space-x-4">
              {footerData.socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Important Links */}
          <div className="lg:col-span-1 mt-8">
            {renderFooterSection(footerData.importantLinks)}
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1 mt-8">
            {renderFooterSection(footerData.companyLinks)}
          </div>

          {/* Address and Newsletter */}
          <div className="lg:col-span-1 space-y-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Address</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>{footerData.contactInfo.phone}</p>
                <p className="break-all">{footerData.contactInfo.email}</p>
                <p className="leading-relaxed">
                  {footerData.contactInfo.address}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">News Letter</h3>
              <p className="text-gray-300 text-sm">
                Subscribe our latest update
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-1 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white rounded-r-none"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black hover:bg-gray-200 rounded-l-none px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 ">
          <p className="text-center text-gray-400 text-sm py-9">
            Copyright © 2025 All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
