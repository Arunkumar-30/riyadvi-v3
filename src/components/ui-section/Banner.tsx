"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const BannerSlider = () => {
  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
        const top = line.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          line.classList.add("black_red");
        } else {
          line.classList.remove("black_red");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Line element positioned relative to viewport */}

      <div className="relative banner-image">
        <div className="line"></div>
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between transition-transform duration-700 ease-in-out h-auto sm:h-[500px] w-full px-6 sm:px-12 py-10 gap-10">
            {/* Left Content */}
            <div
              className="text-white max-w-3xl space-y-6 text-start sm:text-left"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Build, Grow & Transform Your Business with Digital Solutions
                That Work
              </h1>
              <p className="text-sm sm:text-lg leading-relaxed">
                From custom websites to high-converting ad campaigns — we help
                startups and businesses go digital the smart way.
              </p>
              <div className="flex justify-start">
                <Link
                  href="/contact-us"
                  className="group rounded-full duration-500 text-white p-3 bg-[#D4AF37] w-[230px] flex items-center justify-center gap-4 text-sm border-none"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-white w-[18px] h-[18px] md:w-[32px] md:h-[32px] group-hover:bg-[#5891E010] transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                  </svg>
                  Book Free Consultation
                </Link>
              </div>
            </div>

            {/* Right-side image */}
            <div
              className="flex justify-center sm:justify-end"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                src="/home/lap.png"
                width={600}
                height={600}
                alt="lap-home"
                className="object-contain w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
