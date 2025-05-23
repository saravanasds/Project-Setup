import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-primary border-b-2 border-primary"
            : "text-gray-700 hover:text-primary transition";

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <h1 className="text-2xl font-bold text-primary">LOGO</h1>
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/products" className={linkClass}>Products</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                        <NavLink to="/price" className={linkClass}>Pricing</NavLink>
                        <NavLink
                            to="/trial"
                            className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary  transition text-sm font-medium"
                        >
                            Start Trial
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="text-primary focus:outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-md">
                    <div className="space-y-4 text-gray-700 font-medium">
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/products" className={linkClass}>Products</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                        <NavLink to="/price" className={linkClass}>Pricing</NavLink>
                        <NavLink
                            to="/trial"
                            className="block w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary transition"
                        >
                            Start Trial
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    ); 
};

export default Navbar;
