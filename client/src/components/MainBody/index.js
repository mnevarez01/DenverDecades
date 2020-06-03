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

          {/* {!isAuthenticated ? <Display info={info} /> : <ContentForm />} */}
          <Display info={info} />


        </Col>
      </Row>
    </Container>
  );
}

export default MainBody;
