import CommonBannerComponent from "@/components/ui-section/CommonBanner";
import FAQSection from "@/components/ui-section/FaqSection";

import Image from "next/image";

const allServices = [
  {
    slug: "blog-1",
    title: "Web Developement",
    subTitle: "Building High-Performance Websites With Custom Solutions",
    mainImag: "/home/about-1.jpg",
    titlePara:
      "A strong online presence starts with expert web development. We create fast, secure, and scalable websites that meet your business needs.Our web development services in Chennai, India, include custom website development, e-commerce solutions, CMS integration, and responsive web design to ensure the best user experience. Our clients trust us to deliver innovative solutions that help them succeed in a competitive market.",
    offering: [
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Developement",
    subTitle: "Building High-Performance Websites With Custom Solutions",
    mainImag: "/home/about-1.jpg",
    titlePara:
      "A strong online presence starts with expert web development. We create fast, secure, and scalable websites that meet your business needs.Our web development services in Chennai, India, include custom website development, e-commerce solutions, CMS integration, and responsive web design to ensure the best user experience. Our clients trust us to deliver innovative solutions that help them succeed in a competitive market.",
    offering: [
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, updated, and performing optimally for a seamless user experience.",
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
    ...allServices.map((a) => ({
      slug: a.slug,
    })),
  ];
}

export default async function BlogsComponent({ params }: PageProps) {
  const { slug } = await params; // TypeScript now knows slug is a string
  const data = allServices.find((s) => s.slug === slug);

  return (
    <>
      <div>
        <section id="Overview" className="mt-10 lg:mt-20">
          <div className="flex justify-center mt-28 lg:mt-20 px-4">
            <div className="w-full max-w-7xl h-fit flex flex-col lg:flex-row gap-10 p-4 lg:p-10">
              {/* Left: Image Section */}
              <div className="w-full flex justify-center items-center">
                <div className="w-full  aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/home/about-1.jpg"
                    alt="Web Development"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </div>
    </>
  );
}
