"use client";
import { useState } from "react";
import Image from "next/image";

const categories = ["all", "website", "app", "game"];
const portfolioItems = [
  {
    title: "OMCorporation",
    image: "/portfolio/omc.png",
    link: "https://www.omcorporations.com/",
    category: "website",
  },
  {
    title: "Snew Computers",
    image: "/portfolio/snew.png",
    link: "https://snewcomputers.com/",
    category: "website",
  },
  {
    title: "Tony And Guy Kolathur",
    image: "/portfolio/tonyandguy.png",
    link: "https://www.toniandguykolathur.com/",
    category: "website",
  },
  {
    title: "Cube Tendal",
    image: "/portfolio/cube.png",
    link: "https://cubedentalequipments.com/",
    category: "app",
  },
  {
    title: "Round Table",
    image: "/portfolio/roundtable.png",
    link: "https://roundtableproductions.in/",
    category: "game",
  },
  {
    title: "Signature Blends",
    image: "/portfolio/wano.png",
    link: "https://wanaromah.com/pages/signature-blends",
    category: "app",
  },
];

const PortfolioGrid = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="px-4 py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-lg font-medium capitalize border transition ${
                filter === cat
                  ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                  : "bg-white text-gray-700 border-gray-500 hover:bg-[#D4AF37] hover:text-white"
              }`}
            >
              {cat === "all"
                ? "All"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-[5/3] overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#D4AF37]/90 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
