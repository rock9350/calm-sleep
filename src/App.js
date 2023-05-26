import React from 'react';
import './App.css';
import Dashboard from "./dashbord"

const App = () => {
  return (
    <div className="container">
      <h1 style={{color:"white",paddingTop:"20px"}}>Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;
