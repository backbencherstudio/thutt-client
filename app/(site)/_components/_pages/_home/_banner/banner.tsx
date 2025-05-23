import Image from "next/image";
import React from "react";
import Button from "../../../_reusable/_button/button";

export default function Banner() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('/assets/site-images/home/banner.png')",
      }}
    >
      <div className="container mx-auto py-28 md:py-80 md:px-0">
        <div className="max-w-[624px] flex flex-col gap-4 items-start">
          <h1 className="text-white">Create Workspaces That Work for You</h1>
          <p className="text-white text-[20px] font-medium mb-8">
            Explore new & pre-owned office cubicles and furniture solutions
          </p>
          <Button text="Browse Cubicles" href="/category/new-cubicles" />
        </div>
      </div>
    </div>
  );
}
