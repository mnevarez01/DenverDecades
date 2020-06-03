import React, { Fragment } from 'react';
import { Timeline, Event } from "react-timeline-scribble"
import "./style.css"

function Display({ info }) {
  // console.log(props)
  return (
    <div className="container">
      {info.map(({ content, title, year, _id }) => (
        <Fragment >
          <Timeline >
            <Event key={_id} interval={year} title={title} >
              {content}
            </Event>
          </Timeline>
        </Fragment>
      ))}

    </div>
  )

}

export default Display;

