import CommonBannerComponent from "@/components/ui-section/CommonBanner";
import FAQSection from "@/components/ui-section/FaqSection";

import Image from "next/image";

const allServices = [
  {
    slug: "web-development",
    title: "Web Development Solution",
    subTitle: "Building High-Performance Websites With Custom Solutions",
    mainImag: "/home/website-development.jpg",
    titlePara:
      "A strong online presence starts with expert web development. We create fast, secure, and scalable websites that meet your business needs. Our web development services in Chennai, India, include custom website development, e-commerce solutions, CMS integration, and responsive web design to ensure the best user experience.Our clients trust us to deliver innovative solutions that help them succeed in a competitive market.",
    offering: [
      {
        title: "Custom Website Development",
        description:
          "We build fast, secure, and SEO-friendly websites that look great, load quickly, and help businesses grow with better performance and user experience.",
      },
      {
        title: "E-Commerce Development",
        description:
          "Create an online store with secure payments, mobile-friendly design, and smooth navigation for a hassle-free shopping experience and increased sales",
      },
      {
        title: "CMS Application Development",
        description:
          "Manage your website easily with WordPress, Shopify, or Drupal. We create secure, SEO-optimized CMS solutions for effortless updates and better performance.",
      },
      {
        title: "UI/UX Design and Development",
        description:
          "Attractive and easy-to-use website designs that keep visitors engaged, improve brand trust, and turn more users into customers.",
      },
      {
        title: "SEO & Performance Optimization",
        description:
          "Improve website speed, SEO ranking, and mobile responsiveness to attract more visitors and boost your online presence",
      },
      {
        title: "Web Application Developmentt",
        description:
          "Get a high-performing web app with fast loading speed and user-friendly design, improving engagement and streamlining business processes.",
      },
    ],
    benifits: [
      {
        imag: "/gif/web/benifit-1.gif",
        title: "Support and Maintenance",
        description:
          "We provide ongoing website support and maintenance services, keeping your site secure, and updated, and performing optimally for a seamless user experience.",
      },
      {
        imag: "/gif/web/benifit-3.gif",
        title: "Scalable Business Growth",
        description:
          "Our scalable web solutions grow with your business, offering easy upgrades, feature integration, and improved performance to meet evolving demands.",
      },
      {
        imag: "/gif/web/benifit-2.gif",
        title: "Improving Performance",
        description:
          "We optimize website speed, mobile responsiveness, and overall performance to ensure a fast, engaging user experience and better search rankings.",
      },
      {
        imag: "/gif/web/benifit-4.gif",
        title: "Full-Scale Website Testing",
        description:
          "Comprehensive website testing, including security audits, cross-browser compatibility, and load testing, ensures your site is secure, bug-free, and performs flawlessly.",
      },
    ],
    industry: [
      {
        imag: "/gif/web/online-shopping.gif",
        title: "E-Commerce",
        description:
          "Develop fast, SEO-friendly online stores with secure payments, mobile optimization, and seamless navigation, enhancing user experience and increasing sales.",
      },
      {
        imag: "/gif/web/health-checkup.gif",
        title: "Healthcare",
        description:
          "Build secure healthcare websites with patient portals, telemedicine, and HIPAA compliance, ensuring data protection and better patient engagement.",
      },
      {
        imag: "/gif/web/bank.gif",
        title: "Finance & Banking",
        description:
          "Create trusted financial platforms with encrypted transactions, fraud detection, and seamless banking, improving security, compliance, and customer trust.",
      },
      {
        imag: "/gif/web/online-lesson.gif",
        title: "Education",
        description:
          "Design interactive e-learning platforms with virtual classrooms, mobile access, and engaging content, making online education flexible and effective.",
      },
      {
        imag: "/gif/web/houses.gif",
        title: "Real Estate",
        description:
          "Develop dynamic property listing websites with 3D tours, AI-driven search, and lead management, helping buyers and agents connect efficiently.",
      },
      {
        imag: "/gif/web/solo-traveller.gif",
        title: "Hospitality & Travel",
        description:
          "Create SEO-optimized hotel booking sites with real-time availability, secure payments, and personalized experiences, improving guest satisfaction and bookings",
      },
    ],
  },
  {
    slug: "app-development",
    title: "Choosing the Right Platform for Your Mobile App",
    subTitle: "AI and IoT in Smart Mobile Applications",
    mainImag: "/home/moblie-development.jpg",
    titlePara:
      "Our Mobile Application Services in Chennai, India, help businesses develop high-performance, secure, and scalable Android, iOS, and cross-platform apps. We delivered an MVP within four weeks, ensuring a fast go-to-market strategy. A successful mobile app strategy includes defining clear objectives, understanding the target audience, selecting the right technology, prioritizing user experience, and implementing a strong development, testing, and launch process.",
    offering: [
      {
        title: "Custom App Development",
        description:
          "Build powerful mobile apps tailored to business needs with seamless functionality.",
      },
      {
        title: "iOS & Android Apps",
        description:
          "Develop high-performance applications for both iOS and Android platforms effortlessly.",
      },
      {
        title: "UI/UX Design & Testingt",
        description:
          "Craft user-friendly designs ensuring smooth navigation and optimal user experience.",
      },
      {
        title: "App Maintenance & Support",
        description:
          "Regular updates and fixes for uninterrupted mobile app performance.",
      },
      {
        title: "Enterprise Mobility Solutions",
        description:
          "Streamline business operations with scalable and secure mobile applications.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Create efficient apps that work seamlessly across multiple platforms and devices.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Higher Revenue Growth",
        description:
          "A well-optimized mobile app development strategy increases conversions, boosts sales, and enhances business profitability.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Operational Efficiency",
        description:
          "Automating processes with enterprise mobility solutions reduces costs, minimizes errors, and improves overall productivity.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Stronger Customer Relationships",
        description:
          "A seamless UI/UX design enhances user engagement, builds trust, and increases customer retention.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Future-Ready Scalability",
        description:
          "Cut unnecessary costs with automation, cloud optimization, and better resource management, making your business operations more efficient and profitable.",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "Healthcare Solutions",
        description:
          "Develop secure telemedicine apps, EHR systems, and patient portals to enhance healthcare accessibility and streamline medical workflows efficiently.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Finance & Banking",
        description:
          "Build robust fintech applications for secure transactions, risk management, and seamless digital banking experiences to improve customer trust.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "E-commerce & Retail",
        description:
          "Create user-friendly shopping apps with AI-driven recommendations, secure payments, and inventory management for better customer engagement.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Education & E-Learning",
        description:
          "Develop interactive e-learning platforms, virtual classrooms, and AI-driven assessments for a seamless digital education experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Manufacturing & Logistics",
        description:
          "Implement IoT-powered mobile apps for real-time tracking, automation, and supply chain management to enhance operational efficiency.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Travel & Hospitality",
        description:
          "Design intuitive booking apps with AI chatbots, personalized offers, and seamless payment integration for a superior travel experience.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Your One-Stop Solution for Digital Marketing Success",
    subTitle: "Increase Brand Awareness with Digital Marketing Strategies",
    mainImag: "/home/digital-marketing-1.jpg",
    titlePara:
      "Our Digital Marketing Services in Chennai, India help businesses grow by increasing brand visibility, driving organic traffic, and boosting sales. We specialize in SEO, PPC, social media, content, and email marketing to ensure online success.We analyze client goals, conduct competitor research, and develop customized strategies. To maximize our reach, we also engage with real industry teams on social media.",
    offering: [
      {
        title: "SEO Services",
        description:
          "Boost Google rankings, drive organic traffic, and enhance brand visibility with expert SEO optimization strategies.",
      },
      {
        title: "PPC Advertising",
        description:
          "Maximize ROI with Google Ads, Facebook Ads, and high-converting paid advertising campaigns for lead generation.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Increase brand awareness, engage audiences, and generate social media leads on Instagram, Facebook, and LinkedIn.",
      },
      {
        title: "Content Marketing",
        description:
          "Create SEO-optimized blogs, website content, and landing pages to attract, educate, and convert potential customers.",
      },
      {
        title: "Email Marketing",
        description:
          "Nurture leads and retain customers with personalized email automation for better customer engagement and conversions.",
      },
      {
        title: "E-commerce Marketing",
        description:
          "Drive online sales using eCommerce SEO, PPC ads, and conversion optimization for Shopify, WooCommerce, and Magento.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Increased Online Visibility",
        description:
          "Boost Google rankings, attract organic traffic, and strengthen brand presence through SEO, PPC, and social media marketing.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Higher Conversion Rates",
        description:
          "Optimize landing pages, ad campaigns, and SEO to convert website visitors into paying customers, increasing sales and business growth.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Targeted Audience Reach",
        description:
          "Use data-driven marketing, PPC ads, and social media to reach high-intent customers, generating more leads, engagement, and conversions.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Cost-Effective Marketing",
        description:
          "Maximize ROI with SEO, content marketing, and automation, reducing ad costs while driving consistent revenue and business expansion.",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "E-commerce",
        description:
          "Increase sales with SEO, PPC, and social media marketing, improving product visibility, customer engagement, and conversions for Shopify, WooCommerce, and Magento stores.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Ed-Tech",
        description:
          "Drive student enrollments using SEO, content marketing, and ads, enhancing course visibility, lead generation, and engagement for e-learning platforms, coaching centers, and institutions.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Business Services",
        description:
          "Generate quality leads with SEO, PPC, and LinkedIn marketing, boosting brand credibility, B2B outreach, and customer acquisition for consulting and service-based businesses.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Travel Agencies",
        description:
          "Attract travelers with Google Ads, SEO, and social media, increasing bookings, inquiries, and engagement for tour operators, hotels, and travel service providers.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Manufacturing",
        description:
          "Expand global reach through SEO, PPC, and digital marketing, optimizing lead generation, product awareness, and visibility for industrial and manufacturing businesses.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Healthcare",
        description:
          "mprove patient outreach with SEO, PPC, and content marketing, increasing clinic visibility, appointment bookings, and trust for hospitals, clinics, and healthcare providers.",
      },
    ],
  },
  {
    slug: "ar-vr",
    title: "VR/AR development services",
    subTitle: "Extensible and Future-Oriented VR/AR Offerings",
    mainImag: "/home/ar-vr.avif",
    titlePara:
      "We are a VR/AR development company, creating virtual and augmented reality solutions that make business operations more engaging. By applying game mechanics and design, we develop AR applications, VR simulations, and 3D solutions to maintain audience interest and efficiency. With expertise in training, education, sales, and gaming, we offer VR/AR development services in Chennai, India, helping businesses accelerate learning and retain customers.",
    offering: [
      {
        title: "Custom VR Solutions",
        description:
          "Very good VR experiences used in the process of training, education, and entertainment.",
      },
      {
        title: "Augmented Reality Apps",
        description:
          "They add AR overlays to the shopping and marketing sphere for higher engagement.",
      },
      {
        title: "3D Visualization",
        description:
          "You can make a lot of things with 3D models for architecture, product design, and simulation with precision and realism.",
      },
      {
        title: "VR/AR for Training",
        description:
          "VR/AR technology has transformed learning by making use of interactive VR/AR modules and simulating real-life situations naturally.",
      },
      {
        title: "Enterprise AR/VR",
        description:
          "AR/VR is used to aid work process automation or decision-making through the use of extremely complicated corporate solutions.",
      },
      {
        title: "VR/AR Game Development",
        description:
          "Realistic graphics and smooth gameplay are the key factors in producing engaging VR/AR games.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Increased interaction",
        description:
          "VR/AR not only increases the user's retention and brand recall but also customer experience.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Efficient Training",
        description:
          "Hands-on training using AR/VR technology considerably brings a reduction in mistakes, costs, and time spent learning.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Better Decision Making",
        description:
          "Businesses can make quicker decisions by using real-time 3D visualization, which will, in turn, enhance their accuracy and efficiency.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Competitive Market",
        description:
          "The use of AR/VR is synonymous with innovation, productivity, and customer satisfaction",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "Retail",
        description:
          "Using Virtual Reality and Augmented Reality for virtual fitting and interactive shopping drives customer involvement and sales growth.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Manufacturing",
        description:
          "AR has assisted in predicting assembly, VR training, and 3D simulations, thus removing errors and costs in the production process.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Real Estate",
        description:
          "VR property tours and AR visualizations are strategies used by clients to explore properties from afar, hence making an informed decision.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Healthcare",
        description:
          "VR/AR is beneficial in medical training, surgery simulations, and patient education, leading to accuracy and treatment results.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Education",
        description:
          "VR classrooms and AR content are an added advantage for students' learning, engagement, and retention.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Entertainment",
        description:
          "AR/VR is the foundation of vibrant stories, VR-compatible games, and an array of games, creating a virtual world.",
      },
    ],
  },
  {
    slug: "3d-modeling",
    title: "3D Modeling Services",
    subTitle: "Precision-Driven and Realistic 3D Modeling Solutions",
    mainImag: "/home/3d-modeling.jpg",
    titlePara:
      "We are a 3D modeling company that creates visually accurate and immersive 3D assets for a range of industries. Our services include architectural modeling, product visualization, simulation assets, and character modeling. Whether it’s for marketing, gaming, real estate, or engineering, our 3D modeling solutions enhance realism, improve engagement, and accelerate project delivery. We serve clients in Chennai, India and beyond.",
    offering: [
      {
        title: "Architectural 3D Modeling",
        description:
          "High-quality 3D models for real estate, interior design, and architectural visualizations that bring spaces to life.",
      },
      {
        title: "Product Visualization",
        description:
          "Detailed 3D product models used for marketing, e-commerce, and prototype validation before manufacturing.",
      },
      {
        title: "Character & Asset Modeling",
        description:
          "Custom 3D character and game asset modeling for use in games, animations, and virtual environments.",
      },
      {
        title: "Industrial Modeling",
        description:
          "Precise 3D modeling of machines, parts, and equipment used in engineering and industrial design workflows.",
      },
      {
        title: "3D Animation Support",
        description:
          "3D models optimized for animation workflows including rigging and morphing for film, media, and simulations.",
      },
      {
        title: "Simulation-Ready Models",
        description:
          "Clean, physics-ready models tailored for simulations in defense, healthcare, automotive, and aerospace industries.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Enhanced Visual Communication",
        description:
          "Convey ideas and designs more clearly using photorealistic 3D models, making it easier for clients and stakeholders to understand your vision.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Time & Cost Efficiency",
        description:
          "3D models help identify design flaws early and reduce the need for physical prototypes, saving both time and cost.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "High Engagement",
        description:
          "Interactive and visually rich 3D content keeps customers engaged, whether used in sales, education, or marketing.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Customizable & Scalable",
        description:
          "Our models are built to scale and can be reused across platforms, from web to AR/VR and simulations.",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "Real Estate",
        description:
          "Realistic 3D models of buildings, interiors, and landscapes for walkthroughs, marketing, and architectural planning.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Manufacturing",
        description:
          "3D representations of machines and tools aid in prototyping, production planning, and maintenance training.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "E-Commerce",
        description:
          "Photorealistic 3D product models enhance the online shopping experience and reduce product return rates.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Gaming",
        description:
          "Custom characters, environments, and props designed for use in real-time engines and cinematic cut-scenes.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Healthcare",
        description:
          "3D models for medical devices, anatomical structures, and surgical planning support training and diagnostics.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Advertising & Media",
        description:
          "Eye-catching 3D visuals and animations used in commercials, product launches, and promotional content.",
      },
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    subTitle:
      "Immersive, Scalable, and High-Performance Game Development Solutions",
    mainImag: "/home/game-development.jpg",
    titlePara:
      "We are a professional game development company offering end-to-end gaming solutions for mobile, desktop, web, and consoles. Our team specializes in designing engaging gameplay, stunning visuals, and seamless mechanics across various genres. From concept to launch, we deliver immersive experiences tailored to your audience. Based in Chennai, India, we help businesses and brands bring their gaming visions to life.",
    offering: [
      {
        title: "Mobile Game Development",
        description:
          "We create captivating and optimized mobile games for iOS and Android with smooth performance and rich visuals.",
      },
      {
        title: "PC & Console Game Development",
        description:
          "End-to-end development for PC and console platforms including game mechanics, 3D environments, and controller support.",
      },
      {
        title: "2D & 3D Game Design",
        description:
          "From stylized 2D games to realistic 3D experiences, we design visually appealing games with dynamic gameplay.",
      },
      {
        title: "AR/VR Game Development",
        description:
          "We build immersive augmented and virtual reality games for training, education, and entertainment experiences.",
      },
      {
        title: "Multiplayer Game Development",
        description:
          "Develop engaging multiplayer games with real-time synchronization, lobbies, and matchmaking systems.",
      },
      {
        title: "HTML5 & Web-Based Games",
        description:
          "Lightweight, responsive games accessible through browsers—ideal for marketing, e-learning, and casual gaming.",
      },
    ],
    benifits: [
      {
        imag: "/home/about-1.jpg",
        title: "Engaging User Experience",
        description:
          "We prioritize immersive gameplay and storytelling to keep users engaged and coming back for more.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Cross-Platform Compatibility",
        description:
          "Our games are developed to run smoothly across multiple platforms like mobile, desktop, console, and web.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Scalable Architecture",
        description:
          "Built with scalable architecture to accommodate high traffic and expand to new features or player bases.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Post-Launch Support",
        description:
          "We provide regular updates, bug fixes, and new content integration for a sustained game lifecycle.",
      },
    ],
    industry: [
      {
        imag: "/home/about-1.jpg",
        title: "Entertainment",
        description:
          "Developing story-driven, action, adventure, and casual games for pure entertainment and fun.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Education",
        description:
          "Educational games that make learning interactive, fun, and effective across age groups and subjects.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Healthcare",
        description:
          "Therapeutic and training games for healthcare, aiding in rehabilitation, awareness, and cognitive training.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Marketing",
        description:
          "Advergames and branded interactive experiences that increase engagement and brand recall.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Training & Simulation",
        description:
          "Realistic simulation games used for employee training, defense, aviation, and industrial learning.",
      },
      {
        imag: "/home/about-1.jpg",
        title: "Sports & eSports",
        description:
          "High-performance sports games with real-time multiplayer features and tournament support.",
      },
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subTitle: "Crafting Intuitive and Engaging Digital Experiences",
    mainImag: "/home/uiux-design.jpg",
    titlePara:
      "Exceptional design is at the heart of every successful digital product. Our UI/UX design services focus on creating visually appealing, user-friendly, and conversion-oriented interfaces. From wireframing to high-fidelity prototypes, we ensure every step enhances the user journey and aligns with your business goals. Partner with us to merge creativity and usability into every pixel.",
    offering: [
      {
        title: "User Research & Persona Building",
        description:
          "We conduct deep user research and create personas that guide informed design decisions based on real user needs and behaviors.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "We craft low- and high-fidelity wireframes and interactive prototypes to validate concepts, user flows, and layout before development.",
      },
      {
        title: "UI Design",
        description:
          "Our team creates visually consistent, responsive, and brand-aligned interfaces that offer seamless experiences across all devices.",
      },
      {
        title: "UX Design",
        description:
          "We design intuitive user journeys by streamlining workflows, reducing friction, and ensuring accessibility and usability.",
      },
      {
        title: "Mobile App Design",
        description:
          "We deliver clean, intuitive mobile UI/UX designs for iOS and Android that enhance user retention and experience.",
      },
      {
        title: "Design Systems & Style Guides",
        description:
          "We develop reusable design systems and style guides to ensure consistency, scalability, and faster product development.",
      },
    ],
    benifits: [
      {
        imag: "/home/uiux-2.jpg",
        title: "Improved User Engagement",
        description:
          "Visually compelling and user-centric designs increase retention, usability, and interaction across platforms.",
      },
      {
        imag: "/home/uiux-2.jpg",
        title: "Higher Conversion Rates",
        description:
          "Well-structured interfaces and optimized user flows lead to more sign-ups, purchases, and user actions.",
      },
      {
        imag: "/home/uiux-2.jpg",
        title: "Stronger Brand Identity",
        description:
          "Consistent design language reinforces brand recognition and builds trust with your audience.",
      },
      {
        imag: "/home/uiux-2.jpg",
        title: "Faster Time-to-Market",
        description:
          "Design systems and reusable components help accelerate development and reduce costly design changes later.",
      },
    ],
    industry: [
      {
        imag: "/home/uiux-3.jpg",
        title: "E-commerce",
        description:
          "We design streamlined shopping experiences that reduce friction, boost conversions, and drive customer loyalty.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Healthcare",
        description:
          "We create accessible, user-friendly medical dashboards, appointment booking systems, and telemedicine platforms.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Education",
        description:
          "Designing intuitive e-learning platforms and content delivery systems that improve engagement and student outcomes.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Finance",
        description:
          "We design secure, easy-to-navigate interfaces for banking apps, financial dashboards, and investment tools.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Real Estate",
        description:
          "Intuitive property listing layouts and search experiences that guide users to informed decisions quickly.",
      },
      {
        imag: "/home/uiux-3.jpg",
        title: "Entertainment",
        description:
          "Crafting immersive and dynamic UIs for media streaming, content platforms, and gaming applications.",
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
                <div
                  className="w-full max-w-[400px] aspect-square rounded-xl overflow-hidden shadow-md"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
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
                <h2
                  className=" md:text-3xl lg:text-5xl text-3xl text-black font-bold lg:leading-[55px]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {data?.title}
                </h2>

                <p
                  className="text-lg md:text-xl lg:text-3xl font-bold text-[#00619F] lg:leading-[35px]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {data?.subTitle}
                </p>

                <div className="text-gray-600 space-y-4">
                  <p
                    className="text-sm md:text-base text-[#585858] text-md xl:text-lg  font-[500]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {firstPart}
                  </p>
                  <p
                    className="text-sm md:text-base text-[#585858] text-md xl:text-lg  font-[500]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
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
                className="text-center text-3xl text-black lg:text-4xl xl:text-5xl
               bg-contact-background bg-clip-text
               font-bold p-2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Our Offerings
              </h2>
            </div>

            <div className="flex justify-center lg:mt-10">
              <div className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-3">
                {data?.offering?.map((data1, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className={`group p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                      idx === 5 ? "bg-[#D4AF37]" : "bg-white"
                    }`}

                    // className="group bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <h2 className="text-xl xl:text-2xl font-bold text-black">
                      {data1.title}
                    </h2>
                    <p className=" mt-3  text-sm md:text-base lg:text-lg text-[#585858] text-md xl:text-lg  font-[500]">
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
                <h2
                  className="text-center text-3xl text-black lg:text-4xl xl:text-5xl  font-bold py-10"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Business Benefits
                </h2>
              </div>
            </div>

            <div className="flex justify-center w-full p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full lg:w-[80%] mt-5 lg:mt-10 rounded-xl overflow-hidden">
                {data?.benifits?.map((data1, idx) => (
                  <div
                    key={idx}
                    className={`w-full  p-6 transition border-l-2 border ${
                      idx === 3 ? "bg-[#D4AF37]" : "bg-white"
                    }`}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          alt={data1.title}
                          src={data1.imag}
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-center text-xl lg:text-2xl xxl:text-3xl font-bold mt-4">
                        {data1.title}
                      </h2>
                      <p className="text-[#585858] text-md xl:text-lg  font-[500] text-sm md:text-base lg:text-lg mt-5">
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
              <h2
                className="text-center text-3xl text-black lg:text-4xl xl:text-5xl bg-contact-background bg-clip-text  font-bold"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Industry Use Cases
              </h2>
            </div>

            <div className="flex justify-center w-full p-2 mt-5 lg:mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-[80%] mt-5 rounded-lg">
                {data?.industry?.map((data1, idx) => (
                  <div
                    key={idx}
                    className={`p-6  rounded-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                      idx === 5 ? "bg-[#D4AF37]" : "bg-white"
                    }`}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16">
                        <img
                          alt={data1.title}
                          src={data1.imag}
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-center text-md md:text-2xl font-bold mt-4">
                        {data1.title}
                      </h2>
                      <p className="text-[#585858] text-md xl:text-lg  font-[500]  text-sm md:text-base lg:text-lg mt-5">
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
