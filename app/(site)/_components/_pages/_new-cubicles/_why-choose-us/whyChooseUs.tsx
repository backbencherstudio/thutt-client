import React from "react";
import Image from "next/image";
export default function whyChooseUs() {
  return (
    <div className="bg-[#EAECFFB2] px-4">
      <div className="container py-10 sm:py-16 md:py-20 xl:py-[120px]">
        <div className="flex flex-col justify-center gap-12">
          <h2 className="max-w-[644px] text-[#1E1D1D] text-left">
            Why Choose Us for Your Office Cubicles?
          </h2>
          <div className="flex flex-wrap-reverse items-start justify-between gap-10">
            <div className="w-full sm:max-w-[644px] flex flex-row flex-wrap gap-8">
              <Image
                src="/assets/site-images/new-page/choose1.png"
                alt="Why Choose Us"
                width={500}
                height={440}
                className="w-full sm:w-[306px] h-[440px] object-cover"
              />
              <Image
                src="/assets/site-images/new-page/choose2.png"
                alt="Why Choose Us"
                width={500}
                height={440}
                className="w-full sm:w-[306px] h-[440px] object-cover"
              />
            </div>
            <div className="2xl:max-w-[620px] flex flex-col gap-5 items-start justify-start">
              <div className="flex flex-col gap-1">
                <ul className="list-disc m-0 ml-5 text-[#1E1D1D] text-[20px] font-semibold leading-[130%]">
                  <li>15+ Years of Expertise in Workspace Design</li>
                </ul>
                <p className="text-[#474646]">
                  We bring over a decade of hands-on experience creating
                  productive and inspiring office environments tailored to your
                  business needs.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <ul className="list-disc m-0 ml-5 text-[#1E1D1D] text-[20px] font-semibold leading-[130%]">
                  <li>Seamless Delivery & Professional Installation</li>
                </ul>
                <p className="text-[#474646]">
                  From careful delivery to expert assembly, our team ensures
                  every cubicle is perfectly placed and ready for work—without
                  the hassle.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <ul className="list-disc m-0 ml-5 text-[#1E1D1D] text-[20px] font-semibold leading-[130%]">
                  <li>Sustainable, Built-to-Last Materials</li>
                </ul>
                <p className="text-[#474646]">
                  Our cubicles are crafted using eco-conscious materials
                  designed for durability, comfort, and long-term use.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <ul className="list-disc m-0 ml-5 text-[#1E1D1D] text-[20px] font-semibold leading-[130%]">
                  <li>Flexible Buyback & Upgrade Options</li>
                </ul>
                <p className="text-[#474646]">
                  Need a change later? Our buyback program lets you refresh your
                  space without starting from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
