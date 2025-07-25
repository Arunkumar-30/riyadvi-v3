"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return null; // No UI needed
};

export default AOSProvider;
