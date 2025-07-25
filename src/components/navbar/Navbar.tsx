"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileNav";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = usePathname();

  const navLink = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },

    {
      href: "#services",
      label: "Services",
      dropdown: [
        {
          label: "Web Development",
          href: "/service/web-development",
          icon: "/navbar-logos/app-development.png",
        },
        {
          label: "App Development",
          href: "/service/app-development",
          icon: "/navbar-logos/mobile-development.png",
        },
        {
          label: "Digital Marketing",
          href: "/service/digital-marketing",
          icon: "/navbar-logos/digital-marketing.png",
        },
        {
          label: "AR & VR",
          href: "/service/ar-vr",
          icon: "/navbar-logos/virtual-tour.png",
        },
        {
          label: "3D Modelling",
          href: "/service/3d-modeling",
          icon: "/navbar-logos/3d-model.png",
        },
        {
          label: "Game Development",
          href: "/service/game-development",
          icon: "/navbar-logos/game-development.png",
        },
        {
          label: "UI/UX Design",
          href: "/service/ui-ux-design",
          icon: "/navbar-logos/design.png",
        },
      ],
    },
    { href: "/our-works", label: "Works" },
    { href: "/blogs", label: "Blogs" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/career", label: "Career" },
  ];

  return (
    <div>
      {/* <div className="bg-[var(--om-nav-top-bg-color)]  h-[38px] w-full">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <Link href={"/om-invents"}>
            <Image
              src={"/logo/image.png"}
              width={300}
              height={50}
              className="h-[32px] my-auto"
              alt="partner brand logo"
            />
          </Link>
        </div>
      </div> */}
      <nav className="bg-white shadow-2xl z-50 left-0 right-0 py-3">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 items-center">
              <Link href="/" className="flex">
                <Image
                  src="/logo/riyadvi logo final for website (2) (1).png"
                  width={100}
                  height={100}
                  className="w-80 h-16 object-cover
                  "
                  alt="Brand Logo"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden z-50">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex text-base font-semibold flex-1 ps-5 ms-5 space-x-5 relative">
              {navLink.map((navItem, index) => (
                <div key={index} className="group relative">
                  <Link
                    href={navItem.href}
                    className={`navbar__link py-2 border-b-2 border-b-transparent transition duration-300 ${
                      route === navItem.href ||
                      (navItem.href === "#service" &&
                        (route.includes("web-development") ||
                          route.includes("app-development") ||
                          route.includes("digital-marketing") ||
                          route.includes("ar-vr") ||
                          route.includes("3d-modeling") ||
                          route.includes("game-development")))
                        ? "active "
                        : ""
                    }`}
                  >
                    {navItem.label}
                  </Link>

                  {navItem.dropdown && (
                    <div className="absolute -left-[500px] top-full mt-7 bg-white shadow-2xl border scale-y-0 origin-top group-hover:scale-y-100 transition-transform z-50 w-max px-10 py-2">
                      <div className="flex flex-col lg:flex-row gap-10 w-full items-start bg-white p-6 rounded-md">
                        {/* Left Side: Services Info and Image */}
                        <div className="w-full lg:w-1/3">
                          <h3 className="text-lg font-semibold mb-2">
                            Services
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">
                            Discover our range of services designed to drive
                            business transformation.
                          </p>
                          <Image
                            src="/home/service-navbar.jpg"
                            width={300}
                            height={200}
                            alt="Services Image"
                            className="rounded-md"
                          />
                        </div>

                        {/* Right Side: Dropdown List */}
                        <div className="w-full lg:w-2/3 mt-4 lg:mt-0 p-4">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {navItem.dropdown.map((dropdownItem, idx) => (
                              <li key={idx}>
                                {/* Link with Icon */}
                                <Link
                                  href={dropdownItem.href}
                                  className="flex items-center text-gray-700 hover:text-[#D4AF37] hover:bg-slate-100 py-2 px-4 rounded-md transition"
                                >
                                  {/* Icon on the left */}
                                  <Image
                                    src={dropdownItem.icon}
                                    width={50}
                                    height={50}
                                    alt={`${dropdownItem.label} Icon`}
                                    className="mr-2"
                                  />
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Extra Links */}
            <div className="hidden text-lg font-semibold  lg:flex space-x-5 justify-end">
              <Link
                href="/contact-us"
                className={`px-6 py-2 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37] text-white  transition duration-300 ${
                  route === "/contact-us"
                    ? "hover:bg-white hover:text-black"
                    : ""
                }`}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <MobileMenu
          navLink={navLink}
          isMobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          route={route}
        />
      </nav>
    </div>
  );
};

export default NavbarComponent;
