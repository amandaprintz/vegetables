import React from "react";
import styled from "styled-components";

type GridItemProps = {
  src: string;
  alt: string;
  size?: string;
};

const Item = styled.div`
  grid-column: span 1;
  width: 100%;

  &.large {
    grid-column: span 2;
  }
  img {
    width: 100%;
  }
`;

const GridItem: React.FC<GridItemProps> = ({ src, alt, size }) => {
  return (
    <Item className={size}>
      <img src={src} alt={alt} />
    </Item>
  );
};

export default GridItem;
