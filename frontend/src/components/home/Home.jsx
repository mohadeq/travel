import React, { useEffect, useState } from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
// import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import TravelComponent from "./TravelComponent/TravelComponent"
import axios from "axios"

const Home = () => {
  const [hotels, setHotels] = useState([]);

  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('')
  // const navigate = useNavigate()

  const loadHotels = async ()=>{
    const res = await axios.get("http://localhost:8000/api/hotels");
    console.log(res.data)
    setHotels(res.data)
  }

  useEffect(()=>{
    loadHotels();
    
  },[])
   
  useEffect(()=>{
    setFiltered(hotels)
  },[hotels])

  const onSearch = (e)=>{ 
    e.preventDefault();
    const value = search.toLowerCase();
    console.log(value)
    const filtered = hotels.filter((hotel)=>hotel.location.toLowerCase().includes(value));
    setFiltered(filtered)
  }

  return (
    <>
      <Hero onSearch={onSearch} search={search} setSearch={setSearch} />
      <Featured />
      <Recent hotels={filtered} />
      <Awards />
      
      <Location />
      <TravelComponent/>
      {/* <Team /> */}
      {/* <Price /> */}
    </>
  )
}

export default Home
