import React from "react";
import { Container } from "../Grid";
import Display from '../Display'
import './index.css';



function MainBody({ info, decade,search}) {

  return (
    <Container data-kitten={true} className='display' 
    fluid style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/${decade}.${decade === 1900 || decade === 1910 ? 'png' : 'jpg'})` , 
    backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} >
      <div className="row">
        <div class="col-lg-8 mx-auto">
          <div class="bg-dark p-4 rounded shadow" >
            <Display info={info} />
          </div>
        </div>
      </div>

    </Container>
  );
}

export default MainBody;
