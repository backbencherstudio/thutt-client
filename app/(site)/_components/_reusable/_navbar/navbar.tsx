"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "../_button/button";

// Navigation items
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Venue", path: "/venue" },
  { name: "Event", path: "/events" },
  { name: "FAQs", path: "/faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full p-4">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Brand Logo"
              width={128}
              height={40}
              className="w-full h-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-[18px] leading-[var(--paragraph-line-height)] openSans ${
                pathname === item.path
                  ? "text-[#2B3DFF] font-medium"
                  : "text-[#474646] font-normal"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button text="Contact Now" href="/contact" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden menu-button">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#151623] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#151623] focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-[18px] leading-[160%] font-['DM_Sans'] ${
                    pathname === item.path
                      ? "text-[#151623] font-medium"
                      : "text-[#62636C] font-normal"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button text="Contact Now" href="/contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
