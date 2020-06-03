import React from 'react';

function Display({ info }) {
  // console.log(props)
  return (
    <div className="container">

      {info.map(({ content, title, year, _id }) => (
        <div classNames="container">
          <h3>Year: {year}</h3>
          <ul className="list-group" key={_id}>
            <h5> <strong>{title}</strong></h5>
            <li>
              <strong>What Happened:</strong> {content}
            </li>
          </ul>
        </div>
      ))}

    </div>
  )

}

export default Display;