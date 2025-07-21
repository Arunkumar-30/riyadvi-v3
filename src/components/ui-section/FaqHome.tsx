"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Do you create software both for the mobile and web environment?",
    answer:
      "Yes — we specialize in building robust solutions for both web and mobile platforms using React, React Native, Flutter, and more.",
  },
  {
    question:
      "What is the method your team implements to carry out product testing and quality assurance?",
    answer:
      "Our QA process includes unit, integration, and end‑to‑end testing, along with manual review and user‑acceptance testing to ensure high quality.",
  },
  {
    question: "What digital marketing services do you specialize in?",
    answer:
      "We provide SEO, PPC, social media campaigns, content marketing, email automation, and analytics-driven growth strategies.",
  },
  {
    question:
      "How does video production increase brand visibility and customer engagement?",
    answer:
      "Video content boosts engagement through storytelling, enhances SEO, and drives conversion by building trust and rapport quickly.",
  },
  {
    question: "What corporate training programs do you provide?",
    answer:
      "We offer tailored training in software development, digital marketing, UX/UI design, and agile methodologies to empower your team.",
  },
];

export default function FaqComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border-b">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center py-4 text-left text-lg text-gray-800 hover:text-blue-600 transition"
            >
              {item.question}
            </button>
            <div
              className={`overflow-hidden text-gray-700 transition-max-height duration-300 ease-in-out ${
                openIndex === idx ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
