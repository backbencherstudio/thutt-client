"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Category() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#EAECFFB2] px-4">
      <div className="container py-10 sm:py-16 md:py-20 xl:py-[120px]">
        <div className="flex flex-col justify-center gap-12">
          <h2 className="text-[#1E1D1D] text-center text-2xl md:text-4xl font-semibold">
            Find Your Perfect Fit
          </h2>

          {/* Collapsible Panel */}
          <div
            className={`relative overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out cursor-pointer ${
              expanded ? "w-full" : "w-[360px]"
            } h-[560px]`}
            style={{
              backgroundImage: "url('/assets/site-images/home/category1.png')",
            }}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {/* Rotated Title (visible only when collapsed) */}
            {!expanded && (
              <div className="absolute left-[350px] bottom-4 transform -rotate-90 origin-bottom-left transition-opacity duration-500">
                <div className="inline-flex flex-col items-start justify-start gap-2 p-6">
                  <h3 className="text-white w-[500px]">1. New Cubiclese</h3>
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
                expanded ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h3 className="text-white text-[32px] font-medium">
                1. New Cubiclese
              </h3>
              <p className="max-w-[533px] text-white pb-1">
                Modern, modular workstations built for productivity and
                collaboration. Perfect for growing teams and new office setups.
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
        </div>
      </div>
    </div>
  );
}
