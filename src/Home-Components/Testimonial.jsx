import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Hotel Manager',
    message:
      'We have been using HMS-In for over 5 years. It is very user-friendly and reliable for automating our hotel\'s daily operations. Managing multiple properties is also very easy with the mobile app.',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Director',
    message:
      'The HMS-In modules for Front Office, Restaurant, Stores, and Housekeeping help us automate operations effortlessly. It’s an essential tool for our hotel’s efficiency.',
  },
  {
    name: 'Robert Johnson',
    role: 'General Manager',
    message:
      'The HMS-In team onboarded us quickly. Their cloud-based PMS securely automates our operations. Support and training are top-notch.',
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="relative bg-[#FDF7FF] py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-[#7C4585] mb-12">
          What Our Clients Say About Us
        </h2>

        <Slider {...settings}> 
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4 my-5">
              <div className="bg-white/70  backdrop-blur-md  border-white/30 shadow-xl rounded-3xl p-8 max-w-5xl border-[1px] border-primary mx-auto transition-all duration-300 hover:shadow-2xl">
                <p className="text-lg text-gray-800 leading-relaxed mb-6 relative">
                  <span className="text-5xl text-[#C95792] absolute -top-4 left-0">“</span>
                  <span className="pl-6 block">{t.message}</span>
                </p>
                <div className="border-t border-[#E0CCE7] pt-4">
                  <p className="text-[#7C4585] font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-600 italic">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
