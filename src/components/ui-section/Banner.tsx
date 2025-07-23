"use client";

import Image from "next/image";
import React from "react";

const BannerSlider = () => {
  return (
    <>
      <div className="relative banner-image ">
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center justify-start transition-transform duration-700 ease-in-out  h-[500px] w-full px-6 sm:px-12">
            {/* Left-side content */}
            <div className="text-white max-w-3xl space-y-6">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Build, Grow & Transform Your Business with Digital Solutions
                That Work
              </h1>
              <p className="text-sm sm:text-lg">
                From custom websites to high-converting ad campaigns — we help
                startups and businesses go digital the smart way.
              </p>
              <button
                className="group rounded-full duration-500 text-[#fff] p-2 bg-[#D4AF37]  w-[230px] flex items-center gap-4  text-[14px] border-none"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#fff] md:p-1 w-[18px] h-[18px] md:w-[32px] md:h-[32px] group-hover:bg-[#5891E010] bg-[#D4AF37] transition-transform duration-300 group-hover:rotate-43 group-hover:translate-x-0.5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
                Book Free Consultation
              </button>
            </div>
            {/* Left-side content */}
            <div className="text-white max-w-3xl space-y-6">
              <Image
                src="/home/lap.png"
                width={600}
                height={600}
                alt="lap-home"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
