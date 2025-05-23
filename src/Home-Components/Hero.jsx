import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bed from '../assets/bedresize.jpg'
import hall from '../assets/hallresize.jpg'
import front from '../assets/frontresize.jpg'
import recep from '../assets/recepresize.jpg'
import dining from '../assets/diningresize.jpg'

const HeroSection = () => {
  const sliderImages = [
    dining,
    recep,
    front,
    hall,
    bed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-light text-white mt-20">
      <div className="max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 p-10 rounded-3xl"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Easy to Use, <br />
            <span className="text-primary-light">
              All-In-One Hotel Management Software
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8">
            HMS-In is a next-gen, AI-powered hotel management platform that
            simplifies hotel operations from reservations to guest experiences —
            all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/demo"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition duration-300"
            >
              Request a Demo
            </a>
            <a
              href="/features"
              className="border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Image / Graphic */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Hotel Software Slide ${index + 1}`}
                  className="rounded-3xl border border-white/10 w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
