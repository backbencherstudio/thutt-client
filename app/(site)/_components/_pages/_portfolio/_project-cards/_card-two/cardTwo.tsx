import React from "react";
import Image from "next/image";
export default function cardTwo() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
              <Image
                src="/assets/site-images/portfolio/card-two.png"
                alt="card-two"
                width={1000}
                height={1000}
                className="w-full h-full object-cover sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px]"
              />
              <div className="w-full md:w-[643px] flex flex-col gap-4 md:gap-8">
                <h2 className="text-[#1E1D1D]">
                  Co-Working Space Hot Desk System
                </h2>
                <p className="text-[#474646] mt-2">
                  Our client, a fast-growing co-working brand in Southeast Asia,
                  approached us to design a modular, tech-integrated hot desk
                  system that could accommodate freelancers, startups, and
                  remote teams—all under one roof. The design needed to align
                  with their sleek, tech-forward brand while remaining
                  adaptable, user-friendly, and space-efficient.
                </p>
                <div className="flex flex-col gap-5 items-start justify-start">
                  <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                    Includes:
                  </div>
                  <div className="">
                    <ul className="list-disc list-inside">
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Create a visually cohesive and brand-aligned layout
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Provide ergonomic comfort for long work hours
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Enable seamless hot-desking with clear zoning and
                        minimal clutter
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Maximize space utilization without overcrowding
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Deliver long-term flexibility with low maintenance
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-start gap-3 my-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <p>
                        <span className="text-[#1E1D1D] font-semibold">
                          Design by:
                        </span>
                      </p>
                      <Image
                        src="/assets/logo.png"
                        alt="brand logo"
                        width={64}
                        height={20}
                        className="max-w-[64px] max-h-[20px]"
                      />
                    </div>
                    <div className="w-[1px] h-[18px] bg-[#717DFF] hidden sm:block"></div>
                    <p className="text-[#1E1D1D]">February, 2025</p>
                  </div>
                  <div className="flex items-center justify-start gap-3 flex-wrap">
                    <div className="flex items-center justify-center px-4 py-2 border border-[#717DFF] bg-[#BDC3FF] text-[14px] font-semibold leading-[180%] text-[#2B3DFF]">
                      NewCubicles
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 border border-[#717DFF] bg-[#BDC3FF] text-[14px] font-semibold leading-[180%] text-[#2B3DFF]">
                      ModernDesign
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
