import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import ContactHotel from "../assets/ContactHotel.jpg";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_u7ectm4',
        'template_sv16143',
        form.current,
        'IJ7EEY9C_YJvZ3SLZ'
      )
      .then(
        () => {
          toast.success('Email sent successfully!', { position: "top-center" });
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, { position: "top-center" });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg">
      {/* Hero Section */}
      <div
        className="w-full h-[250px] lg:h-[400px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
        style={{ backgroundImage: `url(${ContactHotel})`, backgroundSize: "cover", backgroundPosition: "bottom" }}
      >
        <h2 className="text-white font-bold text-3xl lg:text-5xl tracking-wide" data-aos="fade-up">
          Contact Us
        </h2>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      {/* Contact Info + Form */}
      <div className="px-6 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <div className="flex flex-col space-y-10" data-aos="fade-right">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-primary">Get in Touch</h3>
            <p className="text-gray-600">
              We would love to hear from you! Whether you have a question, feedback, or partnership idea.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MdLocationPin className="text-3xl text-primary" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">Palani, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-2xl text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">9384293632</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <IoMdMail className="text-3xl text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div data-aos="fade-left">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-50 p-8 rounded-3xl border-[1px] border-primary shadow-xl space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary text-white font-semibold py-3 rounded-md transition-all duration-300 hover:bg-secondary ${loading && 'opacity-50 cursor-not-allowed'}`}
            >
              {loading ? <ClipLoader size={24} color={"#fff"} /> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-6 lg:px-20 pb-10" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Our Location</h3>
        <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-xl">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4871650970365!2d77.51842907504477!3d10.991991589181422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bfeaad6a5cb%3A0x8a0b5bb28963e154!2sTamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1682777777777!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
