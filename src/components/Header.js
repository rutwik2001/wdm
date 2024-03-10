// src/components/Header.js

import React from 'react';
import './Header.css'; // Make sure to create this CSS file in the same directory
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate('/signin');
    };
    const navigateToSignUp = () => {
      navigate('/signup');
  };
  return (
    <header className="header">
      <div className="logo">SMART HEALTH HUB</div>
      <nav className="navigation">
        <a href="/" className="nav-link">Home</a>
        <a href="https://sxp0664.uta.cloud/" className="nav-link">Blog</a>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/contactus" className="nav-link">Contact Us</a>
      </nav>
      <div className="auth-buttons">
        <button onClick={navigateToSignIn} className="btn login">Log In</button>
        <button onClick={navigateToSignUp} className="btn sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
