import React from "react";
import Image from "next/image";
export default function cardFour() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="w-full md:w-[560px] flex flex-col gap-4 md:gap-8">
            <h2 className="text-[#1E1D1D]">Liquidation</h2>
            <p className="text-[#474646] mt-2">
              We provide responsible and efficient liquidation of unwanted or
              outdated furniture. Perfect for office moves, remodels, or asset
              recovery.
            </p>
            <div className="flex flex-col gap-5 items-start justify-start">
              <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Includes:
              </div>
              <div className="">
                <ul className="list-disc list-inside">
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Inventory valuation
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Sustainable disposal or resale options
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    On-site removal & logistics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/assets/site-images/services/card-four.png"
            alt="card-one"
            width={1000}
            height={1000}
            className="w-full h-full object-cover sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px] 2xl:w-[680px]"
          />
        </div>
      </div>
    </div>
  );
}
