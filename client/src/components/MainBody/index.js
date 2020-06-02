import React from "react";
import { Col, Row, Container } from "../Grid";
// import { makeStyles } from '@material-ui/core/styles';
// import './index.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));

// const Background = (e)=>{
//   const currentDate = e.target.value
//     switch(){
//       case currentDate = "January 1950"
//     }
// }

function MainBody() {
  // const classes = useStyles();

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
          </div>) : <></>}


        </Col>
      </Row>
    </Container>
  );
}

export default MainBody;
