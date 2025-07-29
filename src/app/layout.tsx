import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import NavbarComponent from "@/components/navbar/Navbar";
import FooterComponent from "@/components/footer/footer";
import ScrollAndContactButtons from "@/components/ui-section/ScrollToTop";
import AOSProvider from "@/components/AOSProvider";
import ClientWrapper from "@/components/ui-section/ClientWrapper"; // 👈 custom wrapper

export const metadata = {
  // Basic SEO
  title: "Riyadvi Software Technologies | Custom IT Solutions",
  description:
    "Riyadvi Software Technologies offers bespoke IT solutions, website development, and consulting services tailored to empower your business.",
  keywords:
    "IT company, software solutions, web development, custom IT solutions, IT consulting, software development, technology company",
  author: "Riyadvi Software Technologies",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",

  // Open Graph
  og: {
    type: "website",
    title: "Riyadvi Software Technologies | Custom IT Solutions",
    description:
      "Explore innovative IT solutions with Riyadvi Software Technologies. Your success is our mission.",
    url: "https://www.riyadvisoftwaretechnologoes.com",
    image: "https://www.riyadvisoftwaretechnologies.com/riyadvilogo.png",
    locale: "en_US",
    site_name: "Riyadvi Software Technologies",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Riyadvi Software Technologies | Custom IT Solutions",
    description:
      "Delivering cutting-edge IT solutions, web development, and consulting services for your business growth.",
    image: "https://www.riyadvisoftwaretechnologies.com/riyadvilogo.png",
  },

  // Additional Metadata
  canonical: "https://www.riyadvisoftwaretechnologies.com",
  favicon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/riyadvilogo.png" />
      </head>
      <body className="antialiased">
        <NavbarComponent />
        <AOSProvider />
        <ClientWrapper>
          {" "}
          {/* 👈 This includes Loader */}
          {children}
        </ClientWrapper>
        <FooterComponent />
        <ScrollAndContactButtons />
      </body>
    </html>
  );
}
