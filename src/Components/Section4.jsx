import React from "react";
import "./CalendarCSS.css";
import frame from "../assets/images/frame2.png";
import flower3 from "../assets/images/flower3.png";
import ring from "../assets/images/ring.png";
import savethedate from "./Art-Assets/savethedate.gif";

function Section4() {
  return (
    <div className="section4">
      <div className="saveText">
        Save the Date
        <img src={flower3} className="flower3" />
      </div>
      <div className="calendarContainer">
        <div className="calendar">
          <div className="calendar__picture">
            <h2 className="text"> 28, Thursday</h2>
            <h3 className="text">December</h3>
          </div>
          <div className="calendar__date">
            <div className="calendar__day">Su</div>
            <div className="calendar__day">Mo</div>
            <div className="calendar__day">Tu</div>
            <div className="calendar__day">We</div>
            <div className="calendar__day">Th</div>
            <div className="calendar__day">Fr</div>
            <div className="calendar__day">Sa</div>
            <div className="calendar__number"></div>
            <div className="calendar__number"></div>
            <div className="calendar__number"></div>
            <div className="calendar__number"></div>
            <div className="calendar__number"></div>
            <div className="calendar__number">1</div>
            <div className="calendar__number">2</div>
            <div className="calendar__number">3</div>
            <div className="calendar__number">4</div>
            <div className="calendar__number">5</div>
            <div className="calendar__number">6</div>
            <div className="calendar__number">7</div>
            <div className="calendar__number">8</div>
            <div className="calendar__number">9</div>
            <div className="calendar__number">10</div>
            <div className="calendar__number">11</div>
            <div className="calendar__number">12</div>
            <div className="calendar__number">13</div>
            <div className="calendar__number">14</div>
            <div className="calendar__number">15</div>
            <div className="calendar__number">16</div>
            <div className="calendar__number">17</div>
            <div className="calendar__number">18</div>
            <div className="calendar__number">19</div>
            <div className="calendar__number">20</div>
            <div className="calendar__number">21</div>
            <div className="calendar__number">22</div>
            <div className="calendar__number">23</div>
            <div className="calendar__number">24</div>
            <div className="calendar__number">25</div>
            <div className="calendar__number">26</div>
            <div className="calendar__number">27</div>
            <div className="calendar__number current">
              <img src={ring} className="rings" />
              {/* <img className="number-frame" src={frame} /> */}
            </div>
            <div className="calendar__number">29</div>
            <div className="calendar__number">30</div>
            <div className="calendar__number">31</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
