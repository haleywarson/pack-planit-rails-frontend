import React from "react";

import "../App.css";

import Trips from "./Trips";

export default function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-content">
          <h2>YOUR NEXT TRIP AWAITS</h2>
          <h3>Let's help you plan it.</h3>
          <button>
            <a href="http://localhost:3001/planit">plan your Trip</a>
          </button>
        </div>
      </div>
      <div className="trips-container">
        <Trips />
      </div>
    </div>
  );
}
