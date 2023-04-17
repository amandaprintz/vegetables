import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
`;

const Btn = styled.button`
  padding: 8px 16px;
  background-color: #f38c29;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 50px;
  margin: 10px;

  @media (min-width: 820px) {
    padding: 20px;
  }
`;

const Button = () => {
  const handleShowAllVeggies = () => {
    window.location.href = "/show-all-veggies";
  };

  const handleFavorites = () => {
    window.location.href = "/favorites";
  };

  return (
    <ButtonContainer>
      <Btn onClick={handleShowAllVeggies}>Show all the good Veggies</Btn>
      <Btn onClick={handleFavorites}>Only show my favorite veggies</Btn>
    </ButtonContainer>
  );
};

export default Button;
