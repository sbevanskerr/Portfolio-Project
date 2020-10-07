import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
  render() {
    //array to hold navlink names 
    const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
    //.map loops through each index of array
    const navLinks = sections.map( section => {
      return (
          <li><a href={'#' + section}>{section}</a></li>
      )


    });
    return(
      <nav>
        <h2 className = "logo" >{this.props.logoTitle}</h2>

        <u1>
          {navLinks}
        </u1>
      </nav>
    );
  }
}

export default Navigation;
