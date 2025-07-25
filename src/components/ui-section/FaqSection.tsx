"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "Do you create software both for the mobile and web environment?",
    answer:
      "Yes—we build native and web apps using React, React Native, Flutter, Node.js, and more.",
  },
  {
    question: "What is your product testing & QA methodology?",
    answer:
      "We implement unit, integration, automated end-to-end, and manual user acceptance testing.",
  },
  {
    question: "What digital marketing services do you specialize in?",
    answer:
      "We offer SEO, PPC, social media campaigns, content marketing, email automation, and analytics-driven strategies.",
  },
  {
    question:
      "How does video production increase brand visibility and customer engagement?",
    answer:
      "Video content enables storytelling, boosts SEO, and builds trust—driving better engagement and conversions.",
  },
  {
    question: "What corporate training programs do you provide?",
    answer:
      "We offer training in software development, digital marketing, UX/UI design, and agile methodology.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Frequently Asked <span className="text-[#D4AF37]">Questions</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {faqData.map((item, idx) => (
          <Disclosure key={idx} data-aos="fade-up" data-aos-duration="2000">
            {({ open }) => (
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Disclosure.Button className="flex justify-between items-center w-full px-5 py-4 text-left  font-medium text-xl text-black  hover:bg-gray-50 focus:outline-none">
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`h-6 w-6 text-gray-700 transform transition-transform ${
                      open ? "" : "rotate-180"
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-5 pb-5 text-[#585858] text-md xl:text-[16px]  font-[500]">
                  {item.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
