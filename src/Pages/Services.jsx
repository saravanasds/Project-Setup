import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-[50vh] flex  justify-center items-center ">
      Services
    </div>
  );
};

export default Services;
