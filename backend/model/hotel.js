// models/Hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  images: [String],
  type:{type:"String", required:true},
  price:{type:Number, required:true}
},{
    timestamps:true
});

module.exports = mongoose.model('Hotel', hotelSchema);
