import React from "react";
import { useEffect } from "react";


const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[50vh] flex  justify-center items-center " data-aos="fade-up" >
      Home
    </div>
  );
};

export default Home;
