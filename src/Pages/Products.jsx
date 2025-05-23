import React from 'react'
import TabSection from "../Product-component/TabSection"
import Scrshots from "../Product-component/Scrshots"
import ScrDashboard from "../Product-component/ScrDashboard"

const Products = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center'>

      <TabSection/>
      <Scrshots/>
      <ScrDashboard/>
    </div>
  )
}

export default Products