"use client";

import { useEffect } from "react";

export const useScrollLine = () => {
  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
        const top = line.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          line.classList.add("black_red");
        } else {
          line.classList.remove("black_red");
        }
      });
      
       const lines1 = document.querySelectorAll(".line-1");
      lines1.forEach((line) => {
        const top = line.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          line.classList.add("black_red-1");
        } else {
          line.classList.remove("black_red-1");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
