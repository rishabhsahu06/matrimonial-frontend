"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[50] w-full bg-[#F5821E] shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                width={250}
                height={50}
                alt="Safe & Secure Marriage Logo"
                className="h-28 md:h-50 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 font-cabin whitespace-nowrap",
                      isActive
                        ? "text-white font-bold"
                        : "text-white hover:text-white/80 font-normal"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Add Profile Image next to "Contact" */}
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/assets/president.png"
                  alt="Profile Image"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </nav>

          {/* Desktop Profile Images - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/lion-logo.webp"
                alt="Profile 3"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/pm.png"
                alt="Profile 1"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/jp.png"
                alt="Profile 2"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/as.png"
                alt="Profile 3"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tablet Profile Images - Show only on tablet */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/pm.png"
                alt="Profile 1"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/jp.png"
                alt="Profile 2"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/as.png"
                alt="Profile 3"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="p-1 sm:p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-orange-400 bg-[#F5821E]">
            <div className="px-2 sm:px-3 pt-2 pb-3">
              <div className="space-y-2 sm:space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 font-cabin",
                        isActive
                          ? "text-white font-bold bg-white/10"
                          : "text-white hover:text-white hover:bg-white/10"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Profile Images - Only show on mobile */}
              <div className="md:hidden px-3 py-3 mt-3 border-t border-orange-400">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/lion-logo.webp"
                      alt="Profile 1"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/pm.png"
                      alt="Profile 1"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/jp.png"
                      alt="Profile 2"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/as.png"
                      alt="Profile 3"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/president.png"
                      alt="Profile 3"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
