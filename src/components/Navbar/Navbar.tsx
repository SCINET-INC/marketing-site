import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Navbar({}) {
  return (
    <header>
      <Header className="header">
        <div className="container">
          <div className="row">
            <div
              className="
                col-xl-3 col-lg-3 col-md-3 col-sm-3 col
                logo_section logo-wrapper
              "
            >
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link href="/">
                      <h2 className="nav-logo">SCINET</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service">
                        {" "}
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
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Header>
    </header>
  );
}

const Header = styled.div`
  background: #0c0f38;
  width: 100%;
  padding: 40px 40px 40px 40px;
`;
