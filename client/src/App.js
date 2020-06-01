import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Nav from "./views/Components/Nav";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "./views/Components";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    <Nav />
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
  );
}

export default App;
