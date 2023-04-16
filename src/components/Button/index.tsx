import React from "react";
import styled from "styled-components";

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


`;

const Button = () => {

  const handleShowAllVeggies = () => {
    window.location.href = "/show-all-veggies";
  };

  const handleFavorites = () => {
    window.location.href = "/favorites";
  };

  return (
    <div>
      <Btn onClick={handleShowAllVeggies}>Show all the good Veggies</Btn>
      <Btn onClick={handleFavorites}>Only show my favorite veggies</Btn>
    </div>
  );
};

export default Button;
