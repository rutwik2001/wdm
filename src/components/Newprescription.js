import React, { useState } from 'react';
import './NewPrescription.css'; // Make sure this CSS file is created
import Header from './Header';

const NewPrescription = () => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDrug, setSelectedDrug] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [prescribedDrugs, setPrescribedDrugs] = useState([]);
  const [orderedTests, setOrderedTests] = useState([]);

  // Mock data for available drugs and tests
  const availableDrugs = [
    { id: 1, name: 'Amoxicillin', dosage: '500mg' },
    { id: 2, name: 'Ibuprofen', dosage: '400mg' }
    // ... more drugs
  ];

  const availableTests = [
    { id: 1, name: 'Complete Blood Count' },
    { id: 2, name: 'Metabolic Panel' }
    // ... more tests
  ];

  const handleAddDrug = () => {
    if (!selectedDrug) return;
    const drugToAdd = availableDrugs.find(drug => drug.id === parseInt(selectedDrug));
    setPrescribedDrugs(prevDrugs => [...prevDrugs, drugToAdd]);
  };

  const handleAddTest = () => {
    if (!selectedTest) return;
    const testToAdd = availableTests.find(test => test.id === parseInt(selectedTest));
    setOrderedTests(prevTests => [...prevTests, testToAdd]);
  };

  return (
    <div><Header/>
    <div className="new-prescription-container">
      <h1>New Prescription</h1>
      <div className="patient-information">
        <label htmlFor="patient-select">Patient Information</label>
        <select 
          id="patient-select"
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value)}
        >
          <option value="">Select Patient...</option>
          <option value="patientId1">Jane Doe</option>
          <option value="patientId2">John Smith</option>
        </select>
      </div>
      <div className="drugs-list">
        <label htmlFor="drug-select">Drugs List</label>
        <select 
          id="drug-select"
          value={selectedDrug}
          onChange={(e) => setSelectedDrug(e.target.value)}
        >
          <option value="">Select Drug...</option>
          {availableDrugs.map(drug => (
            <option key={drug.id} value={drug.id}>{drug.name} - {drug.dosage}</option>
          ))}
        </select>
        <button onClick={handleAddDrug}>Add Drug</button>
        <div>
          {prescribedDrugs.map((drug, index) => (
            <div key={index}>{drug.name} - {drug.dosage}</div>
          ))}
        </div>
      </div>
      <div className="tests-list">
        <label htmlFor="test-select">Tests List</label>
        <select 
          id="test-select"
          value={selectedTest}
          onChange={(e) => setSelectedTest(e.target.value)}
        >
          <option value="">Select Test...</option>
          {availableTests.map(test => (
            <option key={test.id} value={test.id}>{test.name}</option>
          ))}
        </select>
        <button onClick={handleAddTest}>Add Test</button>
        <br/>
        <br/>
        <br/>
        <a href="/phr"><button >Submit</button></a>
        
        <div>
          {orderedTests.map((test, index) => (
            <div key={index}>{test.name}</div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewPrescription;
