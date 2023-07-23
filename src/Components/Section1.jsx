import React from "react";
import Timer from "./Timer";
import extraFlower from "../assets/images/Ziak.gif";
import Photo1 from "./Photo1";
import ImageSlideshow from "./ImageSlideshow";

function Section1() {
  return (
    <div className="section1">
      <Timer />
      {/* <ImageSlideshow /> */}
      <Photo1 />
      {/* <img src={extraFlower} className="extra-flower" /> */}
    </div>
  );
}

export default Section1;
