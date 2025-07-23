"use client";
import Image from "next/image";

const portfolioItems = [
  {
    title: "OMCorporation",
    image: "/portfolio/omc.png",
    link: "https://www.omcorporations.com/",
  },
  {
    title: "Snew Computers",
    image: "/portfolio/snew.png",
    link: "https://snewcomputers.com/",
  },
  {
    title: "Tony And Guy Kolathur",
    image: "/portfolio/tonyandguy.png",
    link: "https://www.toniandguykolathur.com/",
  },
  {
    title: "Cube Tendal",
    image: "/portfolio/cube.png",
    link: "https://cubedentalequipments.com/",
  },
  {
    title: "Round Table",
    image: "/portfolio/roundtable.png",
    link: "https://roundtableproductions.in/",
  },
  {
    title: "Signature Blends",
    image: "/portfolio/wano.png",
    link: "https://wanaromah.com/pages/signature-blends",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="px-4 py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-[5/3] overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300"
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
