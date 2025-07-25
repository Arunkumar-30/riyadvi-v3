import Link from "next/link";

const cards = [
  {
    title: "Website Portfolio",
    desc: "Explore our diverse range of website projects, including business sites, e-commerce, and custom CMS platforms.",
    image: "/works/website-portfolio.jpg",
    pdf: "/pdfs/Riyadvi  - Website Portfolio.pdf",
  },
  {
    title: "Mobile App Portfolio",
    desc: "View our portfolio of intuitive and scalable mobile apps crafted for Android, iOS, and cross-platform solutions.",
    image: "/works/app-portfolio.jpg",

    pdf: "/pdfs/Riyadvi - App Portfolio.pdf",
  },
  {
    title: "Client Testimonials",
    desc: "Discover what our clients say about working with us and the success stories we've built together.",
    image: "/works/testimonal.jpg",

    pdf: "/pdfs/Riyadvi - Client Testimonials.pdf",
  },
  {
    title: "Digital Marketing Portfolio",
    desc: "A showcase of our successful digital marketing campaigns, including SEO, PPC, and brand strategy.",
    image: "/works/digital-marketing.jpg",

    pdf: "/pdfs/Riyadvi - Digital Marketing Portfolio.pdf",
  },
  {
    title: "Company Overview Portfolio",
    desc: "Get an inside look at Riyadvi – our capabilities, core values, industries served, and company milestones.",
    image: "/works/company-portfolio.jpg",

    pdf: "/pdfs/Riyadvi Company - Portfolio.pdf",
  },
];

const OurWorks = () => {
  return (
    <>
      <section id="Our Offerings" className="mt-16 ">
        <div className="max-w-7xl mx-auto overflow-hidden px-4 ">
          <div>
            <h2
              className=" text-3xl lg:text-5xl xl:text-6xl 
               bg-contact-background bg-clip-text  
                p-2"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              We take pride in the relationships we build with our clients
              through our seamless work.
            </h2>
            <p
              className="text-[#585858] text-md xl:text-lg  font-[500] lg:text-lg mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              When our client is in need of solution capabilities to explore new
              strategic directions while its core team is busy with ongoing
              business needs, or requires an immediate time-to-market product
              line that calls for a technology skill set it currently doesn’t
              have, we provide a solution engineering team with the needed
              skills to deliver innovative solutions and products. In this
              time-boxed model, we own the responsibility of delivering the
              software features or components within scope, budget, and time
              schedules.
            </p>
            <p
              className="text-[#585858] text-md xl:text-lg  font-[500] lg:text-lg mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              When our client is in need of solution capabilities to explore new
              strategic directions while its core team is busy with ongoing
              business needs, or requires an immediate time-to-market product
              line that calls for a technology skill set it currently doesn’t
              have, we provide a solution engineering team with the needed
              skills to deliver innovative solutions and products. In this
              time-boxed model, we own the responsibility of delivering the
              software features or components within scope, budget, and time
              schedules.
            </p>
            <p
              className="text-[#585858] text-md xl:text-lg  font-[500] lg:text-lg mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              When our client is in need of solution capabilities to explore new
              strategic directions while its core team is busy with ongoing
              business needs, or requires an immediate time-to-market product
              line that calls for a technology skill set it currently doesn’t
              have, we provide a solution engineering team with the needed
              skills to deliver innovative solutions and products. In this
              time-boxed model, we own the responsibility of delivering the
              software features or components within scope, budget, and time
              schedules.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#fff] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-y-10 gap-x-6">
            {/* Text Content */}
            <div className="md:w-[50%] flex flex-col justify-center">
              <h2
                className="text-3xl text-black text-[44px] max-md:text-[28px] font-semibold leading-snug"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                About
              </h2>
              <p
                className="text-[#585858] text-md xl:text-lg font-[500] max-md:text-[14px] mt-6 leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Yuvaraj, the heart and soul behind Aryu Enterprises, brings
                together a unique blend of expertise and passion. With over 15
                years of experience in technology services, branding, and
                marketing, Yuvaraj founded Aryu Enterprises to address the
                challenges he witnessed in the industry.
                <br />
                <span data-aos="fade-up" data-aos-duration="2000">
                  His journey, driven by a desire for meaningful change,
                  inspired the &quot;Client First&quot; mantra—ensuring
                  innovation, branding excellence, and genuine client
                  partnerships.
                </span>
                <br />
                <span data-aos="fade-up" data-aos-duration="2000">
                  His journey, driven by a desire for meaningful change,
                  inspired the &quot;Client First&quot; mantra—ensuring
                  innovation, branding excellence, and genuine client
                  partnerships.
                </span>
              </p>
            </div>

            {/* Image */}
            <div
              className="md:w-[40%] md:h-[450px] mb-8 md:mb-0 max-md:mx-auto overflow-hidden rounded-3xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                alt="Mr. Yuvaraj, founder of Aryu Enterprises"
                className="w-full h-full object-cover duration-300 hover:scale-110 transition-transform"
                src="/home/about-1.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <section id="Success Stories" className="mt-10">
        <div className="w-full px-4 overflow-hidden">
          <div className="text-center">
            <h2
              className="text-center lg:text-4xl xl:text-5xl bg-contact-background bg-clip-text text-3xl font-semibold text-black"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Success Stories
            </h2>
          </div>

          <div className="flex justify-center w-full p-2 mt-5 lg:mt-14 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-[80%] mt-5 rounded-lg">
              {cards.map((card, index) => (
                <div key={index}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="p-6 bg-white rounded-lg transition-all duration-500 shadow-2xl hover:-translate-y-2 hover:shadow-3xl"
                  >
                    <div className="flex justify-center">
                      <img
                        alt={card.title}
                        src={card.image}
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-start text-md md:text-2xl font-bold mt-4">
                        {card.title}
                      </h2>
                      <p className="text-[#585858] text-md xl:text-lg  font-[500] lg:text-lg mt-5 text-start">
                        {card.desc}
                      </p>
                    </div>
                    <div className="flex-1 mt-2">
                      <Link
                        href={card.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer group inline-flex text-lg items-center text-[#D4AF37] font-semibold relative overflow-hidden"
                      >
                        Know More
                        <span className="ml-2 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-bounce">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
