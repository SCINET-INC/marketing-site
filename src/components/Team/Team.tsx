import styled from "styled-components";
import Link from "next/link";
import { prefix } from "../../lib/prefix";
import { LinkedIn, Twitter } from "../Icons";

export default function Team({}) {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <ProfileImg alt="jordan" src={`${prefix}/jordan.png`} />
        <h3>
          Jordan Smith <span className="role-title">Co-Founder & CEO</span>
        </h3>
        <p>
          Social entrepreneur, technologist, and science enthusiast, passionate
          about creating solutions that change the world.
        </p>
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
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <ProfileImg alt="kaitlin" src={`${prefix}/kaitlin-headshot.jpeg`} />
        <h3>
          Kaitlin Cauchon <span className="role-title">Co-Founder & COO</span>
        </h3>
        <p>
          Accomplished microbiologist, public health professional, and sales
          leader committed to advancing humanity through science and technology
        </p>
        <ButtonSpan>
          <Link href="https://www.linkedin.com/in/kaitlin-cauchon-ms-emba-b6200b88/">
            <IconButton>
              <LinkedIn color="#caff33" />
            </IconButton>
          </Link>
          <Link href="https://twitter.com/kcauchon">
            <IconButton>
              <Twitter color="#caff33" />
            </IconButton>
          </Link>
        </ButtonSpan>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <ProfileImg alt="jordan" src={`${prefix}/hank.png`} />
        <h3>
          Hank Brigham <span className="role-title">Co-Founder & CTO</span>
        </h3>
        <p>
          Serial entrepreneur, technologist, and leader building decentralized
          tools for humans.
          {/* An avid technologist with over five years of experience as a software
          engineer, team lead, and CTO at other startups. Hank has led developer
          teams, managed the design and product organizations for startups, and
          architected advanced software solutions for complex API integrations
          and UX optimization. */}
        </p>
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
      </div>
    </div>
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
