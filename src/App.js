import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import PatientDashboard from "./components/Patient"
import Doctor from "./components/Doctor"
import PHR from "./components/PHR";
import NewPrescription from "./components/Newprescription";
import ContactUs from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/phr" element={<PHR />} />
        <Route path="/new-prescription" element={<NewPrescription />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        // ... other routes
      </Routes>
    </Router>
  );
}

export default App;
