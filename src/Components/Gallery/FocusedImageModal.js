import React, { useState } from "react";
import MaximizeSvg from "../Svgs/Maximize";
import BackArrow from "../Svgs/BackArrow";
import Close from "../Svgs/Close";
import "./FocusedImageModal.css";

import galleryArray from "./galleryArray";
function FocusedImageModal({
  galleryModalClassName,
  setIsImageFocused,
  focusedImageIndex,
  setFocusedImageIndex,
  setGalleryModalClassName,
}) {

  const [isFullScreen, setIsFullScreen] = useState(false)
  
  function createLi(text) {
    return <li>{text}</li>;
  }
  return (
    <div className="focusedImageModalCon">
      <div
        className="focusedImageModalBackground"
        onClick={() => {
          setGalleryModalClassName("opacity0");
          setIsImageFocused(false);
          document.body.style.overflow = 'initial';
        }}
      ></div>
      <div className={`focusedImageModal ${galleryModalClassName}`}>
      <nav className={`modalNav ${isFullScreen && 'hidden'}`}>
        {/* <BackArrow></BackArrow>
        <Close></Close> */}
        <MaximizeSvg
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        ></MaximizeSvg>
      </nav>
      <h1 
      id="closeModal"
      onClick={()=> {
        setIsImageFocused(false)
        document.body.style.overflow = 'initial';
      }
      }
      >
        X
      </h1>
        {/* <img src={require(`../../Assets/GalleryImages/${galleryArray[focusedImageIndex].url}.png`)}></img> */}
        <iframe
          className={isFullScreen && "fullScreen"}
          src={galleryArray[focusedImageIndex].url}
          width="30%"
          height="100%"
          title="Embedded site"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="infoCon">
          <h1>Technologies Used</h1>
          <ul className="technologiesUsed">
            {galleryArray[focusedImageIndex].technologies.map((technology) => {
              return createLi(technology);
            })}
          </ul>
          <div className="descriptionCon">
            <h1>Description</h1>
            <p>{galleryArray[focusedImageIndex].description}</p>
            <div className="toWebsiteCon">
              <div className="toWebsite">
                <a href={galleryArray[focusedImageIndex].url} target="blank">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusedImageModal;
