import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import HiddenHeader from "./components/HiddenHeader";
import HorizontalTimeline from "./components/timeline";
import HeroBanner from "./components/HeroBanner";
import Section from "./components/Section";
import API from './utils/API'




// CAN WE HAVE A COMPONENT (vertical timeline) IN ANOTHER COMPONENT (container)
import MainBody from "./components/MainBody";
import './App.css';

function App() {
  const [info, setInfo] = useState([])
  const [decade, setDecade] = useState(1850);
  useEffect(() => {
    const initDate = decade;
    const endDate = decade + 9

    API.getContentDates(initDate, endDate)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err))
  }, [decade])


  return (
    <div>
      <Router>
        <Nav />
        <HiddenHeader />
        <HeroBanner />
        <HorizontalTimeline setDecade={setDecade} />
        {/* <Section /> */}
        <MainBody info={info} />
        <Switch>
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
