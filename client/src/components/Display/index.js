import React, { Fragment } from 'react';
import { Timeline, Event } from "react-timeline-scribble"

function Display({ info }) {
  // console.log(props)
  return (
    <div className="container">

      {info.map(({ content, title, year, _id, author }) => (
        <Fragment>
          <Timeline >
            <Event key={_id} interval={year} title={title} subtitle={author}>
              {content}
            </Event>
          </Timeline>
        </Fragment>
      ))}

    </div>
  )

}

export default Display;

// {/* <div classNames="container">
//           <h3>Year: {year}</h3>
//           <ul className="list-group" key={_id}>
//             <h5> <strong>{title}</strong></h5>
//             <li>
//               <strong>What Happened:</strong> {content}
//             </li>
//           </ul>
//         </div> */}