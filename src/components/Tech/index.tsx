import styled from "styled-components";
import { CheckMark, DfinityLogo } from "../Icons";
import { prefix } from "../../lib/prefix";

export default function Tech({}) {
  return (
    <div id="tech" className="dark-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              {/* <h2>Powered By the Internet Computer</h2> */}
              <img
                src={`${prefix}ic-badge-powered-by_large-white-text.png`}
                alt="get-started"
              />
              {/* <DfinityLogo /> */}
              {/* <p>Self-sustaining</p> */}
              <p>
                Unlike conventional blockchain technologies, the Internet
                Computer allows for the creation of a truly decentralized
                software ecosystem. We envision a DeSci experience with
                simplified finance, top-tier user experience, and powerful
                tokenomics all at web speed.
              </p>
            </div>
            <ListContainer>
              <ul>
                <ListItem>
                  <CheckMark />
                  <TechPoint>No gas fees</TechPoint>
                </ListItem>
                <ListItem>
                  <CheckMark />
                  <TechPoint>Uniform data and file storage</TechPoint>
                </ListItem>
                <ListItem>
                  <CheckMark />
                  <TechPoint> Use one token rather than many</TechPoint>
                </ListItem>
              </ul>
              <ul>
                <ListItem>
                  <CheckMark />
                  <TechPoint>Scale infinitely</TechPoint>
                </ListItem>
                <ListItem>
                  <CheckMark />
                  <TechPoint>Next-gen cryptography and security</TechPoint>
                </ListItem>
                <ListItem>
                  <CheckMark />
                  <TechPoint>Perpetual Provenance</TechPoint>
                </ListItem>
              </ul>
            </ListContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TechPoint = styled.p`
  font-size: 1em;
  padding-left: 1em;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`;

// const ProfileImg = styled.img`
//   border-radius: 60%;
// `;

// const IconButton = styled.button`
//   background: transparent;
//   display: flex;
//   margin: 0 0.5em;

//   &:hover {
//     color: blue;
//   }
// `;

// const ButtonSpan = styled.span`
//   display: flex;
//   justify-content: center;
//   padding: 0.5em 0 1em 0;
// `;
