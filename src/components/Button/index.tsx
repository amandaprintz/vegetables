import styled from "styled-components";

const Btn = styled.button`
  padding: 8px 16px;
  background-color: #f38c29;
  color: #142610;
  border: none;
  cursor: pointer;
`;

const Button = () => {
  return <Btn>This is a button</Btn>;
};

export default Button;
