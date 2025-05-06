"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonialsData = [
  {
    quote: "A seamless experience that exceeded expectations.",
    content:
      "From start to finish, the team was incredible. They helped us plan a functional office layout with a great team, delivered everything on time, and the installation was seamless. Our team loves the new space!",
    name: "Sarah L.",
    role: "Office Manager at BrightPath Solutions",
    image: "/assets/site-images/home/testimonial.png",
  },
  {
    quote: "Truly transformed our workspace easily and efficiently.",
    content:
      "The transformation of our workspace was outstanding. The team listened to our needs, designed a beautiful, and managed every detail. The process was smooth, and the results have truly elevated our work environment.",
    name: "Mark D.",
    role: "Founder of VisionWare",
    image: "/assets/site-images/home/cta.png",
  },
  {
    quote: "Professional, timely, and creative with a great team.",
    content:
      "We were impressed by their professionalism and creativity. Every step, from planning to installation. The new office has boosted our team's morale and productivity, and we couldn't be happier with the outcome.",
    name: "Rachel K.",
    role: "HR Lead at SynapseTech",
    image: "/assets/site-images/home/portfolio1.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonialsData[index];

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#EAECFFB2] px-4">
      <div className="container py-10 sm:py-16 md:py-20 xl:py-[120px]">
        <div className="flex flex-col justify-center gap-12">
          <h2 className="text-[#1E1D1D] text-center text-2xl md:text-4xl font-semibold">
            Words from Happy Workspaces
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src={testimonial.image}
              alt="Office space"
              width={640}
              height={480}
            />
            <div className="md:w-1/2 w-full xl:w-[560px] flex flex-col justify-center">
              <div className="text-xl md:text-2xl font-bold mb-3 text-[#1E1D1D]">
                {testimonial.quote}
              </div>
              <p className="text-[#4B4B4B] mb-5">{testimonial.content}</p>
              <div className="flex flex-col gap-1 mb-5">
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_5267_1866)">
                        <path
                          d="M10.8967 1.05743C10.7282 0.716099 10.3806 0.5 9.99996 0.5C9.61932 0.5 9.27168 0.716099 9.10322 1.05743L6.57408 6.18205L0.918731 7.00382C0.542045 7.05855 0.229098 7.32239 0.111473 7.68441C-0.00615235 8.04642 0.0919447 8.44382 0.364517 8.70951L4.45676 12.6985L3.49071 18.331C3.42637 18.7061 3.58059 19.0853 3.88854 19.309C4.19648 19.5328 4.60475 19.5623 4.94166 19.3851L9.99996 16.7258L15.0583 19.3851C15.3952 19.5623 15.8034 19.5328 16.1114 19.309C16.4193 19.0853 16.5735 18.7061 16.5092 18.331L15.5432 12.6985L19.6354 8.70951C19.908 8.44382 20.0061 8.04642 19.8884 7.68441C19.7708 7.32239 19.4579 7.05855 19.0812 7.00382L13.4258 6.18205L10.8967 1.05743Z"
                          fill="#FAAD14"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5267_1866">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ))}
                </div>
                <p className="text-[#4B4B4B]">{testimonial.role}</p>
              </div>
              <div className="flex items-start justify-between gap-6">
                <div className="font-semibold text-[#1E1D1D] text-[18px]">
                  {testimonial.name}
                </div>
                <div className="relative flex justify-end mt-8 gap-8 h-[33px]">
                  <button
                    onClick={prev}
                    className="transition transform hover:scale-105 cursor-pointer mt-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.99976 6L16.9998 5.99976"
                        stroke="#9DA6FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.99976 1L1.70686 5.29289C1.37353 5.62623 1.20686 5.79289 1.20686 6C1.20686 6.20711 1.37353 6.37377 1.70686 6.70711L5.99976 11"
                        stroke="#9DA6FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="transition transform hover:scale-105 cursor-pointer mb-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M16.0002 6L1.00024 6"
                        stroke="#2B3DFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 1L16.2929 5.29289C16.6262 5.62623 16.7929 5.79289 16.7929 6C16.7929 6.20711 16.6262 6.37377 16.2929 6.70711L12 11"
                        stroke="#2B3DFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M1 1L34 34"
                        stroke="#9DA6FF"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
