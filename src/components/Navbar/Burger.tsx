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

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
