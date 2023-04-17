import React, { useState } from "react";
import styled from "styled-components";
import GridItem from "../GridItem";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import image9 from "../../assets/images/image9.jpg";
import image10 from "../../assets/images/image10.jpg";
import imageSrc from "../../assets/images/heart.svg";

// skapa en lista som kan loopa ut alla gridItems så du slipper
// lista alla importer efter varandra :)

/* const list = [image1,image2, ]  */

const GridContainer = styled.div`
  margin-top: 35px;
  padding: 20px 20px;
  grid-template-columns: 1fr;
  object-fit: cover;

  @media (min-width: 820px) {
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 16px;
    padding: 10px 50px;
    margin-top: 60px;
    gap: 40px;
  }

  @media (min-width: 1200px) {
    padding: 20px 700px;
  }
`;

const Grid = () => {
  return (
    <GridContainer>
      <GridItem src={image1} alt="Image 1" />
      <GridItem src={image2} alt="Image 2" />
      <GridItem src={image3} alt="Image 3" />
      <GridItem src={image4} alt="Image 4" size="large" />
      <GridItem src={image5} alt="Image 5" />
      <GridItem src={image6} alt="Image 6" />
      <GridItem src={image7} alt="Image 7" size="large" />
      <GridItem src={image8} alt="Image 8" />
      <GridItem src={image9} alt="Image 9" />
      <GridItem src={image10} alt="Image 10" />
    </GridContainer>
  );
};

export default Grid;
