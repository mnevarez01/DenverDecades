import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import HiddenHeader from "./components/HiddenHeader";
import HorizontalTimeline from "./components/timeline";
import HeroBanner from "./components/HeroBanner";
import ContentForm from "./components/ContentForm";
import EditForm from "./components/EditForm";
import API from "./utils/API";

// CAN WE HAVE A COMPONENT (vertical timeline) IN ANOTHER COMPONENT (container)
import MainBody from "./components/MainBody";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);
  const [decade, setDecade] = useState(1850);
  useEffect(() => {
    const initDate = decade;
    const endDate = decade + 9;

    API.getContentDates(initDate, endDate)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, [decade]);

  return (
    <Router>
      <Nav />
      <HiddenHeader />
      <Switch>
        <Route exact path="/contribute">
          <ContentForm />
        </Route>
        <Route exact path="/edit/:id">
          <EditForm />
        </Route>
        <Route path="/">
          <HeroBanner />
          <HorizontalTimeline setDecade={setDecade} />
          <MainBody decade={decade} info={info} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
