"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Deep Kakkad",
    feedback:
      "Great people to work with. They do awesome work for web-development.",
  },
  {
    name: "Pradeep Subramani",
    feedback:
      "Aryu Enterprises delivered top-notch solutions with great support highly recommended!",
  },
  {
    name: "Andy Pierre",
    feedback: "Very professional. Great customer service. Excellent work.",
  },
  {
    name: "Aaron Sakhai",
    feedback:
      "A very talented, family-owned, web development company. Would gladly work with again.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="banner-image  mt-10">
      <div className="py-16 mt-5 ">
        <div className="w-[90%] mx-auto flex justify-around items-center max-md:flex-col max-md:gap-8">
          {/* Left Text */}
          <div
            className="w-full md:w-[40%]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-[12px] font-bold uppercase text-[#D4AF37] inline-flex items-center p-2">
              Testimonials
            </h2>

            <h3 className="text-white text-[44px] max-md:text-[28px] font-semibold mt-2 md:leading-12">
              What Our <span className="text-[#D4AF37]">Clients</span> Say
            </h3>
          </div>

          {/* Swiper Slider */}
          <div
            className="w-full md:w-[40%] max-md:mt-6"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="h-[400px] w-full flex justify-center items-center">
              <Swiper
                direction="vertical"
                slidesPerView={2}
                spaceBetween={20}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                className="w-full h-full"
              >
                {testimonials.map((item, idx) => {
                  const isActive = idx === activeIndex % testimonials.length;
                  return (
                    <SwiperSlide
                      key={idx}
                      className="flex justify-center items-center"
                    >
                      <div
                        className={`w-[350px] p-5 flex transition-all duration-300 ease-in-out bg-white text-[#484A61] border ${
                          isActive
                            ? "ml-0 opacity-100 border-l-[20px] border-yellow-900"
                            : "ml-[100px] opacity-50 border-l-[20px] border-gray-300"
                        }`}
                      >
                        <div className="flex flex-col gap-2">
                          <span className="text-[18px] font-semibold">
                            {item.name}
                          </span>
                          <p className="text-[16px]">{item.feedback}</p>
                        </div>
                        <div className="text-yellow-900 w-[32px] ml-auto">
                          <FaQuoteRight size={32} />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
