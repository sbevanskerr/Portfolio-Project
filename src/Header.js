import React from 'react';
import Background from './img/bg-masthead.jpg';

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
                <p>Bootstrap Theme Hours</p>
                <a href="#button"> {this.props.button}</a>
    
            
            </header>



        );

    }

};

export default Header;