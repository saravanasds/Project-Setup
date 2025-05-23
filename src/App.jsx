import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Components/Loading';
import Price from './Pages/Price';
import Trial from "./Pages/Trial"



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/price" element={<Price/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trial" element={<Trial/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
