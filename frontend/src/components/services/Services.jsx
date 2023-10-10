import React, { useEffect, useState } from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import RecentCard from "../home/recent/RecentCard"
import { useTable } from 'react-table';
import axios from "axios"
import './service.css';

const Services = () => {
  const [booking, setBooking] = useState([]);
  // const navigate = useNavigate()

  const loadBooking = async ()=>{
    const res = await axios.get("http://localhost:8000/api/booking");
    console.log(res.data)
    setBooking(res.data)
  }

  useEffect(()=>{
    loadBooking()
  },[])

 
  
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          {/* <RecentCard/> */}
          {/* <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="table-header-cell">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="table-body">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="table-row" key={row._id}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table> */}
    <div className="booking-table-container">
      <h1 style={{marginBottom:'20px'}}>Booking List</h1>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Selected Hotel</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.selectedHotelId.name}</td>
              <td>{new Date(booking.checkInDate).toLocaleDateString()}</td>
              <td>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
      </section>
    </>
  )
}

export default Services
