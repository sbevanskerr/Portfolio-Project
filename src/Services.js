import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Services.css';

class Services extends Component{

    render() {
        return(

            <div className = "services">
                <h3>services</h3>
                <h2>What We Offer</h2>
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
        title: 'Responsive',
        description: 'That\'s a lie!'
    },
    {
        icon: <ion-icon name="brush"></ion-icon>,
        title: 'Redesigned',
        description: 'Just for Sam.'
    },
    {
        icon: <ion-icon name="thumbs-up"></ion-icon>,
        title: 'Favorited',
        description: 'Jolteon is my favorite Pokémon'
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title: 'Question',
        description: 'Who am I'
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