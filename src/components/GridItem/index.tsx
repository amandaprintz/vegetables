import React, { useContext } from "react";
import styled from "styled-components";
import { FavoritesContext } from "../../AppContext";

export type GridItemProps = {
  img: string;
  alt?: string;
  size?: string;
  name?: string;
  description?: string;
  id: number;
  favorite?: boolean;
};

const Item = styled.div`
  grid-column: span 1;
  width: 100%;
  position: relative;
  display: grid;

  &.large {
    grid-column: span 2;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-area: 1/1/1/1;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-area: 1/1/1/1;
  align-items: end;
  padding: 15px;
`;

const GridItem: React.FC<GridItemProps> = ({
  img,
  alt,
  name,
  description,
  size,
  favorite,
  id,
}) => {
  const { toggleFavorite } = useContext(FavoritesContext);
  const toggleItemFavorite = () => {
    toggleFavorite(id);
  };

  return (
    <Item className={size}>
      <img src={img} alt={alt} />
      <LikeButton onClick={toggleItemFavorite}>
        {favorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="red"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 9.31c0-2.75 2.24-5 5-5 1.57 0 2.98.73 4 1.87A6.02 6.02 0 0 1 17 4c2.76 0 5 2.24 5 5 0 2.94-3.4 5.96-8.55 10.02L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 9.31c0-2.75 2.24-5 5-5 1.57 0 2.98.73 4 1.87A6.02 6.02 0 0 1 17 4c2.76 0 5 2.24 5 5 0 2.94-3.4 5.96-8.55 10.02L12 21.35z"
            />
          </svg>
        )}
      </LikeButton>
      <Info>
        <h3>{name}</h3>
        <p>{description}</p>
      </Info>
    </Item>
  );
};

export default GridItem;
