
import styled from "styled-components";
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"
import image5 from "../../assets/images/image5.jpg"
import image6 from "../../assets/images/image6.jpg"
import image7 from "../../assets/images/image7.jpg"
import image8 from "../../assets/images/image8.jpg"
import image9 from "../../assets/images/image9.jpg"
import image10 from "../../assets/images/image10.jpg"




const GridContainer = styled.div`
  background-color: #9fbb99;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

`;

const GridItem = styled.img`
  width: 100%;
`;


const GridItemLarge = styled(GridItem)`
  grid-column: span 2;
`;

const Grid = () => { 

  return (
    <GridContainer>
   <GridItem src={image1} alt="Image 1" />
       <GridItem src={image2} alt="Image 2" />
      <GridItem src={image3} alt="Image 3" />
      <GridItemLarge src={image4} alt="Image 4" />
      <GridItem src={image5} alt="Image 5" /> 
      <GridItem src={image6} alt="Image 6" />  
      <GridItemLarge src={image7} alt="Image 7" />
      <GridItem src={image8} alt="Image 8" /> 
      <GridItem src={image9} alt="Image 9" /> 
      <GridItem src={image10} alt="Image 10" /> 






      
    </GridContainer>
  );
};

export default Grid;
