import React from "react";
import ImageSlideshow from "./ImageSlideshow";
import frame2 from "../assets/images/frame2.png";

function Photo1() {
  return (
    <div className="photo1">
      <img src={frame2} style={{ width: "95%" }} />
      {/* <ImageSlideshow /> */}
    </div>
  );
}

export default Photo1;
