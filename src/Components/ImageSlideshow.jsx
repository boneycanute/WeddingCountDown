import React from "react";
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import frame4 from "../assets/images/frame4.png";
import frame5 from "../assets/images/frame5.png";
import Slider from "react-slick";

function ImageSlideshow() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <img src={frame1} className="frames" />
        <img src={frame2} className="frames" />
        <img src={frame3} className="frames" />
        <img src={frame4} className="frames" />
        <img src={frame5} className="frames" />
      </Slider>
    </div>
  );
}

export default ImageSlideshow;
