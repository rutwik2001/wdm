import React, { useState } from 'react';
import './Contact.css'; // Make sure to create this CSS file
import Header from './Header';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and send data to server or email
    console.log('Form submitted', formData);
  };

  return (
    <div><Header/>
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-details">
        {/* Add your contact details here */}
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main St, Anytown, AN 12345</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          placeholder="Your Email" 
          required 
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleInputChange} 
          placeholder="Your Message" 
          required 
        />
        <button type="submit">Send Message</button>
      </form>
    </div></div>
  );
};

export default ContactUs;
