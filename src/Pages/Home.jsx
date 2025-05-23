import React from "react";
import { useEffect } from "react";
import HeroSection from "../Home-Components/Hero";
import FeaturesSection from "../Home-Components/Features";
import IntegrationsSection from "../Home-Components/Integration";
import TestimonialsSection from "../Home-Components/Testimonial";
import WhyChoose from "../Home-Components/WhyChoose"
import GetStarted from "../Home-Components/GetStarted"
import SliderImages from "../Home-Components/SliderImages"
import Faq from "../Home-Components/Faq"


const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full h-auto flex flex-col  justify-center items-center " data-aos="fade-up" >
      <HeroSection/>
      <FeaturesSection/>
      <IntegrationsSection/>
      <SliderImages/>
      <TestimonialsSection/>
      <WhyChoose/>
      <GetStarted/>
      <Faq/>
    </div>
  );
};

export default Home;
