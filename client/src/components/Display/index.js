import React from 'react';
import { useAuth0 } from "../../react-auth0-spa";

function Display({ info }) {
  // console.log(props)
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">

      {info.map(({ content, title, year, _id }) => (
        <div classNames="container">
          <h3>Year: {year}</h3>
          <ul className="list-group" key={_id}>
            <h5> <strong>{title}</strong></h5>
            <li>
              <strong>What Happened:</strong> {content}
          
              {/* <a href="/edit">Edit</a> -  <a href="/edit">Contribute</a> */}
            {isAuthenticated ? (<><a href="/edit">Edit</a> -  <a href="/edit">Contribute</a></>) : null }
      
           </li>
          </ul>
        </div>
      ))}

    </div>
  )

}

export default Display;