"use client";

import Link from "next/link";
import HeadingComponent from "./Heading";

const ServiceComponent = () => {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto py-10 mt-10 ">
          <HeadingComponent
            heading="Discover Our Services"
            description="What We Do Best"
          />
        </div>

        <div>
          <div className="flex justify-center max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-8 max-w-7xl mx-auto mt-5 lg:mt-10">
              {/* Card 1 */}
              <div
                className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      alt="expert-team"
                      className="h-full w-full"
                      src="/gif/responsive.gif"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg lg:text-xl xl:text-2xl font-[500] pb-2">
                      Web Development
                    </h2>
                    <p className="text-[#585858] text-md xl:text-lg mt-5 font-[400]">
                      Fast, responsive websites that convert visitors into
                      customers. We ensure seamless performance across all
                      devices and browsers.
                    </p>
                    <p className="mt-4">
                      <Link
                        href="#"
                        className="group inline-flex text-lg items-center text-[#D4AF37] font-semibold relative overflow-hidden"
                      >
                        Know More
                        <span className="ml-2 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-bounce">
                          →
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>

              {/* Card 2 */}
              <div
                className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      alt="flexibility"
                      className="h-full w-full"
                      src="/gif/smartphone-coding.gif"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="ttext-lg lg:text-xl xl:text-2xl font-[500] pb-2">
                      Mobile App Development
                    </h2>
                    <p className="text-[#585858] text-md xl:text-lg mt-5 font-[400]">
                      Powerful mobile apps tailored for iOS & Android users. We
                      focus on performance, user experience, and seamless
                      cross-platform functionality.
                    </p>
                    <p className="mt-4">
                      <Link
                        href="#"
                        className="group inline-flex text-lg items-center text-[#D4AF37] font-semibold relative overflow-hidden"
                      >
                        Know More
                        <span className="ml-2 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-bounce">
                          →
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>

              {/* Card 3 */}
              <div
                className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-left"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      alt="timely-delivery"
                      className="h-full w-full"
                      src="/gif/advertising.gif"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg lg:text-xl xl:text-2xl font-[500] pb-2">
                      Digital Marketing
                    </h2>
                    <p className="text-[#585858] text-md xl:text-lg mt-5 font-[400]">
                      Meta Ads, Google Ads, SEO — everything you need to grow
                      online. We drive traffic, boost visibility, and turn
                      clicks into customers.
                    </p>
                    <p className="mt-4">
                      <Link
                        href="#"
                        className="group inline-flex text-lg items-center text-[#D4AF37] font-semibold relative overflow-hidden"
                      >
                        Know More
                        <span className="ml-2 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-bounce">
                          →
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>

              {/* Card 4 */}
              <div
                className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-right"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      alt="global-delivery"
                      className="h-full w-full"
                      src="/gif/3d-scanning.gif"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg lg:text-xl xl:text-2xl font-[500] pb-2">
                      3D Modeling & Design
                    </h2>
                    <p className="text-[#585858] text-md xl:text-lg mt-5 font-[400]">
                      Visualize your ideas with stunning 3D representations.
                      From product models to architectural designs, we bring
                      concepts to life.
                    </p>
                    <p className="mt-4">
                      <Link
                        href="#"
                        className="group inline-flex text-lg items-center text-[#D4AF37] font-semibold relative overflow-hidden"
                      >
                        Know More
                        <span className="ml-2 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-bounce">
                          →
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 ">
            <Link
              href="/service/web-development"
              className="group duration-500 rounded-full text-[#fff] p-2 bg-[#D4AF37]  w-auto pr-8 flex items-center gap-4  text-[14px] border-none"
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
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceComponent;
