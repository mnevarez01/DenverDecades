import React from "react";
import { Container } from "../Grid";
// import { useAuth0 } from "../../react-auth0-spa"
// import ContentForm from '../ContentForm'
import Display from '../Display'
// import { makeStyles } from '@material-ui/core/styles';
// import './index.css';
// import image1850 from '../../Assets/Images/1870.jpg'
// import image1860 from '../../Assets/Images/1880.jpg'


function MainBody({ info, decade }) {
  // const classes = useStyles();
  // const { isAuthenticated } = useAuth0();

  return (
    <Container data-kitten={true} className='display' fluid style={{backgroundImage: `url(${process.env.PUBLIC_URL}/Images/${decade}.${decade === 1900 || decade === 1910 ? 'png' : 'jpg'})` }} >
      <Display info={info} />

    </Container>
  );
}

export default MainBody;
