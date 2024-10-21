import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full min-h-[50vh] flex justify-center items-center'>
      About us
    </div>
  )
}

export default About