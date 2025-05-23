import React from 'react';
import HotelManagement from "../assets/hotelManagment.jpg";

const benefits = [
  {
    title: "Centralized Management",
    delay: "100",
    color: "text-secondary",
    description:
      "Manage patient records, billing, appointments, pharmacy, and more from a single, unified platform.",
  },
  {
    title: "Enhanced Patient Care",
    delay: "200",
    color: "text-blue-600",
    description:
      "Streamlined workflows and real-time data access help deliver faster, safer, and more personalized care.",
  },
  {
    title: "Secure & Compliant",
    delay: "300",
    color: "text-blue-600",
    description:
      "Built with robust security measures and compliance with healthcare standards like HIPAA to protect patient data.",
  },
  {
    title: "Customizable Modules",
    delay: "400",
    color: "text-blue-600",
    description:
      "Tailor the system to fit your hospital’s exact workflows — from outpatient care to inventory management.",
  },
  {
    title: "Advanced Reporting",
    delay: "500",
    color: "text-blue-600",
    description:
      "Generate real-time analytics and insights for smarter decision-making and performance tracking.",
  },
  {
    title: "24/7 Support",
    delay: "600",
    color: "text-blue-600",
    description:
      "Our dedicated support team ensures your system runs smoothly, with prompt assistance whenever needed.",
  },
];

const AboutHMS = () => {
  return (
    <div className="w-full px-6 lg:px-20 py-12 my-5 bg-white text-primary">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
          HMS IN: Your All-in-One Hotel Management Solution
        </h2>
        <p
          className="text-gray-600 max-w-2xl text-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Simplify hotel operations, enhance guest experiences, and drive growth — all with one powerful platform.
        </p>
      </div>

      {/* Who We Are */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-semibold text-primary">HMS - IN</span>, we are passionate about redefining healthcare management through technology.
            Our Hospital Management System (HMS) is a comprehensive, integrated platform built to streamline hospital operations, enhance patient care, and optimize resource management.
            <br /><br />
            With a team of healthcare IT experts, we bridge the gap between medical excellence and digital innovation — delivering user-centric, reliable, and scalable solutions to hospitals, clinics, and healthcare providers.
          </p>
        </div>
        <div data-aos="fade-left">
          <img src={HotelManagement} alt="About Us" className="rounded-lg shadow-lg object-cover w-full h-80" />
        </div>
      </div>

      {/* Our Product Benefits */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center mb-8" data-aos="fade-up">
          Our Product Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-xl hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={benefit.delay}
            >
              <h4 className={`font-semibold text-xl text-secondary mb-3 ${benefit.color}`}>{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHMS;
