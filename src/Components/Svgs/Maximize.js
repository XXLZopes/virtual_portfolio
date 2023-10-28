import React from "react";
import "./svg.css";

function MaximizeSVG({isFullScreen, setIsFullScreen}) {
  
  const cls1Style = {
    fill: "#ff8c00",
  };

  return (
    <div 
    className="maximizeSvg"
    onClick={()=> setIsFullScreen(!isFullScreen)}
    >
      <svg className="maximizeSvg" id="maximizeSvg" data-name="maximize svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.5 65.5">
        <path style={cls1Style} class="cls-1" d="m4.93,1.25c-2.03,0-3.68,1.65-3.68,3.68v12.7c0,.99,1.2,1.49,1.9.79L18.42,3.15c.7-.7.2-1.9-.79-1.9H4.93Z"/>
        <path style={cls1Style} class="cls-1" d="m1.25,60.57c0,2.03,1.65,3.68,3.68,3.68h12.51c.99,0,1.49-1.2.79-1.9l-15.08-15.08c-.7-.7-1.9-.2-1.9.79v12.51Z"/>
        <path style={cls1Style} class="cls-1" d="m60.57,64.25c2.03,0,3.68-1.65,3.68-3.68v-11.46c0-.99-1.2-1.49-1.9-.79l-14.03,14.03c-.7.7-.2,1.9.79,1.9h11.46Z"/>
        <path style={cls1Style} class="cls-1" d="m64.25,4.93c0-2.03-1.65-3.68-3.68-3.68h-11.66c-.99,0-1.49,1.2-.79,1.9l14.22,14.22c.7.7,1.9.2,1.9-.79V4.93Z"/>
      </svg>
    </div>
  );
}

export default MaximizeSVG;
