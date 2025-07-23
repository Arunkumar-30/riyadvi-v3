import CommonBannerComponent from "@/components/ui-section/CommonBanner";
import FAQSection from "@/components/ui-section/FaqSection";

import Image from "next/image";

const allServices = [
  {
    slug: "web-development",
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
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
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
    slug: "ar-vr",
    title: "AR & VR",
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
    slug: "3d-modeling",
    title: "3D Modelling",
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
    slug: "game-development",
    title: "Game Development",
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
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subTitle: "Crafting Intuitive and Engaging Digital Experiences",
    mainImag: "/home/uiux-1.jpg",
    titlePara:
      "Exceptional design is at the heart of every successful digital product. Our UI/UX design services focus on creating visually appealing, user-friendly, and conversion-driven interfaces. From wireframing to high-fidelity prototypes, we ensure every step enhances the user's journey and meets your business goals. Partner with us to bring creativity and functionality together in every pixel.",
    offering: [
      {
        title: "User Research & Persona Building",
        description:
          "We conduct in-depth research to understand user behavior and craft personas that guide effective design decisions aligned with real user needs.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "We build low and high-fidelity wireframes and interactive prototypes to validate functionality, user flows, and structure before development begins.",
      },
      {
        title: "UI Design",
        description:
          "Our design team creates pixel-perfect, responsive, and visually stunning interfaces that reflect your brand and enhance usability across devices.",
      },
      {
        title: "UX Design",
        description:
          "We optimize user journeys by simplifying complex workflows, ensuring seamless navigation, and focusing on task efficiency and user satisfaction.",
      },
      {
        title: "Mobile App Design",
        description:
          "We create responsive and intuitive mobile interfaces tailored for both iOS and Android platforms to provide a consistent and engaging experience.",
      },
      {
        title: "Design System Creation",
        description:
          "We build reusable design systems and component libraries to ensure consistency, scalability, and faster product iterations across your platforms.",
      },
    ],
    benifits: [
      {
        imag: "/home/uiux-2.jpg",
        title: "Improved User Engagement",
        description:
          "Intuitive and aesthetic interfaces enhance user satisfaction, increase interaction rates, and encourage longer engagement with your product.",
      },
      {
        imag: "/home/uiux-2.jpg",
        title: "Higher Conversion Rates",
        description:
          "Optimized design funnels and user flows lead to improved conversion metrics and increased ROI on your digital platforms.",
      },
      {
        imag: "/home/uiux-2.jpg",
        title: "Brand Consistency",
        description:
          "Unified visual language and design elements strengthen your brand identity and create a professional, trustworthy impression.",
      },
      {
        imag: "/home/uiux-2.jpg",
        title: "Faster Development",
        description:
          "Well-structured UI kits and design systems reduce developer guesswork and speed up the product development lifecycle.",
      },
    ],
    industry: [
      {
        imag: "/home/uiux-3.jpg",
        title: "E-commerce",
        description:
          "Designing seamless product browsing, filtering, and checkout experiences to boost online sales and customer satisfaction.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Healthcare",
        description:
          "Creating user-friendly dashboards, appointment systems, and telehealth interfaces that prioritize clarity and accessibility.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Education",
        description:
          "Designing engaging, interactive platforms for e-learning and student management with intuitive content delivery.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Finance",
        description:
          "Building secure and visually clear user experiences for online banking, investment, and budgeting tools.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Real Estate",
        description:
          "Creating intuitive search interfaces, property detail pages, and lead generation flows for real estate platforms.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Entertainment",
        description:
          "Designing immersive and interactive UI experiences for music, video streaming, and gaming platforms.",
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

export default async function ServiceComponent({ params }: PageProps) {
  const { slug } = await params; // TypeScript now knows slug is a string
  const data = allServices.find((s) => s.slug === slug);

  const titlePara = data?.titlePara || "";
  const firstPart = titlePara.slice(0, 100);
  const secondPart = titlePara.slice(100);
  return (
    <>
      <div>
        <CommonBannerComponent title={data?.title || ""} />
        <section id="Overview" className="mt-10 lg:mt-20">
          <div className="flex justify-center mt-28 lg:mt-20 px-4">
            <div className="w-full max-w-7xl h-fit flex flex-col lg:flex-row gap-10 p-4 lg:p-10">
              {/* Left: Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-[400px] aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={data?.mainImag || ""}
                    alt="Web Development"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#2e3263] font-bold lg:leading-[55px]">
                  {data?.title}
                </h2>

                <p className="text-lg md:text-xl lg:text-3xl font-bold text-[#00619F] lg:leading-[35px]">
                  {data?.subTitle}
                </p>

                <div className="text-gray-600 space-y-4">
                  <p className="text-sm md:text-base lg:text-lg">{firstPart}</p>
                  <p className="text-sm md:text-base lg:text-lg">
                    {secondPart}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Our Offerings" className="mt-10 lg:mt-20">
          <div className="w-full overflow-hidden px-4">
            <div>
              <h2
                className="text-center text-3xl lg:text-4xl xl:text-5xl
               bg-contact-background bg-clip-text
               font-bold p-2"
              >
                Our Offerings
              </h2>
            </div>

            <div className="flex justify-center lg:mt-10">
              <div className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-3">
                {data?.offering?.map((data1, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <h2 className="text-xl xl:text-2xl font-bold text-black">
                      {data1.title}
                    </h2>
                    <p className="text-[#666666] mt-3 font-normal text-sm md:text-base lg:text-lg">
                      {data1.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="Business Benefits" className="mt-10 lg:mt-20">
          <div className="w-full px-4 py-10 overflow-hidden bg-custom-gradient bg-[#005F9C0D]">
            <div className="text-center">
              <div className="relative w-full flex justify-center items-center h-[50px] overflow-hidden">
                <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl  font-bold py-10">
                  Business Benefits
                </h2>
              </div>
            </div>

            <div className="flex justify-center w-full p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full lg:w-[80%] mt-5 lg:mt-10 rounded-xl border overflow-hidden">
                {data?.benifits?.map((data1, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-white p-6 transition border-l-2 border"
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          alt="support"
                          src="/assets/Custom-services-qrv_zKz7.gif"
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-center text-xl lg:text-2xl xxl:text-3xl font-bold mt-4">
                        {data1.title}
                      </h2>
                      <p className="text-[#585858] text-sm md:text-base lg:text-lg mt-5">
                        {data1.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="Industry Use Cases" className="mt-10 lg:mt-20">
          <div className="w-full px-4 overflow-hidden">
            <div className="text-center">
              <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl bg-contact-background bg-clip-text  font-bold">
                Industry Use Cases
              </h2>
            </div>

            <div className="flex justify-center w-full p-2 mt-5 lg:mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-[80%] mt-5 rounded-lg">
                {data?.industry?.map((data1, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16">
                        <img
                          alt="E-Commerce"
                          src="/assets/ecommerce-D_nw2niD.gif"
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-center text-md md:text-2xl font-bold mt-4">
                        {data1.title}
                      </h2>
                      <p className="text-[#585858] text-sm md:text-base lg:text-lg mt-5">
                        {data1.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FAQSection />
      </div>
    </>
  );
}
