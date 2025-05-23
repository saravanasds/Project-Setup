import React, { useState } from "react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [currency, setCurrency] = useState("INR");

  const plans = [
    {
      name: "CLASSIC",
      monthly: 2200,
      yearly: 1980,
      features: [
        "Front-office management",
        "Handle arrivals and departures",
        "Housekeeping",
        "Night audit process",
        "User activity logs",
        "Group management",
        "Walk-ins and reservations",
        "Expense management",
        "Tax management",
        "Multiple payment methods",
        "Billing and settlements",
        "Offline bookings management",
        "Travel agent management",
      ],
    },
    {
      name: "GOLD",
      monthly: 2800,
      yearly: 2520,
      features: [
        "All Classic features",
        "Point of Sale",
        "Stores and Inventory",
      ],
    },
    {
      name: "PLATINUM",
      monthly: 3200,
      yearly: 2880,
      features: ["All Gold features", "Financial Accounts"],
    },
    {
      name: "DIAMOND",
      monthly: 4200,
      yearly: 3780,
      features: ["All Platinum features", "Booking Engine", "Channel Manager"],
    },
  ];

  const formatPrice = (price) => {
    return currency === "INR" ? `₹${price}` : `$${price}`;
  };

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Check out the Best Cloud Hotel Software Pricing
        </h2>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Billing:</span>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingCycle === "yearly"
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              Yearly
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border rounded-xl px-5 py-2 text-sm"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col justify-between transition 
    ${
      plan.name === "GOLD"
        ? "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600  font-semibold text-white scale-105 border-2 border-amber-400 shadow-inner"
        : "bg-white shadow-lg hover:shadow-2xl"
    }`}
            >
              <div>
                {plan.name === "GOLD" && (
                  <div className="mb-3">
                    <span className="inline-block bg-white text-yellow-600 font-bold px-3 py-1 rounded-full text-xs tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-4 ${
                    plan.name === "GOLD" ? "text-white" : "text-blue-600"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="flex items-end space-x-2 mb-4">
                  <span
                    className={`text-3xl font-extrabold ${
                      plan.name === "GOLD" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {billingCycle === "monthly"
                      ? formatPrice(plan.monthly)
                      : formatPrice(plan.yearly)}
                  </span>

                  {billingCycle === "yearly" && (
                    <span
                      className={`font-semibold text-sm ${
                        plan.name === "GOLD" ? "text-white" : "text-green-500"
                      }`}
                    >
                      Save 10%
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm mb-6 ${
                    plan.name === "GOLD" ? "text-white" : "text-gray-500"
                  }`}
                >
                  Per Month Per Property (
                  {billingCycle === "yearly" ? "Paid Yearly" : "Paid Monthly"})
                </p>

                <ul
                  className={`space-y-2 text-sm ${
                    plan.name === "GOLD" ? "text-white" : "text-gray-600"
                  }`}
                >
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className={`mr-2 ${
                          plan.name === "GOLD" ? "text-white" : "text-blue-500"
                        }`}
                      >
                        *
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full py-2 rounded-full font-semibold transition 
      ${
        plan.name === "GOLD"
          ? "bg-white text-yellow-600 hover:bg-yellow-200"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
