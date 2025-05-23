import React from "react";
import {
  FaBed,
  FaConciergeBell,
  FaUtensils,
  FaCashRegister,
  FaBoxOpen,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBed className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Room Reservation",
    delay: "0",
    description:
      "HMS-In offers an intuitive room reservation system that enables effortless booking management. It supports real-time availability updates, making it easy to handle both individual and group reservations.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Banquet",
    delay: "100",
    description:
      "Streamline banquet and event management by handling reservations and managing venue availability with HMS-In's dedicated banquet features.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Front Office Management",
    delay: "200",
    description:
      "HMS-In simplifies check-in and check-out processes, ensuring a smooth and hassle-free experience for both individual and group hotel bookings.",
  },
  {
    icon: <FaBoxOpen className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Housekeeping",
    delay: "300",
    description:
      "Reduce housekeeping workload with one-click actions and real-time room status updates, making room management efficient and seamless.",
  },
  {
    icon: <FaUtensils className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Point of Sale (POS)",
    delay: "400",
    description:
      "Touch POS and tablet-enabled systems for order generation and billing, fully integrated with Room Service, the Bar, and the Restaurant.",
  },
  {
    icon: <FaCashRegister className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Financial Accounting",
    delay: "500",
    description:
      "HMS-In provides a comprehensive financial accounting module that automates transactions, manages invoices, and tracks revenue and expenses in real-time.",
  },
  {
    icon: <FaBoxOpen className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Material Management",
    delay: "600",
    description:
      "Monitor inventory, procurement, and usage in real-time with automated stock updates and supplier transaction management.",
  },
  {
    icon: <FaUtensils className="text-4xl text-secondary mb-4 mx-auto" />,
    title: "Food and Beverages Costing",
    delay: "700",
    description:
      "Simplify food and beverage costing by accurately tracking ingredient usage, menu pricing, and overall expenses.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">
          Simplifies Hotel Operations For The New Era of Hospitality
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-6 bg-white border-[0.5px] border-secondary  rounded-lg shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
