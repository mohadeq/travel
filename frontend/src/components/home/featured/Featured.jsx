import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Travel Available Places' subtitle='Find All Type of Places You Need.' />
         
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
