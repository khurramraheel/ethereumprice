import React, { Component } from "react";
import Template from "./views/Template";
import Login from "./views/LoginRegistration/login";
import SignUp from "./views/LoginRegistration/Signup";
import "./bootstrap.css";
import chartWithZoom from "./views/overview/Chart with Zoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loaduser } from "./Redux/Actions/authActions";
import store from "./Redux/Store";
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loaduser());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Template} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/register" component={SignUp} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
