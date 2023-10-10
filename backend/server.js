// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors =require ('cors')
const Hotel = require('./model/hotel');
const Booking = require('./model/booking');
const bodyParser = require('body-parser');
const path = require("path"); 
const multer = require('multer');
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = 8000;

  // Change this to your MongoDB URI

mongoose.connect('mongodb://0.0.0.0:27017/Dalxis').then(()=>{
    console.log('data')
})
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });




// Define routes to interact with hotels in MongoDB
app.use("/uploads", express.static(path.join(__dirname, "public/")))

// Get all hotels
app.get('/api/booking', async (req, res) => {
  try {
    const booking = await Booking.find({}).populate({
      path: "selectedHotelId",
      model: "Hotel",
      select: "_id name"
    });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/booking', async (req,res)=>{
    try {
        const booking = await Booking.create(req.body);
        if (booking)
            return res.status(201).send({message:"Saved Succesfully"})
        res.status(500).json({ message: 'Server error' })
      } catch (err) { 
        res.status(500).json({ message: err.message });
      }
})


app.get('/api/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/hotel',upload.array('images'), async (req, res)=>{
  try{
    const images = req.files.map((file)=>file.filename);
    await Hotel.create({...req.body, images})
    res.status(201).send({message:"created successfully"})
  }catch (err) { 
      res.status(500).json({ message: err.message });
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
