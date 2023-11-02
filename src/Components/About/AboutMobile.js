import React, { useState } from "react";
import "./About.css";
function About({}) {
  return (
    <div className="aboutCon">
        <div className="selfImgDiv">
      <img
        className="selfImg"
        src={require("../../Assets/Images/self.png")}
      ></img>
      </div>
      <div id="aboutme" className="aboutTextCon glareBackground">
        <div>
          <h1>Aidan Meyer</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Born on November 22, 1999, in Arcata, California, Aidan Meyer's
            entrepreneurial spirit surfaced early. From selling toys and
            lemonade as a child to excelling as a varsity athlete at Arcata High
            School, Aidan's drive was evident. His drive and ambition extended
            into college, where he's set to graduate a presidential scholar in
            Computer Science in 2024 from Cal Poly Humboldt. His research in PCM
            earned him a published paper and an award. With a first prize at the
            CPH Annual Hackathon under his belt, Aidan's tech expertise,
            especially in full-stack development, stands out. Beyond tech, he's
            an avid board game enthusiast. Aidan envisions a world where
            technology uplifts society, and he's determined to lead that change.
            <br></br><br></br>
            - ChatGPT
          </p>
        </div>
        <div className="aboutButtonsCon">
          <div className="button">
            {/* <a href="./Aidan's CV.pdf" download>Download Aidan's CV</a> */}
            <a href="./Aidan's CV.pdf" download>
              Download CV
            </a>
          </div>
          <div className="button">
            <a href="mailto:aidan1meyer1@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
