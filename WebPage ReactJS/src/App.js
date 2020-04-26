/*App.js*/
import React, { Component } from "react";
import Index from "./pages/index"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import World from "./pages/world"

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/world" component={World} />
        <Route path="*" component={Index} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;