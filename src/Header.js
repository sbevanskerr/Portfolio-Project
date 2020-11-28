import React from 'react';
import Background from './img/amber.jpg';

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
                <p>This Will Eventually Be My Portfolio</p>
                <a href="#button"> {this.props.button}</a>  
            </header>



        );

    }

};

export default Header;