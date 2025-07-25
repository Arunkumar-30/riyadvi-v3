"use client";

import HeadingComponent from "./Heading";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import HeadingComponent from "./Heading";

// type CaseStudy = {
//   title: string;
//   category: string;
//   imageUrl: string;
//   href: string;
// };

// const caseStudies: CaseStudy[] = [
//   {
//     title: "Avinsaa",
//     category: "Wooden Toys",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934677_5.png",
//     href: "/avinsaa",
//   },
//   {
//     title: "Jadoo",
//     category: "Online Directory",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934664_4.png",
//     href: "/jadoo",
//   },
//   {
//     title: "Biokosmetik of Texas",
//     category: "Skincare",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934643_3.png",
//     href: "/biokosmetik",
//   },
//   {
//     title: "Seibert Consulting",
//     category: "IT Consulting & ERP Solutions",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
//     href: "/seibert",
//   },
//   {
//     title: "Seibert Consulting",
//     category: "IT Consulting & ERP Solutions",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
//     href: "/seibert",
//   },
//   {
//     title: "Seibert Consulting",
//     category: "IT Consulting & ERP Solutions",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
//     href: "/seibert",
//   },
//   {
//     title: "Seibert Consulting",
//     category: "IT Consulting & ERP Solutions",
//     imageUrl:
//       "https://backoffice.aryuacademy.com/image/technology_images/1741934614_2.png",
//     href: "/seibert",
//   },
// ];

// export default function CaseStudies() {
//   return (
//     <div className="lg:mt-20">
//       <HeadingComponent
//         heading="Case Studies"
//         description="Discover How We Solve Challenges."
//       />
//       <div className="flex flex-col items-center px-4 lg:px-8 py-12 bg-white">
//         <div className="w-full lg:w-[90%]">
//           <Swiper
//             modules={[FreeMode, Autoplay]}
//             slidesPerView="auto"
//             loop={true}
//             freeMode={true}
//             mousewheel={{ releaseOnEdges: true }}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             initialSlide={0}
//             className="swiper-container"
//           >
//             {caseStudies.map((study, idx) => (
//               <SwiperSlide
//                 key={study.href + idx}
//                 className="flex justify-center"
//               >
//                 <a
//                   href={study.href}
//                   className="flex flex-col max-w-[300px] p-4 transition-transform hover:scale-105 duration-300 "
//                 >
//                   <div className="overflow-hidden rounded-md shadow-md ">
//                     <img
//                       src={study.imageUrl}
//                       alt={study.title}
//                       className="w-full h-[300px] sm:h-[380px] object-cover transition-transform duration-500 ease-out"
//                     />
//                   </div>
//                   <div className="mt-4 text-center">
//                     <p className="text-lg font-bold text-gray-800">
//                       {study.title}
//                     </p>
//                     <p className="text-xs text-gray-600 font-bold border border-gray-300 px-3 py-1 rounded-full inline-block mt-2">
//                       {study.category}
//                     </p>
//                   </div>
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

import CountUp from "react-countup";
const CaseStudies = () => {
  return (
    <>
      <div className="mt-20 ">
        <HeadingComponent
          heading=" Discover How We Solve Challenges."
          description="Case Studies"
        />
        <div className="w-full flex justify-center">
          <div className="w-[90%] lg:w-[80%]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 p-2">
              <div
                className="group border-l-2 relative p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="h-10 mt-14">
                  <div className="text-4xl lg:text-[60px] font-[500] text-[#000000]">
                    <CountUp
                      end={100}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyDelay={500}
                    />
                    +
                  </div>
                </div>
                <p className="text-[#585858] text-md xl:text-lg  font-[500] mt-14">
                  Redesigned and optimized the shopping experience leading to a{" "}
                  <span className="text-[#D4AF37] font-medium">
                    +300% conversion
                  </span>{" "}
                  rate increase.
                </p>
              </div>
              <div
                className="group border-l-2 relative p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="h-10 mt-14">
                  <div className="text-4xl lg:text-[60px] font-[500] text-[#000000]">
                    <CountUp
                      end={100}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyDelay={500}
                    />
                    +
                  </div>
                </div>
                <p className="text-[#585858] text-md xl:text-lg  font-[500] mt-14">
                  {" "}
                  Google LSA campaign brought in over{" "}
                  <span className="text-[#D4AF37] font-medium">
                    120+ leads/month
                  </span>{" "}
                  for a regional plumbing business.
                </p>
              </div>
              <div
                className="group border-l-2 relative p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="h-10 mt-14">
                  <div className="text-4xl lg:text-[60px] font-[500] text-[#000000]">
                    <CountUp
                      end={100}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyDelay={500}
                    />
                    +
                  </div>
                </div>
                <p className="text-[#585858] text-md xl:text-lg  font-[500] mt-14">
                  {" "}
                  Created immersive 3D architectural models presented at an
                  international real estate expo.
                </p>
              </div>
              <div
                className="group border-l-2 relative p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="h-10 mt-14">
                  <div className="text-4xl lg:text-[60px] font-[500] text-[#000000]">
                    <CountUp
                      end={100}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyDelay={500}
                    />
                    +
                  </div>
                </div>
                <p className="text-[#585858] text-md xl:text-lg  font-[500] mt-14">
                  {" "}
                  Redesigned and optimized the shopping experience leading to a{" "}
                  <span className="text-[#D4AF37] font-medium">
                    +300% conversion
                  </span>{" "}
                  rate increase.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <button
                className="group duration-500 rounded-full text-[#fff] p-2 bg-[#D4AF37]  w-[170px] flex items-center gap-4  text-[14px] border-none"
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
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudies;
