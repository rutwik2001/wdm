// SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';
import Header1 from './Header';
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        if(email === "patient@patient.com" && password === "pass123"){
            navigate('/patient'); // Navigate to the patient route
        } else if(email === "doctor@doctor.com" && password === "pass123"){
            navigate('/doctor'); // Navigate to the patient route
        }else {
            // You might want to set an error message in state and display it
            console.error('Invalid credentials');
        }
    };

    return (
        <div>
            <Header1/>
        <div className="signin-container">
            <div className="signin-box">
                <h2>Sign in to account</h2>
                <p>Enter your email & password to login</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" /> Remember password
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button onSubmit={handleSubmit} type="submit">Sign In</button>
                </form>
                <div className="signin-footer">
                    Don't have account? <a href="/signup">Create Account</a>
                </div>
            </div>
        </div></div>
    );
};

export default SignIn;
