import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function cta() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('/assets/site-images/home/cta-bg.png')",
      }}
    >
      <div className="container mx-auto py-10 md:py-[92px] md:px-0">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col gap-5 items-start">
            <h2 className="max-w-[462px] text-white">
              Ready to Start Your Dream Project?
            </h2>
            <p className="max-w-[352px] text-white text-[20px] font-medium mb-3 md:mb-7">
              Fill out our quick survey and receive a custom office layout plan.
            </p>
            <Link
              href={"/contact"}
              className={`px-6 py-2 flex items-center justify-center bg-white text-[#2B3DFF] text-[16px] sm:texxt-[18px] font-semibold lg:text-[18px] leading-[var(--paragraph-line-height)] transition-all duration-300 cursor-pointer `}
            >
              Start Syrvey
            </Link>
          </div>
          <Image
            src="/assets/site-images/home/cta.png"
            alt="cta-bg"
            width={640}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}
