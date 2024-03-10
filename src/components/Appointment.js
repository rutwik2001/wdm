import React from 'react';
import './Appointment.css'; // Make sure to create this CSS file

const Appointments = () => {
  // Mock data for appointments

  const patientDetails = {
    name: 'Jane Doe',
    contactInfo: '555-1234',
    bloodType: 'A+',
    // Add other details you might want to include
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
    <div className="appointments-container">
      <h2>Patient Details</h2>
      <div className="patient-details">
        <h2>{patientDetails.name}</h2>
        <p>Contact: {patientDetails.contactInfo}</p>
        <p>Blood Type: {patientDetails.bloodType}</p>
        {/* Add more details here */}
      </div>
      <h2>Appointments</h2>
      {/* Filter and search would go here */}
      <button className="schedule-btn">Schedule an Appointment</button>
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
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
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

export default Appointments;
