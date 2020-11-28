import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Services.css';

class Services extends Component{

    render() {
        return(

            <div className = "services">
                <h3>skills</h3>
                <h2>What I Do</h2>
                <div className = "row">
                    <Icons myIcon = {iconObj[0].icon} myTitle = {iconObj[0].title} 
                    myDescription = {iconObj[0].description} />

                    <Icons myIcon = {iconObj[1].icon} myTitle = {iconObj[1].title} 
                    myDescription = {iconObj[1].description} />

                    <Icons myIcon = {iconObj[2].icon} myTitle = {iconObj[2].title} 
                    myDescription = {iconObj[2].description} />

                    <Icons myIcon = {iconObj[3].icon} myTitle = {iconObj[3].title} 
                    myDescription = {iconObj[3].description} />
                    

            
                </div>
            </div>


        );
    }
}

const iconObj = [
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title: 'Programmer',
        description: 'C++, Java, Javascript'
    },
    {
        icon: <ion-icon name="build-outline"></ion-icon>,
        title: 'Engineer',
        description: 'Software and Development'
    },
    {
        icon: <ion-icon name="musical-notes-outline"></ion-icon>,
        title: 'Musician',
        description: 'Piano Player'
    },
    {
        icon: <ion-icon name="play-circle-outline"></ion-icon>,
        title: 'Producer',
        description: 'Music Composition and Production'
    }
    
];

class Icons extends Component {
    render() {
        return(
            <div>
                  <span>
                    {this.props.myIcon}
                  </span>
                <h4>{this.props.myTitle}</h4>
                <p>{this.props.myDescription}</p>
            </div>

        );
    }
}

export default Services;