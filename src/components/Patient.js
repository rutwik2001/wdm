import React, { useState } from 'react';
import './Patient.css'; // Make sure to create this CSS file
import Header1 from './Header';
const PatientDashboard = () => {
  // State for appointments (in a real app, this might come from an API)
  const [appointments, setAppointments] = useState([
    // ... Your appointment data here
  ]);

  // Placeholder function for scheduling an appointment
  const handleSchedule = () => {
    console.log('Schedule button clicked');
    // Implement scheduling logic or navigation
  };

  return (
    
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header onScheduleClick={handleSchedule} />
        <AppointmentTable appointments={appointments} />
      </div>
    </div>
  );
};

const Sidebar = () => {
  // Sidebar content here
  return (
    <div className="sidebar">
      {/* Icons and links for sidebar */}
    </div>
  );
};

const Header = ({ onScheduleClick }) => {
  return (
    <div className="header">
      <h1>Patient Dashboard</h1>
      {/* Search bar and other header content */}
      <a href="/phr"><button >My Personal Health Record</button></a>
      <button onClick={onScheduleClick}>Schedule an Appointment</button>
    </div>
  );
};

const AppointmentTable = ({ appointments }) => {
  return (
    <div>
        <Header1/>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Doctor</th>
          <th>Visit Type</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.id}</td>
            <td>{appointment.doctor}</td>
            <td>{appointment.visitType}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default PatientDashboard;
