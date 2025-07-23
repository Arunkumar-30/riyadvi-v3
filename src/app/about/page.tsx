import CommonBannerComponent from "@/components/ui-section/CommonBanner";

const About = () => {
  return (
    <>
      {/* Banner Section */}
      <div>
        <CommonBannerComponent title="About Us" />
      </div>

      {/* Meet the Founder Section */}

      <div className="bg-[#fff] py-6">
        <div className="max-w-7xl mx-auto px-4 max-md:px-6 flex items-center justify-between gap-y-6 py-16 max-md:flex-col">
          {/* Founder Text Content */}
          <div className="md:w-[50%] flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold leading-snug h2-ani">
              About
            </h2>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] mt-6 leading-relaxed">
              Yuvaraj, the heart and soul behind Aryu Enterprises, brings
              together a unique blend of expertise and passion. With over 15
              years of experience in technology services, branding, and
              marketing, Yuvaraj founded Aryu Enterprises to address the
              challenges he witnessed in the industry.
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the &quot;Client First&quot; mantra—ensuring innovation,
                branding excellence, and genuine client partnerships.
              </span>
              <br />
            </p>
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-5">
              <div className="md:w-1/2 flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-semibold text-[#161C52]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-[#484A61] text-[18px] max-md:text-[14px] leading-relaxed">
                  To become a global leader in digital transformation by
                  empowering businesses with innovative solutions, creative
                  strategies, and a commitment to excellence.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-semibold text-[#161C52]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-[#484A61] text-[18px] max-md:text-[14px] leading-relaxed">
                  To deliver impactful digital solutions with a client-first
                  mindset, fostering long-term growth, innovation, and reliable
                  partnerships worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className="md:w-[40%] h-auto md:h-[450px] max-md:mx-auto overflow-hidden rounded-4xl  border-2 border-yellow-900 p-5">
            <img
              alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
              className="w-full h-full object-cover duration-400 hover:scale-110 transition-transform "
              src="/home/about-1.jpg"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="max-w-7xl mx-auto flex justify-between gap-y-6 py-16 max-md:flex-col">
          {/* Founder Image */}
          <div className="md:w-[40%] md:h-[450px] max-md:mx-auto overflow-hidden rounded-4xl">
            <img
              alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
              className="w-full h-full object-cover duration-400 hover:scale-110 transition-transform"
              src="/home/about-2.jpg"
            />
          </div>

          {/* Founder Text Content */}
          <div className="md:w-[50%] flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold leading-snug">
              Meet the Founder
            </h2>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] mt-6 leading-relaxed">
              Yuvaraj, the heart and soul behind Aryu Enterprises, brings
              together a unique blend of expertise and passion. With over 15
              years of experience in technology services, branding, and
              marketing, Yuvaraj founded Aryu Enterprises to address the
              challenges he witnessed in the industry.
              <br />
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the &quot;Client First&quot; mantra—ensuring innovation,
                branding excellence, and genuine client partnerships.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="max-w-7xl mx-auto flex justify-between gap-y-6 py-16 max-md:flex-col">
          {/* Founder Text Content */}
          <div className="md:w-[50%] flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold leading-snug">
              Meet the Founder
            </h2>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] mt-6 leading-relaxed">
              Yuvaraj, the heart and soul behind Aryu Enterprises, brings
              together a unique blend of expertise and passion. With over 15
              years of experience in technology services, branding, and
              marketing, Yuvaraj founded Aryu Enterprises to address the
              challenges he witnessed in the industry.
              <br />
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the &quot;Client First&quot; mantra—ensuring innovation,
                branding excellence, and genuine client partnerships.
              </span>
              <br />
              <span>
                His journey, driven by a desire for meaningful change, inspired
                the &quot;Client First&quot; mantra—ensuring innovation,
                branding excellence, and genuine client partnerships.
              </span>
            </p>
          </div>
          {/* Founder Image */}
          <div className="md:w-[40%] md:h-[450px] max-md:mx-auto overflow-hidden rounded-4xl">
            <img
              alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
              className="w-full h-full object-cover duration-400 hover:scale-110 transition-transform"
              src="/home/about-2.jpg"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fff] mb-10">
        <div className="max-w-7xl mx-auto flex justify-between gap-y-6 py-16 max-md:flex-col space-x-6">
          {/* Founder Image */}
          <div className="flex">
            <img
              alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
              className="w-60 h-60 object-cover duration-400 hover:scale-110 transition-transform"
              src="/home/about-2.jpg"
            />
          </div>

          {/* Founder Text Content */}
          <div className="flex-1">
            <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold leading-snug">
              Meet the Founder
            </h2>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] mt-6 leading-relaxed">
              Yuvaraj, the heart and soul behind Aryu Enterprises, brings
              together a unique blend of expertise and passion. With over 15
              years of experience in technology services, branding, and
              marketing, Yuvaraj founded Aryu Enterprises to address the
              challenges he witnessed in the industry.
              <br />
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto ">
          <img
            alt="Mr. Yuvaraj, founder of Aryu Enterprises, leading innovation and growth in the industry."
            className="w-full h-96 object-cover "
            src="/home/team_ban.jpeg"
          />
        </div>
      </div>

      {/* <div className="pt-18 max-w-7xl mx-auto">
        <h2 className="text-[#161C52] text-[44px] max-md:text-[28px] font-semibold md:leading-[3rem]">
          Legacy of Innovation
        </h2>

        <div className="flex gap-4 max-lg:flex-wrap max-md:mt-10">

          <div className="lg:py-14 flex-1 min-w-[300px]">
            <div className="relative text-[#0079B5] text-[44px] md:text-[54px] pl-10 py-3">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#0079B51A] via-[#0079B5] to-[#0079B51A]"></div>
              15+
            </div>
            <div className="pl-10">
              <h3 className="text-[#161C52] text-[20px] md:text-[24px] font-semibold">
                Business Ventures Across Multiple Industries
              </h3>
              <p className="text-[14px] md:text-[18px] text-[#484A61] pt-2">
                Aryu Enterprises has successfully launched and nurtured 15+
                business ventures, spanning technology, education, corporate
                solutions, marketing, catering, and business consulting. Each of
                our ventures is designed to drive growth, innovation, and
                efficiency, catering to a wide range of industries and customer
                needs.
              </p>
            </div>
          </div>

        
          <div className="lg:py-14 flex-1 min-w-[300px]">
            <div className="relative text-[#0079B5] text-[44px] md:text-[54px] pl-10 py-3">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#0079B51A] via-[#0079B5] to-[#0079B51A]"></div>
              30+
            </div>
            <div className="pl-10">
              <h3 className="text-[#161C52] text-[20px] md:text-[24px] font-semibold">
                Clients and Partners Worldwide
              </h3>
              <p className="text-[14px] md:text-[18px] text-[#484A61] pt-2">
                With a strong network of over 200 clients and business partners,
                Aryu Enterprises has established itself as a trusted name in the
                industry. Our focus on delivering high-quality services, from IT
                solutions to corporate consulting, has helped businesses scale
                and thrive in competitive markets.
              </p>
            </div>
          </div>


          <div className="lg:py-14 flex-1 min-w-[300px]">
            <div className="relative text-[#0079B5] text-[44px] md:text-[54px] pl-10 py-3">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#0079B51A] via-[#0079B5] to-[#0079B51A]"></div>
              30+
            </div>
            <div className="pl-10">
              <h3 className="text-[#161C52] text-[20px] md:text-[24px] font-semibold">
                Years of Expertise in Business Excellence
              </h3>
              <p className="text-[14px] md:text-[18px] text-[#484A61] pt-2">
                With over 25 years of experience, Aryu Enterprises has developed
                deep industry knowledge and a proven track record of success.
                Our teams bring expertise in technology, branding, financial
                consulting, and digital transformation, enabling businesses to
                achieve sustainable growth and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* 
      <div className="w-full flex justify-center">
        <div className="w-[90%] lg:w-[80%]">
          <div className="mt-5 relative w-full h-fit overflow-hidden">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center bg-contact-background bg-clip-text p-5 font-bold">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 p-2">
            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                100+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🫶</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Clients</p>
            </div>

            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                15+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🌎</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Years in the Market</p>
            </div>

            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                150+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🫂</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Team Members</p>
            </div>

            <div className="group border-l-2 relative p-6 flex flex-col">
              <span className="text-4xl lg:text-[90px] font-[400] text-[#000000]">
                200+
              </span>
              <div className="h-20 mt-20">
                <div className="opacity-0 scale-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 border p-5 px-8 w-fit bg-[#e1e1e1] rounded-md font-[500]">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
              <p className="text-lg font-[400] mt-14">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#161C52] mb-12">
          Our Vision & Mission
        </h2>

        <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">👁️</span>
              <h3 className="text-2xl font-semibold text-[#161C52]">
                Our Vision
              </h3>
            </div>
            <p className="text-[#484A61] text-[18px] max-md:text-[14px] leading-relaxed">
              To become a global leader in digital transformation by empowering
              businesses with innovative solutions, creative strategies, and a
              commitment to excellence.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col  justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-semibold text-[#161C52]">
                Our Mission
              </h3>
            </div>

            <p className="text-[#484A61] text-[18px] max-md:text-[14px] leading-relaxed mt-6 text-center">
              To deliver impactful digital solutions with a client-first
              mindset, fostering long-term growth, innovation, and reliable
              partnerships worldwide.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
