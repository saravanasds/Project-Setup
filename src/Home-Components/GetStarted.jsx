import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const GetStartedCTA = () => {
    return (
        <section className="bg-gradient-to-br from-white to-[#f9fafe] py-16 px-6 sm:px-12 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Just a few clicks away from simplifying your hotel operations. Try it for free!
                </p>
                <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white text-base sm:text-lg font-semibold bg-primary hover:bg-secondary rounded-full transition-all duration-300 shadow-md"
                >
                    Start Free 14-Days Trial
                    <FaArrowRight className="ml-1" />
                </Link>
                <p className="text-sm text-gray-500 mt-4">No credit card required</p>
            </div>
        </section>
    );
};

export default GetStartedCTA;
