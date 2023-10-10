import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = ({hotels}) => {
  console.log(hotels)
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Plan Your Trip To Anywhere In The World ' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <RecentCard hotels={hotels}/>
        </div>
      </section>
    </>
  )
}

export default Recent

