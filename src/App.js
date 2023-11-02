import { useState } from "react";

import "./App.css";
import "./index.css";

import LogomarkSVG from "./Components/Svgs/LogomarkSVG";
import NavBar from "./Components/NavBar/NavBar";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";

function App() {
  const [isImageFocused, setIsImageFocused] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(true);
  const [focusedImageIndex, setFocusedImageIndex] = useState(0);
  const [galleryModalClassName, setGalleryModalClassName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <LogomarkSVG
        setIsAboutOpen={setIsAboutOpen}
        ></LogomarkSVG>
        <NavBar
        isAboutOpen={isAboutOpen}
        setIsAboutOpen={setIsAboutOpen}
        ></NavBar>
      </header>
          <About
          isAboutOpen={isAboutOpen}
          ></About>
        <Gallery
        isImageFocused={isImageFocused}
        setIsImageFocused={setIsImageFocused}
        focusedImageIndex={focusedImageIndex}
        setFocusedImageIndex={setFocusedImageIndex}
        galleryModalClassName={galleryModalClassName}
        setGalleryModalClassName={setGalleryModalClassName}
        ></Gallery>
      {/* } */}
      {/* </main> */}
      <footer className="">
        <ul>
          <li>Website by Aidan Meyer</li>
          <li>Created using React.js</li>
          <li><a href="mailto:aidan1meyer1@gmail.com">aidan1meyer1@gmail.com</a></li>

        </ul>
      </footer>
    </div>
  );
}

export default App;
