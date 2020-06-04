import React from "react";
import { Container } from "../Grid";
import Display from '../Display'

function MainBody({ info, decade }) {

  return (
    <Container data-kitten={true} className='display' fluid style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/${decade}.${decade === 1900 || decade === 1910 ? 'png' : 'jpg'})` }} >
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="bg-dark p-4 rounded shadow">
            <Display info={info} />
          </div></div></div>
    </Container>
  );
}

export default MainBody;
