import React from "react";
import styled from "styled-components";

type IStyledBurgerProps = {
  isOpen: boolean;
};

type IBurgerProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

export default function Burger({ isOpen, setIsOpen }: IBurgerProps) {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

const StyledBurger = styled.button<IStyledBurgerProps>`
  border: 1px solid #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45px;
  background: transparent;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  width: auto;
  margin-left: auto;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: grey;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media screen and (min-width: 801px) {
    display: none;
  }
`;
