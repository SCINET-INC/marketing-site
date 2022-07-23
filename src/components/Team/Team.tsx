import styled from "styled-components";
import Link from "next/link";
import { prefix } from "../../lib/prefix";
import { LinkedIn, Twitter } from "../Icons";

export default function Team({}) {
  return (
    <>
      <TeamRow className="row">
        <ProfileSection className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <ProfileImg alt="jordan" src={`${prefix}/jordan.png`} />
          <h3>
            Jordan Smith <span className="role-title">Co-Founder & CEO</span>
          </h3>
          <TeamBlurb>
            Social entrepreneur, technologist, and science enthusiast,
            passionate about creating solutions that change the world.
          </TeamBlurb>
          <ButtonSpan>
            <Link href="https://www.linkedin.com/in/jordansmithcfe/">
              <IconButton>
                <LinkedIn color="#caff33" />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/SCINET_CEO">
              <IconButton>
                <Twitter color="#caff33" />
              </IconButton>
            </Link>
          </ButtonSpan>
        </ProfileSection>
        <ProfileSection className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <ProfileImg alt="jordan" src={`${prefix}/hank.png`} />
          <h3>
            Hank Brigham <span className="role-title">Co-Founder & CTO</span>
          </h3>
          <TeamBlurb>
            Serial entrepreneur, technologist, and leader building decentralized
            tools for humans.
          </TeamBlurb>
          <ButtonSpan>
            <Link href="https://www.linkedin.com/in/hank-brigham/">
              <IconButton>
                <LinkedIn color="#caff33" />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/hank_brigham">
              <IconButton>
                <Twitter color="#caff33" />
              </IconButton>
            </Link>
          </ButtonSpan>
        </ProfileSection>
      </TeamRow>
      {/* <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <Header>Our Advisors</Header>
          </div>
        </div>
      </div>
      <CenterRow className="row">
        <ProfileSection className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <ProfileImg alt="jordan" src={`${prefix}/nickSullivan.jpeg`} />
          <h3>
            Nick Sullivan <span className="role-title">Entrepreneur</span>
          </h3>
          <p>
            Nick is a heart-centered technology leader and the founder & CEO of
            HeartRithm, a crypto quant fund with a social impact mission.
          </p>
          <ButtonSpan>
            <Link href="https://www.linkedin.com/in/nicksullivan/">
              <IconButton>
                <LinkedIn color="#caff33" />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/gorillamania">
              <IconButton>
                <Twitter color="#caff33" />
              </IconButton>
            </Link>
          </ButtonSpan>
        </ProfileSection>
      </CenterRow> */}
    </>
  );
}

const ProfileImg = styled.img`
  border-radius: 60%;
`;

const IconButton = styled.button`
  background: transparent;
  display: flex;
  margin: 0 0.5em;

  &:hover {
    color: blue;
  }
`;

const ButtonSpan = styled.span`
  display: flex;
  justify-content: center;
  padding: 0.5em 0 1em 0;
`;

// const Header = styled.h2`
//   color: white;
//   display: flex;
//   justify-content: center;

//   @media screen and (min-width: 801px) {
//     padding: 60px 0 0 0;
//   }
// `;

// const CenterRow = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;

const ProfileSection = styled.div`
  padding-bottom: 3em;
`;

const TeamRow = styled.div`
  justify-content: space-evenly;
`;

const TeamBlurb = styled.p`
  color: white;
`;
