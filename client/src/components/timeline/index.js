import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import "./style.css"


const VALUES = ['January 1950', 'January 1960', 'January 1970', "January 1980", " January 1990", 'January 2000', "January 2010", " January 2020"];//will be removed when data added



export default class App extends React.Component {
  state = { value: 0, previous: 0 };


  render() {
    return (
      <div>
        <h6>Select the Decade</h6>
        <div className="timeline">
          {/* Bounding box for the Timeline */}

          <div style={{ width: '80%', height: '100px', margin: "0 auto" }}>
            <HorizontalTimeline
              styles={{ background: '#d3d3d3', foreground: '#E67A16', outline: '#808080' }}
              index={this.state.value}
              indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
              }}
              values={VALUES} /> {/*books date */}
          </div>
          <div className='text-center'>
            {/* any arbitrary component can go here */}
            {/* {this.state.value} */}
          </div>
        </div>
      </div>
    );
  }
}