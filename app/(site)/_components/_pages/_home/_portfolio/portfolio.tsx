import Image from "next/image";
import React from "react";
import Button from "../../../_reusable/_button/button";
export default function portfolio() {
  return (
    <div className="bg-[#EAECFFB2] px-4">
      <div className="container py-10 sm:py-16 md:py-20 xl:py-[120px]">
        <div className="flex flex-col justify-center gap-12">
          <h2 className="text-center text-[#1E1D1D]">
            Workspace Transformations
          </h2>
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="w-full lg:max-w-[560px] flex flex-col gap-3">
                <h3 className="text-[#1E1D1D] font-semibold">
                  Modern Cubicle Setup – Tech Startup HQ
                </h3>
                <p className="text-[#474646]">
                  We designed and installed a custom layout of modular cubicles
                  for a 50-person startup office in downtown Chicago. The layout
                  prioritized open communication while maintaining personal
                  space and comfort.
                </p>
                <div className="flex items-center justify-start gap-3 my-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1D1D] font-semibold">Design by:</p>
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
              <div className="w-full lg:max-w-[640px]">
                <Image
                  src="/assets/site-images/home/portfolio1.png"
                  alt="portfolio"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6">
              <div className="w-full lg:max-w-[560px] flex flex-col gap-3">
                <h3 className="text-[#1E1D1D] font-semibold">
                  Modern Cubicle Setup – Tech Startup HQ
                </h3>
                <p className="text-[#474646]">
                  We designed and installed a custom layout of modular cubicles
                  for a 50-person startup office in downtown Chicago. The layout
                  prioritized open communication while maintaining personal
                  space and comfort.
                </p>
                <div className="flex items-center justify-start gap-3 my-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <p className="text-[#1E1D1D] font-semibold">Design by:</p>
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
              <div className="w-full lg:max-w-[640px]">
                <Image
                  src="/assets/site-images/home/portfolio2.png"
                  alt="portfolio"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button text="See All" href="/portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
}
