'use client";';
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

interface Props {
  navLink: NavLink[];
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  route: string;
}

const MobileMenu: React.FC<Props> = ({
  navLink,
  isMobileMenuOpen,
  setMobileMenuOpen,
  route,
}) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Toggle accordion visibility
  const toggleAccordion = useCallback((index: number) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  // Handle menu link click, close the menu after navigation
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    isMobileMenuOpen && (
      <div className="lg:hidden bg-black/50 fixed inset-0 z-50 flex flex-col text-black">
        <div className="text-start bg-white w-fit h-full min-w-96 p-10 overflow-y-scroll space-y-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo/riyadvi logo final for website (2) (1).png"
                  width={200}
                  height={30}
                  alt="Brand Logo"
                  className="w-44 h-20 object-contain"
                />
              </Link>
            </div>

            {/* Close Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700"
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

          {/* Mobile Navigation */}
          <div id="accordion-mobile-nav" className="space-y-5 text-sm">
            {navLink.map((navItem, index) => (
              <div key={index}>
                {navItem.dropdown ? (
                  // Dropdown menu
                  <div>
                    <h2 id={`accordion-mobile-heading-${index}`} className="">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full font-medium"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openAccordion === index}
                        aria-controls={`accordion-body-${index}`}
                      >
                        <span
                          className={`uppercase text-sm hover:cursor-pointer font-semibold ${
                            route === navItem.href ||
                            (navItem.href === "#solution" &&
                              route.includes("/solutions")) ||
                            (navItem.href === "#product" &&
                              route.includes("/products"))
                              ? "text-[#00008f]"
                              : "text-gray-700"
                          }`}
                        >
                          {navItem.label}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openAccordion === index ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </h2>

                    {/* Dropdown Items */}
                    <div
                      id={`accordion-body-${index}`}
                      className={`mt-2 ml-4 origin-top transition-all ${
                        openAccordion === index ? "scale-y-100" : "hidden"
                      }`}
                    >
                      {navItem.dropdown?.map((dropdownItem, idx) => (
                        <div key={idx} className="mt-5 ps-2">
                          <Link
                            href={dropdownItem.href}
                            className="block font-semibold text-gray-700 hover:text-[#00008f]"
                            onClick={handleLinkClick}
                          >
                            {dropdownItem.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular Menu Item
                  <div className="uppercase">
                    <Link
                      href={navItem.href}
                      onClick={handleLinkClick}
                      className={`uppercase text-sm font-semibold hover:text-[#00008f] ${
                        route === navItem.href ||
                        (navItem.href === "#solution" &&
                          route.includes("/solutions")) ||
                        (navItem.href === "#product" &&
                          route.includes("/products"))
                          ? "text-[#00008f]"
                          : "text-gray-700"
                      }`}
                    >
                      {navItem.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Link */}
            <div className="mt-6 space-y-5">
              <Link
                href="/career"
                className=" uppercase text-sm hover:cursor-pointer font-semibold"
                onClick={handleLinkClick}
              >
                Career
              </Link>
              <Link
                href="/contact-us"
                className="bg-[#00004f] uppercase text-sm hover:bg-black text-white py-2 px-5 font-semibold block text-center"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
