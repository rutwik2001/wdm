// StatsSection.js
import React from 'react';
import './StatsSection.css'; // Make sure to create a corresponding CSS file

const StatsSection = () => {
    return (
        <div className="stats-section">
            <div className="stat-item">
                <h2>400+</h2>
                <p>Patients Daily</p>
            </div>
            <div className="stat-item">
                <h2>10+</h2>
                <p>Years on the Market</p>
            </div>
            <div className="stat-item">
                <h2>300</h2>
                <p>Qualified Doctors</p>
            </div>
            <div className="stat-item">
                <h2>30</h2>
                <p>Locations</p>
            </div>
            {/* Repeat for the other stat items */}
        </div>
    );
};

export default StatsSection;
