import React from "react";
import Image from "next/image";
export default function cardThree() {
  return (
    <div className="bg-white px-4">
      <div className="container mx-auto pb-10 sm:pb-16 md:pb-20 xl:pb-[120px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-[#1E1D1D] text-center">
            Creative Studio Workstations
          </h2>
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-[#474646]">
              We were commissioned by a Berlin-based creative agency to design a
              collaborative studio environment that could support their growing
              team of graphic designers, video editors, illustrators, and
              content creators. The goal was to strike a balance between open
              creativity and focused productivity — a space that fuels
              imagination while staying deeply functional.
            </p>
            <p className="text-[#474646]">
              We delivered a highly adaptive open-plan studio featuring
              custom-built workstations that promote flexibility, inspiration,
              and comfort. Every design choice was made to encourage dynamic
              workflow, spontaneous collaboration, and individual focus when
              needed.
            </p>
            <Image
              src="/assets/site-images/portfolio/card-three.png"
              alt="card-one"
              width={1000}
              height={1000}
              className="w-full h-[300px] object-cover sm:h-[400px] md:h-[440px]"
            />
            <div className="flex flex-col gap-3">
              <p className="text-[#474646]">
                <span className="font-semibold text-[#1E1D1D]">
                  Sit-Stand Creative Workstations:
                </span>{" "}
                Each designer received an electric height-adjustable desk with a
                matte white top and oak edging. These were paired with
                anti-fatigue floor mats and personalized color decals based on
                their creative team (video, design, web).
              </p>
              <p className="text-[#474646]">
                <span className="font-semibold text-[#1E1D1D]">
                  Dual Monitor Support & Docking:
                </span>{" "}
                Desks featured clamp-mounted dual-arm monitor stands with cable
                sleeves, USB hubs, and docking solutions. Workflows involving
                tablets, styluses, and drawing pads were factored into the setup
                with embedded cable routing and easy-access charging ports.
              </p>
              <p className="text-[#474646]">
                <span className="font-semibold text-[#1E1D1D]">
                  Acoustic Comfort:
                </span>{" "}
                To soften the energy of a busy creative team, we installed
                vertical acoustic panels in color-gradient fabric between desks.
                These allowed teams to focus without fully isolating, and also
                acted as tackboards for design inspiration and sketches.
              </p>
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
