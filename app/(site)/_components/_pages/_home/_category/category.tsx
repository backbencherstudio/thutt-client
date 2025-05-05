"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Category() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      title: "1. New Cubiclese",
      description: "Modern, modular workstations built for productivity and collaboration. Perfect for growing teams and new office setups.",
      image: "url('/assets/site-images/home/category1.png')"
    },
    {
      title: "2. Pre-Owned Cubicles",
      description: "High-quality pre-owned workstations at affordable prices. Perfect for budget-conscious businesses.",
      image: "url('/assets/site-images/home/category2.png')"
    },
    {
      title: "3. Office Furniture",
      description: "Tailored workspace solutions designed to meet your specific needs and requirements.",
      image: "url('/assets/site-images/home/category3.png')"
    }
  ];

  return (
    <div className="bg-[#EAECFFB2] px-4">
      <div className="container py-10 sm:py-16 md:py-20 xl:py-[120px]">
        <div className="flex flex-col justify-center gap-12">
          <h2 className="text-[#1E1D1D] text-center text-2xl md:text-4xl font-semibold">
            Find Your Perfect Fit
          </h2>

          {/* Desktop Layout */}
          <div className="hidden md:flex gap-6">
            {panels.map((panel, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out cursor-pointer ${
                  activePanel === index ? "w-full" : "w-[360px]"
                } h-[560px]`}
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.5%, rgba(0, 0, 0, 0.40) 79.28%), ${panel.image} lightgray 50% / cover no-repeat`,
                }}
                onClick={() => setActivePanel(index)}
              >
                {/* Rotated Title (visible only when collapsed) */}
                {activePanel !== index && (
                  <div className="absolute left-[220px] bottom-4 transform -rotate-90 origin-bottom-left transition-opacity duration-500">
                    <div className="inline-flex flex-col items-start justify-start gap-2 p-6">
                      <h3 className="text-white w-[500px]">{panel.title}</h3>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white border-b"
                      >
                        Explore
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="18"
                          viewBox="0 0 12 18"
                          fill="none"
                        >
                          <path
                            d="M5.99976 1.99976L5.99976 16.9998"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.999878 6L5.29277 1.70711C5.6261 1.37377 5.79277 1.20711 5.99988 1.20711C6.20698 1.20711 6.37365 1.37377 6.70698 1.70711L10.9999 6"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Full content (visible only when expanded) */}
                <div
                  className={`absolute inset-0 flex flex-col items-start justify-end p-6 gap-2 transition-opacity duration-500 ${
                    activePanel === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-white text-[32px] font-medium">
                    {panel.title}
                  </h3>
                  <p className="max-w-[533px] text-white pb-1">
                    {panel.description}
                  </p>
                  <Link href="/" className="flex items-center gap-2 text-[#5564FF]">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M12 2L1 13"
                        stroke="#5564FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 1H12C12.4714 1 12.7071 1 12.8536 1.14645C13 1.29289 13 1.5286 13 2V8"
                        stroke="#5564FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet & Mobile Layout */}
          <div className="md:hidden flex flex-col gap-6">
            {panels.map((panel, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out cursor-pointer w-full h-[400px] sm:h-[500px]`}
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.5%, rgba(0, 0, 0, 0.40) 79.28%), ${panel.image} lightgray 50% / cover no-repeat`,
                }}
                onClick={() => setActivePanel(index)}
              >
                {/* Content for mobile/tablet */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 sm:p-6 gap-2">
                  <h3 className="text-white text-2xl sm:text-[32px] font-medium">
                    {panel.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base max-w-full sm:max-w-[533px] pb-1">
                    {panel.description}
                  </p>
                  <Link href="/" className="flex items-center gap-2 text-[#5564FF] text-sm sm:text-base">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M12 2L1 13"
                        stroke="#5564FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 1H12C12.4714 1 12.7071 1 12.8536 1.14645C13 1.29289 13 1.5286 13 2V8"
                        stroke="#5564FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
