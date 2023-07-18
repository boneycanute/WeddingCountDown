import React, { useEffect, useState } from "react";
import TimerSection from "./TimerSection";
import flower1 from "../assets/images/flower1.png";

function Timer() {
  const marriageDate = new Date("Dec 28, 2023 11:30:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      var now = new Date().getTime();
      var distance = marriageDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      sethours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  }, []);

  return (
    <div className="timer">
      <p className="timer-text-1">
        <span>Elizabeth </span>
        <span>and </span>
        <span>Emmanuel</span>
      </p>
      <img src={flower1} className="flower1" />
      <p className="timer-text-2">Are getting married on 28th December</p>
      <div className="clock">
        <TimerSection value={days} unit="Days" />
        <TimerSection value={hours} unit="Hours" />
        <TimerSection value={minutes} unit="Minutes" />
        <TimerSection value={seconds} unit="Seconds" />
      </div>
      <p className="timer-text-2">to Go !</p>
    </div>
  );
}

export default Timer;
