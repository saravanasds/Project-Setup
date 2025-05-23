import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary uppercase">
            Company Name
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Your professional tagline or description goes here.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm sm:text-base">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaHome className="text-primary" />
                <Link
                  onClick={scrollToTop}
                  to="/"
                  className="hover:text-secondary transition"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaInfoCircle className="text-primary" />
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="hover:text-secondary transition"
                >
                  About
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaServicestack className = "text-primary" />
                <Link
                  to="/products"
                  onClick={scrollToTop}
                  className="hover:text-secondary transition"
                >
                  Products
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-primary" />
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="hover:text-secondary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-secondary">
              Contact & Address
            </h2>
            <address className="not-italic text-gray-600 leading-relaxed">
              Company Name
              <br />
              11/12, Tamil Nadu, India
              <br />
              Phone: +91 98765 43210
              <br />
              Email: info@company.com
            </address>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-secondary">
              Features
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Swimming Pool with a Poolside Bar</li>
              <li>Fully-equipped Fitness Center</li>
              <li>Complimentary Airport Shuttle</li>
              <li>Event and Conference Facilities</li>
              <li>Pet-Friendly Rooms</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-500">
            <span className="text-primary">
              &copy; {new Date().getFullYear()}
            </span>{" "}
            Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
