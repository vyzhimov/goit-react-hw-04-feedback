import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: scale 200ms ease-in;

  &:nth-of-type(1) {
    background-color: mediumseagreen;
  }

  &:nth-of-type(2) {
    background-color: orange;
  }

  &:nth-of-type(3) {
    background-color: red;
  }

  &:hover {
    scale: 1.2;
  }
`;
