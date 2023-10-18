import React, { useRef, useEffect, useState } from "react";
import video from "../assets/images/background.gif";

const VideoScroll = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Options for the Intersection Observer
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when at least 50% of the element is visible
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Video is now visible, start playing
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        // Video is not visible, pause it
        videoRef.current.pause();
        setIsPlaying(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="video-scroll">
      <video ref={videoRef} width="100%" height="100%" controls autoPlay>
        <source
          className="Video"
          src="../assets/background.mp4"
          autoPlay
          loop
          muted
        />
      </video>
    </div>
  );
};

export default VideoScroll;
