import styled from "styled-components";
import Link from "next/link";
import { LinkedIn, Twitter } from "../Icons";

export default function Footer({}) {
  const date = new Date();
  return (
    <Container>
      <div className="copyright">
        <div className="container">
          <FooterRow className="row">
            <Socials>
              <Link href="https://www.linkedin.com/company/81426233">
                <IconButton>
                  <LinkedIn color="#caff33" />
                </IconButton>
              </Link>
              <Link href="https://twitter.com/SCINET_INC">
                <IconButton>
                  <Twitter color="#caff33" />
                </IconButton>
              </Link>
            </Socials>
            <p>© SCINET {date.getFullYear()} All Rights Reserved.</p>
          </FooterRow>
        </div>
      </div>
    </Container>
  );
}

const Socials = styled.span`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: 1em;
`;

const IconButton = styled.button`
  background: transparent;
  display: flex;
  margin: 0 0.5em;

  &:hover {
    color: blue;
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.footer`
  @media screen and (min-width: 801px) {
    margin-top: 3em;
  }
`;
