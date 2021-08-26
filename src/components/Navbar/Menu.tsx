import React from "react";
import styled from "styled-components";

type IStyledMenuProps = {
  isOpen: boolean;
};

type IMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: false) => void;
};

export default function Menu({ isOpen, setIsOpen }: IMenuProps) {
  return (
    <StyledMenu isOpen={isOpen}>
      <XButton onClick={() => setIsOpen(false)}>
        <svg
          viewPort="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2" />
          <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2" />
        </svg>
      </XButton>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sign Up
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.div<IStyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  width: 100vw;
  text-align: left;
  padding: ${({ isOpen }) => (isOpen ? "2rem" : 0)};
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: 9999;
`;

const XButton = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 20px;
  top: 20px;

  svg {
    height: 20px;
    width: 20px;
  }
`;
