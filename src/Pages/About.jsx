import React, { useEffect } from 'react'
import WhoWeAreBenefits from "../About-Component/WhoWeAreBenefits"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <WhoWeAreBenefits/>
    </div>
  )
}

export default About