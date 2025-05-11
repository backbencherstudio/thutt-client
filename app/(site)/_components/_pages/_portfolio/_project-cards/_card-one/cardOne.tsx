import React from "react";
import Image from "next/image";
export default function cardOne() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-[#1E1D1D]">Modern Minimalist Workstation Pods</h2>
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-[#474646]">
              This fast-growing startup approached us with a clear vision: to
              create a collaborative, space-efficient workstation setup that
              supports their hybrid work culture. The design needed to
              accommodate both full-time team members and visiting collaborators
              in a way that felt clean, modern, and highly functional.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
              <div className="w-full md:w-[560px] flex flex-col gap-4 md:gap-8">
                <p className="text-[#474646] mt-2">
                  We responded by designing and delivering custom modular
                  4-person workstation pods that can adapt as the team grows.
                  Each pod is engineered for plug-and-play usability, allowing
                  users to dock in, collaborate, or focus individually without
                  sacrificing style or comfort.
                </p>
                <div className="flex flex-col gap-5 items-start justify-start">
                  <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                    Design Goals:
                  </div>
                  <div className="">
                    <ul className="list-disc list-inside">
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Support flexible seating with hot-desking capability
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Provide ergonomic comfort for long work hours
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Minimize cable clutter and visual noise
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Foster team interaction without compromising focus
                      </li>
                      <li className="text-[16px] text-[#474646] leading-[180%]">
                        Keep a light, clean visual language to match brand
                        identity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image
                src="/assets/site-images/portfolio/card-one.png"
                alt="card-one"
                width={1000}
                height={1000}
                className="w-full h-full object-cover sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px] 2xl:w-[680px]"
              />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start">
              <div className="text-[#1E1D1D] text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Design Goals:
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Premium White Oak Worksurfaces:
                  </span>{" "}
                  Durable yet elegant tabletops with natural woodgrain finish,
                  paired with powder-coated black steel legs for stability
                </p>
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Noise-Reducing Desk Partitions:
                  </span>{" "}
                  Mid-height PET felt acoustic dividers allow visual connection
                  while absorbing sound, boosting focus and comfort
                </p>
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Smart Cable Management:
                  </span>{" "}
                  Hidden wire trays, built-in power strips, and USB-C outlets
                  keep desktops clutter-free and devices powered
                </p>
                <p className="text-[#474646]">
                  <span className="font-semibold text-[#1E1D1D]">
                    Ambient Overhead Lighting:
                  </span>{" "}
                  Suspended matte black fixtures above each pod reduce eye
                  strain and provide warm, focused light
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
