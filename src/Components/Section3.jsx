import React from "react";
import flower2 from "../assets/images/flower3.png";

function Section3() {
  return (
    <div className="section3">
      <img src={flower2} alt="flower" className="flower2" />
      <p className="timer-text-1">Time and Place</p>
      <div className="events">
        <div className="event">
          <p className="timer-text-1">Engagement</p>
          <p className="timer-text-2 left">Date : 26th December</p>
          <p className="timer-text-2 left ">Time : 12:00pm</p>
          <p className="timer-text-2 left">
            Address : St. John De Britto's Parish Hall, Sakthikulangara, Kollam,
            Kerala 691581
          </p>
          <a
            href="https://maps.app.goo.gl/jhWeuf7x6BbEDWi58"
            className="hyprLink"
            key="one"
          >
            See Location
          </a>
        </div>
        <div className="event">
          <p className="timer-text-1">Wedding</p>
          <p className="timer-text-2">Date : 28th December</p>
          <p className="timer-text-2">Time : 11:00am</p>
          <p className="timer-text-2">
            Address : St. Antony's Parish Hall, Koivila, Kollam, Kerala 691590
          </p>
          <a
            href="
            https://maps.app.goo.gl/xjjV2JL8opVgK8ReA"
            className="hyprLink"
            key="to"
          >
            See Location
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section3;
