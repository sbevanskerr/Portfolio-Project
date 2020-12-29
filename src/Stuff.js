import React, { Component } from "react";
import './Stuff.css';
import Cat from './img/cat.png';
import Ghost from './img/ghost.png';
import Blend from './img/blend.png';
import GNV from './img/gnv.png';
import Web from './img/web.png';



 
class Stuff extends Component {
  render() {
    return (
      <body>
      <div>
        <h2>PROJECTS</h2>
        <p>The source code for each of these projects can be found on my Github.</p>

          <h4>Human Computer Interaction Final Project: Blend!</h4>
          <img src={Blend} alt="Logo" height = "250" width = "400"></img>

          <p></p>
          <ul class = "stuff">
            <li>Color blending game developed in Unity</li>
            <li>Used to collect and interpret data on user speed, error and intuition</li>
            <li>As developed, it can become a fun way to teach children color theory</li>
          </ul>

          <h4>Software Engineering Final Project: myGNV Resource Finder</h4>
          <img src={GNV} alt="Logo" height = "250" width = "400"></img>

          <p></p>
          <ul class = "stuff">
            <li>Web Application developed for the City of Gainesville</li>
            <li>Made in a team of four using agile development</li>
            <li>Utilizes React as a framework and MongoDB as a databse</li>
          </ul>
      
          <h4>Swamphacks VI Hackathon Project Catastrophe</h4>
          <img src={Cat} alt="Logo" height = "250" width = "400"></img>

          <p></p>
          <ul class = "stuff">
            <li>Small 2D game developed during a University of Florida 36 hour Hackathon</li>
            <li>Made by two people in Processing, it utilizes object oriented ideas to build levels</li>
            <li>Everything was made from scratch</li>
          </ul>

          <h4>Multimedia Project - Ghost Boy: Ghoul Grabber</h4>
          <img src={Ghost} alt="Logo" height = "250" width = "400"></img>

          <p></p>
          <ul class = "stuff">
            <li>A 3D stealth ghost hunting game developed in Unity</li>
            <li>I worked on the camera and player movement scripts</li>
            <li>I also wrote and produced the music</li>
          </ul>

          <h4>This Website!</h4>
          <img src={Web} alt="Logo" height = "250" width = "400"></img>

          <p></p>
          <ul class = "stuff">
            <li>This website was made from scratch using React</li>
            <li>It requires knowledge of Javascript, HTML, CSS and React</li>
            <li>Made in a way where I can easily make new pages</li>
          </ul>
        
      </div>
      </body>
    );
  }
}
 
export default Stuff;