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
        address: "201 Harmony Tower, Sector 45, New Delhi, India 110044",
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
      <div key={section.title} className="space-y-4 mt-4">
        <h3 className="text-white font-semibold text-lg">{section.title}</h3>
        <ul className="space-y-2">
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
      <div className="container mx-auto  py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/assets/destiny.svg"
                alt="Safe & Secure Marriage Logo"
                width={250}
                height={60}
                className="h-auto w-[150px] sm:w-[200px] md:w-[250px]"
                priority
              />
            </Link>
            <div className="flex space-x-4">
              {footerData.socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Important Links */}
          {renderFooterSection(footerData.importantLinks)}

          {/* Company Links */}
          {renderFooterSection(footerData.companyLinks)}

          {/* Contact Info & Newsletter */}
          <div className="space-y-8 mt-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Address</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>{footerData.contactInfo.phone}</p>
                <p className="break-all">{footerData.contactInfo.email}</p>
                <p className="leading-relaxed">
                  {footerData.contactInfo.address}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Newsletter
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Subscribe to get our latest updates
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white flex-1"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-gray-200"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Safe & Secure Marriage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
