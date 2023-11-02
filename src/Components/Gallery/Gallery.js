import React, { useState } from "react";
import "./Gallery.css";
import FocusedImageModal from "./FocusedImageModal";
import galleryArray from "./galleryArray";
function Gallery({
  isImageFocused,
  setIsImageFocused,
  focusedImageIndex,
  setFocusedImageIndex,
  galleryModalClassName,
  setGalleryModalClassName,
}) {
  // const [isImageFocused, setIsImageFocused] = useState(false);
  // const [focusedImageIndex, setFocusedImageIndex] = useState(0);
  // const [galleryModalClassName, setGalleryModalClassName] = useState("");
  function createGalleryElement(elementInfo, index) {
    return (
      <div className="galleryElementCon">
        <img
          src={require(`../../Assets/GalleryImages/${elementInfo.src}.png`)}
          id={`galleryContent_${index}`}
          key={`galleryContent_${index}`}
          className="galleryElement"
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setIsImageFocused(true);
            setFocusedImageIndex(index);
            setTimeout(() => {
              setGalleryModalClassName("opacity100");
            }, 0.1);
          }}
        ></img>
        <img
          src={require(`../../Assets/GalleryImages/${elementInfo.src}-prev.png`)}
          id={`galleryContentPrev_${index}`}
          key={`galleryContentPrev_${index}`}
          className="galleryElementPrev"
          onClick={() => {
            setIsImageFocused(true);
            setFocusedImageIndex(index);
            setTimeout(() => {
              setGalleryModalClassName("opacity100");
            }, 0.1);
          }}
        ></img>
      </div>
    );
  }
  return (
    <>
                  <div className="sectionHeader">
          <h1>Portfolio</h1>
        </div>
    <div id="portfolio" className="GalleryCon glareBackground">
      <>
        {galleryArray.map((elementInfo, index) => {
          return createGalleryElement(elementInfo, index);
        })}
      </>
      {isImageFocused && (
        <FocusedImageModal
          galleryModalClassName={galleryModalClassName}
          setIsImageFocused={setIsImageFocused}
          focusedImageIndex={focusedImageIndex}
          setFocusedImageIndex={setFocusedImageIndex}
          setGalleryModalClassName={setGalleryModalClassName}
        ></FocusedImageModal>
      )}
    </div>
    </>
  );
}

export default Gallery;
