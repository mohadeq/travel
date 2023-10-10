import React, { useEffect, useState } from "react"
import { list } from "../../data/Data"
import { Link, } from "react-router-dom";
import axios from "axios"
const RecentCard = ({hotels}) => { 
  console.log(hotels)
  // const [hotels, setHotels] = useState([]);
  // // const navigate = useNavigate()

  // const loadHotels = async ()=>{
  //   const res = await axios.get("http://localhost:8000/api/hotels");
  //   console.log(res.data)
  //   setHotels(res.data)
  // }

  // useEffect(()=>{
  //   loadHotels()
  // },[]);

  return (
    <>
      <div className='content grid3 mtop'>
        {hotels?.map((val) => {
          const {_id, images, name, price, } = val
          return (
            <div className='box shadow' key={_id}>
              <div className='img'>
              <Link to="/form">
                <img src={images && "http://localhost:8000/uploads/"+images[0]} alt='' />
                </Link>
              </div>
              <div className='text'>
                <div className='category flex'>
                       {/* badal */}
                  
                  
                </div>
                <h4>{name}</h4>
                
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{"$ "+price}</button> <label htmlFor=''></label>
                  <button className='btn4'>Book Now</button> 
                </div>
              </div>
            </div>
   )
        })}
      </div>
    </>
  )
}

export default RecentCard
