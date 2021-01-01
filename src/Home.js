import React, { Component } from "react";
import Services from './Services'
import Header from './Header';
 
class Home extends Component {
  render() {
    return (
    
      <div>
        
        <Header title = "Sam Bevans-Kerr" button ="Download Resumé" />
        
        <Services /> 
      </div>
    );
  }
}
 
export default Home;