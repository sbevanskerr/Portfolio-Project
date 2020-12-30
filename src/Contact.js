import React, { Component } from "react";
import './Contact.css';
import './Stuff.css';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
  
      }}
  />
);
 
class Contact extends Component {
  render() {
    return (
    
      <body>

        <h1>CONTACT</h1>
        <p>Where to find me!</p>
        <ColoredLine color="#1d809f" />

        <body class = "contact">
        
        
        <p></p>
        <p></p>
        <span> Email: </span>
        <a href = "sam-bk@outlook.com" class = "lnk">sam-bk@outlook.com</a>
        <p></p>
        <span> Phone: </span>
        <a class = "lnk" >904-614-7399</a>
        <p></p>
     
     
        <span><ion-icon name="logo-octocat" class = "icon"></ion-icon></span>
        <p></p>
        <a href = "https://www.github.com/sbevanskerr" class ="lnk"> Github </a>
        <p></p>
        
  
        <span><ion-icon name="logo-linkedin" class = "icon" href = "https://www.linkedin.com/in/sam-bevans-kerr-069110167/"></ion-icon></span>
        <p></p>
        <a href = "https://www.linkedin.com/in/sam-bevans-kerr-069110167/" class = "lnk">LinkedIn</a>

      </body>
      </body>
    
    );
  }
}
 
export default Contact;