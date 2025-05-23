// components/CustomSlider.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactHotel from "../assets/ContactHotel.jpg";
import Hotel from "../assets/Hotel.jpg";
import hotelManagment from "../assets/hotelManagment.jpg";

const slides = [
  {
    title: "Streamline Hotel Operations",
    description:
      "Automate bookings, check-ins, and housekeeping with a centralized hotel management system.",
    image: ContactHotel,
  },
  {
    title: "Enhance Guest Experience",
    description:
      "Deliver personalized service with real-time guest insights, feedback tracking, and seamless communication tools.",
    image: Hotel,
  },
  {
    title: "Manage Everything from One Dashboard",
    description:
      "Control room inventory, billing, analytics, and staff management in one powerful platform.",
    image: hotelManagment,
  },
];

const CustomSlider = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden  mt-10"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div
            className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center px-4"
            
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-primary"
              data-aos="fade-left"
              data-aos-duration="500"
              style={{
                WebkitTextStroke: "0.5px violet",
                textShadow: "2px 4px 4px rgba(0,0,0,0.9)",
              }}
            >
              {slides[index].title}
            </h2>

            <p
              className="text-lg max-w-xl text-white tracking-wide font-medium"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              {slides[index].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
