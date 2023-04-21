import React, { useContext } from "react";
import styled from "styled-components";
import GridItem, { GridItemProps } from "../GridItem";
import { FavoritesContext } from "./../../AppContext";

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
    padding: 20px 300px;
  }

  @media (min-width: 2000px) {
    padding: 20px 800px;
  }
`;

const Grid = () => {
  const { filterFavorites, cards } = useContext(FavoritesContext);

  const filteredCards = filterFavorites
    ? cards.filter((card: any) => card.favorite)
    : cards;

  return (
    <GridContainer>
      {filteredCards.map((item: GridItemProps) => (
        <GridItem
          img={item.img}
          size={item.size}
          alt={item.alt}
          key={item.id}
          id={item.id}
          favorite={item.favorite}
          name={item.name}
          description={item.description}
        ></GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;
