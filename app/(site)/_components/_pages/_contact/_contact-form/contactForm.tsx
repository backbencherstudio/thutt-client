'use client'
import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    roomSize: "",
    message: "",
    preferredContact: "email",
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      setFiles((e.target as HTMLInputElement).files);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, preferredContact: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const templateParams: any = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      projectType: form.projectType,
      roomSize: form.roomSize,
      message: form.message,
      preferredContact: form.preferredContact,
    };
    if (files && files.length > 0) {
      templateParams.fileCount = files.length;
    }
    try {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        roomSize: "",
        message: "",
        preferredContact: "email",
      });
      setFiles(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="bg-[#EAECFFB2] px-4">
      <div className="container py-10 sm:py-16 md:py-20 xl:py-[120px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="max-w-[484px] flex flex-col gap-6 lg:gap-8">
              <h2 className=" text-[#1E1D1D] text-left">
                Get a Custom Office Furniture Quote
              </h2>
              <div className="flex flex-col gap-1 p-6 md:p-8 bg-white border border-[#717DFF]">
                <div className="flex items-center justify-start gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M17.6252 14.674L20.2682 16.25C20.8142 16.576 21.0961 17.21 20.9711 17.834C20.4601 20.393 17.8902 22.033 15.3732 21.342C9.4342 19.712 4.79509 15.087 3.15909 9.135C2.46709 6.617 4.10519 4.04498 6.66519 3.53298L6.68204 3.52999C7.30704 3.40499 7.94419 3.68799 8.26919 4.23699L9.83218 6.876C10.3882 7.814 10.112 9.02398 9.20303 9.62798L7.54214 10.733C8.71414 13.54 10.9541 15.789 13.7531 16.959L14.8681 15.294C15.4771 14.387 16.6872 14.115 17.6252 14.674ZM17.7502 10.5C17.7502 8.43199 16.0672 6.74999 14.0002 6.74999C13.5862 6.74999 13.2502 7.08599 13.2502 7.49999C13.2502 7.91399 13.5862 8.24999 14.0002 8.24999C15.2402 8.24999 16.2502 9.25899 16.2502 10.5C16.2502 10.914 16.5862 11.25 17.0002 11.25C17.4142 11.25 17.7502 10.914 17.7502 10.5ZM20.0002 11.25C19.5862 11.25 19.2502 10.914 19.2502 10.5C19.2502 7.60499 16.8952 5.24999 14.0002 5.24999C13.5862 5.24999 13.2502 4.91399 13.2502 4.49999C13.2502 4.08599 13.5862 3.74999 14.0002 3.74999C17.7222 3.74999 20.7502 6.77799 20.7502 10.5C20.7502 10.914 20.4142 11.25 20.0002 11.25Z"
                      fill="#2B3DFF"
                    />
                  </svg>
                  <p className="">
                    <span className="font-semibold text-[#1E1D1D]">Call</span>
                  </p>
                </div>
                <p className="text-[#474747]">
                  <a
                    href="tel:12345678901"
                    className="hover:text-[#2B3DFF] transition-colors"
                  >
                    123 4567 8901
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-1 p-6 md:p-8 bg-white border border-[#717DFF]">
                <div className="flex items-center justify-start gap-1">
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
                  <p className="">
                    <span className="font-semibold text-[#1E1D1D]">Email</span>
                  </p>
                </div>
                <p className="text-[#474747]">
                  <a
                    href="mailto:medusa@gmail.com"
                    className="hover:text-[#2B3DFF] transition-colors"
                  >
                    medusa@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="max-w-[796px] w-full p-5 flex flex-col gap-4 bg-white border border-[#717DFF]">
              <div className="flex flex-col gap-3 items-start justify-start p-3 bg-white border border-[#717DFF]">
                <div className="w-full font-bold text-[18px] ">Basic Information</div>
                <div className="flex w-full flex-col gap-3">
                  <p className="text-[16px] text-[#474747]">Full Name</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="w-full h-10 md:w-1/2 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal placeholder:text-[#6C6B6B]"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full h-10 md:w-1/2 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal placeholder:text-[#6C6B6B]"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <div className="w-full grid grid-cols-1 gap-3">
                    <p className="text-[16px] text-[#474747]">Email</p>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter email..."
                      className="w-full h-10 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal placeholder:text-[#6C6B6B]"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full grid grid-cols-1 gap-3">
                    <p className="text-[16px] text-[#474747]">Phone</p>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Enter number..."
                      className="w-full h-10 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal placeholder:text-[#6C6B6B]"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start p-3 bg-white border border-[#717DFF]">
                <div className="w-full font-bold text-[18px] ">Space Details</div>
                <div className="flex flex-col sm:flex-row w-full gap-3">
                  <div className="w-full grid grid-cols-1 gap-3">
                    <p className="text-[16px] text-[#474747]">Project Type</p>
                    <select
                      className="w-full h-10 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal text-[#1E1D1D]"
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Enter Project Type...</option>
                      <option value="office">Office</option>
                      <option value="home">Home</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="w-full grid grid-cols-1 gap-3">
                    <p className="text-[16px] text-[#474747]">Room Size</p>
                    <select
                      className="w-full h-10 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal text-[#1E1D1D]"
                      name="roomSize"
                      required
                      value={form.roomSize}
                      onChange={handleChange}
                    >
                      <option value="">Enter Room Size...</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 gap-3">
                  <p className="text-[16px] text-[#474747]">Upload Room Photos</p>
                  <label className="w-full px-3 py-2 flex flex-col items-center justify-center border border-[#BDC3FF] bg-[#EAECFF] h-20 cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      required
                      ref={fileInputRef}
                      onChange={handleChange}
                    />
                    <span className="text-[#6C6B6B] me-auto">
                      Upload Room Photos
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 3.25H6C3.582 3.25 2.25 4.582 2.25 7V17C2.25 19.418 3.582 20.75 6 20.75H18C20.418 20.75 21.75 19.418 21.75 17V7C21.75 4.582 20.418 3.25 18 3.25ZM6 4.75H18C19.577 4.75 20.25 5.423 20.25 7V13.189L16.24 9.17993C15.58 8.51893 14.42 8.51893 13.76 9.17993L9 13.939L8.23999 13.1799C7.57999 12.5189 6.42001 12.5189 5.76001 13.1799L3.75 15.1899V7C3.75 5.423 4.423 4.75 6 4.75ZM18 19.25H6C4.528 19.25 3.85197 18.654 3.76697 17.293L6.81995 14.24C6.94695 14.114 7.05196 14.114 7.17896 14.24L8.11804 15.179C8.58504 15.647 9.41403 15.646 9.87903 15.179L14.819 10.239C14.946 10.113 15.051 10.113 15.178 10.239L20.248 15.3091V17C20.25 18.577 19.577 19.25 18 19.25ZM6.75 9C6.75 8.31 7.31 7.75 8 7.75C8.69 7.75 9.25 8.31 9.25 9C9.25 9.69 8.69 10.25 8 10.25C7.31 10.25 6.75 9.69 6.75 9Z"
                        fill="#2B3DFF"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start p-3 bg-white border border-[#717DFF]">
                <div className="w-full font-bold text-[18px] ">Message</div>
                <textarea
                  className="w-full h-20 px-3 py-2 bg-[#EAECFF] border border-[#BDC3FF] font-normal placeholder:text-[#6C6B6B] resize-none"
                  name="message"
                  placeholder="Enter Message here..."
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start p-3 bg-white border border-[#717DFF]">
                <div className="w-full font-bold text-[18px] ">Preferred Contact Method</div>
                <div className="flex gap-6 w-full">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      size={20}
                      checked={form.preferredContact === "email"}
                      onChange={handleRadioChange}
                      className="accent-[#2B3DFF]"
                      required
                    />
                    <span>Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      size={20}
                      checked={form.preferredContact === "phone"}
                      onChange={handleRadioChange}
                      className="accent-[#2B3DFF]"
                      required
                    />
                    <span>Phone Number</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#2B3DFF] text-white px-4 py-2 cursor-pointer">
                Contact Now
              </button>
              {status && (
                <div className={`w-full text-center mt-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
