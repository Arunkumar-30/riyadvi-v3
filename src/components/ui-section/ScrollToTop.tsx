"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollAndContactButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4">
      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-[#D4AF37] text-white p-3 rounded-full shadow-lg hover:bg-[#bfa139] transition"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>

      {/* Call Button */}
      <a
        href="tel:+91 8072487427"
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        aria-label="Call us"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+918072487427?text=Hello!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
}
