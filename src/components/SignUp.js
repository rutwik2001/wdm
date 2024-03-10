import React from 'react';
import './SignUp.css'; // Make sure to create this CSS file
import Header1 from './Header';
const SignUp = () => {
  return (
    <div><Header1/>
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create your account</h2>
        <p>Enter your personal details to create account</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <label>
              <input type="checkbox" /> Agree with Privacy Policy
            </label>
          </div>
          <button type="submit">Create Account</button>
        </form>
        <div className="signup-footer">
          Already have an account? <a href="/signin">Sign in</a>
        </div>
      </div>
    </div></div>
  );
};

export default SignUp;
