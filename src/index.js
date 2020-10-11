import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Services from './Services'

class App extends Component {
  render(){
    return(
      <div>
      <Navigation logoTitle = "Sam Bevans-Kerr" />
      <Header title = "Stylish Portfolio" button ="Learn More" />
      <Services />
      </div>

    );

  }


}

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
