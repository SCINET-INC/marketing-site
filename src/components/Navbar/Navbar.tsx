import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Burger from "./Burger";
import Menu from "./Menu";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Header className="header">
        <Row>
          <div className="logo_section logo-wrapper">
            <div className="full">
              <div className="center-desk">
                <Link href="/">
                  <h2 className="nav-logo">SCINET</h2>
                </Link>
              </div>
              <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
              <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
          <DesktopNav className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <nav className="navigation navbar navbar-expand-md navbar-dark">
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
            </nav>
          </DesktopNav>
        </Row>
      </Header>
    </header>
  );
}

const Header = styled.div`
  background: #0c0f38;
  width: 100%;
  padding: 5px 10px;

  @media and screen (min-width: 576px) {
    padding: 40px;
  }
`;

const DesktopNav = styled.div`
  display: none;
  justify-content: flex-end;
  margin-left: auto;

  @media (min-width: 786px) {
    display: flex;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
