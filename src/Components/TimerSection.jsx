import React from "react";

function TimerSection(props) {
  return (
    <div className="unit-container">
      <p className="timer-text-3">{props.value}</p>
      <p className="timer-text-4">{props.unit}</p>
    </div>
  );
}

export default TimerSection;
