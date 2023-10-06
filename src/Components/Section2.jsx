import React from "react";
import image2 from "../assets/images/section2Image.png";

function Section2() {
  return (
    <div className="section2">
      <div className="people-text">
        <p className="name-text-1">Emmanuel Zaviyo</p>
        <p className="name-text-2">s/o</p>
        <p className="name-text-2">Joy William and Prameela Joy</p>
      </div>
      <img src={image2} className="photo2" />
      <div className="people-text">
        <p className="name-text-1">Elizabath Mohan</p>
        <p className="name-text-2">D/o</p>
        <p className="name-text-2">Mohan R V and Sherin Mohan</p>
      </div>
    </div>
  );
}

export default Section2;
