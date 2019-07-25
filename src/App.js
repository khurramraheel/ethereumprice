import React, { Component } from 'react';
import Template from './views/Template';
import Login from './views/LoginRegistration/login';
import './bootstrap.css';
import chartWithZoom from './views/overview/Chart with Zoom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {    
    return (
      
        <BrowserRouter>
        <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Template} />
        </Switch>
        </div>
        </BrowserRouter>
		
   
    );
  }
}

export default App;
