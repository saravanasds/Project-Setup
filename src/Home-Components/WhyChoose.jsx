import React from "react";
import {  FaCogs,
    FaCalendarCheck,
    FaRocket,
    FaSmile,
    FaChartLine,
    FaHeadset, } from "react-icons/fa";

const WhySwitchSection = () => {
    const features = [
        {
            icon: <FaCogs className="text-secondary text-3xl" />,
            title: "All-in-One Solution",
            desc: "Easily manage reservations, billing, and housekeeping with one streamlined system.",
        },
        {
            icon: <FaCalendarCheck className="text-secondary text-3xl" />,
            title: "Increase Direct Bookings",
            desc: "Attract more direct bookings with our integrated smart booking engine and channel manager.",
        },
        {
            icon: <FaRocket className="text-secondary text-3xl" />,
            title: "Boost Efficiency",
            desc: "Automate daily hotel operations to save time, minimize errors, and enhance guest satisfaction.",
        },
        {
            icon: <FaSmile className="text-secondary text-3xl" />,
            title: "Exceptional Guest Experience",
            desc: "Make guests happy with smooth check-ins, fast service, and personalized interactions.",
        },
        {
            icon: <FaChartLine className="text-secondary text-3xl" />,
            title: "Powerful Insights & Reporting",
            desc: "See real-time analytics to make smarter decisions and grow your hotel business.",
        },
        {
            icon: <FaHeadset className="text-secondary text-3xl" />,
            title: "Reliable Support",
            desc: "Get expert assistance anytime with our 24/7 responsive customer support team.",
        },
    ];

    return (
        <section className="bg-light py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Why Switch Your Hotel Management Software To <span className="text-primary">HMS-IN?</span>
                </h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                    Discover how HMS-IN simplifies hotel operations, enhances bookings, and helps you deliver exceptional guest experiences.
                </p>
                <div className="grid md:grid-cols-3 gap-10 text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySwitchSection;
