import React, { useState } from "react";
import Hotel from "../assets/Hotel.jpg";

const StartTrialPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    companyName: "",
    email: "",
    phone: "",
    city: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic
    console.log(formData);
    alert("Thank you for starting your free trial!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12 px-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl my-10">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={Hotel}
            alt="Hotel Management"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2 w-full p-10 my-10">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Unlock the Power of Seamless Hotel Management Software
          </h2>

          <h3 className="text-xl text-gray-600 mb-6">
            Transform your operations, delight your guests, and grow your
            success with Exceed HMS.
          </h3>

          <h4 className="text-lg font-semibold text-blue-600 mb-4">
            Discover why leading hotels and properties trust HMS IN.
          </h4>
          <p className="text-gray-500 mb-8">
            Start your{" "}
            <span className="font-bold text-primary">14-day FREE trial</span>{" "}
            today!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your Name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Hotel Name / Company Name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter Your City"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Start Your Free Trial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartTrialPage;
