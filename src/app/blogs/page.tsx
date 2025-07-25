"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "boost-your-conversion-rate",
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    category: "Marketing",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta.",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "", // Will fallback to default
    },
    image: "/home/about-1.jpg",
  },
  {
    slug: "how-to-use-seo-to-drive-sales",
    title: "How to use SEO to drive sales",
    date: "Mar 10, 2020",
    category: "Sales",
    description:
      "Quis velit reprehenderit. Fugiat quis sit excepturi. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl: "",
    },
    image: "/home/about-1.jpg",
  },
];

export default function BlogSection() {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight  text-black sm:text-4xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            From the blog
          </h2>
          <p
            className="mt-2 text-lg leading-8 text-[#585858] text-md xl:text-lg  font-[500]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-20">
          {blogPosts.map((post, index) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={index}
              className="block group"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* Image */}
                <div className="flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={350}
                    height={350}
                    className="w-[350px] h-[350px] object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="md:text-left">
                  <p className="text-sm text-gray-500">
                    {post.date}
                    <span className="ml-2 px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                      {post.category}
                    </span>
                  </p>
                  <h3 className="mt-2 text-lg lg:text-xl xl:text-2xl font-[500] group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-[#585858] text-md xl:text-lg  font-[500]">
                    {post.description}
                  </p>

                  {/* Author Info */}
                  <div className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl || "/default-avatar.png"}
                      alt={post.author.name}
                      width={40}
                      height={40}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
