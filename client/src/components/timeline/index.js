import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './index.css';

const VALUES = ["01/01/1990", "2000", "2010"];//will be removed when data added


export default class App extends React.Component {
  state = { value: 0, previous: 0, isLoading: true, books: [] };

  componentDidMount() {

    fetch('/api/content')
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) return <div />
    return (
      <div className='timelineDiv'>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES} /> {/*books date */}
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}
          {this.state.value}
        </div>
      </div>
    );
  }
}