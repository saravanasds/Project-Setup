import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  "Track room bookings and availability in real-time",
  "Manage guest check-in/check-out with one click",
  "Monitor daily revenues and occupancy rates",
  "Streamline communication between departments",
  "Generate detailed reports with custom filters",
];

const ScreenshotFeatureShowcase = () => {
  return (
    <section className="bg-gradient-to-br from-[#FAF5FF] to-[#F0E9FF] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E3475] leading-tight">
            All-in-One Hotel Dashboard
          </h2>
          <p className="text-gray-700 text-lg">
            Stay ahead with our smart and intuitive dashboard designed to give hotel managers real-time insights and control over operations.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-800">
                <CheckCircle className="text-[#7C4585] mt-1 mr-3" />
                <span className="text-md">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Content */}
        <div className="relative group transition-transform hover:scale-105 duration-500">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10">
            <img
              src="/hotel-dashboard-mockup.png"
              alt="Hotel Dashboard Screenshot"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white px-3 py-1 text-sm text-[#7C4585] font-semibold rounded-md shadow">
            Live Preview
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotFeatureShowcase;
