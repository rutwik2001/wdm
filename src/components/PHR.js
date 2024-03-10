import React, { useState } from 'react';
import './PHR.css'; // Make sure to create this CSS file
import Header1 from './Header';
const PatientProfile = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // ... other state variables for each field

  // Mock patient health report data
  const patientDetails = {
    
    contactInfo: '555-1234',
    bloodType: 'A+',
    // Add other details you might want to include
  };
  const patientHealthReport = {
    name: 'Jane Doe',
    height: "5'7\"",
    weight: '70kg',
    bloodType: 'A+',
    history: 'Hypertension, diagnosed 10 years ago, managed with medication.Type 2 Diabetes Mellitus, diagnosed 8 years ago, managed with diet and medication.Hyperlipidemia, diagnosed 5 years ago, managed with statins.Coronary Artery Disease, with a history of myocardial infarction 4 years ago, currently on antiplatelet therapy.Benign Prostatic Hyperplasia, diagnosed 3 years ago, managed with medication.Osteoarthritis, particularly affecting the knees and hips.',
    tests: [
      {
        date: '2023-03-15',
        test: 'Complete Blood Count',
        results: "Normal"
      },
      // ... more test records
    ],
    medications: [
      {
        date: '2023-03-01',
        medicine: 'Metformin',
        dosage: "500mg",
        frequency: 'Twice a day',
        remarks: "After meals"
      },
      // ... more medication records
    ]
    // ... other health report details
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    // Send data to backend or state management store
  };

  return (
    <div>
      <Header1/>
    <div className="patient-profile-container">
      <aside className="sidebar">
        {/* Sidebar content here */}
      </aside>
      <main className="main-content">
        <header>
          {/* Action buttons like 'Make an appointment' and 'Write a prescription' */}
        </header>
        <section className="personal-information">
          <h2>Personal Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="profile-picture">
              {/* Image upload section */}
            </div>
            <div className="form-fields">
              {/* Form fields for personal information */}
              {/* <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" /> */}
              {/* ... other form fields ... */}
            </div>
            {/* Patient health report fields populated with mock data */}
            <div className="patient-health-report">
            <p>Name: {patientHealthReport.name}</p>
              <p>Height: {patientHealthReport.height}</p>
              <p>Weight: {patientHealthReport.weight}</p>
              <p>Blood Type: {patientHealthReport.bloodType}</p>
              <p>History: {patientHealthReport.history}</p>
            </div>
            
            
          </form>
          

          <h3>Tests</h3>
        <table className="health-data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Test</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {patientHealthReport.tests.map((test, index) => (
              <tr key={index}>
                <td>{test.date}</td>
                <td>{test.test}</td>
                <td>{test.results}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Medications</h3>
        <table className="health-data-table">
          <thead>
            <tr>
              <th>Date Prescribed</th>
              <th>Medicine</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {patientHealthReport.medications.map((medication, index) => (
              <tr key={index}>
                <td>{medication.date}</td>
                <td>{medication.medicine}</td>
                <td>{medication.dosage}</td>
                <td>{medication.frequency}</td>
                <td>{medication.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </section>
      </main>
    </div></div>
  );
};

export default PatientProfile;
