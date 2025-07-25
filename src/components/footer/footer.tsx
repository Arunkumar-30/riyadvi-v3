"use client";

import Link from "next/link";

const FooterComponent = () => {
  return (
    <>
      <div>
        <div
          className="bg-[#fff] bg-cover bg-center bg-no-repeat text-white py-16 px-6 banner-image"
          // style={{
          //   backgroundImage: `url('/home/banner-2.jpg')`,
          // }}
        >
          <div className="flex flex-col items-center text-start">
            <div className="w-[90%] sm:w-[60%]">
              <p
                className="text-xl sm:text-xl lg:text-3xl xl:text-4xl font-semibold text-white"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Ready to take your business to the next level? <br /> Get
                Started with Riyadvi Today!
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 w-full mt-10">
                <button
                  className="group rounded-full duration-500 text-[#fff] p-2 bg-[#D4AF37]  w-[230px] flex items-center gap-4  text-[14px] border-none"
                  data-discover="true"
                  data-aos="fade-up"
                  data-aos-duration="3000"
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
          </div>
        </div>
      </div>
      <div className="pt-16 pb-10 bg-gradient-to-t from-white to-[#f3f3f3] shadow-2xl drop-shadow-lg">
        <div className="FooterMenu flex justify-between max-lg:flex-wrap gap-10 mx-auto w-[85%]">
          <div className="text-[#292929] w-[320px] text-[18px]">
            <Link href="/" data-discover="true">
              {/* <img className="w-44 md:w-44" alt="Aryu Enterprises Logo" loading="lazy" src="/assets/AryuEnterprises-NalIqy2K.svg"> */}
            </Link>
            <p className="mt-4 text-[16px]">
              Riyadvi Software Technologies, a leading digital transformation
              company in India, provides 360° digital solutions to help
              businesses streamline operations, enhance scalability, and drive
              long-term success.
            </p>
            <ul className="text-[#292929] flex gap-4 pt-4 pb-4">
              <li className="p-2 text-[18px]">
                <Link
                  href="https://x.com/AryuEnterprises"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-x-twitter"></i>
                </Link>
              </li>
              <li className="p-2 text-[18px]">
                <Link
                  href="https://www.instagram.com/aryu_enterprises/"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="p-2 text-[18px]">
                <Link
                  href="https://www.facebook.com/AryuEnterprisesPrivatelimited/"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li className="p-2 text-[18px]">
                <Link
                  href="https://in.linkedin.com/company/aryu-enterprises-private-limited?trk=similar-pages"
                  target="_blank"
                  className="hover:text-[#0095D2]"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-[#292929]">Business</h3>
            <ul className="text-[16px] text-[#292929]">
              <li className="my-4">
                <Link href="https://aryutechnologies.com/" target="_blank">
                  RiyaDvi Software Technologies
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://aryu.agency/" target="_blank">
                  Riyadvi Agency
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-[#292929]">Company</h3>
            <ul className="text-[16px] text-[#292929]">
              <li className="my-4">
                <Link href="/">Home</Link>
              </li>
              <li className="my-4">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="my-4">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="my-4">
                <Link
                  href="https://aryutechnologies.com/career-opportunities"
                  target="_blank"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-[#292929]">Resources</h3>
            <ul className="text-[16px] text-[#292929]">
              <li className="my-4">
                <Link href="https://blog.aryutechnologies.com/" target="_blank">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[#292929] text-[18px] w-[320px]">
            <h3 className="font-bold">Contact us</h3>
            <ul className="text-[16px]">
              <h4 className="font-semibold mt-2 mb-1">
                For Business Enquiries
              </h4>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="tel:+91 9994715106"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  +91 9994715106
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="mailto:yuvaraj@aryuenterprises.com"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  info@riyadvisoftwaretechnologies.com
                </Link>
              </li>
              <h4 className="font-semibold mt-2 mb-1">
                For Careers & Job Applications
              </h4>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="tel:+91 6380249209"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  +91 6380249209
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2"
                  href="mailto:hr@aryuenterprises.com"
                >
                  <span className="bg-white/20 backdrop-blur-lg border-white/20 rounded-full p-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  hr@riyadvisoftwaretechnologies.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[85%] mx-auto mt-8 border-t-[0.4px] border-[#2929292a]s"></div>
        <div className="socilaMedia">
          <div className="CopyRights text-[14px] text-[#292929] text-center">
            <p className="m-4">
              All Rights Reserved © 2025 Riyadvi Software Technologies Private
              Limited
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
