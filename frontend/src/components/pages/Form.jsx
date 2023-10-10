import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



// Styled components for styling
const FormContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConfirmationModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Your hotels data
// const hotels = [
//   {
//     id: 1,
//     name: 'Hotel A',
//     imageSrc: './location/city-1.png',
//     roomTypes: [
//       { type: 'Apartment', price: 100, rooms: 5 },
//       { type: 'Family Room', price: 150, rooms: 10 },
//     ],
//   },
//   // Add more hotels as needed
//   {
//     id: 2,
//     name: 'Hotel B',
//     imageSrc: 'city-1.jpg',
//     roomTypes: [
//       { type: 'apartment', price: 120, rooms: 8 },
//       { type: 'Family Room', price: 180, rooms: 12 },
//     ],
//   },
// ];



const Form = () => {
 
  const [hotels, setHotels] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    selectedHotelId: '',
  });

  

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHotelChange = (e) => {
    const selectedHotelId = e.target.value;
    setFormData({ ...formData, selectedHotelId });
  };

  // const handleRoomTypeChange = (e) => {
  //   const selectedRoomType = e.target.value;
  //   setFormData({ ...formData, selectedRoomType });
  // };
  

  // const selectedHotel = ""//hotels.find((hotel) => hotel._id === formData.selectedHotelId);
  // const selectedRoom = selectedHotel?.roomTypes.find(
  //   (roomType) => roomType.type === formData.selectedRoomType
  // );

  const showConfirm = () => {
    // e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    const res = axios.post("http://localhost:8000/api/booking", formData);
    if (res){
      alert("Data saved Successfully")
      setFormData({
        name: '',
        email: '',
        checkInDate: '',
        checkOutDate: '',
        selectedHotelId: '',
      })
      setShowConfirmation(false)
    }else{
      console.log("Error")
    }
  };

  
  // const navigate = useNavigate()

  const loadHotels = async ()=>{
    const res = await axios.get("http://localhost:8000/api/hotels");
    console.log(res.data)
    setHotels(res.data)
  }

  useEffect(()=>{
    loadHotels()
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer >
        <FormTitle >Hotel Booking</FormTitle>
        <BookingForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              autoFocus={true}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
    <Label>Check-in date</Label>
  <Input
    type="date"
    name="checkInDate" // Remove spaces in the name attribute
    value={formData.checkInDate}
    onChange={handleInputChange}
  />
</FormGroup>

          <FormGroup>
  <Label>Check-out date</Label>
  <Input
    type="date"
    name="checkOutDate" // Remove spaces in the name attribute
    value={formData.checkOutDate}
    onChange={handleInputChange}
  />
</FormGroup>

          {/* <Select name="selectedHotelId" onChange={handleHotelChange}>
          {hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.name}
            </option>
          ))}
        </Select> */}
        
          {/* Add more form fields for check-in date, check-out date, hotel selection, and room type */}
          <FormGroup>
            <Label>Select Hotel</Label>
            <Select name="selectedHotelId" onChange={handleHotelChange}>
          {hotels.map((hotel) => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.name} - {"$ "+hotel.price}
            </option>
          ))}
        </Select>
       
        {/* <Select name="selectedRoomType" onChange={handleRoomTypeChange}>
          {selectedHotel?.roomTypes.map((roomType) => (
            <option key={roomType.type} value={roomType.type}>
              {roomType.type}
            </option>
          ))}
        </Select>
        {selectedRoom && (
          <div>
            <p>Price: ${selectedRoom.price} per night</p>
            <p>Number of Rooms: {selectedRoom.rooms}</p>
          </div>
        )} */}
        </FormGroup>
          <Button type="button" onClick={showConfirm}>Book Hotel</Button>
        </BookingForm>
      </FormContainer>
      {/* Display the confirmation modal if showConfirmation is true */}
      {showConfirmation && (
        <ConfirmationModal>
          <ModalContent>
            <h2>Booking Confirmation</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Check-In Date: {formData.checkInDate}</p>
            <p>Check-Out Date: {formData.checkOutDate}</p>
            <p>Selected Hotel: {"selectedHotel"}</p>
            <Button onClick={handleConfirmationClose}>Close</Button>
            <Button type="submit" style={{marginLeft:"30px"}}>Save</Button>
          </ModalContent>
        </ConfirmationModal>
      )}
    </form>
  );
};

export default Form;
