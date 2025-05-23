"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import Button from "@/app/(site)/_components/_reusable/_button/button";
export default function officeCubicles() {
  const [cubicles, setCubicles] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");
  const [page, setPage] = useState(1);
  const perPage = 24;

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setCubicles(data["Office Furniture"] || []));
  }, []);

  // Filter cubicles by search
  let filteredCubicles = cubicles.filter((cubicle) =>
    cubicle.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by filter
  if (filter === "price") {
    filteredCubicles = [...filteredCubicles].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
      return priceA - priceB;
    });
  } else if (filter === "az") {
    filteredCubicles = [...filteredCubicles].sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "rating") {
    filteredCubicles = [...filteredCubicles].sort((a, b) => b.rating - a.rating);
  } else if (filter === "stock") {
    filteredCubicles = [...filteredCubicles].sort((a, b) => b.stock - a.stock);
  }

  const totalPages = Math.ceil(filteredCubicles.length / perPage);
  const paginatedCubicles = filteredCubicles.slice((page - 1) * perPage, page * perPage);

  // Reset to page 1 when search or filter changes
  React.useEffect(() => {
    setPage(1);
  }, [search, filter]);

  return (
    <div className="bg-white px-4">
      <div className="container mx-auto py-10 sm:py-16 md:py-20 xl:py-[120px] flex flex-col gap-12">
        <h2 className="text-center text-[#1E1D1D]">
          Explore Our Office Furniture Options
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="w-[360px]">
              <div className="text-[#1D1F2C] text-[18px] leading-[180%] font-semibold">
                Find Specific Furniture
              </div>
              <div className="mt-2 w-full max-w-md">
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    placeholder="Search now..."
                    className="px-4 py-2 h-[45px]"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <span className="absolute right-4 text-muted-foreground cursor-pointer">
                    <Search className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[280px]">
              <div className="text-[#1D1F2C] text-[18px] leading-[180%] font-semibold mb-2">
                Filter
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full px-4 py-2 border border-[#D2D2D5] bg-transparent focus:ring-0 focus:outline-none">
                  <SelectValue placeholder="Filter By:" className="text-[#1D1F2C] text-[15px] font-medium" />
                  <span className="ml-auto flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <g clipPath="url(#clip0_5268_2361)">
                        <path d="M0 5.5C0 5.23478 0.105357 4.98043 0.292893 4.79289C0.48043 4.60536 0.734784 4.5 1 4.5H19C19.2652 4.5 19.5196 4.60536 19.7071 4.79289C19.8946 4.98043 20 5.23478 20 5.5C20 5.76522 19.8946 6.01957 19.7071 6.20711C19.5196 6.39464 19.2652 6.5 19 6.5H1C0.734784 6.5 0.48043 6.39464 0.292893 6.20711C0.105357 6.01957 0 5.76522 0 5.5ZM3 10.5C3 10.2348 3.10536 9.98043 3.29289 9.79289C3.48043 9.60536 3.73478 9.5 4 9.5H16C16.2652 9.5 16.5196 9.60536 16.7071 9.79289C16.8946 9.98043 17 10.2348 17 10.5C17 10.7652 16.8946 11.0196 16.7071 11.2071C16.5196 11.3946 16.2652 11.5 16 11.5H4C3.73478 11.5 3.48043 11.3946 3.29289 11.2071C3.10536 11.0196 3 10.7652 3 10.5ZM8 14.5C7.73478 14.5 7.48043 14.6054 7.29289 14.7929C7.10536 14.9804 7 15.2348 7 15.5C7 15.7652 7.10536 16.0196 7.29289 16.2071C7.48043 16.3946 7.73478 16.5 8 16.5H12C12.2652 16.5 12.5196 16.3946 12.7071 16.2071C12.8946 16.0196 13 15.7652 13 15.5C13 15.2348 12.8946 14.9804 12.7071 14.7929C12.5196 14.6054 12.2652 14.5 12 14.5H8Z" fill="#1D1F2C"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_5268_2361">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price">Price: Low to High</SelectItem>
                  <SelectItem value="az">Letter: A-Z</SelectItem>
                  <SelectItem value="rating">Based on Rating</SelectItem>
                  <SelectItem value="stock">Based on Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCubicles.map((cubicle) => (
              <div className="w-full" key={cubicle.id}>
                <Image
                  src={cubicle.image}
                  alt={cubicle.name}
                  width={418}
                  height={405}
                  className="w-full h-[300px] sm:h-[405px] object-cover mb-4"
                />
                {/* <div className="flex items-center gap-[2px] mb-2">
                  {Array.from({ length: cubicle.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_5267_2513)">
                        <path d="M10.8967 1.05743C10.7282 0.716099 10.3806 0.5 9.99996 0.5C9.61932 0.5 9.27168 0.716099 9.10322 1.05743L6.57408 6.18205L0.918731 7.00382C0.542045 7.05855 0.229098 7.32239 0.111473 7.68441C-0.00615235 8.04642 0.0919447 8.44382 0.364517 8.70951L4.45676 12.6985L3.49071 18.331C3.42637 18.7061 3.58059 19.0853 3.88854 19.309C4.19648 19.5328 4.60475 19.5623 4.94166 19.3851L9.99996 16.7258L15.0583 19.3851C15.3952 19.5623 15.8034 19.5328 16.1114 19.309C16.4193 19.0853 16.5735 18.7061 16.5092 18.331L15.5432 12.6985L19.6354 8.70951C19.908 8.44382 20.0061 8.04642 19.8884 7.68441C19.7708 7.32239 19.4579 7.05855 19.0812 7.00382L13.4258 6.18205L10.8967 1.05743Z" fill="#FAAD14"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_5267_2513">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  ))}
                </div> */}
                <div className="text-[#1D1F2C] text-[24px] leading-[120%] font-semibold mb-4">
                  {cubicle.name}
                </div>
                {/* <div className="text-[#1D1F2C] text-[24px] leading-[120%] font-medium mb-1">
                  {cubicle.price}
                </div>
                <p className="text-[#62636C]">
                  Only <span className="font-medium">{cubicle.stock}</span> Left in stock
                </p> */}
                <div className="flex items-start justify-start">
                  <Button text="Add To Quote" href={`/contact?product=${encodeURIComponent(cubicle.name)}`} />
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-4 sm:px-6 py-2 sm:py-3 border border-[#1A1AFF] rounded transition-all text-[#1A1AFF] bg-white text-base font-normal flex items-center gap-2 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f0f3ff]'}`}
            >
              <span>&lt;</span> Back
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-14 h-12 border border-[#1A1AFF] rounded transition-all text-base font-normal flex items-center justify-center ${page === i + 1 ? 'bg-[#1A1AFF] text-white' : 'bg-white text-[#1A1AFF] hover:bg-[#f0f3ff]'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded transition-all text-white bg-[#2B3DFF] text-base font-normal flex items-center gap-2 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f0f3ff]'}`}
            >
              Next <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
