import React from "react";
import Image from "next/image";
export default function cardFour() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-[#1E1D1D]">Custom Ergonomic Workstation Setup</h2>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
              <div className="w-full md:w-[560px] flex flex-col gap-6">
                <p className="text-[#474646]">
                  The client needed a tailored workstation setup for their
                  creative team that blended style, comfort, and productivity.
                  Our goal was to create a visually inspiring yet highly
                  functional workspace for designers, writers, and strategists
                  working long hours.
                </p>
                <p className="text-[#474646]">
                  Open-layout workstation setup designed for graphic designers
                  and content creators. Optimized for collaboration and
                  individual focus time.
                </p>
                <div className="flex flex-col gap-5 items-start justify-start">
                  <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                    Design Goals:
                  </div>
                  <div className="">
                    <ul className="list-disc list-inside">
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Promote better posture and ergonomics
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Support dual-monitor setups and cable management
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Create a modern, unified look across all desks
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Integrate personal storage and acoustic comfort
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image
                src="/assets/site-images/portfolio/card-four.png"
                alt="card-one"
                width={1000}
                height={1000}
                className="w-full h-full object-cover sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px]"
              />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start">
              <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Design Goals:
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Height-Adjustable Desks:
                  </span>{" "}
                  Custom-built walnut tops with matte black motorized frames for
                  sit/stand flexibility
                </p>
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Acoustic Privacy Panels:
                  </span>{" "}
                  Sound-absorbing fabric dividers between workstations to reduce
                  distraction
                </p>
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Integrated Task Lighting:
                  </span>{" "}
                  LED light strips with adjustable brightness for individual
                  focus
                </p>
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
  );
}
