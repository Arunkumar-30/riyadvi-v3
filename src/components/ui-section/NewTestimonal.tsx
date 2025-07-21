"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  return (
    <div className="max-w-7xl mx-auto p-8 py-10 ">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-4">
          <p className="text-[16px] font-bold uppercase text-[#D4AF37]">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold text-black">
            What Our Clients Say
          </h2>
        </div>
      </div>

      <div className="mt-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="p-6 bg-white border rounded-lg h-full flex flex-col w-[590px]">
              <div className="flex items-center mb-4">
                <div>
                  <Image
                    src="/home/about-1.jpg"
                    alt="Testimonial Image"
                    width={206}
                    height={206}
                    className="w-44 h-44 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 ml-4 space-y-4">
                  <div className="flex space-x-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Arunkumar
                    </h3>
                    <p className="text-lg text-[#D4AF37]">Frond Developer</p>
                  </div>
                  <p className="flex space-x-1">
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                    <Image
                      src="/gif/star.png"
                      alt="star-1"
                      width={10}
                      height={10}
                      className="w-5 h-5 object-cover "
                    />
                  </p>
                  <p className="text-gray-600">
                    Created immersive 3D architectural models presented at an
                    international real estate expo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
