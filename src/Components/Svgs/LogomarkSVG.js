import React from "react";
import "./svg.css";

function LogomarkSVG({setIsAboutOpen}) {
  const cls1Style = {
    fill: "#ffda3e",
  };

  const cls2Style = {
    fill: "#fbb03b",
  };

  const cls3Style = {
    fill: "none",
    stroke: "#fbb03b",
    strokeMiterlimit: "10",
  };

  return (
    <div className="logoContainer">
      <a href="#">
      <svg
        onClick={()=>setIsAboutOpen(true)}
        id="logomarksvg"
        className="logoMarkSVG"
        data-name="Logomark SVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 309.8 261.93"
      >
        <path
          style={cls1Style}
          className="cls-1"
          d="m143.02,4.06l1.78-.75c-.21.1-.42.2-.63.3-.38.14-.77.29-1.15.45Z"
        />
        <path
          style={cls2Style}
          className="cls-2"
          d="m149.1,5.6c-4.04-7.47-14.14-7.47-18.18,0L1.42,245.12c-4.04,7.47,1.01,16.81,9.09,16.81h258.99c8.08,0,13.13-9.34,9.09-16.81L149.1,5.6ZM46,228.78L139.03,56.7l93.04,172.08H46Z"
        />
        <path
          style={cls2Style}
          className="cls-2"
          d="m174.3,12.01c-3.98,0-7.92.18-11.81.52l118.06,219.07c18.31-23.1,29.25-52.32,29.25-84.09,0-74.83-60.67-135.5-135.5-135.5Z"
        />
      </svg>
      </a>
      <h1>Full Stack Developer</h1>
    </div>
  );
}

export default LogomarkSVG;
