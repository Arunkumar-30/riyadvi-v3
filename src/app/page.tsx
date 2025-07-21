import BannerSlider from "@/components/ui-section/Banner";
import CaseStudies from "@/components/ui-section/CaseStudies";
import ContactComponent from "@/components/ui-section/ContactSection";

import FaqAccordion from "@/components/ui-section/FaqSection";
import TestimonialSlider from "@/components/ui-section/NewTestimonal";

import ServiceComponent from "@/components/ui-section/ServiceSection";
import Testimonials from "@/components/ui-section/Testimonal";

import TrustedPartner from "@/components/ui-section/TrustedPartners";
import WhyChooseUs from "@/components/ui-section/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <div>
        <BannerSlider></BannerSlider>
      </div>
      <WhyChooseUs />

      <ServiceComponent />
      {/* <ServiceHome /> */}
      {/* <AboutComponent /> */}
      {/* <WhyChooseUsComponent /> */}
      <TrustedPartner />
      <ContactComponent />

      <CaseStudies />
      <TestimonialSlider />
      <Testimonials />
      <FaqAccordion />
    </div>
  );
}
