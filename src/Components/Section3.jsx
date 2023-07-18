import React from "react";
import flower2 from "../assets/images/flower2.png";

function Section3() {
  return (
    <div className="section3">
      <img src={flower2} alt="flower" className="flower2" />
      <p className="timer-text-1">Time and Place</p>
      <div className="events">
        <div className="event-container">Event</div>
        <div className="event-container">Event</div>
      </div>
    </div>
  );
}

export default Section3;
