import "./App.css";
import ImageSlideshow from "./Components/ImageSlideshow";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";

import outImg1 from "./Components/Art-Assets/fl1_c1.png";
import outImg2 from "./Components/Art-Assets/fl1_c5.png";
import outImg3 from "./Components/Art-Assets/fl1_c4.png";
import outImg4 from "./Components/Art-Assets/fl1_c3.png";
function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      {/* 
      <img src={outImg1} className="outImage1" />
      <img src={outImg2} className="outImage2" />
      <img src={outImg3} className="outImage3" />
      <img src={outImg4} className="outImage4" /> */}
    </>
  );
}

export default App;
