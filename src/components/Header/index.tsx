import styled from "styled-components";
import logo from "../../assets/images/banner.svg";
import Button from "../Button";

const HeaderContainer = styled.div`
  background-color: #142610;
  background-size: auto 70%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 70px;

  h1 {
    text-align: center;
    color: #fafaee;
    margin: 0px;
    padding: 5rem;
    font-family: "NotoSerifBold";
    font-weight: bold;
    font-size: 4rem;
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
