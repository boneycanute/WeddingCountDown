import React, { useEffect, useRef } from "react";
import video from "../assets/background.mp4";

function Section5() {
  const videoRef = useRef(null);

  const handleScroll = () => {
    // Your code to be executed on scroll
    videoRef.current.play();
    setTimeout(() => {
      videoRef.current.pause();
    }, 700);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    videoRef.current.pause();
    videoRef.current.playbackRate = 3.0;
    console.log(videoRef.current);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="Section5">
      <video className="Video" ref={videoRef} src={video} autoPlay loop muted />
    </div>
  );
}

export default Section5;
