import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is HMS-IN and how can it help my hotel?",
    answer:
      "HMS-IN is an all-in-one cloud-based hotel management software that helps automate hotel operations such as reservations, housekeeping, billing, and guest service. It’s designed to improve efficiency and guest satisfaction.",
  },
  {
    question: "Is HMS-IN suitable for small hotels or only large properties?",
    answer:
      "HMS-IN is scalable and perfect for both small independent hotels and large hotel chains. It offers modular features that adapt to your hotel's needs.",
  },
  {
    question: "Can I access HMS-IN on mobile devices?",
    answer:
      "Yes, HMS-IN is mobile-optimized, allowing you to manage your hotel operations from anywhere using a smartphone or tablet.",
  },
  {
    question: "Does HMS-IN support integration with third-party systems?",
    answer:
      "Absolutely! HMS-IN integrates with popular third-party tools like payment gateways, booking engines, accounting systems, and more.",
  },
  {
    question: "What kind of support does HMS-IN offer?",
    answer:
      "HMS-IN provides 24/7 customer support with expert onboarding, training, and ongoing assistance to ensure your success.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Find answers to common questions about HMS-IN and how it supports your hospitality business.
        </p>
        <div className="space-y-4 text-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-gray-800 font-medium">{item.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-secondary" />
                ) : (
                  <FaChevronDown className="text-secondary" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
