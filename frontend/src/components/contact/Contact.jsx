import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
        <div className="container">
          <h4 style={{color:"darkblue"}}>Contact Information</h4>
          <p>
            Welcome to Ocean Traveler! We're here to assist you in planning your dream vacation. If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. We're committed to providing you with the best travel experience.
          </p>

          <h4>Customer Support</h4>
          <p>Feel free to get in touch with our friendly customer support team:</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/mustafaa4a" target="_blank" rel="noopener noreferrer">
                Join Us on Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/+252617480121" target="_blank" rel="noopener noreferrer">
                Chat with Us on WhatsApp
              </a>
            </li>
          </ul> <br />

          <p>
            Whether you're looking for travel advice, need assistance with bookings, or have any other inquiries, we're just a click away. Your satisfaction is our top priority!
          </p>

          <p>
            Don't hesitate to reach out, and let's make your travel dreams come true!
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
