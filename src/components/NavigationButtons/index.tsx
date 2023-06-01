import React, { useContext } from "react";
import styled from "styled-components";
import { FavoritesContext } from "../../AppContext";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
`;

const Btn = styled.button`
  padding: 8px 16px;
  background-color: #f5d37d;
  font-family: "Rubik-Medium";
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 50px;
  margin: 10px;

  @media (min-width: 820px) {
    padding: 20px;
  }

  &.active {
    background-color: #f38c29;
    color: #ffffff;
    text-decoration: underline;
  }
`;

const NavigationButtons = () => {
  const { filterFavorites, setFilterFavorites } = useContext(FavoritesContext);

  const handleClick = (index: number) => {
    setFilterFavorites(index === 1);
  };

  return (
    <ButtonContainer>
      <Btn
        className={!filterFavorites ? "active" : ""}
        style={{}}
        onClick={() => handleClick(0)}
      >
        Show all the good Veggies
      </Btn>
      <Btn
        className={filterFavorites ? "active" : ""}
        style={{}}
        onClick={() => handleClick(1)}
      >
        Only show my favorite veggies
      </Btn>
    </ButtonContainer>
  );
};

export default NavigationButtons;
