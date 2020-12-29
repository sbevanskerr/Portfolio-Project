import React, { Component } from "react";
import './Navigation.css';
import './Stuff.css';
 
class Contact extends Component {
  render() {
    return (
    
      <body>
        <h2>CONTACT</h2>
        <span> Email: </span>
        <a href = "sam-bk@outlook.com">sam-bk@outlook.com</a>
        <p>Phone: 904-614-7399</p>
        <a href = "github.com/sbevanskerr" > Github </a>
        <span><ion-icon name="logo-octocat"></ion-icon></span>
        <p></p>
        <a href = "https://www.linkedin.com/in/sam-bevans-kerr-069110167/" >LinkedIn </a>
        <span><ion-icon name="logo-linkedin"></ion-icon></span>

      </body>
    
    );
  }
}
 
export default Contact;