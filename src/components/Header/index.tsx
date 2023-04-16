import styled from "styled-components";
import logo from "../../assets/images/banner.svg";
import Button from "../Button";

const HeaderContainer = styled.div`
  background-color: #142610;
  background-size: auto 70%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
 width: 100%;
  
 
 @media (min-width: 1200px) {
  padding-top: 40px;
 }
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  transform: translateY(50%);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>My favorite veggies</h1>
      <ButtonContainer>
        <Button></Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
