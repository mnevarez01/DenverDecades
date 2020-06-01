import React from "react";
// react component for creating beautiful carousel
// import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/../../components/Grid/GridContainer.js";
import GridItem from "/../../components/Grid/GridItem.js";
// import Card from "/../../../components/Card/Card.js";

// import image1 from "../../../assets/img/bg.jpg";
// import Larimer1860 from "../../../assets/img/LarimerSt1860.jpg";


import styles from "/../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
