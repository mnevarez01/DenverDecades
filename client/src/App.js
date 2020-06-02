import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import HiddenHeader from "./components/hiddenHeader";
import HorizontalTimeline from "./components/timeline";
import HeroBanner from "./components/HeroBanner";
import Section from "./components/Section";
import MainBody from "./components/MainBody"; 
import './App.css';

function App() {
  return (
    <div>
    <Router>
        <Nav />
        <HiddenHeader />
        <HeroBanner />
        <Section />
<HorizontalTimeline />

        <Section />
      
        <MainBody />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
