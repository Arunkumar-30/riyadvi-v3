"use client";

import HeadingComponent from "./Heading";

const ServiceHome = () => {
  return (
    <>
      <HeadingComponent
        heading="Discover Our Services"
        description="What We Do Best"
      />

      <div className="flex justify-center mt-10">
        <div className="w-full lg:w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            {/* Example Card — repeat for each service */}
            {[
              {
                title: "Web Development",
                description:
                  " Fast, responsive websites that convert visitors into customers.",
                href: "/service/web-development",
                imgSrc: "/home/web-develop.jpg",
              },
              {
                title: "Mobile App Development",
                description:
                  "Powerful mobile apps tailored for iOS & Android users. ",
                href: "/service/app-development",
                imgSrc: "/home/app-develop.jpg",
              },
              {
                title: "Digital Marketing",
                description:
                  "Meta Ads, Google Ads, SEO — everything you need to grow online.",
                href: "/service/digital-marketing",
                imgSrc: "/home/digital-marketing.jpg",
              },
              {
                title: "3D Modeling & Design",
                description:
                  "Visualize your ideas with stunning 3D representations.",
                href: "/service/3d-modeling",
                imgSrc: "/home/web-develop.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg w-full cursor-pointer border"
              >
                <a href={item.href} data-discover="true">
                  <div className="w-full h-full border">
                    <img
                      alt={item.title}
                      className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                      src={item.imgSrc}
                    />
                  </div>
                  <div className="absolute top-3 left-3 text-white text-sm sm:text-lg 2xl:text-2xl font-bold bg-black bg-opacity-60 px-3 py-1 rounded-md">
                    {item.title}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xs sm:text-base font-light bg-black bg-opacity-70 px-4 py-2 rounded-md opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out text-center">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-[18px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-950 hover:bg-[#D4AF37] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-black dark:hover:text-white dark:hover:bg-gray-700"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceHome;
