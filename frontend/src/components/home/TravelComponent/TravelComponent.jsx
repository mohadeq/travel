import React from 'react';
import './TravelComponent.css'; // You can create a CSS file for styling
import Heading from "../../common/Heading"
const TravelComponent = () => {
  return (

    <div>
    <Heading title='Travel Destination' subtitle='Remember that happiness is a way of travel – not a destination ' />
    <div className="travel-component">

      <div className="image-container">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/738/879/small/family-walking-with-floaties-on-a-beach-free-photo.jpg" // Replace with the URL of your image
          alt="Travel Destination"
          className="travel-image"
        />
      </div>
      <div className="text-container">
        <h2 className="travel-title">Beach View Travel</h2>
        <p className="travel-description">
        Ocean Traveler - Explore the beauty of the deep blue sea and embark on
    exciting adventures to breathtaking coastal destinations. <br/> Dive into
    underwater mysteries, relax on pristine beaches, and experience the
    wonders of marine life.
        Ocean Traveler - Explore the beauty of the deep blue sea and embark on
    exciting adventures to breathtaking coastal destinations. <br/> Dive into
    underwater mysteries, relax on pristine beaches, and experience the
    wonders of marine life.
        </p>
      </div>
    </div>
    <div className="travel-component">

      <div className="image-container">
        <img
          src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2020-01/A1-77.jpg?itok=U9fIGWBk" // Replace with the URL of your image
          alt="Travel Destination"
          className="travel-image"
        />
      </div>
      <div className="text-container">
        <h2 className="travel-title">Dubai's desert landscape</h2>
        <p className="travel-description">
        Discover the charm of Dubai's desert landscape through Camel Tourism.
        Experience the timeless tradition of camel riding, a journey that takes
        you through the mesmerizing sand dunes of the Arabian desert. Enjoy
        breathtaking views of the sunset and savor the rich culture and heritage
        of Dubai while riding these gentle giants. Camel tourism offers a
        unique and unforgettable adventure in the heart of the desert.
        </p>
      </div>
    </div>
    </div>
  );
};


export default TravelComponent;
