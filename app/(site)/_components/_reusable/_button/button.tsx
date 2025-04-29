"use client";

import React from "react";
import Link from "next/link";

interface buttonProps {
  text: string;
  href: string;
  className?: string;
}

export default function button({ text, href, className = "" }: buttonProps) {
  return (
    <Link
      href={href}
      className={`px-6 py-2 flex items-center justify-center bg-[var(--brand-color)] text-white text-[16px] sm:texxt-[18px] font-semibold lg:text-[18px] leading-[var(--paragraph-line-height)] transition-all duration-300 cursor-pointer ${className} `}
    >
      {text}
    </Link>
  );
}
