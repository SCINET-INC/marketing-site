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
          viewBox="0 0 120 120"
          height="120"
          width="120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(5,0,0,5,0,0)">
            <path
              d="M0.5 0.499L23.5 23.499"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M23.5 0.499L0.5 23.499"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </XButton>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" onClick={() => setIsOpen(false)}>
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item" onClick={() => setIsOpen(false)}>
          <a className="nav-link" href="#service">
            Service
          </a>
        </li>
        <li className="nav-item" onClick={() => setIsOpen(false)}>
          <a className="nav-link" href="#contact">
            Contact
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
  align-items: center;
  background: none;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;

  svg {
    height: 20px;
    width: 20px;
  }
`;
