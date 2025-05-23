import React, { useState } from 'react';
import bed from '../assets/bedresize.jpg'
import hall from '../assets/hallresize.jpg'
import front from '../assets/frontresize.jpg'
import recep from '../assets/recepresize.jpg'
import dining from '../assets/diningresize.jpg' 


const hmsTopics = [
  {
    title: 'Overview',
    content:
      "HMS-In is a comprehensive hotel management solution designed to centralize and streamline every aspect of your hotel operations. Built with a cloud-first approach, it allows property managers to access data securely from anywhere, ensuring real-time updates and decision-making.",
    image: hall,
  },
  {
    title: 'Operations Management',
    content:
      "Simplify back-office tasks like front desk coordination, staff workflow, housekeeping updates, and audits. HMS-In boosts efficiency and reduces manual errors across teams.",
    image: front,
  },
  {
    title: 'Guest Experience',
    content:
      "Enhance guest journeys with pre-arrival messaging, seamless check-ins, personalized profiles, and post-checkout feedback collection — all powered by HMS-In.",
    image: recep,
  },
  {
    title: 'Smart Integrations',
    content:
      "Connect effortlessly with booking engines, payment gateways, OTAs, and accounting systems. HMS-In centralizes all operations, eliminating the need to switch between tools.",
    image: dining ,
  },
  {
    title: 'Security & Support',
    content:
      "Your data is secured with end-to-end encryption, backups, and access control. Our expert team is available 24/7 for tech assistance and tailored support.",
    image: bed,
  },
];

const HMSTopicsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-br from-white via-[#FDF7FF] to-[#FFF9FB] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-[#7C4585] mb-12">
          All-in-One Hotel Management Software – Explained
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="md:w-1/4" data-aos="fade-right">
            <ul className="space-y-4">
              {hmsTopics.map((topic, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold border-2 ${
                      activeTab === idx
                        ? 'bg-[#C95792] text-white border-[#C95792] shadow-lg'
                        : 'bg-white text-[#7C4585] border-[#7C4585] hover:bg-[#F8B55F]/20'
                    }`}
                  >
                    {topic.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Display */}
          <div
            className="md:w-3/4 bg-white rounded-2xl shadow-xl p-6 border border-[#EAEAEA] flex flex-col lg:flex-row gap-6"
            data-aos="fade-left"
          >
            <div className="w-full lg:w-1/2">
              <img
                src={hmsTopics[activeTab].image}
                alt={hmsTopics[activeTab].title}
                className="rounded-xl shadow-md w-full object-cover h-72"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-[#7C4585] mb-4">
                {hmsTopics[activeTab].title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {hmsTopics[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMSTopicsSection;
