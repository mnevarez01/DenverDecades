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
  const [info, setInfo] = useState([{
    year: "1858",
    title: "Denver is Born",
    content: "In the summer of 1858, a small group of prospectors from Georgia crossed the great plains of the Colorado Territory and made a region-changing discovery at the base of the Rocky Mountains. Gold. And although not much of the precious metal was found, the mere whisper of the word was enough to start a veritable stampede into the region. After all, the California Gold Rush had occurred just nine years earlier.\n      It wasn't long before tents, tepees, wagons, lean-tos, and crudely constructed log cabins lined the banks of the South Platte River as prospectors and fortune-seekers poured into the area. They came from all over the country, traveling on foot, in covered wagons, by horseback, and even pushing their belongings in wheelbarrows. Pikes Peak, a 14,000-foot mountain to the south of the mining camp served as both a landmark and a rallying cry for weary travelers. The \"Pikes Peak or Bust!\" gold rush was in full force.\n      However, gold wasn't the only way to strike it rich in the boomtown that was springing up on the banks of the South Platte. Those who arrived early enough could simply stake out a claim of land, lay out city streets, and then sell the lots to those arriving after them. General William H. Larimer didn't arrive early but followed the plan perfectly. He claim-jumped the land on the eastern side of Cherry Creek, laid out a city and, in hopes of gaining political favor, named the city after Kansas Territorial governor James Denver. What he didn't know was that Denver had already resigned."

  }])
  const [decade, setDecade] = useState();
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
        <Section />
        <Section />
        <MainBody info={info} />
        <Switch>
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
