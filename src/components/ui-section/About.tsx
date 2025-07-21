"use client";

const AboutComponent = () => {
  return (
    <>
      <div className="my-10 lg:ml-20 ">
        <div className="about-riyadvi-group flex w-[80%] justify-between md:py-16 mx-auto max-lg:w-[80%] max-lg:flex-col max-lg:gap-10 line-animation">
          <div className="content lg:w-[60%] flex flex-col justify-between">
            <div>
              <h2 className="text-[12px] font-bold uppercase text-[#D4AF37] inline-flex items-center p-2">
                Why Choose Riyadvi?
              </h2>

              <h3 className="text-black text-[44px] max-md:text-[28px] font-semibold mt-2 md:leading-12">
                We’re not just service providers. We’re your tech partners.
              </h3>

              <div className="text-[#484A61] max-md:text-[14px] text-[18px] mt-6">
                At Riyadvi Software Technologies, we ensure predictable,
                scalable, and sustainable growth for your business—making the
                journey as rewarding as the destination.
                <ul className="list-disc ml-10 mt-4 flex flex-col gap-2">
                  <li> 50+ Projects Completed</li>
                  <li>Transparent Pricing</li>
                  <li>Fast Turnaround</li>
                  <li>Full Support Team</li>
                </ul>
              </div>
            </div>

            <div className="max-md:mt-5">
              <button
                className="group duration-500 text-black p-2 hover:bg-[#D4AF37]  w-[230px] flex items-center gap-4  text-[14px] border-none"
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
          </div>

          <div className="lg:w-[30%] mx-auto text-[#484A61]">
            <div className="w-[100%] grid grid-cols-2 lg:grid-cols-1 gap-4 flex-wrap justify-between max-md:justify-center">
              <div>
                <span className="text-[32px] md:text-[54px] text-[#D4AF37]">
                  90%
                </span>
                <p className="text-[14px] font-bold">Client Retention Rate</p>
              </div>
              <div>
                <span className="text-[32px] md:text-[54px] text-[#D4AF37]">
                  99%
                </span>
                <p className="text-[14px] font-bold">
                  Project Delivery Success
                </p>
              </div>
              <div>
                <span className="text-[32px] md:text-[54px] text-[#D4AF37]">
                  95%
                </span>
                <p className="text-[14px] font-bold">Team Satisfaction Score</p>
              </div>
              <div>
                <span className="text-[32px] md:text-[54px] text-[#D4AF37]">
                  20+
                </span>
                <p className="text-[14px] font-bold">Global Clients Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutComponent;
