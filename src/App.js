import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"; 

// import different pages 
import MainPage from "./pages";
import NonFoundPage from "./pages/404";
import UsersPage from "./pages/users";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          //switch to multiple paths
          <Route exact path="/" component={MainPage} />
          <Route exact path="/users" component={UsersPage} />
          //dealing with non found links
          <Route exact path="/404" component={NonFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>);
    
  }
} 

export default App;
