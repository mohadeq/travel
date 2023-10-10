// models/Hotel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  selectedHotelId: { type: mongoose.mongo.ObjectId, 
    required: true, reff:"Hotel" 
  },
  // selectedRoomType: { type: String, required: true },
  // Add more fields as needed
},{
    timestamps:true
});

module.exports = mongoose.model('Booking', bookingSchema);
