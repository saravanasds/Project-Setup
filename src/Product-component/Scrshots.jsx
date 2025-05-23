import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  "Track room bookings and availability in real-time",
  "Manage guest check-in/check-out with one click",
  "Monitor daily revenues and occupancy rates",
  "Streamline communication between departments",
  "Generate detailed reports with custom filters",
];

const ScreenshotFeatureShowcase = () => {
  return (
    <section className="bg-[#FDF7FF] py-20 px-6 md:px-20">
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
        data-aos="fade-up"
      >
        {/* Screenshot */}
        <div className="w-full lg:w-1/2">
          <img
            src="/hotel-dashboard-mockup.png"
            alt="HMS Screenshot"
            className="rounded-3xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Descriptive Points */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#7C4585] mb-6 leading-snug">
            Drive Results with Our Interactive Dashboard
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our intuitive and data-driven HMS-In dashboard empowers hoteliers to make informed decisions while optimizing performance. Here's what you can do:
          </p>
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-800">
                <ArrowRight className="text-[#C95792] mr-3 mt-1" />
                <span className="text-md">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotFeatureShowcase;
