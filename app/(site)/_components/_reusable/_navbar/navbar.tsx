"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "../_button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Navigation items
const navItems = [
  { name: "Home", path: "/" },
  { 
    name: "Category", 
    path: "/category",
    dropdownItems: [
      { name: "Web Development", path: "/category/web-development" },
      { name: "Mobile Apps", path: "/category/mobile-apps" },
      { name: "UI/UX Design", path: "/category/ui-ux-design" }
    ]
  },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
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
    <nav className="w-full p-5">
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
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            item.dropdownItems ? (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger className={`text-[18px] leading-[var(--paragraph-line-height)] openSans flex items-center gap-1 ${
                  pathname === item.path || item.dropdownItems.some(di => pathname === di.path)
                    ? "text-[#2B3DFF] font-medium"
                    : "text-[#474646] font-normal"
                }`}>
                  {item.name}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.path} asChild>
                      <Link 
                        href={dropdownItem.path}
                        className={`w-full ${
                          pathname === dropdownItem.path ? "text-[#2B3DFF]" : "text-[#474646]"
                        }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
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
            )
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
                <div key={item.path}>
                  {item.dropdownItems ? (
                    <div className="flex flex-col space-y-2">
                      <span className={`text-[18px] leading-[160%] font-['DM_Sans'] ${
                        pathname === item.path || item.dropdownItems.some(di => pathname === di.path)
                          ? "text-[#151623] font-medium"
                          : "text-[#62636C] font-normal"
                      }`}>
                        {item.name}
                      </span>
                      <div className="pl-4 flex flex-col space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            className={`text-[16px] leading-[160%] font-['DM_Sans'] ${
                              pathname === dropdownItem.path
                                ? "text-[#151623] font-medium"
                                : "text-[#62636C] font-normal"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                <Link
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
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button text="Project Survey" href="/contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
