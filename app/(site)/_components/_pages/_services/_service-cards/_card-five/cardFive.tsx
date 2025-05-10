import React from "react";
import Image from "next/image";
export default function cardFive() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
          <Image
            src="/assets/site-images/services/card-five.png"
            alt="card-one"
            width={1000}
            height={1000}
            className="w-full h-full object-cover sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px] 2xl:w-[680px]"
          />
          <div className="w-full md:w-[560px] flex flex-col gap-4 md:gap-8">
            <h2 className="text-[#1E1D1D]">Furniture Installation</h2>
            <p className="text-[#474646] mt-2">
              Furniture installation is more than just assembling and placing
              items—it’s the final, crucial step in bringing your vision to
              life. Our skilled team ensures that every piece is installed with
              precision, care, and in alignment with your interior plan.
            </p>
            <div className="flex flex-col gap-5 items-start justify-start">
              <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Includes:
              </div>
              <div className="">
                <ul className="list-disc list-inside">
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Expert Assembly
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    On-Site Configuration
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Wall Mounting & Fixtures
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Final Touches & Cleanup
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
