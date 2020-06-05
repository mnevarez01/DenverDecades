import React, { Fragment } from 'react';
import { Timeline, Event } from "react-timeline-scribble"
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./style.css"

function Display({ info }) {
  // console.log(props)
 
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
       {info.length > 0 ? <>
        {info.map(({ content, title, year, _id }) => (
        <Fragment key={_id} >
          <Timeline >
            <Event interval={year} title={title} >
           {/* if there is content then display it.  if not display message */}

             {content}
              {isAuthenticated ? (<><Link to={"/edit/" + _id}>Edit</Link> - <Link to="/contribute">Contribute</Link></>) : null}
            </Event>
          </Timeline>
        </Fragment>
      ))}
</> :<><h1>No results found.</h1><br/><h3>Login to add your own content.</h3></>}

    </div>
  )

}

export default Display;
