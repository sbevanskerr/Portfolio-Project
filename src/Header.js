import React from 'react';
import Background from './img/lbluegradient.jpg';
import pdf from './files/SBKResume.pdf'
import './Header.css';
import Cat from './img/headshot.png';

const myStyles = {
    backgroundImage: "url(" + Background + ")", 
    'height': '50vh',
    backgroundSize: 'cover'
}


class Header extends React.Component {

    

    render(){
        return( 

            <header style={myStyles}>
                
                <img src={Cat} alt="Logo" height = "300" width = "300"></img>
                <h1>{this.props.title}</h1>
                <p class = "subtext">Major: Digital Arts and Sciences</p>
                <p class = "subtext">Herbert Wertheim Colege of Engineering</p>
                <p class = "finalsubtext">Univeristy of Florida</p>
                <a href= {pdf} download> {this.props.button}</a>  
          

             
            </header>



        );

    }

};

export default Header;