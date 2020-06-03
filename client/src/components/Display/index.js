import React from 'react';

function Display({ info }) {
  // console.log(props)
  return (
    <div className="container">

      {info.map(({ content, title, year, _id }) => (
        <ul className="list-group" key={_id}>
          <li>
            <strong>Name:</strong> {title}
          </li>
          <li>
            <strong>content:</strong> {content}
          </li>
          <li>
            <strong>Location:</strong> {year}
          </li>
        </ul>
      ))}

    </div>
  )

}

export default Display;