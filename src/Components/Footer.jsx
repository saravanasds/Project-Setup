import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, } from 'react-icons/fa'; // Import icons
// import ImageBG from "../assets/et-footer.png"


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="bg-gray-600 text-white relative"
        // style={{
        //     backgroundImage: `url(${ImageBG})`,
        //     backgroundSize: 'contain',
        //     backgroundBlendMode: 'blend',
        //     backgroundColor: '#455d7a',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        // }}
        >
            <div className="bg-[#0d1340] bg-opacity-80 py-8 md:py-12 border-t-4 border-yellow-500 backdrop-blur-[2px]">
                <div className="w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px]">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center mb-6" data-aos="fade-right">
                        <h1 className="text-2xl md:text-4xl font-bold font-nunito mb-2 text-yellow-500 uppercase tracking-wider">
                            Company Name
                        </h1>
                        <p className="text-center text-sm tracking-wider">
                            Description for some words
                        </p>
                    </div>

                    {/* Grid for 4 Columns */}
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8 place-items-center "
                        data-aos="fade-up"
                    >
                        {/* Quick Links with Icons */}
                        <div className="flex flex-col justify-center items-center mb-8 sm:mb-0" data-aos="fade-right">
                            <h2 className="text-lg font-semibold mb-2 text-left text-yellow-500">Quick Links</h2>
                            <ul className="space-y-2 flex flex-col lg:flex-row gap-2">
                                <li className="flex items-center space-x-2">
                                    <FaHome className="text-yellow-400" />
                                    <Link to="/" onClick={scrollToTop} className="hover:underline hover:text-yellow-300">
                                        Home Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaPhone className="text-yellow-400" />
                                    <Link to="/about" onClick={scrollToTop} className="hover:underline hover:text-yellow-300">
                                        About Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaPhone className="text-yellow-400" />
                                    <Link to="/services" onClick={scrollToTop} className="hover:underline hover:text-yellow-300">
                                        Services Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaPhone className="text-yellow-400" />
                                    <Link to="/contact" onClick={scrollToTop} className="hover:underline hover:text-yellow-300">
                                        Contact Page
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        {/* Address and Timing */}
                        <div className="flex flex-col col-span-2 xs:col-span-1 justify-center items-center sm:justify-start sm:items-start" data-aos="fade-right ">
                            <h2 className="text-lg font-semibold float-left mb-2 text-yellow-500">Address</h2>
                            <address className="sm:w-[200px] not-italic mb-2 text-center xs:text-left">
                                11/12, Tamil nadu, India
                            </address>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-8" >
                        <p className='text-xs sm:text-sm'>
                            <span className="text-cyan-400">&copy; {new Date().getFullYear()} </span>
                            Company Name. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
