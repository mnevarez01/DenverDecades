import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import "./style.css"


const VALUES = ["1980", "1990", "2010", "2020"];//will be removed when data added



export default class App extends React.Component {
    state = { value: 0, previous: 0, /*isLoading: true, books: [] */};

    // componentDidMount() {

    //     fetch('/api/books')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ books: data, isLoading: false });
    //         });
    // }

    render() {
        if (this.state.isLoading) return <div />
        return (
            <div>
                <h6>Select the Decade</h6>
                <div className="timeline">
                    {/* Bounding box for the Timeline */}

                    <div style={{ width: '80%', height: '100px', margin: "0 auto" }}>
                        <HorizontalTimeline 
                            styles=	{{ background: '#5C6672', foreground: '#CA3403', outline: '#000000' }}
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