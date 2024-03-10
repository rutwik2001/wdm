import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file
import Header from './Header';
const AboutUs = () => {
  return (
    <div><Header/>
    <div className="about-us-container">
      <h1>About Our Medical App</h1>
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>To enhance patient care and improve clinical outcomes through the use of smart and user-friendly technology.</p>
      </section>
      
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity in every step we take.</li>
          <li>Compassion towards the patients and families we serve.</li>
          <li>Innovation to stay at the forefront of technology.</li>
          <li>Collaboration with healthcare professionals for the best care possible.</li>
        </ul>
      </section>
      
      <section className="team">
        <h2>Meet the Team</h2>
        <p>Our team is composed of leading healthcare professionals, talented software developers, and compassionate support staff all dedicated to providing the best service possible.</p>
        {/* Team members' photos and bios would go here */}
      </section>
      
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          "This app has revolutionized the way we manage our patients' records and appointments. It's intuitive and easy to use."
          <cite>- Dr. Jane Smith, General Practitioner</cite>
        </blockquote>
        {/* More testimonials */}
      </section>
      
      <section className="achievements">
        <h2>Our Achievements</h2>
        <p>We are proud to have been recognized by the medical community for our contributions to healthcare IT, including receiving the XYZ award for innovation.</p>
        {/* List of awards and recognitions */}
      </section>
    </div></div>
  );
};

export default AboutUs;
