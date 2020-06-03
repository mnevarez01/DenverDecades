import React, { Fragment} from 'react';
import { Timeline, Event } from "react-timeline-scribble"
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

function Display({ info }) {
  // console.log(props)
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
      {info.map(({ content, title, year, _id }) => (
        <Fragment >
          <Timeline >
            <Event key={_id} interval={year} title={title} >
              {content} 
             {isAuthenticated ? (<><Link to={"/edit/" + _id}>Edit</Link> - <Link to="/contribute">Contribute</Link></>) : null }
            </Event>
          </Timeline>
        </Fragment>
      ))}

    </div>
  )

}

export default Display;

