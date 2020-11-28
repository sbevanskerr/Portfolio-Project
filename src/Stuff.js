import React, { Component } from "react";
import './stylish-portfolio.css';



 
class Stuff extends Component {
  render() {
    return (
      <nav>
      <div>
        <h2>PROJECTS</h2>
        <p>This is where I'll put my super cool projects.</p>
        <ol>
          <li>Swamphacks VI Hackathon Project Catastrophe</li>
          <li>Interactive Modeling and Animation I Final Project</li>
          <li>Data Structures and Algorithms Final Project</li>
          <li>Ghost Boy: Ghoul Grabber</li>
          <li>This Website!</li>
        </ol>
      </div>
      </nav>
    );
  }
}
 
export default Stuff;