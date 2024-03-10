import React from 'react';
import './Appointment.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Doctor = () => {
  // Mock data for appointments
  const navigate = useNavigate();
  const patientDetails = {
    name: 'Jane Doe',
    contactInfo: '555-1234',
    bloodType: 'A+',
    // Add other details you might want to include
  };

  const handleSubmit = () => { // Prevent default form submission behavior
    navigate('/phr'); 
};

  const appointments = [
    { id: 1, doctor: 'Sarah Clarke', visitType: 'Chronic care visit', date: '09/02/2020', time: '11:30-12:00 AM', status: 'Confirmed' },
    { id: 2, doctor: 'Leila Kearney', visitType: 'New symptom visit', date: '09/02/2020', time: '11:30-12:00 AM', status: 'Confirmed' },
    { id: 3, doctor: 'Neil Galvan', visitType: 'Follow up visit', date: '08/29/2020', time: '11:30-12:00 AM', status: 'Completed' },
    { id: 4, doctor: 'John Garner', visitType: 'Follow up visit', date: '08/20/2020', time: '10:00-11:30 AM', status: 'Completed' },
    { id: 5, doctor: 'Maria Kenny', visitType: 'Annual medicare wellness visit', date: '08/21/2020', time: '16:30-17:00 PM', status: 'Cancelled' },
    { id: 6, doctor: 'Jeff Wiggins', visitType: 'Urgent', date: '08/19/2020', time: '11:30-12:00 AM', status: 'Completed' }
  ];

  return (
    <div>
    <Header/>
    <div className="appointments-container">
        
      <h2>Doctor Dashboard</h2>
      <div className="patient-details">
        <h2>Welcome {patientDetails.name}</h2>
        <p>Number of patients: 22</p>
        <p>Number of scheduled appointment for today: 6</p>
        <p>Number of rejected appointment for today: 2</p>
        {/* Add more details here */}
      </div>
      <a href='/new-prescription'><button>Write a prescription</button></a>
      <h2>Appointments</h2>
      {/* Filter and search would go here */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient</th>
            <th>Visit Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Get PHR</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.visitType}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <button onClick={handleSubmit} type="submit">Get PHR</button>
              
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
    </div>
  );
};

export default Doctor;
