import React from "react";
 import "./Project.css"

import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const Project = () => {
  return (
    <div id="projects">
      <h2
        style={{
          textAlign: "center",
          paddingTop: "200px",
          fontSize: "36px",
          fontWeight:"bold",
          marginBottom: "-6px",
        }}
      >
        Projects
      </h2>

      {/* ////////////////////////////////  Indiegogo             ///////////////////// */}
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content" style={{ paddingTop: "40px" }}>
              

              <div>
                {" "}
                <img src="https://i.postimg.cc/jqvynZk9/Indiegogo.png" height="100px" alt="" />
              </div>

              <h3>Indiegogo Clone</h3>
              <p style={{ textAlign: "left", fontSize: "16px" }}>
              Indiegogo is your destination for clever innovations in tech, design, and more, often with special perks and pricing for early adopters.
                <br />
                <br />
                <strong >
                  Tech Stack:{" "}
                </strong>
                React.js | CSS | Javascript | Chakra UI
                <br /> <br />
            
              </p>

              
              <div id="buttonnn">
                <a
                  
                  class="one"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ramkrishnap43/glad-earthquake-7088/tree/main/indiegogo"
                >
                  <FaGithub style={{alignItems:"center", marginTop:"2px"}} /> View Code
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  class="one"
                  href="https://indiegogo-mauve.vercel.app/"
                >
                  <FaPlay style={{alignItems:"center", marginTop:"2px"}} /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////     Optimizely          ///////////////////// */}
        <div class="card">
          <div class="box" id="boxx">
            <div class="content" style={{ paddingTop: "30px" }}>
              
              <div>
                {" "}
                <img src="https://i.postimg.cc/GtNF8phK/Optimizely.png" height={"100%"} alt="" />
              </div>

              <h3>Optimizely Clone</h3>
              <p
                id="hoverwhite"
                style={{ fontSize: "16px", textAlign: "left" }}
              >
               Optimizely is known for content, commerce and optimization with our Digital Experience Platform (DXP). Millions of experiences are served with our platform
                <br /> <br />
                <strong >
                  Tech Stack:{" "}
                </strong>
                React.js | Javascript | HTML | CSS | Chakra UI
               
              </p>

              <div id="buttonnn">
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="one"
                  href="https://github.com/ramkrishnap43/faithful-cemetery-5078/tree/main/Optimizely%20Project/myproject"
                >
                  <FaGithub style={{alignItems:"center", marginTop:"2px"}} /> View Code
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="one"
                  href="https://myproject-jet.vercel.app/"
                >
                  <FaPlay style={{alignItems:"center", marginTop:"2px"}}/> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////      Unsplash        ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content" style={{ marginTop: "30px" }}>
             
              <div>
                {" "}
                <img src="https://i.postimg.cc/ZRvpkSLy/unsplash.png"  alt="" />
              </div>

              <h3>Unsplash Clone</h3>
              <p style={{ textAlign: "left", fontSize: "16px" }}>
              Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.
                <br />
                <br />
                <strong >
                  Tech Stack:{" "}
                </strong>{" "}
                Javascript | HTML | CSS
                <br />
                <br />
              </p>

              <div id="buttonnn">
                <a
                  target="_blank"
                  rel="noreferrer"
                  class="one"
                  href="https://github.com/ramkrishnap43/unsplash-clone"
                >
                  <FaGithub style={{alignItems:"center", marginTop:"2px"}} /> View Code
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="one"
                  href="https://stately-pie-642201.netlify.app/"
                >
                  <FaPlay style={{alignItems:"center", marginTop:"2px"}}/> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////         Zappos         ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content" style={{ paddingTop: "40px" }}>
              <div>
                {" "}
                <img src="https://i.postimg.cc/3R2NCJB9/zappos.png" alt="" />
              </div>

              <h3 style={{ marginTop: "30px" }}>Zappos Clone</h3>
              <p
                id="hoverwhite"
                style={{ fontSize: "16px", textAlign: "left" }}
              >
                It is a Product based website where you can purchase shoes,clothing, handbags, accessories, and more<br />{" "}
                <br />
                <strong >
                  Tech Stack:{" "}
                </strong>
                Javascript | HTML | CSS <br /> <br />
               
              </p>

              <div id="buttonnn">
                <a
                  rel="noreferrer"
                  class="one"
                  href="https://github.com/ramkrishnap43/Zappos"
                  target="_blank"
                >
                  <FaGithub style={{alignItems:"center", marginTop:"2px"}}/> View Code
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="one"
                  href="https://sweet-torrone-6439b7.netlify.app/"
                >
                  <FaPlay style={{alignItems:"center", marginTop:"2px"}}/> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;