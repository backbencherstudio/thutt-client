import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('/assets/site-images/services/banner.png')",
      }}
    >
      <div className="container mx-auto pt-20 pb-[132px]">
        <div className="max-w-[754px] flex flex-col gap-4 items-start">
          <div className="flex gap-2 mb-4">
            <div className="text-[#BDC3FF] text-[20px] md:text-[24px]">
              Home/
            </div>
            <div className="text-[#BDC3FF] text-[20px] md:text-[24px]">
              Service
            </div>
          </div>
          <h1 className="text-white">Custom Furniture & Interior Services</h1>
          <div className="text-white text-[20px] md:text-[24px] font-medium mb-8 leading-[120%]">
            From made-to-measure pieces to full-space solutions – discover how
            we bring your vision to life.
          </div>
        </div>
      </div>
    </div>
  );
}
