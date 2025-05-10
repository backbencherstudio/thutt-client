import React from "react";
import Image from "next/image";
export default function cardTwo() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <h2 className="text-[#1E1D1D] mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Project Management
        </h2>
        <p className="text-[#474646] mt-2">
          Managing a furniture or interior project involves many moving parts —
          from sourcing materials to coordinating with contractors. Our Project
          Management service ensures that everything runs smoothly, on time, and
          within budget. Whether you're furnishing a single room or outfitting
          an entire office, we become your trusted partner from start to finish.
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 mt-6 sm:mt-8">
          <div className="w-full md:w-[560px] flex flex-col gap-4 md:gap-8">
            <p className="text-[#474646] mt-2">
              Our experienced project managers take the lead on your behalf,
              acting as your single point of contact throughout the journey. We
              meticulously plan, coordinate, and oversee all aspects of the
              project — so you can focus on the big picture while we take care
              of the details.
            </p>
            <div className="flex flex-col gap-5 items-start justify-start">
              <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Key Highlights:
              </div>
              <div className="">
                <ul className="list-disc list-inside">
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Dedicated Project Manager
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Timeline & Budget Tracking
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    Vendor & Contractor Coordination
                  </li>
                  <li className="text-[16px] text-[#474646] leading-[180%]">
                    End-to-End Execution
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-[#474646] mt-2">
              Project management isn't just about logistics — it's about trust,
              transparency, and peace of mind. With our experts guiding the
              process, you can expect an elevated experience that saves time,
              reduces stress
            </p>
          </div>
          <Image
            src="/assets/site-images/services/card-two.png"
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
