// Footer.js
import React from 'react';
import './Footer.css'; // Ensure this file exists and has the content provided previously.

const Footer = () => {
    return (
        <footer className="footer">
            <div className="quick-links">
                <h3>Quick Links</h3>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/doctors">Our Doctors</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="contacts">
                <h3>Contacts</h3>
                <p>Arlington, Texas</p>
                <p>682-XXX-XXXX</p>
                <p>shhub-support@gmail.com</p>
                {/* Social media icons would be added here */}
            </div>
        </footer>
    );
};

export default Footer;
