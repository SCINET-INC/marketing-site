import styled from "styled-components";
import { Column, prefix, Row } from "../../lib";
import { PoweredByIcon, RightArrow } from "../Icons";

const points = [
  "No gas fees",
  "Uniform data and file storage",
  "Use one token rather than many",
  "Scale infinitely",
  "Next-gen cryptography and security",
  "Perpetual Provenance",
];

export default function Tech({}) {
  return (
    <div className="row">
      <Image src={`${prefix}/blockscience.svg`} />
      <TechTextContainer>
        <TextTechColumn>
          <Header>Technology</Header>
          <TopBold>
            Unlike conventional blockchain technologies, the{" "}
            <a href="https:/www.dfinity.org">Internet Computer</a> allows for
            the creation of a truly decentralized software ecosystem.
          </TopBold>
          <RootP>
            We envision a DeSci experience with simplified finance, top-tier
            user experience, and powerful tokenomics all at web speed.
          </RootP>
        </TextTechColumn>
        <PointsColumn>
          {points.map((point: string, i: number) => (
            <PointRow key={i}>
              <RightArrow />
              <TechPoint>{point}</TechPoint>
            </PointRow>
          ))}
        </PointsColumn>
      </TechTextContainer>
      <Disclaimer>
        All digital assets are 100% on-chain and all dapps built by SCINET are{" "}
        <em>fully decentrazlied.</em>
      </Disclaimer>
      <PoweredBy />
    </div>
  );
}

const TechColumn = styled(Column)`
  padding: 0.5em 0;
  width: 100%;

  @media (min-width: 700px) {
    padding: 0.5em;
  }
`;

const TextTechColumn = styled(TechColumn)`
  padding: 0 0.5em 0;
`;

const RootP = styled.p`
  padding-bottom: 1em;
  text-align: left;

  @media (min-width: 700px) {
    font-size: 1.5em;
  }
`;

const Disclaimer = styled(RootP)`
  margin: auto;
  padding: 1em 3em 2em;
  text-align: left;

  @media (min-width: 700px) {
    padding: 2em;
    text-align: center;
  }
`;

const TopBold = styled(RootP)`
  font-weight: bold;
`;

const TechTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2em 3em;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 5em 3em 2em 3em;
  }
`;

const PointsColumn = styled(TechColumn)`
  @media (min-width: 700px) {
    padding: 0.5em 0 0.5em 4em;
  }
`;

const PointRow = styled(Row)`
  padding-bottom: 1em;
  width: 100%;
`;

const TechPoint = styled.p`
  font-size: 1em;
  padding-left: 1em;

  @media (min-width: 700px) {
    font-size: 1.5em;
  }
`;

const Header = styled.h5`
  font-size: 1.5em;
  padding: 1em 0;
  text-align: left;
  @media (min-width: 700px) {
    font-size: 2.5em;
    padding: 0 0 1em 0;
  }
`;

const PoweredBy = styled(PoweredByIcon)`
  margin: auto;
  width: 100%;
`;

const Image = styled.img`
  margin-top: 2em;
  width: 100%;
`;
