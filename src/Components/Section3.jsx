import React from "react";
import flower2 from "../assets/images/flower3.png";

function Section3() {
  return (
    <div className="section3">
      <img src={flower2} alt="flower" className="flower2" />
      <p className="timer-text-1">Time and Place</p>
      <div className="events">
        <div className="event">
          <p class="timer-text-1">Engagement</p>
          <p class="timer-text-2 left">Date : 23rd December</p>
          <p class="timer-text-2 left ">Time : 11:00am</p>
          <p class="timer-text-2 left">
            Address : St. John De Britto's Parish Hall, Sakthikulangara, Kollam,
            Kerala 691581
          </p>
          <a
            href="https://goo.gl/maps/MWUsdexyKVZzx1VHA"
            className="hyprLink"
            key="one"
          >
            See Location
          </a>
        </div>
        <div className="event">
          <p class="timer-text-1">Wedding</p>
          <p class="timer-text-2">Date : 28th December</p>
          <p class="timer-text-2">Time : 10:00am</p>
          <p class="timer-text-2">
            Address : St. Antony's Roman Catholic Church,Koivila, Karunagapally,
            Thevalakkara, Kerala 691590
          </p>
          <a
            href="https://goo.gl/maps/MWUsdexyKVZzx1VHA"
            className="hyprLink"
            key="to"
          >
            See Location
          </a>
        </div>
      </div>
      {/* <div className="events">
        <div class="inner">
          <p class="timer-text-1">Engagement</p>
          <p class="timer-text-2">Date</p>
          <p class="timer-text-2">Time</p>
          <p class="timer-text-2">Address</p>
          <a
            href="https://goo.gl/maps/MWUsdexyKVZzx1VHA"
            className="hyprLink"
            key={1}
          >
            See Location
          </a>
        </div>

        <div class="inner">
          <p class="timer-text-1">Wedding</p>
          <p class="timer-text-2">Date</p>
          <p class="timer-text-2">Time</p>
          <p class="timer-text-2">Address</p>
          <a
            href="https://goo.gl/maps/MWUsdexyKVZzx1VHA"
            className="hyprLink"
            key={2}
          >
            See Location
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Section3;
