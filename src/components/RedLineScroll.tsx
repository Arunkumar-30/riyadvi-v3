"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  animationType?: "line" | "fade";
  className?: string;
}

export default function ScrollReveal({
  children,
  animationType = "fade",
  className = "",
}: ScrollRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = sectionRef.current;

    if (!elem) return;

    if (animationType === "line") {
      const line = elem.querySelector(".red-line");
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (animationType === "fade") {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [animationType]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
