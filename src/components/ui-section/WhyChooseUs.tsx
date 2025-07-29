// "use client";

// import HeadingComponent from "./Heading";

// const WhyChooseUsComponent = () => {
//   return (
//     <>
//       <div className="max-w-7xl mx-auto py-10 mt-10">
//         <HeadingComponent
//           heading="Why Choose Us?"
//           description="The Best Solutions For Your Business Needs."
//         />
//       </div>

//       <div>
//         <div className="flex justify-center w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-8 w-full lg:w-[80%] mt-5 lg:mt-10">
//             {/* Card 1 */}
//             <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 flex-shrink-0">
//                   <img
//                     alt="expert-team"
//                     className="h-full w-full"
//                     src="/gif/gif-1.gif"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
//                     Skilled IT Professionals
//                   </h2>
//                   <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
//                     Our experienced developers, designers, and strategists bring
//                     your software vision to life.
//                   </p>
//                 </div>
//               </div>
//               <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </div>

//             {/* Card 2 */}
//             <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 flex-shrink-0">
//                   <img
//                     alt="flexibility"
//                     className="h-full w-full"
//                     src="/gif/gif-2.gif"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
//                     Scalable Engagement
//                   </h2>
//                   <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
//                     Whether you need a single engineer or a full team, we scale
//                     based on your project’s needs.
//                   </p>
//                 </div>
//               </div>
//               <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </div>

//             {/* Card 3 */}
//             <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-left">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 flex-shrink-0">
//                   <img
//                     alt="timely-delivery"
//                     className="h-full w-full"
//                     src="/gif/gif-3.gif"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
//                     Timely Project Launch
//                   </h2>
//                   <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
//                     Our teams are deployment-ready and ensure timely delivery
//                     without compromising quality.
//                   </p>
//                 </div>
//               </div>
//               <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </div>

//             {/* Card 4 */}
//             <div className="group relative w-full bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-right">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 flex-shrink-0">
//                   <img
//                     alt="global-delivery"
//                     className="h-full w-full"
//                     src="/gif/gif-4.gif"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-lg lg:text-xl xl:text-3xl font-[700] pb-2">
//                     Global Collaboration
//                   </h2>
//                   <p className="text-[#585858] text-md xl:text-lg mt-5 font-[500]">
//                     Work seamlessly with our distributed teams, ensuring agile,
//                     borderless development support.
//                   </p>
//                 </div>
//               </div>
//               <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default WhyChooseUsComponent;
"use client";

import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24 mt-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Section */}
          <div className=" space-y-6">
            <p
              className="text-[16px] font-bold uppercase text-[#D4AF37]"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Why Choose Riyadvi?
            </p>
            <h2
              className="text-3xl font-semibold text-black"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              We’re not just service providers.<br></br> We’re your tech
              partners.
            </h2>
            <p
              className="text-[#585858] text-md xl:text-lg  font-[500] mt-4 max-w-md"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              At Riyadvi Software Technologies, we ensure predictable, scalable,
              and sustainable growth for your business—making the journey as
              rewarding as the destination.
            </p>
            <Link
              href={"/about"}
              className="group duration-500 rounded-full text-[#fff] p-2 bg-[#D4AF37] w-40 flex items-center gap-4  text-[14px] border-none"
              data-discover="true"
              data-aos="fade-up"
              data-aos-duration="2000"
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
              Know More
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Box Template */}
              {[
                {
                  icon: "/gif/project-completed.gif",
                  title: "50+ Projects Completed",
                  desc: "Experience quality without breaking the bank—we offer fair and competitive pricing.",
                },
                {
                  icon: "/gif/best-price.gif",
                  title: "Transparent Pricing",
                  desc: "Choose us for proven excellence backed by certified professionals.",
                },
                {
                  icon: "/gif/coming-soon.gif",
                  title: "Fast Turnaround",
                  desc: "Don’t let budget constraints stop you—explore our hassle-free financing options.",
                },
                {
                  icon: "/gif/teamwork.gif",
                  title: "Full Support Team",
                  desc: "Don’t just take our word for it—see what our clients say about us.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group hover:border-[#D4AF37] hover:border-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-20 mb-3"
                  />
                  <h4 className="text-lg lg:text-xl xl:text-2xl font-[500] pb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#585858] text-md xl:text-lg mt-1 font-[400]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
