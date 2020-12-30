import React from 'react';
import Background from './img/lblue.png';
import pdf from './files/SBKResume.pdf'

import './Header.css';

const myStyles = {
    backgroundImage: "url(" + Background + ")", 
    'height': '50vh',
    backgroundSize: 'cover'
}

class Header extends React.Component {

    

    render(){
        return( 

            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>Digital Arts and Sciences Major in the University of Florida College of Engineering</p>
                <a href= {pdf} download> {this.props.button}</a>  
            </header>



        );

    }

};

export default Header;