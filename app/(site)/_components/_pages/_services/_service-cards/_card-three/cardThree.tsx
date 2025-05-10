import React from "react";
import Image from "next/image";
export default function cardThree() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
          <Image
            src="/assets/site-images/services/card-three.png"
            alt="card-one"
            width={1000}
            height={1000}
            className="w-full h-full object-cover sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px] 2xl:w-[680px]"
          />
          <div className="w-full md:w-[560px] flex flex-col gap-4 md:gap-8">
            <h2 className="text-[#1E1D1D]">Relocations</h2>
            <p className="text-[#474646] mt-2">
              Whether you're moving your home or office, we manage the
              dismantling, packing, transportation, and reinstallation of your
              furniture with care and precision.
            </p>
            <div className="flex flex-col gap-5 items-start justify-start">
              <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Includes:
              </div>
              <div className="">
                <ul className="list-disc list-inside">
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Furniture disassembly and reassembly
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Secure packaging and transport
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Layout reconfiguration at new site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
