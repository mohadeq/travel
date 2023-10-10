import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = ({onSearch, search, setSearch}) => {
  
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Plan Your Vacations  ' subtitle='Design Your Perfect By Choosing From The Best Ranked Hotels,Cruises and Destinations.' />

          <form className='flex'>
            <div className='box'>
              <span>search</span>
              <input type='text'   value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Location'  />
            </div>
            {/* <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div> */}
            {/* <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div> */}
            {/* <div className='box'>
              <h4>Advance Filter</h4>
            </div> */}
            <button className='btn1' type="submit" onClick={onSearch}>
              {/* <i className='fa fa-search'></i> */}
            Filter
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
