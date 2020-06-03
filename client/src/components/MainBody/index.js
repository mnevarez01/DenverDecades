import React from "react";
import { Container } from "../Grid";
// import { useAuth0 } from "../../react-auth0-spa"
// import ContentForm from '../ContentForm'
import Display from '../Display'

function MainBody({ info, decade }) {

  return (
    <Container data-kitten={true} className='display' fluid style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/${decade}.${decade === 1900 || decade === 1910 ? 'png' : 'jpg'})` }} >
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="bg-dark p-4 rounded shadow">
      <Display info={info} />
      </div></div></div>
    </Container>
  );
}

export default MainBody;
