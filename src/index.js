import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Services from './Services'
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends Component {
  render(){
    return(
      <HashRouter>
        <Navigation logoTitle = "SBK Portfolio" />

        <main> 
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Stuff} />
          <Route path="/contact" component={Contact} />  
        </main>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
