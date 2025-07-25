import Image from "next/image";
import { notFound } from "next/navigation";

const allBlogs = [
  {
    slug: "boost-your-conversion-rate",
    title: "Building High-Performance Websites With Custom Solutions",
    mainImage: "/home/about-1.jpg",
    description:
      "A strong online presence starts with expert web development. We create fast, secure, and scalable websites that meet your business needs. Our services in Chennai, India include custom development, e-commerce, CMS integration, and responsive design.",
    subTitle1: "Common Problems and Solutions",
    problem1: "Problem 1: High Cart Abandonment Rates",
    problem1Des:
      "Why it happens: Unexpected costs, lengthy checkout processes, or a lack of trust.",
    solutions1: [
      {
        title: "Transparent Pricing",
        desc: "Offer free shipping or display all costs upfront to reduce surprises.",
      },
      {
        title: "Streamlined Checkout",
        desc: "Minimize steps in the checkout flow to avoid drop-offs.",
      },
      {
        title: "Trust Signals",
        desc: "Show security badges, reviews, and clear policies.",
      },
    ],
  },
  {
    slug: "how-to-use-seo-to-drive-sales",
    title: "Building High-Performance Websites With Custom Solutions",
    mainImage: "/home/about-1.jpg",
    description:
      "A strong online presence starts with expert web development. We create fast, secure, and scalable websites that meet your business needs. Our services in Chennai, India include custom development, e-commerce, CMS integration, and responsive design.",
    subTitle1: "Common Problems and Solutions",
    problem1: "Problem 1: High Cart Abandonment Rates",
    problem1Des:
      "Why it happens: Unexpected costs, lengthy checkout processes, or a lack of trust.",
    solutions1: [
      {
        title: "Transparent Pricing",
        desc: "Offer free shipping or display all costs upfront to reduce surprises.",
      },
      {
        title: "Streamlined Checkout",
        desc: "Minimize steps in the checkout flow to avoid drop-offs.",
      },
      {
        title: "Trust Signals",
        desc: "Show security badges, reviews, and clear policies.",
      },
    ],
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    ...allBlogs.map((a) => ({
      slug: a.slug,
    })),
  ];
}

export default async function BlogsComponent({ params }: PageProps) {
  const { slug } = await params; // TypeScript now knows slug is a string
  const data = allBlogs.find((s) => s.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div data-aos="fade-up" data-aos-duration="2000">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mt-2">
            {data.title}
          </h2>
        </div>

        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            src={data.mainImage}
            alt={data.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>

        {/* Description */}
        <p
          className="text-[#585858] text-base sm:text-lg font-medium leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {data.description}
        </p>

        {/* Problems and Solutions */}
        <div className="space-y-6">
          <h3
            className="text-2xl sm:text-3xl font-semibold text-black"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {data.subTitle1}
          </h3>

          <div>
            <p
              className="text-lg font-semibold text-black"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {data.problem1}
            </p>
            <p
              className="text-[#585858] text-base font-medium mt-1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {data.problem1Des}
            </p>
          </div>

          <ul className="space-y-4 list-disc list-inside text-[#444]">
            {data.solutions1.map((solution, index) => (
              <li key={index} data-aos="fade-up" data-aos-duration="3000">
                <span className="font-semibold text-black">
                  {solution.title}:
                </span>{" "}
                {solution.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
