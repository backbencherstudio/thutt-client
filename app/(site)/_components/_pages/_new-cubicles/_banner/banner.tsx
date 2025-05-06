import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('/assets/site-images/new-page/banner.png')",
      }}
    >
      <div className="container mx-auto pt-20 pb-[132px]">
        <div className="max-w-[754px] flex flex-col gap-4 items-start">
          <div className="flex gap-2 mb-4">
            <div className="text-[#BDC3FF] text-[20px] md:text-[24px]">
              Home/
            </div>
            <div className="text-[#BDC3FF] text-[20px] md:text-[24px]">
              Category/
            </div>
            <div className="text-white text-[20px] md:text-[24px]">
              New Cubicles
            </div>
          </div>
          <h1 className="text-white">
            Smart Cubicles Tailored for Modern Teams
          </h1>
          <p className="text-white text-[20px] font-medium mb-8">
            Explore modular, ergonomic solutions built for collaboration,
            privacy, and peak productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
