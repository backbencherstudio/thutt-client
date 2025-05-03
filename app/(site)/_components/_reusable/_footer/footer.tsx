import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <div className="bg-white">
      <div className="container flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-6 px-4 pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-12">
        <div className="max-w-[378px] flex flex-col items-start justify-start gap-10">
          <div className="flex flex-col items-start gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="Brand Logo"
                  width={128}
                  height={40}
                  className="w-full h-full"
                />
              </Link>
            </div>
            <p className="text-[#6C6B6B]">
              Your trusted source for new and pre-owned office furniture.
              Quality, comfort, and service—delivered.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[#1E1D1D] text-[20px] font-medium leading-[130%]">
              Stay Connected
            </div>
            <p className="text-[#6C6B6B] mb-1">
              Follow us on social media for deals and updates.
            </p>
            <div className="flex items-center justify-start gap-3">
              <Link href="/" className="text-[#6C6B6B]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M19.4995 0.0498047H6.49984C2.92525 0.0498047 0 2.97505 0 6.54965V19.55C0 23.1236 2.92525 26.0498 6.49984 26.0498H19.4995C23.0741 26.0498 25.9994 23.1236 25.9994 19.55V6.54965C25.9994 2.97505 23.0741 0.0498047 19.4995 0.0498047ZM23.8326 19.55C23.8326 21.9387 21.8895 23.8831 19.4995 23.8831H6.49984C4.11083 23.8831 2.16672 21.9387 2.16672 19.55V6.54965C2.16672 4.16032 4.11083 2.21652 6.49984 2.21652H19.4995C21.8895 2.21652 23.8326 4.16032 23.8326 6.54965V19.55Z"
                    fill="#2B3DFF"
                  />
                  <path
                    d="M20.0431 7.63224C20.9406 7.63224 21.6681 6.90473 21.6681 6.00728C21.6681 5.10984 20.9406 4.38232 20.0431 4.38232C19.1457 4.38232 18.4182 5.10984 18.4182 6.00728C18.4182 6.90473 19.1457 7.63224 20.0431 7.63224Z"
                    fill="#2B3DFF"
                  />
                  <path
                    d="M12.9998 6.5498C9.40931 6.5498 6.5 9.45944 6.5 13.0496C6.5 16.6385 9.40931 19.5501 12.9998 19.5501C16.5894 19.5501 19.4997 16.6385 19.4997 13.0496C19.4997 9.45944 16.5894 6.5498 12.9998 6.5498ZM12.9998 17.3834C10.6069 17.3834 8.66672 15.4432 8.66672 13.0496C8.66672 10.6561 10.6069 8.71652 12.9998 8.71652C15.3928 8.71652 17.333 10.6561 17.333 13.0496C17.333 15.4432 15.3928 17.3834 12.9998 17.3834Z"
                    fill="#2B3DFF"
                  />
                </svg>
              </Link>
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M17.8621 28.046V17.118H21.5487L22.0967 12.8394H17.8621V10.114C17.8621 8.87936 18.2061 8.03403 19.9781 8.03403H22.2234V4.21936C21.1309 4.10229 20.0328 4.04575 18.9341 4.05003C15.6754 4.05003 13.4381 6.03936 13.4381 9.69136V12.8314H9.77539V17.11H13.4461V28.046H17.8621Z"
                    fill="#2B3DFF"
                  />
                </svg>
              </Link>
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M23.8552 4.0498H27.917L19.0452 14.2159L29.4828 28.0498H21.3112L14.9106 19.6581L7.58648 28.0498H3.52303L13.0121 17.1753L3 4.0498H11.3801L17.165 11.7182L23.8552 4.0498ZM22.4317 25.6134H24.6828L10.1553 6.35877H7.74207L22.4317 25.6134Z"
                    fill="#2B3DFF"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-7">
          <div className="text-[#1E1D1D] text-[20px] font-medium leading-[130%]">
            Quick Links
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Home
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Category
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Services
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Portffolio
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-7">
          <div className="text-[#1E1D1D] text-[20px] font-medium leading-[130%]">
            Services
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Space Planning & Design
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Project management
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Relocations
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Liquidation
            </Link>
            <Link href={"/"} className="text-[#6C6B6B] leading-[180%]">
              Furniture Installation
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-7">
          <div className="text-[#1E1D1D] text-[20px] font-medium leading-[130%]">
            Contact Us
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <Link
              href={"tel:123 4567 8901"}
              className="text-[#6C6B6B] leading-[180%]"
            >
              <div className="flex items-center gap-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.6249 14.6742L20.268 16.2502C20.814 16.5762 21.0959 17.2102 20.9709 17.8342C20.4599 20.3932 17.89 22.0332 15.373 21.3422C9.43395 19.7122 4.79484 15.0872 3.15884 9.13524C2.46684 6.61724 4.10495 4.04522 6.66495 3.53322L6.68179 3.53023C7.30679 3.40523 7.94395 3.68823 8.26895 4.23723L9.83194 6.87624C10.3879 7.81424 10.1118 9.02422 9.20279 9.62822L7.5419 10.7332C8.7139 13.5402 10.9538 15.7892 13.7528 16.9592L14.8678 15.2942C15.4768 14.3872 16.6869 14.1152 17.6249 14.6742ZM17.7499 10.5002C17.7499 8.43223 16.0669 6.75023 13.9999 6.75023C13.5859 6.75023 13.2499 7.08623 13.2499 7.50023C13.2499 7.91423 13.5859 8.25023 13.9999 8.25023C15.2399 8.25023 16.2499 9.25923 16.2499 10.5002C16.2499 10.9142 16.5859 11.2502 16.9999 11.2502C17.4139 11.2502 17.7499 10.9142 17.7499 10.5002ZM19.9999 11.2502C19.5859 11.2502 19.2499 10.9142 19.2499 10.5002C19.2499 7.60523 16.8949 5.25023 13.9999 5.25023C13.5859 5.25023 13.2499 4.91423 13.2499 4.50023C13.2499 4.08623 13.5859 3.75023 13.9999 3.75023C17.7219 3.75023 20.7499 6.77823 20.7499 10.5002C20.7499 10.9142 20.4139 11.2502 19.9999 11.2502Z"
                    fill="#2B3DFF"
                  />
                </svg>
                <p className="font-medium text-[#474646]">Call</p>
              </div>
              <p className="text-[#6C6B6B]">123 4567 8901</p>
            </Link>
            <Link
              href={"mailto:medusa@gmail.com"}
              className="text-[#6C6B6B] leading-[180%]"
            >
              <div className="flex items-center gap-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M18 5.5H6C4 5.5 3 6.5 3 8.5V17.5C3 19.5 4 20.5 6 20.5H18C20 20.5 21 19.5 21 17.5V8.5C21 6.5 20 5.5 18 5.5ZM17.9409 10.106L13.0291 13.678C12.7211 13.902 12.36 14.014 12 14.014C11.64 14.014 11.2779 13.902 10.9709 13.679L6.05908 10.106C5.72408 9.863 5.65004 9.393 5.89404 9.058C6.13704 8.724 6.60389 8.64801 6.94189 8.89301L11.854 12.465C11.942 12.528 12.059 12.529 12.147 12.465L17.0591 8.89301C17.3961 8.64801 17.8639 8.724 18.1069 9.058C18.3509 9.394 18.2759 9.863 17.9409 10.106Z"
                    fill="#2B3DFF"
                  />
                </svg>
                <p className="font-medium text-[#474646]">Email</p>
              </div>
              <p className="text-[#6C6B6B]">medusa@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 border-t border-t-[#9DA6FF]">
        <p className="text-[#1E1D1D] text-center">
          Copyright © GCS Group FREEDOM OFFICE FURNITURE . All rights reserved.
        </p>
      </div>
    </div>
  );
}
