'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: '1. Space Planning & Design',
    description:
      'We have design experts on hand ready to help you plan your space and give you the look you want. Click to see our design process!',
    link: '/services',
    image: '/assets/site-images/home/service1.png',
  },
  {
    title: '2. Project Management',
    description:
      'Our experienced project managers oversee every detail, ensuring your workspace project is delivered on time and within budget.',
    link: '/services',
    image: '/assets/site-images/home/service1.png',
  },
  {
    title: '3. Relocations',
    description:
      'We handle office moves with care and efficiency, minimizing downtime and ensuring a smooth transition to your new space.',
    link: '/services',
    image: '/assets/site-images/home/service1.png',
  },
  {
    title: '4. Liquidation',
    description:
      'We help you recover value from surplus or outdated office furniture with our professional liquidation services.',
    link: '/services',
    image: '/assets/site-images/home/service1.png',
  },
  {
    title: '5. Furniture Installation',
    description:
      'Our skilled team assembles and installs your office furniture quickly and correctly, so you can get back to work.',
    link: '/services',
    image: '/assets/site-images/home/service1.png',
  },
];

export default function Service() {
  const [activeItem, setActiveItem] = useState('item-0');

  return (
    <div className="bg-white px-4">
      <div className="container mx-auto py-10 sm:py-16 md:py-20 xl:py-[120px] flex flex-col gap-12">
        <h2 className="text-center text-[#1E1D1D]">
          From Idea to Installation
        </h2>

        <div className="w-full">
          {services.map((service, idx) => {
            const id = `item-${idx}`;
            const isOpen = activeItem === id;

            return (
              <div
                key={id}
                className={`group relative transition-all duration-500 ease-in-out ${
                  isOpen ? 'bg-[#F4F4FF]' : 'bg-white'
                }`}
              >
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    !isOpen ? 'border-b border-[#2B3DFF]/30' : ''
                  }`}
                >
                  <div
                    className="flex flex-col-reverse md:flex-row w-full cursor-pointer"
                    onClick={() => setActiveItem(isOpen ? '' : id)}
                  >
                    <div className="flex-1 px-4 py-6 md:px-6 md:py-8 xl:py-12 flex flex-col justify-center gap-4 transition-all duration-500">
                      <div className="flex items-start justify-between w-full">
                        <h3 className="font-semibold text-[#1E1D1D] text-base md:text-lg">
                          {service.title}
                        </h3>
                        {!isOpen && (
                          <Link
                            href={service.link}
                            className="text-[#2B3DFF] text-sm font-medium flex items-center gap-1 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 12L12 4"
                                stroke="#2B3DFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M6 4H12V10"
                                stroke="#2B3DFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>

                      {isOpen && (
                        <>
                          <p className="max-w-[533px] text-[#474646] text-sm md:text-base">
                            {service.description}
                          </p>
                          <Link
                            href={service.link}
                            className="text-[#2B3DFF] text-sm font-medium flex items-center gap-1 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 12L12 4"
                                stroke="#2B3DFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M6 4H12V10"
                                stroke="#2B3DFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </>
                      )}
                    </div>

                    {isOpen && service.image && (
                      <div className="w-full md:w-[360px] transition-opacity duration-500 ease-in-out">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full max-h-[240px] md:max-h-none object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
