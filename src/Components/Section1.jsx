import React, { useEffect } from "react";
import Timer from "./Timer";
import Photo1 from "./Photo1";

function Section1() {
  return (
    <div className="section1">
      <Timer />
      {/* <ImageSlideshow /> */}
      <Photo1 />
    </div>
  );
}

export default Section1;
