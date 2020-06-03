import React from "react";
import { Col, Row, Container } from "../Grid";
import { useAuth0 } from "../../react-auth0-spa"
import ContentForm from '../ContentForm'
import Display from '../Display'
// import { makeStyles } from '@material-ui/core/styles';
// import './index.css';


function MainBody({ info }) {
  // const classes = useStyles();
  const { isAuthenticated } = useAuth0();

  return (
    <Container fluid>
      <Row>
        <Col size="md-10" xs="auto">
          {!isAuthenticated ? (<div class="row mb-5">
            <div class="col-lg-8 mx-auto">
              <div class="bg-white p-5 rounded shadow col-centered">

                <h2 style={{ color: 'black' }}>Main Body</h2>
                <h5 style={{ color: 'orange' }}>Title</h5>
              </div>
            </div>
          </div>) : <ContentForm />}
          {!isAuthenticated ? <Display info={info} /> : <ContentForm />}


        </Col>
      </Row>
    </Container>
  );
}

export default MainBody;
