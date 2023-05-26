import React from "react";
import items from "./data";
  
  const Dashboard = () => {
    return (
      <div className="dashboard">
        {items.map((item, index) => (
          <div key={index} className="dashboard-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Unique Plays: {item.unique_plays}</p>
            <p>Total Plays: {item.total_plays}</p>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${item.completion_rate}%` }}></div>
            </div>
            <p>Completion Rate: {item.completion_rate}%</p>
          </div>
        ))}
      </div>
    );
  };
  

export default  Dashboard; 