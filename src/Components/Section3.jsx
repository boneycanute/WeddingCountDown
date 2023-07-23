import React from "react";
import flower2 from "../assets/images/flower2.png";

function Section3() {
  return (
    <div className="section3">
      <img src={flower2} alt="flower" className="flower2" />
      <p className="timer-text-1">Time and Place</p>
      <div className="events">
        <div class="wrapper">
          <ul class="items">
            <li class="item">
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
            </li>
            <li class="item">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section3;
